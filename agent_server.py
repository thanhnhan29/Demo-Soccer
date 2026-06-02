#!/usr/bin/env python3
"""
HTTP API wrapper for MatchPulse -> SoccerNetVQAAgent -> vLLM.

POST /api/agent
Body: {"message": "...", "packet": {...}, "lang": "vi"}
Response: {"answer": "..."}

Run from the conda soccer environment:
    conda activate soccer
    python /raid/hvtham/SoccerNet/Demo-Soccer/agent_server.py
"""

from __future__ import annotations

import json
import os
import re
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from socketserver import ThreadingMixIn
from typing import Any
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

FALLBACK_MODEL = "/raid/hvtham/SoccerNet/Qwen3.5-9B"
FALLBACK_MODEL_SERVER = "http://127.0.0.1:22002/v1"
FALLBACK_API_KEY = "EMPTY"

AGENT_MAX_TOKENS = int(os.getenv("AGENT_MAX_TOKENS", "768"))
INCLUDE_DEBUG = os.getenv("AGENT_INCLUDE_DEBUG", "").lower() in {"1", "true", "yes"}
DEMO_ROOT = Path(__file__).resolve().parent
# Keep the default LLM log outside Demo-Soccer. Browser live-reload servers often
# watch the web root and refresh the page whenever logs inside it change.
DEFAULT_LLM_LOG_PATH = Path(os.getenv("AGENT_LLM_LOG_DIR", "/tmp/matchpulse-demo-soccer")) / "llm_output.log"
LLM_LOG_PATH = Path(os.getenv("AGENT_LLM_LOG", str(DEFAULT_LLM_LOG_PATH)))
ENABLE_LLM_LOG = os.getenv("AGENT_LLM_LOG_DISABLE", "").strip().lower() not in {"1", "true", "yes", "on"}

_AGENT: Any | None = None
_REASONING_CONTEXT_CLS: Any | None = None
_AGENT_INFO: dict[str, Any] = {}
_INIT_LOCK = threading.Lock()
_RUN_LOCK = threading.Lock()
_STATUS_LOCK = threading.Lock()
_LLM_LOG_LOCK = threading.Lock()
_REQUEST_STATUS: dict[str, dict[str, Any]] = {}
_QUESTION_TO_REQUEST: dict[int, str] = {}
_MAX_STATUS_ITEMS = 80


class AgentBusyError(RuntimeError):
    pass


def _json_bytes(payload: dict[str, Any], status: int = 200) -> tuple[int, bytes]:
    return status, json.dumps(payload, ensure_ascii=False).encode("utf-8")


def _log(prefix: str, message: str):
    print(f"[{prefix}] {message}", flush=True)


def _timestamp() -> str:
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def _write_llm_stage_log(
    request_id: str | None,
    question_id: int,
    stage: str,
    summary: str,
    output: str,
):
    if not ENABLE_LLM_LOG:
        return
    try:
        with _LLM_LOG_LOCK:
            LLM_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
            with LLM_LOG_PATH.open("a", encoding="utf-8") as handle:
                handle.write("\n" + "=" * 88 + "\n")
                handle.write(f"time: {_timestamp()}\n")
                handle.write(f"request_id: {request_id or '-'}\n")
                handle.write(f"question_id: {question_id}\n")
                handle.write(f"stage: {stage}\n")
                handle.write(f"summary: {summary}\n")
                handle.write("-" * 88 + "\n")
                handle.write(output)
                if output and not output.endswith("\n"):
                    handle.write("\n")
    except Exception as exc:
        _log("LLM", f"Could not write stage log: {exc}")


def _write_request_log(
    request_id: str | None,
    message: str,
    packet: dict[str, Any],
    route: str,
):
    packet_preview = ""
    try:
        packet_preview = json.dumps(packet, ensure_ascii=False, indent=2)[:6000]
    except Exception:
        packet_preview = str(packet)[:6000]
    _write_llm_stage_log(
        request_id,
        0,
        "request_received",
        f"Incoming web chat request via {route}.",
        f"message:\n{message}\n\npacket:\n{packet_preview}",
    )


def _ensure_llm_log_file():
    if not ENABLE_LLM_LOG:
        return
    try:
        with _LLM_LOG_LOCK:
            LLM_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
            with LLM_LOG_PATH.open("a", encoding="utf-8") as handle:
                handle.write(f"\n# AgentSoccer log ready at {_timestamp()}\n")
    except Exception as exc:
        _log("LLM", f"Could not initialize log file: {exc}")


def _prune_statuses():
    if len(_REQUEST_STATUS) <= _MAX_STATUS_ITEMS:
        return
    oldest = sorted(
        _REQUEST_STATUS.items(),
        key=lambda item: item[1].get("updated_at", 0),
    )
    for request_id, _ in oldest[:len(_REQUEST_STATUS) - _MAX_STATUS_ITEMS]:
        _REQUEST_STATUS.pop(request_id, None)


def _set_request_status(request_id: str | None, **updates):
    if not request_id:
        return
    now = time.time()
    snapshot: dict[str, Any] | None = None
    with _STATUS_LOCK:
        current = _REQUEST_STATUS.setdefault(
            request_id,
            {
                "request_id": request_id,
                "state": "received",
                "label": "Agent received the question.",
                "steps": [],
                "created_at": now,
            },
        )
        current.update(updates)
        current["updated_at"] = now
        _prune_statuses()
        snapshot = dict(current)
    _log("STATUS", f"{request_id}: {snapshot.get('state')} - {snapshot.get('label')}")


def _get_request_status(request_id: str | None) -> dict[str, Any] | None:
    if not request_id:
        return None
    with _STATUS_LOCK:
        status = _REQUEST_STATUS.get(request_id)
        return dict(status) if status else None


def _task_field(text: str, name: str, default: str = "") -> str:
    match = re.search(rf"{name}\s*:\s*(.+?)(?:\n|$)", text, re.IGNORECASE)
    return match.group(1).strip() if match else default


def _parse_planned_steps(output: str) -> tuple[str, list[dict[str, Any]]]:
    decision_match = re.search(
        r"<decision>\s*(DECOMPOSE|DIRECT)\s*</decision>",
        output,
        re.IGNORECASE,
    )
    decision = decision_match.group(1).upper() if decision_match else "THINK"
    steps = []
    for index, task_match in enumerate(re.finditer(r"<task>(.*?)</task>", output, re.DOTALL)):
        task_text = task_match.group(1)
        task_type = _task_field(task_text, "type", "reasoning").lower()
        objective = _task_field(task_text, "objective", "Analyze the request")
        focus = _task_field(task_text, "focus", "")
        role = _task_field(task_text, "role", "analyst")
        steps.append({
            "id": index + 1,
            "type": task_type,
            "objective": objective,
            "focus": focus,
            "role": role,
            "status": "pending",
        })
    return decision, steps


def _record_stage_status(question_id: int, stage: str, summary: str, output: str):
    request_id = _QUESTION_TO_REQUEST.get(question_id)
    if not request_id:
        return

    current = _get_request_status(request_id) or {}
    steps = list(current.get("steps") or [])

    if stage.startswith("think_"):
        decision, planned_steps = _parse_planned_steps(output)
        label = (
            f"THINK -> {decision}"
            if not planned_steps
            else f"THINK -> {decision} ({len(planned_steps)} tasks)"
        )
        _set_request_status(
            request_id,
            state="reasoning",
            label=label,
            steps=planned_steps,
            current_stage=stage,
        )
        return

    subtask_match = re.search(r"subtask_d\d+_(\d+)", stage)
    if subtask_match:
        task_id = int(subtask_match.group(1))
        found = False
        updated_steps = []
        for step in steps:
            step_copy = dict(step)
            if step_copy.get("id") == task_id:
                step_copy["status"] = "done"
                found = True
            updated_steps.append(step_copy)
        if not found:
            updated_steps.append({
                "id": task_id,
                "type": "task",
                "objective": summary,
                "status": "done",
            })
        _set_request_status(
            request_id,
            state="reasoning",
            label=f"Finished task #{task_id}: {summary}",
            steps=updated_steps,
            current_stage=stage,
        )
        return

    if stage.startswith("synthesize_"):
        _set_request_status(
            request_id,
            state="synthesizing",
            label="Synthesizing the final answer.",
            current_stage=stage,
        )


def _env_bool(name: str, default: bool) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def _first_existing_file(paths: list[Path]) -> str | None:
    for path in paths:
        if path.is_file():
            return str(path)
    return None


def _first_existing_dir(paths: list[Path]) -> str | None:
    for path in paths:
        if path.is_dir():
            return str(path)
    return None


def _load_agent_modules():
    try:
        from pipeline.agent.agent import ReasoningContext, SoccerNetVQAAgent
        from pipeline.agent.config import DEFAULT_LLM_CFG
        from pipeline.agent.llm_request import build_request_kwargs, merge_generate_cfg
    except Exception as exc:
        raise RuntimeError(
            "Cannot import SoccerNetVQAAgent. Start this server inside the "
            "conda soccer environment, then run it with `python`, not the "
            "system python."
        ) from exc

    return (
        SoccerNetVQAAgent,
        ReasoningContext,
        DEFAULT_LLM_CFG,
        merge_generate_cfg,
        build_request_kwargs,
    )


def _is_web_context(ctx: Any) -> bool:
    item = getattr(ctx, "original_item", None)
    return isinstance(item, dict) and bool(item.get("_web_chat"))


def _make_web_agent_class(base_cls, build_request_kwargs):
    class WebSoccerNetVQAAgent(base_cls):
        """SoccerNetVQAAgent adapter for free-form web chat answers."""

        def _parse_thinking(self, output: str):
            decision, subtasks, analysis = super()._parse_thinking(output)
            for task in subtasks:
                if task.task_type == "option_analysis":
                    task.task_type = "reasoning"
                    task.objective = (
                        f"{task.objective}\n"
                        "This is a web chat question with no answer options. "
                        "Review the accumulated evidence and prepare a natural-language answer."
                    )
                    task.media_spec = "none"
            return decision, subtasks, analysis

        def _direct_answer(self, ctx, depth: int) -> str:
            if not _is_web_context(ctx):
                return super()._direct_answer(ctx, depth)

            if ctx.current_task and depth > 0:
                task = ctx.current_task
                system = (
                    f"You are a {task.role} supporting AgentSoccer's recursive "
                    "football analysis. Complete the assigned sub-task using only "
                    "the provided match context, media, database/tool results, and "
                    "accumulated evidence. Be concise and do not output option letters."
                )
                user_text = (
                    f"=== ORIGINAL WEB QUESTION AND MATCH CONTEXT ===\n"
                    f"{ctx.question}\n\n"
                    f"=== ACCUMULATED EVIDENCE ===\n"
                    f"{ctx.accumulated_text}\n\n"
                    f"=== CURRENT SUB-TASK ===\n"
                    f"Objective: {task.objective}\n"
                    f"Focus: {task.focus}\n\n"
                    "Return useful evidence for the final web answer."
                )
            else:
                system = (
                    "You are AgentSoccer, a football match analysis agent. "
                    "Answer the web user's question naturally using the provided "
                    "match packet and any accumulated analysis. Do not output "
                    "multiple-choice option letters."
                )
                acc_section = ""
                if ctx.accumulated_results:
                    acc_section = (
                        f"=== ACCUMULATED EVIDENCE ===\n"
                        f"{ctx.accumulated_text}\n\n"
                    )
                user_text = (
                    f"{acc_section}"
                    f"=== WEB QUESTION AND MATCH CONTEXT ===\n"
                    f"{ctx.question}\n\n"
                    "Give the final answer for the web user."
                )

            if ctx.media_type != "none" and ctx.media_paths:
                content = self._build_media_content(
                    user_text, ctx.media_type, ctx.media_paths)
            else:
                content = [{"type": "text", "text": user_text}]

            return self._call_llm(system, content, max_tokens=AGENT_MAX_TOKENS)

        def _synthesize(self, ctx, results: list, depth: int) -> str:
            if not _is_web_context(ctx):
                return super()._synthesize(ctx, results, depth)

            results_text = ""
            for result in results:
                results_text += (
                    f"\n{'=' * 50}\n"
                    f"Analysis #{result.task.task_id}: {result.task.objective}\n"
                    f"(Role: {result.task.role} | Type: {result.task.task_type})\n"
                    f"{'=' * 50}\n"
                    f"{result.result}\n"
                )

            system = (
                "You are AgentSoccer synthesizing recursive analysis results for "
                "a web football chat. Use the evidence from the sub-tasks, cite "
                "the relevant match context when helpful, and answer naturally. "
                "Do not output option letters."
            )
            user_text = (
                f"=== ANALYSIS RESULTS ===\n"
                f"{results_text or 'No sub-task results.'}\n\n"
                f"=== ORIGINAL WEB QUESTION AND MATCH CONTEXT ===\n"
                f"{ctx.question}\n\n"
                "Write the final answer for the web user. If evidence is missing, "
                "say what is missing and give the best grounded answer."
            )

            if depth == 0 and ctx.media_type != "none" and ctx.media_paths:
                content = self._build_media_content(
                    user_text, ctx.media_type, ctx.media_paths)
            else:
                content = [{"type": "text", "text": user_text}]

            return self._call_llm(system, content, max_tokens=AGENT_MAX_TOKENS)

        def _execute_option_analysis(self, task, ctx, accumulated: list) -> str:
            if not _is_web_context(ctx):
                return super()._execute_option_analysis(task, ctx, accumulated)

            acc_text = "\n\n".join(
                f"--- Analysis #{result.task.task_id}: {result.task.objective} "
                f"(type: {result.task.task_type}) ---\n{result.result}"
                for result in accumulated
            ) or "No previous analysis."
            system = (
                "You are reviewing evidence for a web football chat answer. "
                "There are no answer options. Identify the strongest supported "
                "answer and any uncertainty."
            )
            user_text = (
                f"=== ACCUMULATED EVIDENCE ===\n{acc_text}\n\n"
                f"=== WEB QUESTION AND MATCH CONTEXT ===\n{ctx.question}\n\n"
                "Review the evidence and produce a concise conclusion."
            )
            result = self._call_llm(
                system,
                [{"type": "text", "text": user_text}],
                max_tokens=AGENT_MAX_TOKENS,
            )
            self._log(ctx.question_id, f"web_evidence_review_{task.task_id}",
                      task.objective[:80], result)
            return result

        def _call_llm(self, system: str, user_content: list,
                      max_tokens: int = 512) -> str:
            """Streaming chat-completion collected into a plain text answer."""
            cfg = build_request_kwargs(self.generate_cfg)
            keep_plan = [1.00, 0.85, 0.70, 0.55, 0.40, 0.25]
            last_exc = None

            for attempt, keep_ratio in enumerate(keep_plan, start=1):
                current_user = (
                    user_content if keep_ratio >= 0.999
                    else self._trim_user_content_from_start(user_content, keep_ratio)
                )
                messages = [
                    {"role": "system", "content": system},
                    {"role": "user", "content": current_user},
                ]

                try:
                    stream = self.client.chat.completions.create(
                        model=self.model_name,
                        messages=messages,
                        max_tokens=max_tokens,
                        stream=True,
                        **cfg,
                    )
                    text = ""
                    for chunk in stream:
                        if not chunk.choices:
                            continue
                        delta = getattr(chunk.choices[0], "delta", None)
                        content = getattr(delta, "content", None)
                        if not content:
                            continue
                        text += content
                    if attempt > 1:
                        _log(
                            "LLM",
                            f"Context auto-trim succeeded at attempt {attempt} "
                            f"(keep={keep_ratio:.0%})",
                        )
                    return text

                except Exception as exc:
                    last_exc = exc
                    if self._is_context_overflow_error(exc) and attempt < len(keep_plan):
                        _log(
                            "LLM",
                            f"Context overflow at attempt {attempt}; retrying "
                            f"with tail keep={keep_plan[attempt]:.0%}",
                        )
                        continue
                    raise

            if last_exc is not None:
                raise last_exc
            raise RuntimeError("LLM call failed without an explicit exception")

        def _log(self, question_id, stage: str, summary: str, output: str):
            super()._log(question_id, stage, summary, output)
            request_id = _QUESTION_TO_REQUEST.get(question_id)
            _write_llm_stage_log(request_id, question_id, stage, summary, output)
            _log("LLM", f"{request_id or '-'} q={question_id} stage={stage} chars={len(output)}")
            _record_stage_status(question_id, stage, summary, output)

    return WebSoccerNetVQAAgent


def _build_llm_cfg(default_llm_cfg: dict[str, Any], merge_generate_cfg) -> dict[str, Any]:
    llm_cfg = dict(default_llm_cfg)
    llm_cfg["model"] = os.getenv("AGENT_MODEL", llm_cfg.get("model", FALLBACK_MODEL))
    llm_cfg["model_server"] = os.getenv(
        "AGENT_SERVER",
        os.getenv("AGENT_MODEL_SERVER", llm_cfg.get("model_server", FALLBACK_MODEL_SERVER)),
    )
    llm_cfg["api_key"] = os.getenv(
        "AGENT_API_KEY", llm_cfg.get("api_key", FALLBACK_API_KEY)
    )

    generate_overrides: dict[str, Any] = {}
    env_overrides = [
        ("temperature", "AGENT_TEMPERATURE", float),
        ("top_p", "AGENT_TOP_P", float),
        ("top_k", "AGENT_TOP_K", int),
        ("min_p", "AGENT_MIN_P", float),
        ("presence_penalty", "AGENT_PRESENCE_PENALTY", float),
        ("repetition_penalty", "AGENT_REPETITION_PENALTY", float),
    ]
    for key, env_key, cast in env_overrides:
        if env_key in os.environ:
            try:
                generate_overrides[key] = cast(os.environ[env_key])
            except ValueError:
                _log("AGENT", f"Ignore invalid {env_key}={os.environ[env_key]!r}")

    if "AGENT_ENABLE_THINKING" in os.environ:
        generate_overrides["chat_template_kwargs"] = {
            "enable_thinking": _env_bool("AGENT_ENABLE_THINKING", False)
        }

    llm_cfg["generate_cfg"] = merge_generate_cfg(
        llm_cfg.get("generate_cfg"), generate_overrides
    )
    return llm_cfg


def _build_agent_info(llm_cfg: dict[str, Any]) -> dict[str, Any]:
    cache_path = os.getenv("AGENT_CLASSIFICATION_CACHE") or _first_existing_file(
        [
            ROOT / "pipeline" / "classification_cache_challenge.json",
            ROOT / "pipeline" / "classification_cache.json",
        ]
    )
    wiki_data = os.getenv("AGENT_WIKI_DATA") or _first_existing_dir(
        [ROOT / "pipeline" / "database" / "SoccerWiki" / "data"]
    )
    game_data = os.getenv("AGENT_GAME_DATA") or _first_existing_dir(
        [ROOT / "pipeline" / "database"]
    )
    memory_dir = os.getenv("AGENT_MEMORY_DIR") or str(
        ROOT / "pipeline" / "agent" / "memory"
    )

    return {
        "model": llm_cfg["model"],
        "model_server": llm_cfg["model_server"],
        "classification_cache": cache_path,
        "wiki_data": wiki_data,
        "game_data": game_data,
        "memory_dir": memory_dir,
        "enable_reflection": not _env_bool("AGENT_NO_REFLECTION", False),
        "enable_inter_reflection": not _env_bool("AGENT_NO_INTER_REFLECTION", False),
    }


def get_agent():
    global _AGENT, _AGENT_INFO, _REASONING_CONTEXT_CLS

    if _AGENT is not None:
        return _AGENT

    with _INIT_LOCK:
        if _AGENT is not None:
            return _AGENT

        (
            SoccerNetVQAAgent,
            ReasoningContext,
            default_llm_cfg,
            merge_generate_cfg,
            build_request_kwargs,
        ) = _load_agent_modules()
        WebSoccerNetVQAAgent = _make_web_agent_class(
            SoccerNetVQAAgent, build_request_kwargs
        )
        llm_cfg = _build_llm_cfg(default_llm_cfg, merge_generate_cfg)
        info = _build_agent_info(llm_cfg)

        _AGENT = WebSoccerNetVQAAgent(
            llm_cfg=llm_cfg,
            classification_cache_path=info["classification_cache"],
            wiki_data_dir=info["wiki_data"],
            game_data_dir=info["game_data"],
            memory_dir=info["memory_dir"],
            enable_reflection=info["enable_reflection"],
            enable_inter_reflection=info["enable_inter_reflection"],
        )
        _REASONING_CONTEXT_CLS = ReasoningContext
        _AGENT_INFO = info
        return _AGENT


def _clean_text(value: Any) -> str:
    return str(value).strip() if value is not None else ""


def _format_stats(stats: Any) -> str:
    if not isinstance(stats, dict) or not stats:
        return ""
    parts = []
    for key in ("possession", "shots", "xg"):
        if key in stats:
            parts.append(f"{key}: {stats[key]}")
    return "; ".join(parts)


def _format_match_packet(packet: dict[str, Any], message: str, lang: str) -> str:
    match = packet.get("match") if isinstance(packet, dict) else {}
    media = packet.get("media") if isinstance(packet, dict) else {}
    ctx = packet.get("activeContext") if isinstance(packet, dict) else None
    match = match if isinstance(match, dict) else {}
    media = media if isinstance(media, dict) else {}
    ctx = ctx if isinstance(ctx, dict) else None

    teams = match.get("teams") or []
    events = media.get("nearbyEvents") or []
    if not isinstance(events, list):
        events = []

    lines = [
        "=== WEB USER QUESTION ===",
        message,
        "",
        "=== WEB MATCH PACKET ===",
    ]

    fields = [
        ("Match id", match.get("id")),
        ("Title", match.get("title")),
        ("League", match.get("league")),
        ("Season", match.get("season")),
        ("Status", match.get("status")),
        ("Kickoff", match.get("time")),
        ("Score", match.get("score")),
    ]
    if teams:
        fields.append(("Teams", " vs ".join(_clean_text(team) for team in teams)))
    stats = _format_stats(match.get("stats"))
    if stats:
        fields.append(("Stats", stats))
    if match.get("summary"):
        fields.append(("Summary", match.get("summary")))

    for label, value in fields:
        text = _clean_text(value)
        if text:
            lines.append(f"{label}: {text}")

    current_minute = media.get("currentMinute")
    if current_minute is not None:
        lines.append(f"Current playback minute: {current_minute}")

    if ctx:
        lines.append(f"Pinned context: {json.dumps(ctx, ensure_ascii=False)}")

    if events:
        lines.append("Nearby timeline events:")
        for event in events[:20]:
            if not isinstance(event, dict):
                continue
            minute = _clean_text(event.get("minute") or event.get("minuteVal"))
            text = _clean_text(event.get("text"))
            if minute or text:
                lines.append(f"- {minute}: {text}")

    lines.extend(
        [
            "",
            "=== RESPONSE REQUIREMENTS ===",
            "Answer naturally for the web user, not as a multiple-choice answer.",
            "Use the packet plus any SoccerNet tool/database evidence gathered by the agent.",
            "If evidence is missing, say what is missing and give the best grounded answer.",
            "Keep the answer concise unless the user asks for detailed analysis.",
        ]
    )
    if lang == "vi":
        lines.append("Respond in Vietnamese.")
    else:
        lines.append("Respond in English.")

    return "\n".join(lines)


_IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".tiff", ".tif"}
_VIDEO_EXTS = {".mp4", ".avi", ".mov", ".mkv", ".flv", ".wmv", ".webm", ".mpeg", ".mpg"}


def _candidate_media_values(packet: dict[str, Any]) -> list[Any]:
    match = packet.get("match") if isinstance(packet, dict) else {}
    media = packet.get("media") if isinstance(packet, dict) else {}
    match = match if isinstance(match, dict) else {}
    media = media if isinstance(media, dict) else {}

    values: list[Any] = []
    for key in ("paths", "mediaPaths", "materialPaths", "files"):
        if isinstance(media.get(key), list):
            values.extend(media.get(key))
    for key in ("path", "localPath", "videoPath", "imagePath"):
        if media.get(key):
            values.append(media.get(key))
    for key in ("videoPath", "imagePath", "materialPath"):
        if match.get(key):
            values.append(match.get(key))
    return values


def _resolve_local_media_path(value: Any) -> str | None:
    raw = _clean_text(value)
    if not raw or raw.startswith(("http://", "https://", "blob:", "data:")):
        return None

    path = Path(raw)
    candidates = [path] if path.is_absolute() else [
        ROOT / raw,
        ROOT / "Demo-Soccer" / raw,
    ]
    for candidate in candidates:
        if candidate.is_file():
            return str(candidate.resolve())
    return None


def _extract_media(packet: dict[str, Any]) -> tuple[str, list[str]]:
    paths = []
    seen = set()
    for value in _candidate_media_values(packet):
        resolved = _resolve_local_media_path(value)
        if resolved and resolved not in seen:
            paths.append(resolved)
            seen.add(resolved)

    if not paths:
        return "none", []

    exts = {Path(path).suffix.lower() for path in paths}
    if any(ext in _VIDEO_EXTS for ext in exts):
        return "video", paths
    if any(ext in _IMAGE_EXTS for ext in exts):
        return "image", paths
    return "none", []


def _build_reasoning_context(
    message: str,
    packet: dict[str, Any],
    lang: str,
    request_id: str | None = None,
) -> tuple[Any, int, str, str, list[str]]:
    if _REASONING_CONTEXT_CLS is None:
        raise RuntimeError("ReasoningContext is not loaded")

    media_type, media_paths = _extract_media(packet)
    web_question = _format_match_packet(packet, message, lang)
    question_id = int(time.time() * 1000)

    original_item = {
        "id": question_id,
        "Q": web_question,
        "_web_chat": True,
        "request_id": request_id,
        "message": message,
        "packet": packet,
        "lang": lang,
    }
    options_text = (
        "No multiple-choice options are provided. This is a free-form web chat "
        "request. The final answer must be natural language, not O1/O2/O3."
    )

    ctx = _REASONING_CONTEXT_CLS(
        question=web_question,
        options_text=options_text,
        media_type=media_type,
        media_paths=media_paths,
        qtype="Q1",
        question_id=question_id,
        original_item=original_item,
        original_media_type=media_type,
        original_media_paths=list(media_paths),
        feedback_text="",
    )
    return ctx, question_id, web_question, media_type, media_paths


def answer_with_agent(
    message: str,
    packet: dict[str, Any],
    lang: str,
    request_id: str | None = None,
) -> dict[str, Any]:
    packet = packet if isinstance(packet, dict) else {}
    _set_request_status(
        request_id,
        state="received",
        label="Agent received the question.",
        steps=[],
    )

    if not _RUN_LOCK.acquire(blocking=False):
        _set_request_status(
            request_id,
            state="busy",
            label="Agent is still reasoning on the previous question.",
            steps=[],
        )
        raise AgentBusyError("Agent is busy. Please wait for the current answer.")

    agent = None
    try:
        _set_request_status(
            request_id,
            state="loading",
            label="Loading SoccerNet agent modules.",
            steps=[],
        )
        agent = get_agent()

        ctx, question_id, web_question, media_type, media_paths = _build_reasoning_context(
            message, packet, lang, request_id
        )
        if request_id:
            _QUESTION_TO_REQUEST[question_id] = request_id
        _set_request_status(
            request_id,
            state="thinking",
            label="Building SoccerNet reasoning context.",
            question_id=question_id,
            media_type=media_type,
            media_paths=media_paths,
        )
        log_start = len(getattr(agent, "stage_log", []))
        agent._current_question = web_question
        try:
            _set_request_status(
                request_id,
                state="thinking",
                label="Agent is planning the reasoning steps.",
            )
            _log("AGENT", f"{request_id or '-'} start reasoning")
            answer = agent._reason(ctx, depth=0).strip()
        except Exception as exc:
            _set_request_status(
                request_id,
                state="error",
                label=f"Agent error: {exc}",
            )
            raise
        finally:
            agent._cleanup_temps()

        stage_log = getattr(agent, "stage_log", [])[log_start:]
        _write_llm_stage_log(
            request_id,
            question_id,
            "final_answer",
            "Final answer returned to the web UI.",
            answer,
        )
        _set_request_status(
            request_id,
            state="done",
            label="Answer ready.",
            answer=answer,
        )
        _log("AGENT", f"{request_id or '-'} answer ready chars={len(answer)}")
    finally:
        _RUN_LOCK.release()

    payload: dict[str, Any] = {"answer": answer}
    if INCLUDE_DEBUG:
        payload["debug"] = {
            "agent": "SoccerNetVQAAgent",
            "route": "_reason(depth=0)",
            "model": _AGENT_INFO.get("model"),
            "model_server": _AGENT_INFO.get("model_server"),
            "question_id": question_id,
            "media_type": media_type,
            "media_paths": media_paths,
            "stages": [entry.get("stage") for entry in stage_log],
        }
    return payload


class _Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt: str, *args):
        _log("HTTP", f"{self.client_address[0]} - {fmt % args}")

    def _send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Accept")

    def _send_json(self, payload: dict[str, Any], status: int = 200):
        status, body = _json_bytes(payload, status)
        self.send_response(status)
        self._send_cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self) -> dict[str, Any] | None:
        content_len = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_len) if content_len else b"{}"
        try:
            payload = json.loads(raw_body)
        except json.JSONDecodeError:
            return None
        return payload if isinstance(payload, dict) else {}

    def _agent_request_from_payload(
        self,
        payload: dict[str, Any],
    ) -> tuple[str, dict[str, Any], str, str]:
        message = _clean_text(payload.get("message"))
        packet = payload.get("packet") or {}
        lang = _clean_text(payload.get("lang")) or "vi"
        request_id = _clean_text(payload.get("requestId") or payload.get("request_id"))
        return message, packet, lang, request_id

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors()
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/")
        if path == "/health":
            self._send_json(
                {
                    "status": "ok",
                    "agent_loaded": _AGENT is not None,
                    "python": sys.executable,
                    "llm_log_enabled": ENABLE_LLM_LOG,
                    "llm_log": str(LLM_LOG_PATH) if ENABLE_LLM_LOG else None,
                    "route": "web -> SoccerNetVQAAgent -> vLLM",
                }
            )
            return
        
        # Serve video files from /videos/
        if path.startswith("/videos/"):
            filename = path[8:]  # Remove "/videos/" prefix
            # Security: prevent directory traversal
            if ".." in filename or filename.startswith("/"):
                self._send_json({"error": "Invalid filename"}, status=400)
                return
            
            video_path = DEMO_ROOT / filename
            if not video_path.is_file():
                self._send_json({"error": "Video not found"}, status=404)
                return
            
            # Determine content type based on extension
            ext = video_path.suffix.lower()
            content_type_map = {
                ".mp4": "video/mp4",
                ".mkv": "video/x-matroska",
                ".webm": "video/webm",
                ".avi": "video/x-msvideo",
                ".mov": "video/quicktime",
                ".flv": "video/x-flv",
                ".wmv": "video/x-ms-wmv",
                ".mpeg": "video/mpeg",
                ".mpg": "video/mpeg",
            }
            content_type = content_type_map.get(ext, "application/octet-stream")
            
            try:
                file_size = video_path.stat().st_size
                
                # Handle Range requests (HTTP 206 Partial Content)
                range_header = self.headers.get("Range")
                if range_header and range_header.startswith("bytes="):
                    range_spec = range_header[6:]
                    try:
                        parts = range_spec.split(",")
                        if len(parts) == 1:
                            part = parts[0].strip()
                            if "-" in part:
                                start_str, end_str = part.split("-", 1)
                                start = int(start_str) if start_str else 0
                                end = int(end_str) if end_str else file_size - 1
                                if start <= end < file_size:
                                    content_length = end - start + 1
                                    self.send_response(206)
                                    self._send_cors()
                                    self.send_header("Content-Type", content_type)
                                    self.send_header("Content-Length", str(content_length))
                                    self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                                    self.send_header("Accept-Ranges", "bytes")
                                    self.end_headers()
                                    
                                    with open(video_path, "rb") as f:
                                        f.seek(start)
                                        remaining = content_length
                                        while remaining > 0:
                                            chunk_size = min(65536, remaining)
                                            chunk = f.read(chunk_size)
                                            if not chunk:
                                                break
                                            self.wfile.write(chunk)
                                            remaining -= len(chunk)
                                    return
                    except (ValueError, IndexError):
                        pass
                
                # No range or invalid range: send full file
                self.send_response(200)
                self._send_cors()
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(file_size))
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers()
                
                with open(video_path, "rb") as f:
                    while True:
                        chunk = f.read(65536)  # 64KB chunks
                        if not chunk:
                            break
                        self.wfile.write(chunk)
                return
            except Exception as exc:
                _log("HTTP", f"Error serving video {filename}: {exc}")
                self._send_json({"error": "Failed to serve video"}, status=500)
                return

        self._send_json({"error": "Not found"}, status=404)

    def do_POST(self):
        path = self.path.rstrip("/")
        if path != "/api/agent":
            self._send_json({"error": "Not found"}, status=404)
            return

        payload = self._read_json_body()
        if payload is None:
            self._send_json({"error": "Invalid JSON body"}, status=400)
            return

        message, packet, lang, request_id = self._agent_request_from_payload(payload)

        if not message:
            self._send_json({"error": "Empty message"}, status=400)
            return

        _log(
            "HTTP",
            f"POST /api/agent request_id={request_id or '-'} "
            f"message_chars={len(message)}",
        )
        _write_request_log(request_id, message, packet if isinstance(packet, dict) else {}, "json")

        if _RUN_LOCK.locked():
            _set_request_status(
                request_id,
                state="busy",
                label="Agent is still reasoning on the previous question.",
                steps=[],
            )
            self._send_json(
                {"error": "Agent is busy. Please wait for the current answer."},
                status=409,
            )
            return

        try:
            response_payload = answer_with_agent(message, packet, lang, request_id)
        except AgentBusyError as exc:
            self._send_json({"error": str(exc)}, status=409)
            return
        except Exception as exc:
            self._send_json({"error": f"Agent error: {exc}"}, status=500)
            return

        self._send_json(response_payload)


class _ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def main():
    host = os.getenv("AGENT_HOST", "0.0.0.0")
    port = int(os.getenv("AGENT_PORT", "8008"))
    _ensure_llm_log_file()
    _log("AGENT", "MatchPulse AgentSoccer API")
    _log("AGENT", "Route: web -> SoccerNetVQAAgent -> vLLM")
    _log("AGENT", f"Model: {os.getenv('AGENT_MODEL', FALLBACK_MODEL)}")
    _log("AGENT", f"Server: {os.getenv('AGENT_SERVER', FALLBACK_MODEL_SERVER)}")
    _log("AGENT", f"Python: {sys.executable}")
    if ENABLE_LLM_LOG:
        _log("AGENT", f"LLM log: {LLM_LOG_PATH}")
    else:
        _log("AGENT", "LLM log: disabled by AGENT_LLM_LOG_DISABLE")
    _log("AGENT", "Loading SoccerNetVQAAgent at startup...")
    try:
        get_agent()
    except Exception as exc:
        _log("AGENT", f"Startup agent load failed: {exc}")
        raise
    _log("AGENT", "SoccerNetVQAAgent loaded and ready.")
    server = _ThreadingHTTPServer((host, port), _Handler)

    _log("HTTP", f"Listening: http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
