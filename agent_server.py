#!/usr/bin/env python3
"""
Lightweight HTTP bridge from MatchPulse UI to the SoccerNet model server.

POST /api/agent
Body: {"message": "...", "packet": {...}, "lang": "vi"}
Response: {"answer": "..."}
"""

from __future__ import annotations

import json
import os
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from openai import OpenAI
from pipeline.agent.config import DEFAULT_LLM_CFG
from pipeline.agent.llm_request import build_request_kwargs

MODEL = os.getenv("AGENT_MODEL", DEFAULT_LLM_CFG["model"])
MODEL_SERVER = os.getenv("AGENT_SERVER", DEFAULT_LLM_CFG["model_server"])
API_KEY = os.getenv("AGENT_API_KEY", DEFAULT_LLM_CFG["api_key"])
MAX_TOKENS = int(os.getenv("AGENT_MAX_TOKENS", "512"))

GEN_CFG = dict(DEFAULT_LLM_CFG.get("generate_cfg") or {})

_ENV_OVERRIDES = [
    ("temperature", "AGENT_TEMPERATURE", float),
    ("top_p", "AGENT_TOP_P", float),
    ("top_k", "AGENT_TOP_K", int),
    ("min_p", "AGENT_MIN_P", float),
    ("presence_penalty", "AGENT_PRESENCE_PENALTY", float),
    ("repetition_penalty", "AGENT_REPETITION_PENALTY", float),
]

for key, env_key, cast in _ENV_OVERRIDES:
    if env_key in os.environ:
        try:
            GEN_CFG[key] = cast(os.environ[env_key])
        except ValueError:
            pass

CLIENT = OpenAI(base_url=MODEL_SERVER, api_key=API_KEY)


def _build_prompt(packet: dict, message: str, lang: str) -> tuple[str, str]:
    match = packet.get("match", {}) if isinstance(packet, dict) else {}
    media = packet.get("media", {}) if isinstance(packet, dict) else {}
    ctx = packet.get("activeContext") if isinstance(packet, dict) else None

    teams = match.get("teams") or []
    score = match.get("score") or ""
    title = match.get("title") or ""
    stats = match.get("stats") or {}
    current_minute = media.get("currentMinute")

    events = media.get("nearbyEvents") or []
    events = events[:8]

    lines = []
    if teams:
        lines.append(f"Match: {teams[0]} vs {teams[-1]} | Score: {score}")
    if title:
        lines.append(f"Title: {title}")
    if isinstance(current_minute, int):
        lines.append(f"Playback minute: {current_minute}")
    if stats:
        lines.append(
            "Stats: possession {pos}, shots {shots}, xg {xg}".format(
                pos=stats.get("possession"),
                shots=stats.get("shots"),
                xg=stats.get("xg"),
            )
        )

    if ctx:
        label = ctx.get("label") or ""
        ctx_min = ctx.get("minute")
        if ctx_min is not None:
            lines.append(f"Pinned context: {label} (minute {ctx_min})")
        else:
            lines.append(f"Pinned context: {label}")

    if events:
        event_text = "; ".join(
            f"{evt.get('minute', '')} {evt.get('text', '')}" for evt in events
        )
        lines.append(f"Nearby events: {event_text}")

    lines.append(f"User question: {message}")

    context_block = "\n".join(line for line in lines if line)

    if lang == "vi":
        system_prompt = (
            "You are a football match analyst. Answer concisely in Vietnamese, "
            "using only the provided context. If context is missing, say so."
        )
    else:
        system_prompt = (
            "You are a football match analyst. Answer concisely in English, "
            "using only the provided context. If context is missing, say so."
        )

    return system_prompt, context_block


class _Handler(BaseHTTPRequestHandler):
    def _send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors()
        self.end_headers()

    def do_GET(self):
        if self.path.rstrip("/") == "/health":
            self.send_response(200)
            self._send_cors()
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok"}).encode("utf-8"))
            return

        self.send_response(404)
        self._send_cors()
        self.end_headers()

    def do_POST(self):
        if self.path.rstrip("/") != "/api/agent":
            self.send_response(404)
            self._send_cors()
            self.end_headers()
            return

        content_len = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_len) if content_len else b"{}"
        try:
            payload = json.loads(raw_body)
        except json.JSONDecodeError:
            payload = {}

        message = str(payload.get("message", "")).strip()
        packet = payload.get("packet") or {}
        lang = payload.get("lang") or "vi"

        if not message:
            self.send_response(400)
            self._send_cors()
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Empty message"}).encode("utf-8"))
            return

        system_prompt, user_prompt = _build_prompt(packet, message, lang)

        messages = [
            {"role": "system", "content": [{"type": "text", "text": system_prompt}]},
            {"role": "user", "content": [{"type": "text", "text": user_prompt}]},
        ]

        try:
            response = CLIENT.chat.completions.create(
                model=MODEL,
                messages=messages,
                max_tokens=MAX_TOKENS,
                **build_request_kwargs(GEN_CFG),
            )
            answer = response.choices[0].message.content or ""
        except Exception as exc:
            self.send_response(500)
            self._send_cors()
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(
                json.dumps({"error": f"Model error: {exc}"}).encode("utf-8")
            )
            return

        self.send_response(200)
        self._send_cors()
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"answer": answer}).encode("utf-8"))


class _ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def main():
    host = os.getenv("AGENT_HOST", "0.0.0.0")
    port = int(os.getenv("AGENT_PORT", "8008"))
    server = _ThreadingHTTPServer((host, port), _Handler)

    print("MatchPulse Agent Bridge")
    print(f"Model: {MODEL}")
    print(f"Server: {MODEL_SERVER}")
    print(f"Listening: http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
