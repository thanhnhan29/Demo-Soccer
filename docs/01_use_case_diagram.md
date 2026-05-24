# Use Case Diagram / Biểu Đồ Use Case — MatchPulse

> [!NOTE]
> Mermaid does not natively support UML use-case diagrams, so a `flowchart LR` layout is used to approximate the standard notation: actors appear on the left/right edges, and use-cases appear as rounded rectangles in the centre.

---

## Full System Use Case Diagram

```mermaid
flowchart LR
    %% ─────────────── ACTORS ───────────────
    GUEST(["👤 Guest"])
    ADMIN(["🔑 Admin"])
    AGENT(["🤖 AI Agent"])
    SYS(["⚙️ System"])

    %% ─────────────── USE CASES ───────────────

    subgraph PUBLIC ["Public Features"]
        UC01([UC-01\nBrowse Match List])
        UC02([UC-02\nView Match Detail])
        UC03([UC-03\nPin Segment / Event / Chapter])
        UC04([UC-04\nQuery AI Agent])
        UC05([UC-05\nSwitch Language])
        UC10([UC-10\nWatch Video Player])
        UC11([UC-11\nView League Standings])
    end

    subgraph ADMIN_AREA ["Admin Features"]
        UC06([UC-06\nAdmin Login])
        UC07([UC-07\nCreate / Edit Match Story])
        UC08([UC-08\nDelete Match Story])
        UC09([UC-09\nSearch / Filter / Sort Matches])
        UC12([UC-12\nLogout])
    end

    subgraph SYSTEM_AREA ["System / Data Features"]
        UC13([UC-13\nLoad Match Data])
        UC14([UC-14\nCache to localStorage])
        UC15([UC-15\nSeed Fallback Data])
    end

    %% ─────────────── GUEST ASSOCIATIONS ───────────────
    GUEST --> UC01
    GUEST --> UC02
    GUEST --> UC03
    GUEST --> UC04
    GUEST --> UC05
    GUEST --> UC10
    GUEST --> UC11

    %% ─────────────── ADMIN ASSOCIATIONS ───────────────
    ADMIN --> UC06
    ADMIN --> UC07
    ADMIN --> UC08
    ADMIN --> UC09
    ADMIN --> UC12
    ADMIN --> UC01
    ADMIN --> UC02
    ADMIN --> UC05

    %% ─────────────── AGENT ASSOCIATIONS ───────────────
    AGENT --> UC04

    %% ─────────────── SYSTEM ASSOCIATIONS ───────────────
    SYS --> UC13
    SYS --> UC14
    SYS --> UC15

    %% ─────────────── INCLUDE / EXTEND ───────────────
    UC02 -. "«include»" .-> UC10
    UC03 -. "«include»" .-> UC02
    UC04 -. "«include»" .-> UC03
    UC07 -. "«include»" .-> UC06
    UC08 -. "«include»" .-> UC06
    UC09 -. "«include»" .-> UC06
    UC12 -. "«include»" .-> UC06
    UC01 -. "«include»" .-> UC13
    UC13 -. "«extend»" .-> UC14
    UC13 -. "«extend»" .-> UC15

    %% ─────────────── STYLES ───────────────
    classDef actor     fill:#1e293b,stroke:#38bdf8,color:#e2e8f0,rx:50
    classDef usecase   fill:#0f172a,stroke:#6366f1,color:#c7d2fe,rx:12
    classDef pubBox    fill:#0f172a,stroke:#22d3ee,color:#e2e8f0
    classDef adminBox  fill:#0f172a,stroke:#f59e0b,color:#e2e8f0
    classDef sysBox    fill:#0f172a,stroke:#10b981,color:#e2e8f0

    class GUEST,ADMIN,AGENT,SYS actor
    class UC01,UC02,UC03,UC04,UC05,UC10,UC11 usecase
    class UC06,UC07,UC08,UC09,UC12 usecase
    class UC13,UC14,UC15 usecase
```

---

## Actor–Use Case Matrix

| Use Case | Guest | Admin | AI Agent | System |
|----------|:-----:|:-----:|:--------:|:------:|
| UC-01 Browse Match List | ✅ | ✅ | — | — |
| UC-02 View Match Detail | ✅ | ✅ | — | — |
| UC-03 Pin Segment / Event / Chapter | ✅ | ✅ | — | — |
| UC-04 Query AI Agent | ✅ | ✅ | ✅ | — |
| UC-05 Switch Language | ✅ | ✅ | — | — |
| UC-06 Admin Login | — | ✅ | — | — |
| UC-07 Create / Edit Match Story | — | ✅ | — | — |
| UC-08 Delete Match Story | — | ✅ | — | — |
| UC-09 Search / Filter Matches | — | ✅ | — | — |
| UC-10 Watch Video Player | ✅ | ✅ | — | — |
| UC-11 View League Standings | ✅ | ✅ | — | — |
| UC-12 Logout | — | ✅ | — | — |
| UC-13 Load Match Data | — | — | — | ✅ |
| UC-14 Cache to localStorage | — | — | — | ✅ |
| UC-15 Seed Fallback Data | — | — | — | ✅ |

---

## Relationship Legend

| Symbol | Meaning |
|--------|---------|
| `──────►` | **Association** — actor initiates use case |
| `- «include» →` | **Include** — base use case always invokes the included one |
| `- «extend» →` | **Extend** — optional or conditional behaviour |

---

## System Architecture Context

```mermaid
flowchart TB
    Browser["🌐 Browser (SPA)"]
    Router["Hash Router\n#/, #/league, #/match/:id\n#/admin, #/admin/edit/:id"]
    DS["dataset/matches.json"]
    LS["localStorage\n(match cache)"]
    SS["sessionStorage\n(admin token)"]

    Browser --> Router
    Router -->|"fetch on init"| DS
    DS -->|"cache write"| LS
    LS -->|"cache read"| Router
    Router -->|"auth token"| SS

    style Browser fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style Router fill:#0f172a,stroke:#6366f1,color:#c7d2fe
    style DS fill:#0f172a,stroke:#10b981,color:#a7f3d0
    style LS fill:#0f172a,stroke:#f59e0b,color:#fde68a
    style SS fill:#0f172a,stroke:#ef4444,color:#fecaca
```

---

*Document version: 1.1 — 2026-05-24*
