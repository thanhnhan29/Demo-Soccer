# 04 — Sequence Diagrams

> These diagrams document the four key interaction flows in MatchPulse. All flows are client-side only; there is no real backend — `askAgent()` is a mock with a simulated delay.

---

## SD-01: Page Load & Data Initialization

```mermaid
sequenceDiagram
    autonumber
    participant Browser
    participant AppJS as App.js
    participant LS as localStorage
    participant Dataset as dataset/matches.json
    participant Seed as seedMatches (fallback)

    Browser->>AppJS: DOMContentLoaded fires
    AppJS->>AppJS: initializeApp()
    AppJS->>AppJS: loadMatches()

    AppJS->>LS: getItem(USER_EDITS_KEY)
    alt USER_EDITS_KEY exists in localStorage
        LS-->>AppJS: Return cached matches JSON string
        AppJS->>AppJS: JSON.parse(cachedData)
        AppJS->>AppJS: matches = parsedData
    else No cached data
        AppJS->>Dataset: fetch("dataset/matches.json")
        alt fetch succeeds
            Dataset-->>AppJS: Return matches array JSON
            AppJS->>AppJS: matches = data
        else fetch fails (network error / file not found)
            AppJS->>Seed: Load inline seedMatches[]
            Seed-->>AppJS: Return hardcoded match objects
            AppJS->>AppJS: matches = seedMatches
        end
    end

    Note over AppJS: normalizeMatch() converts each match into canonical schema
    Note over AppJS: - Tuple events [str,str] → MatchEvent {minute, minuteVal, text}
    Note over AppJS: - related → relatedCount (backward compat)
    Note over AppJS: - Derives readTimeMinutes from readTime string
    Note over AppJS: - Sets source: match.source ?? null
    AppJS->>AppJS: matches = rawMatches.map(normalizeMatch)
    AppJS->>AppJS: initRouter()
    AppJS->>AppJS: renderHome()
    AppJS-->>Browser: Home page rendered with match cards
```

---

## SD-02: User Drags Timeline to Select Segment & Attaches to Chat

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant MarkerBar as MarkerBar (DOM)
    participant WireDetail as wireDetail()
    participant ActionBar as ActionBar (DOM)
    participant ChatCtxBar as ChatContextBar (DOM)

    User->>MarkerBar: mousedown on a timeline marker
    MarkerBar->>WireDetail: fires mousedown event
    WireDetail->>WireDetail: isTimelineDragging = true
    WireDetail->>WireDetail: dragStartMinute = Number(marker.dataset.minute)

    loop User moves mouse across markers
        User->>MarkerBar: mousemove over markers
        MarkerBar->>WireDetail: fires mouseenter on each marker
        WireDetail->>WireDetail: dragCurrentMinute = Number(hovered.dataset.minute)
        WireDetail->>WireDetail: Highlight markers in [dragStart, dragCurrent] range
        WireDetail->>ActionBar: showActionBar(dragStartMinute, dragCurrentMinute)
        ActionBar-->>User: Action bar appears with range label
    end

    User->>MarkerBar: mouseup (global window listener)
    MarkerBar->>WireDetail: fires global mouseup handler
    WireDetail->>WireDetail: isTimelineDragging = false
    WireDetail->>WireDetail: finalStart = min(dragStartMinute, dragCurrentMinute)
    WireDetail->>WireDetail: finalEnd = max(dragStartMinute, dragCurrentMinute)
    WireDetail->>ActionBar: showActionBar(finalStart, finalEnd)
    ActionBar-->>User: Action bar locked with "Attach to Chat" button visible

    User->>ActionBar: clicks "Attach" button
    ActionBar->>WireDetail: fires attach click handler
    WireDetail->>WireDetail: activeContext = { type: "range", start: finalStart, end: finalEnd }
    WireDetail->>ChatCtxBar: updateChatContextBar(activeContext)
    ChatCtxBar-->>User: Context pill appears above chat input
```

---

## SD-03: User Sends Chat Message with Active Context

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant ChatForm as ChatForm (DOM)
    participant BuildCtx as buildAgentContext()
    participant AskAgent as askAgent()
    participant ChatLog as ChatLog (DOM)

    User->>ChatForm: Types message and submits
    ChatForm->>ChatLog: appendMessage("user", userText)
    ChatLog-->>User: User bubble appears immediately

    ChatForm->>BuildCtx: buildAgentContext(match, currentMinute, userText)

    BuildCtx->>BuildCtx: Inspect activeContext.type
    alt type === "moment"
        BuildCtx->>BuildCtx: contextInfo = { minute: activeContext.minute }
        BuildCtx->>BuildCtx: queryMinute = activeContext.minute
    else type === "range"
        BuildCtx->>BuildCtx: contextInfo = { start: activeContext.start, end: activeContext.end }
        BuildCtx->>BuildCtx: queryMinute = midpoint of range
    else type === "chapter"
        BuildCtx->>BuildCtx: contextInfo = { label: activeContext.label }
    else type === "event"
        BuildCtx->>BuildCtx: contextInfo = { minute: activeContext.minute, text: activeContext.text }
    else no activeContext
        BuildCtx->>BuildCtx: contextInfo = null (use video playback time)
    end

    Note over BuildCtx: Filter uses typed MatchEvent objects (not tuples)
    BuildCtx->>BuildCtx: nearbyEvents = match.events.filter(evt => evt.minuteVal within window)
    BuildCtx-->>AskAgent: Return AgentPacket { route, userMessage, activeContext, match, media{ nearbyEvents: MatchEvent[] } }

    AskAgent->>AskAgent: await delay(350ms)  [simulated network]
    AskAgent->>AskAgent: Generate contextIntro based on ctx.type and currentLanguage via t()
    Note over AskAgent: Format events: evt.minute + " " + evt.text (not tuple .join)
    AskAgent->>AskAgent: eventText = nearbyEvents.map(evt => evt.minute + " " + evt.text).join("; ")
    AskAgent->>AskAgent: Construct full response string

    AskAgent-->>ChatLog: appendMessage("agent", responseText)
    ChatLog-->>User: Agent bubble appears in chat log
```

---

## SD-04: Admin Edits & Saves Match Story

```mermaid
sequenceDiagram
    autonumber
    participant Admin
    participant RenderEditor as renderInlineEditor()
    participant WireEditor as wireInlineEditor()
    participant ParseMinute as parseMinuteVal()
    participant Normalize as normalizeMatch()
    participant LS as localStorage
    participant MatchArray as matches[] (in-memory)

    Admin->>RenderEditor: clicks "Edit" button on admin list
    RenderEditor->>RenderEditor: renderInlineEditor(matchId)
    RenderEditor->>RenderEditor: Clone #detailTemplate into #app
    RenderEditor->>RenderEditor: Set contenteditable="true" on all editable fields
    Note over RenderEditor: Events rendered from MatchEvent objects (evt.minute, evt.text)
    RenderEditor->>RenderEditor: Render events using match.events.map(evt => evt.minute + evt.text)
    RenderEditor-->>Admin: Inline editor rendered in page

    RenderEditor->>WireEditor: wireInlineEditor(match)
    WireEditor->>WireEditor: Wire image input live preview
    WireEditor->>WireEditor: Wire "Save" button click handler

    Admin->>RenderEditor: Edits fields (title, summary, events text, etc.)

    Admin->>WireEditor: clicks "Save" button
    WireEditor->>WireEditor: Read all [data-edit] attribute values via textContent
    Note over WireEditor: Events rebuilt as typed MatchEvent objects
    WireEditor->>ParseMinute: parseMinuteVal(minuteStr) for each event row
    ParseMinute-->>WireEditor: minuteVal: number
    WireEditor->>WireEditor: events = [{ minute, minuteVal, text }]
    WireEditor->>WireEditor: rawData = { ...match, relatedCount, events }
    WireEditor->>Normalize: normalizeMatch(rawData)
    Normalize-->>WireEditor: Fully normalized match object

    WireEditor->>MatchArray: Replace match by id with normalized data
    MatchArray-->>WireEditor: matches[] updated in memory

    WireEditor->>WireEditor: saveMatches(matches)
    WireEditor->>LS: cacheMatches() → setItem(USER_EDITS_KEY, JSON.stringify(matches))
    LS-->>WireEditor: Persisted to localStorage

    WireEditor->>Admin: renderInlineEditor(match.id) — re-render with saved data
    Admin-->>Admin: Editor refreshed showing saved state
```

---

## Quick Reference — Actors Glossary

| Actor | Description |
|---|---|
| `Browser` | The browser environment; fires lifecycle events like `DOMContentLoaded` |
| `App.js` | Main application module; owns routing, data loading, and rendering |
| `localStorage` | Browser storage used to persist user edits via `USER_EDITS_KEY` |
| `dataset/matches.json` | External JSON file fetched at runtime containing full match records |
| `seedMatches` | Hardcoded inline fallback array in `app.js` used when fetch fails |
| `MarkerBar` | DOM element rendering per-minute timeline markers |
| `wireDetail()` | Function that attaches all event listeners to the detail page |
| `ActionBar` | Floating action overlay shown during/after timeline drag |
| `ChatContextBar` | DOM strip above the chat input showing the currently pinned context pill |
| `ChatForm` | The chat input form element |
| `buildAgentContext()` | Pure function assembling `AgentPacket` from current state; uses `evt.minuteVal` for filtering |
| `askAgent()` | Mock async function simulating an AI agent response (350ms delay) |
| `ChatLog` | Scrollable DOM container holding user and agent message bubbles |
| `parseMinuteVal()` | Utility: extracts numeric minute from display string like `"04'"` → `4` |
| `normalizeMatch()` | Converts raw match data to canonical schema with backward compat for tuples and `related` field |
| `renderInlineEditor()` | Function that clones the detail template and makes fields editable |
| `wireInlineEditor()` | Function that wires Save handler; rebuilds typed MatchEvent objects on save |
| `matches[]` | In-memory array of normalized match objects, the single source of truth at runtime |

---

*Last updated: 2026-05-24 — Schema standardization pass*
