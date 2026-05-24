# 07 – Architecture Diagrams

> **Document:** `07_architecture_diagram.md`
> **Project:** MatchPulse Football SPA
> **Version:** 1.1
> **Last Updated:** 2026-05-24

This document provides a layered view of the MatchPulse architecture through four complementary diagrams, followed by an upgrade path analysis for moving to a production-grade system.

---

## 1 · Layer Architecture

A top-down breakdown of all three architectural layers and their constituent modules.

```mermaid
flowchart TD
    subgraph PRES["🖥  Presentation Layer — index.html + styles.css"]
        direction TB
        TPL["📄 Templates\n#homeTemplate · #detailTemplate · #adminTemplate"]
        TOK["🎨 CSS Design Tokens\n--bg · --ink · --primary · --accent\nleague-specific custom properties"]
        LAY["📐 Layout System\nCSS Grid · Flexbox\nclamp() responsive typography"]
    end

    subgraph APP["⚙️  Application Layer — app.js (~2 600 lines)"]
        direction TB
        RTR["🔀 Router\nhash-based · window.hashchange listener"]
        STA["📦 State Module\nmatches[] · currentLanguage · activeContext\nadminFilter* vars · homeVisibleCount\ntimelineVisibleCounts Map"]
        REN["🖼 Render Engine\nrenderHome() · renderLeagues()\nrenderDetail() · renderAdmin()\nrenderInlineEditor()"]
        WIR["🔌 Event Wiring\nwireDetail() · wireAdmin()\nwireInlineEditor() · wireTimelineEvents()\nwireTimelineMore()"]
        I18N["🌐 i18n Module\nt() · applyLanguage() · setLanguage()\ngetTranslatedMatch() · translateTeam()"]
        AGT["🤖 Agent Module\nbuildAgentContext()\naskAgent() — currently mock"]
    end

    subgraph DATA["🗄  Data Layer"]
        direction TB
        JSON["📂 Primary Source\ndataset/matches.json\nStatic JSON · ~27 KB · 250+ records"]
        LS["💾 Cache\nlocalStorage\nSTORAGE_KEY='matchpulse.matches'\nUSER_EDITS_KEY='matchpulse.userEdits'"]
        SS["🔐 Session\nsessionStorage\nADMIN_SESSION_KEY='matchpulse.role'"]
        SEED["🌱 Seed Data\nseedMatches[] — 4 hand-crafted\ndemo matches embedded in app.js"]
        I18NDAT["📖 i18n Data\nCOPY dict · STATUS_LABELS\nSEED_TRANSLATIONS · TEAM_TRANSLATIONS\n(all inline in app.js)"]
    end

    subgraph EXT["🌍  External Resources"]
        direction TB
        FONTS["🔤 Fonts\nGoogle Fonts\nInter · Outfit · Work Sans"]
        IMGS["🖼 Images\nUnsplash CDN\n(cover images)"]
        VID["🎬 Video\nMDN sample video\n(placeholder)"]
        FUTURE["🚀 Future\nReal AI API (Gemini / Claude)\nReal video CDN\nBackend REST / GraphQL API"]
    end

    PRES --> APP
    APP  --> DATA
    APP  -.->|"CDN requests"| EXT
```

---

## 2 · Data Flow Diagram

Left-to-right view of how data moves through the system during typical user sessions.

```mermaid
flowchart LR
    JSON2["📂 dataset/matches.json\nStatic file"] -->|"HTTP GET"| FETCH["fetchDataset()"]
    FETCH -->|"raw records"| NORM["normalizeMatch()\neach record"]
    NORM  -->|"normalised"| ARR["matches[]\nin memory"]

    ARR   -->|"read"| SORT["getSortedMatches()\n+ getTranslatedMatch()"]
    SORT  -->|"view data"| RH["renderHome()\n.home-layout"]

    ARR   -->|"read"| GROUP["groupBy(league)\n+ buildStandings()"]
    GROUP -->|"league data"| RL["renderLeagues()\n.leagues-page"]

    ARR   -->|"single match"| DETAIL["renderDetail(id)\n.detail-page"]

    DETAIL -->|"match + user input"| BAC["buildAgentContext()"]
    BAC    -->|"context packet"| AGENT["askAgent()\nmock → future: real API"]
    AGENT  -->|"response string"| CHAT["appendMessage()\n#chatLog"]

    ARR   -->|"read / write"| ADMIN["Admin edits\nrenderInlineEditor()"]
    ADMIN -->|"edited match"| NORM2["normalizeMatch()"]
    NORM2 -->|"replaces record"| ARR
    ARR   -->|"persist"| SAVE["saveMatches()\nlocalStorage"]
    SAVE  -.->|"read on next load"| FETCH
```

---

## 3 · Component Map

Structural breakdown of the DOM component hierarchy rendered by the application.

```mermaid
flowchart TB
    ROOT["&lt;body&gt;"]

    ROOT --> HDR["site-header"]
    HDR  --> H1[".brand\n⚽ MatchPulse"]
    HDR  --> H2[".top-nav\nHome · Leagues · Admin"]
    HDR  --> H3[".role-badge\n🛡 Admin / Guest"]
    HDR  --> H4[".lang-selector\n🌐 EN / VI"]

    ROOT --> APP2["#app  (.page-root)\nSwapped by router()"]

    APP2 --> HOME[".home-layout\n#homeTemplate"]
    HOME --> HM1[".hero-match\nFeatured card"]
    HOME --> HM2[".match-grid\nPaginated cards"]
    HOME --> HM3[".right-rail"]
    HM3  --> HR1[".hot-list\nTrending matches"]
    HM3  --> HR2[".agent-brief\nAI snippet"]

    APP2 --> DETAIL2[".detail-page\n#detailTemplate"]
    DETAIL2 --> DA[".article-main"]
    DA --> MS[".media-stage"]
    MS --> V["video#matchVideo"]
    MS --> MB[".marker-bar\nTimeline drag + pins"]
    MS --> CL[".chapter-list"]
    MS --> SAB["#segmentActionBar\nAttach / dismiss"]
    DETAIL2 --> DR[".detail-rail"]
    DR --> SP[".match-side-panel\nStats · Events · Lineups"]
    DR --> CP[".chat-panel"]
    CP --> CG["#chatLog"]
    CP --> QP[".quick-prompts\nSuggested questions"]
    CP --> CCB["#chatContextBar\nActive context pill"]

    APP2 --> ADMIN2[".admin-dashboard\n#adminTemplate"]
    ADMIN2 --> AT[".admin-topbar\nSearch + Logout"]
    ADMIN2 --> AC[".admin-controls-card\nFilter · Sort · Group"]
    ADMIN2 --> AL[".admin-list\nMatch rows + CRUD actions"]

    APP2 --> LEAGUES[".leagues-page"]
    LEAGUES --> LH[".league-hero"]
    LEAGUES --> LG[".league-grid"]
    LG --> LC[".league-card\nStandings · Top scorers\nRecent results"]
```

---

## 4 · Module Dependency Matrix

| Consumer → | Router | State | Render Engine | Event Wiring | i18n | Agent | Data Layer |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Router** | — | R | W | — | — | — | — |
| **State** | — | — | — | — | R | — | RW |
| **Render Engine** | — | R | — | — | R | — | R |
| **Event Wiring** | W | RW | W | — | — | W | — |
| **i18n** | — | RW | — | — | — | — | R |
| **Agent** | — | R | — | — | R | — | R |

> R = reads · W = writes · RW = reads and writes

---

## 5 · Client-Side Schema Standardization (v1.1)

In v1.1, the application standardized its client-side memory and cache schemas to eliminate structural inconsistencies and align with relational database targets:

*   **`MatchEvent` Object Pattern**: Converted the legacy `[string, string][]` anonymous tuple array into a typed list of objects containing `minute` (string), `minuteVal` (number), and `text` (string).
*   **`relatedCount` Property**: Standardized the ambiguously named `related` field to `relatedCount`.
*   **`readTimeMinutes` Property**: Added `readTimeMinutes` derived dynamically from the localized display string `readTime` (e.g. `"5 phút"` or `"3 min"` → `5` or `3`) to support proper sorting.
*   **`source` Property**: Standardized the `source` field as `string | null` to represent raw files, defaulting to `null` for mock seeds.
*   **Robust Backward Compatibility**: Enhanced `normalizeMatch()` to automatically convert old schema records (e.g. from local storage) into the new format.
*   **Safety Utilities**: Added `parseMinuteVal()` helper to extract numeric minutes from soccer minute strings (e.g. `"90+2'"` → `90`) for chronological sorting and AI chat context boundary filtering.

---

## 6 · Upgrade Path

> [!IMPORTANT]
> The current architecture is a **zero-dependency, single-file SPA** designed for rapid prototyping. Each upgrade below is independently applicable — they do not need to be adopted all at once.

### 6.1 Layer-by-layer changes

| Layer | Current | Production Replacement |
|---|---|---|
| **Primary data source** | `dataset/matches.json` static file | REST API (`GET /api/matches`) or GraphQL endpoint with pagination |
| **AI agent** | `askAgent()` mock with 350 ms delay | `await fetch(AI_ENDPOINT)` call to Gemini / Claude API; stream responses with SSE |
| **Authentication** | `sessionStorage` boolean flag | JWT issued by backend; `Authorization: Bearer` header on every API call |
| **Client-side cache** | `localStorage` JSON blobs | `IndexedDB` via `idb` wrapper, or Cache API managed by a Service Worker |
| **Build tool** | None — raw `<script>` tag | Vite (or Rollup) for tree-shaking, code splitting, and hashed asset filenames |
| **i18n data** | Inline JS dictionaries (`COPY`, `STATUS_LABELS`, etc.) | Separate `locales/en.json` / `locales/vi.json` files; lazy-loaded on language switch |
| **CSS design tokens** | Inline `:root {}` in `styles.css` | Separate `tokens.css` or CSS-in-JS with a design-token pipeline |

### 6.2 Migration Mermaid

```mermaid
flowchart LR
    subgraph NOW["Current (v1 — Prototype)"]
        direction TB
        A1["Static JSON file"]
        A2["Mock askAgent()"]
        A3["sessionStorage auth"]
        A4["localStorage cache"]
        A5["No build tool"]
        A6["Inline i18n dicts"]
    end

    subgraph PROD["Target (v2 — Production)"]
        direction TB
        B1["REST / GraphQL API"]
        B2["Gemini / Claude SSE"]
        B3["JWT + Backend Auth"]
        B4["IndexedDB / SW Cache"]
        B5["Vite bundler"]
        B6["JSON locale files"]
    end

    A1 -->|"Add API server"| B1
    A2 -->|"Replace fetch call"| B2
    A3 -->|"Add auth service"| B3
    A4 -->|"Upgrade storage"| B4
    A5 -->|"Add build step"| B5
    A6 -->|"Extract files"| B6
```

### 6.3 Effort estimate

| Upgrade | Relative Effort | Risk |
|---|:---:|:---:|
| Extract i18n to JSON files | 🟢 Low | Low |
| Add Vite build step | 🟢 Low | Low |
| Replace mock agent with real API | 🟡 Medium | Medium |
| Upgrade localStorage → IndexedDB | 🟡 Medium | Low |
| REST / GraphQL backend | 🔴 High | Medium |
| JWT authentication | 🔴 High | High |

---

> [!NOTE]
> Because the entire application currently lives in a single `app.js` file, any extraction to a multi-file module structure should happen **before** other upgrades to avoid merge conflicts and keep diffs readable.

> [!TIP]
> Use the `/goal` slash command if you want the AI agent to work through the upgrade path steps autonomously and thoroughly without stopping partway through.
