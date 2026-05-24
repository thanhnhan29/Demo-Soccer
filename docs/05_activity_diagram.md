# 05 – Activity Diagrams

> **Document:** `05_activity_diagram.md`
> **Project:** MatchPulse Football SPA
> **Version:** 1.1
> **Last Updated:** 2026-05-24 (Schema standardization pass)

This document captures the runtime behaviour of MatchPulse through three UML-style activity diagrams rendered with Mermaid `flowchart TD` notation.

---

## AD-01 · App Startup & Data Loading

Describes the sequence of operations that run once when `index.html` is first loaded and `initializeApp()` is called from `app.js`.

```mermaid
flowchart TD
    A([Start]) --> B["initializeApp()"]

    B --> C{"Check\nUSER_EDITS_KEY\nin localStorage"}

    %% ── Branch: user has local edits ──
    C -- YES --> D["readStoredMatches()"]
    D --> E{"Has\nstored data?"}
    E -- YES --> F["Use cached matches ✓"]
    E -- NO  --> G["fetchDataset()"]

    %% ── Branch: no local edits ──
    C -- NO  --> H["fetchDataset()"]
    H --> I{"HTTP OK?"}
    I -- YES --> J["Parse JSON response"]
    J --> K["normalizeMatch() each record"]
    K --> L["cacheMatches() → localStorage"]
    L --> F

    I -- NO  --> M["readStoredMatches()"]
    M --> N{"Has\nstored data?"}
    N -- YES --> F
    N -- NO  --> O["seedMatches.map(normalizeMatch)"]
    O --> F

    note1["normalizeMatch() performs:\n• Tuple events → MatchEvent{minute,minuteVal,text}\n• related → relatedCount (backward compat)\n• Derives readTimeMinutes from readTime string\n• Sets source: match.source ?? null"]

    %% ── Language init ──
    F --> P["getInitialLanguage()"]
    P --> Q{"lang in\nlocalStorage?"}
    Q -- YES --> R["Use stored language"]
    Q -- NO  --> S["navigator.language fallback"]
    R & S --> T["applyLanguage()"]
    T --> T1["Update DOM nav text"]
    T --> T2["Set &lt;html lang&gt; attr"]
    T --> T3["Update &lt;title&gt;"]

    %% ── Role badge ──
    T1 & T2 & T3 --> U["updateRoleBadge()"]
    U --> V{"sessionStorage\nadmin role set?"}
    V -- YES --> W["Show 🛡 Admin badge"]
    V -- NO  --> X["Show default badge"]

    %% ── Router ──
    W & X --> Y["router()\nparse window.location.hash"]
    Y --> Y1{"Hash value?"}
    Y1 -- "'#/'"       --> Z1["renderHome()"]
    Y1 -- "'#/league'" --> Z2["renderLeagues()"]
    Y1 -- "'#/match/:id'" --> Z3["renderDetail(id)"]
    Y1 -- "'#/admin'"  --> Z4{"isAdmin()?"}
    Z4 -- YES --> Z5["renderAdmin()"]
    Z4 -- NO  --> Z6["renderAdminLogin()"]

    Z1 & Z2 & Z3 & Z5 & Z6 --> END([End])
```

---

## AD-02 · User Pins Context & Queries Agent

Describes what happens from the moment a user arrives on a Match Detail page to when the AI agent returns a response in the chat log.

```mermaid
flowchart TD
    A([Start]) --> B["User on Match Detail page"]

    B --> C{"Choose\ncontext source"}

    %% ── Context options ──
    C -- "Timeline Drag"  --> D1["Drag markers on .marker-bar"]
    D1 --> D2["showActionBar(start, end)"]
    D2 --> D3["User clicks Attach"]
    D3 --> CTX["activeContext =\n{type:'range', start, end}"]

    C -- "Chapter Pin"    --> E1["Click chapter pin button"]
    E1 --> CTX2["activeContext =\n{type:'chapter', minute, label}"]

    C -- "Event Pin"      --> F1["Click event pin button\n(data-pin-event-minute=minuteVal)"]
    F1 --> CTX3["activeContext =\n{type:'event', minute:minuteVal, text}\n(minuteVal is Number, not string)"]

    C -- "Pin Moment"     --> G1["Click Pin Moment button"]
    G1 --> CTX4["activeContext =\n{type:'moment',\nminute: currentVideoMinute}"]

    C -- "No action"      --> CTX5["activeContext = null\n(uses live playback time)"]

    %% ── Merge ──
    CTX & CTX2 & CTX3 & CTX4 & CTX5 --> H["updateChatContextBar()"]
    H --> H1["Render context pill\nin #chatContextBar"]

    H1 --> I["User types message\n& submits"]

    I --> J["buildAgentContext(\n  match, currentMinute, text\n)"]
    J --> J1["Generate contextInfo\nfrom activeContext"]
    J --> J2["Filter nearbyEvents using\nevt.minuteVal (typed MatchEvent objects)"]
    J1 & J2 --> J3["Assemble AgentPacket\nmedia.nearbyEvents: MatchEvent[]"]

    J3 --> K["askAgent(packet)"]
    K --> K1["await 350 ms\n(simulated latency)"]
    K1 --> K2{"currentLanguage?"}
    K2 -- EN --> K3["Generate English contextIntro\nbased on ctx.type"]
    K2 -- VI --> K4["Generate Vietnamese contextIntro\nbased on ctx.type"]
    K3 & K4 --> K5["Format eventText:\nevt.minute + ' ' + evt.text\nfor each nearbyEvent"]
    K5 --> K6["Build full response string"]

    K6 --> L["appendMessage('agent', response)"]
    L --> END([End])
```

---

## AD-03 · Admin Manages Match Stories

Describes the full admin lifecycle: authentication gate, list operations, inline editing, and logout.

```mermaid
flowchart TD
    A([Start]) --> B["User navigates to #/admin"]
    B --> C{"isAdmin()?"}

    %% ── Not authenticated ──
    C -- NO --> D["renderAdminLogin()"]
    D --> E["User submits password"]
    E --> F{"password ===\nADMIN_PASSWORD?"}
    F -- NO  --> G["Show error message"]
    G --> E
    F -- YES --> H["setAdminMode(true)"]
    H --> H1["sessionStorage.setItem\n(ADMIN_SESSION_KEY, 'admin')"]
    H1 --> I["renderAdmin()"]

    %% ── Authenticated ──
    C -- YES --> I

    %% ── Admin actions ──
    I --> J{"User\naction?"}

    J -- "Search"        --> K1["Update adminSearchQuery"]
    K1 --> K2["renderAdminList()"]
    K2 --> J

    J -- "Filter / Sort" --> L1["Update filter state vars\n(adminFilterLeague,\nadminSortField, etc.)"]
    L1 --> L2["renderAdminList()"]
    L2 --> J

    J -- "Group"         --> M1["Update adminGroupBy"]
    M1 --> M2["renderAdminList()"]
    M2 --> J

    J -- "Create Draft"  --> N1["createEmptyMatch()"]
    N1 --> N2["matches.unshift(newMatch)"]
    N2 --> N3["saveMatches() → localStorage"]
    N3 --> N4["navigate #/admin/edit/:id"]
    N4 --> EDIT["renderInlineEditor()"]

    J -- "Edit"          --> O1["navigate #/admin/edit/:id"]
    O1 --> EDIT

    EDIT --> P["User edits\ncontenteditable fields"]
    P --> Q{"Click Save?"}
    Q -- NO  --> P
    Q -- YES --> R["Build typed events:\n{minute, minuteVal, text}\nvia parseMinuteVal()"]
    R --> R2["normalizeMatch(editedData)\nwith relatedCount field"]
    R2 --> S["Replace in matches[]"]
    S --> T["saveMatches() → localStorage"]
    T --> J

    J -- "Delete"        --> U1["confirm() dialog"]
    U1 --> U2{"Confirmed?"}
    U2 -- NO  --> J
    U2 -- YES --> U3["Filter out match\nfrom matches[]"]
    U3 --> U4["saveMatches() → localStorage"]
    U4 --> U5["renderAdmin()"]
    U5 --> J

    J -- "Logout"        --> V1["setAdminMode(false)"]
    V1 --> V2["sessionStorage.removeItem\n(ADMIN_SESSION_KEY)"]
    V2 --> V3["navigate #/"]
    V3 --> END([End])
```

---

## Diagram Legend

| Symbol | Meaning |
|--------|---------|
| `([…])` | Start / End terminal |
| `[…]` | Action / Process step |
| `{…}` | Decision / Guard condition |
| `-- label -->` | Transition with guard label |
| Indented subgraph | Logically grouped sub-flow |

> [!NOTE]
> All three flows share the same `matches[]` array held in application-layer memory. Persistence is handled exclusively through `saveMatches()` (localStorage) and read back via `readStoredMatches()` — there is no server-side database in the current architecture.

> [!NOTE]
> `normalizeMatch()` is backward-compatible: it converts legacy `[string, string][]` event tuples to typed `MatchEvent` objects, and maps the old `related` field to `relatedCount`. This ensures existing localStorage data remains readable after schema updates.

> [!TIP]
> The mock latency in **AD-02** (`await 350ms`) exists so the UX feels responsive during development. When a real AI API is integrated, this block will be replaced by an `await fetch(AI_ENDPOINT, …)` call.

*Last updated: 2026-05-24 — Schema standardization pass*
