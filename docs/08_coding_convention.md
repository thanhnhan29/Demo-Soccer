# 08 · Coding Convention — MatchPulse

> [!IMPORTANT]
> Phiên bản này là chuẩn hóa dùng cho **Vanilla JS SPA**. Nếu dự án chuyển sang React/Vue/Next.js, cần có convention riêng cho framework đó.

---

## 1. File Structure

```
Demo-Soccer/
├── index.html             # SPA shell, <template> tags
├── app.js                 # ALL application logic (single file, ~2600 lines)
├── styles.css             # ALL styles (design tokens + component styles)
├── dataset/
│   └── matches.json       # Static dataset (~250+ records)
├── docs/                  # Technical documentation
│   ├── 01_use_case_diagram.md
│   ├── 02_use_case_specification.md
│   ├── 03_class_diagram.md
│   ├── 04_sequence_diagram.md
│   ├── 05_activity_diagram.md
│   ├── 06_erd.md
│   ├── 07_architecture_diagram.md
│   └── 08_coding_convention.md   ← this file
└── README.md
```

> [!NOTE]
> **Scale Trigger**: When `app.js` exceeds 3000 lines or when a second developer joins, split into modules: `router.js`, `render/home.js`, `render/detail.js`, `render/admin.js`, `i18n.js`, `agent.js`, `data.js`.

---

## 2. Naming Conventions

### 2.1 JavaScript Identifiers

| Category | Convention | Examples |
|---|---|---|
| **Constants (module-level)** | `UPPER_SNAKE_CASE` | `STORAGE_KEY`, `HOME_INITIAL_COUNT`, `ADMIN_PASSWORD` |
| **Object constants** | `UPPER_SNAKE_CASE` | `LEAGUE_THEMES`, `COPY`, `STATUS_LABELS`, `EVENT_TYPES` |
| **Let variables (global state)** | `camelCase` | `currentLanguage`, `activeContext`, `adminSortBy` |
| **Function declarations** | `camelCase` verb-first | `renderHome()`, `wireDetail()`, `buildLeagueStyle()` |
| **Function: render a view** | `render[ViewName]()` | `renderHome()`, `renderDetail()`, `renderAdmin()` |
| **Function: wire DOM events** | `wire[ViewName]()` | `wireDetail()`, `wireAdmin()`, `wireInlineEditor()` |
| **Function: build HTML string** | `render[Component](item)` | `renderMatchCard()`, `renderHotItem()`, `renderEventsHtml()` |
| **Function: compute/transform** | `get[X]()`, `build[X]()` | `getLeagueTheme()`, `buildLeagueStyle()`, `buildStandings()` |
| **Function: async data** | `fetchX()`, `loadX()`, `hydrateX()` | `fetchDataset()`, `loadMatches()`, `hydrateMatchEvents()` |
| **Boolean functions** | `is[X]()` | `isAdmin()`, `isMissingText()` |
| **Event handler inline** | `on[Event]` param | `onClick`, `onInput` (used in `addEventListener`) |

### 2.2 HTML & CSS

| Category | Convention | Examples |
|---|---|---|
| **CSS classes (component)** | `kebab-case` | `.match-card`, `.hero-match`, `.admin-controls-card` |
| **CSS classes (state modifier)** | `.is-[state]` | `.is-active`, `.is-admin`, `.is-selected`, `.is-dragging` |
| **CSS classes (utility)** | `.u-[property]` | *(avoid; use component classes instead)* |
| **HTML id (static shell)** | `camelCase` | `#app`, `#roleBadge`, `#navHome`, `#chatLog` |
| **HTML id (dynamic content)** | `camelCase` | `#loadMoreBtn`, `#matchVideo`, `#chatContextBar` |
| **HTML data attributes** | `data-[kebab]` | `data-edit`, `data-lang`, `data-match-id`, `data-minute` |
| **ARIA labels** | Always add | `aria-label`, `aria-pressed`, `aria-live`, `role=` |

### 2.3 Translation Keys (i18n)

| Rule | Example |
|---|---|
| Keys use `camelCase` | `"navHome"`, `"homeMore"`, `"agentBriefIntro"` |
| Keys namespaced by page | `home*`, `league*`, `admin*`, `agent*` |
| Parametrized values use `{param}` | `"homeMore": "Load {count} more"` |
| Status labels use raw status value as key | `"Final"`, `"Live brief"` (exact match) |

---

## 3. JavaScript Code Style

### 3.1 Function Structure

```js
// ✅ CORRECT: Pure function, descriptive name, single responsibility
function buildLeagueStyle(league, delay = 0) {
  const theme = getLeagueTheme(league);
  const delayValue = Number.isFinite(delay) ? delay : 0;
  return `--league-color:${theme.bg};--league-ink:${theme.ink};--league-accent:${theme.accent};--delay:${delayValue}s;`;
}

// ❌ AVOID: Side effects mixed with computation
function buildAndApplyStyle(league, element) {
  element.style = getStyle(league); // mixed side effect
}
```

### 3.2 HTML Rendering (Template Literals)

```js
// ✅ CORRECT: Escape all dynamic values, use semantic HTML
function renderMatchCard(match, index) {
  const style = buildLeagueStyle(match.league, index * 0.06);
  return `
    <article class="match-card" style="${style}">
      <img src="${escapeAttr(match.image)}" alt="${escapeAttr(match.home)} vs ${escapeAttr(match.away)}" />
      <div class="match-card-body">
        <span class="tag">${escapeHtml(displayStatus(match.status))}</span>
        <h2>${escapeHtml(match.title)}</h2>
      </div>
    </article>`;
}

// ❌ AVOID: Direct user/data values in HTML without escaping
return `<h2>${match.title}</h2>`;  // XSS risk if title contains <script>
```

### 3.3 Safety Functions (Required)

These functions MUST be used for all dynamic content:

```js
// escapeHtml(str) — use for all text content
escapeHtml(match.title)

// escapeAttr(str) — use for all HTML attribute values
escapeAttr(match.image)   // src=, href=, etc.

// displayText(value) — use for user-facing text that may be "Not found."
displayText(match.summary)

// displayStatus(value) — use for status field (returns localized label)
displayStatus(match.status)

// t(key, params) — use for all UI copy strings (never hardcode UI text)
t("navHome")
t("homeMore", { count: remaining })
```

### 3.4 State Updates

```js
// ✅ CORRECT: Update state then re-render (one-way data flow)
adminSearchQuery = event.target.value.toLowerCase();
renderAdminList(container);

// ❌ AVOID: Mutating rendered DOM directly for state-driven content
document.querySelector(".admin-count").textContent = matches.length;
```

### 3.5 Event Listener Pattern

```js
// ✅ CORRECT: Named handler, added once, no leaks
function wireTimelineMore(match) {
  const btn = document.querySelector(`#moreBtn-${match.id}`);
  if (!btn) return;
  btn.addEventListener("click", () => {
    setTimelineCount(match, getTimelineCount(match) + TIMELINE_STEP);
    updateTimelineBlock(match);
  });
}

// ❌ AVOID: Inline listeners in HTML strings (hard to debug/remove)
return `<button onclick="doThing()">Click</button>`;
```

### 3.6 Async / Error Handling

```js
// ✅ CORRECT: try/catch with fallback
async function fetchDataset() {
  try {
    const response = await fetch(DATASET_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn("Could not load dataset matches", error);
    return [];
  }
}
```

---

## 4. CSS Conventions

### 4.1 Design Token Usage

```css
/* ✅ CORRECT: Always use CSS variables from :root */
.match-card {
  background: var(--surface);
  border-top: 3px solid var(--league-accent, var(--accent));
  color: var(--ink);
}

/* ❌ AVOID: Hardcoded values that bypass the design system */
.match-card {
  background: #ffffff;
  border-top: 3px solid #d4583c;
}
```

### 4.2 Component Token Cascade

League-specific tokens cascade from parent containers:

```
.match-card[style="--league-color:...; --league-ink:...; --league-accent:...;"]
  └── .tag { background: var(--league-color); color: var(--league-ink); }
  └── border-top: var(--league-accent)
```

These tokens are injected via `buildLeagueStyle()` in JavaScript. **Never duplicate** league color values directly in CSS.

### 4.3 Animation Timing

| Use Case | Recommended Duration | Easing |
|---|---|---|
| Micro-interactions (hover) | `0.15s – 0.2s` | `ease` |
| Card appear (fadeUp) | `0.4s – 0.6s` | `ease both` |
| Panel slide / expand | `0.25s – 0.35s` | `ease` |
| Chat message appear | `0.25s` | `ease` |
| Language transition | `0s` (instant re-render) | — |

### 4.4 Responsive Design

```css
/* ✅ CORRECT: Use clamp() for fluid typography/spacing */
font-size: clamp(26px, 3.5vw, 42px);
padding: clamp(20px, 6vw, 64px);

/* ✅ CORRECT: Use min() for max-width containers */
width: min(1200px, calc(100% - 40px));

/* Use media queries only for layout breakpoints */
@media (max-width: 900px) {
  .home-layout { grid-template-columns: 1fr; }
}
```

---

## 5. Data Conventions

### 5.1 Match Object Normalization

All matches MUST pass through `normalizeMatch()` before being stored, updated, or rendered. This function guarantees schema consistency and handles backward compatibility for legacy data by ensuring:
- `relatedCount` is a `number` (renamed from `related`, maps old `related` properties automatically)
- `readTimeMinutes` is a `number` (derived dynamically from the `readTime` display string, e.g. `"5 phút"` -> `5`, `"3 min"` -> `3`)
- `source` is a `string | null` (explicitly null if not defined in seedMatches)
- `events` is parsed to an array of typed `MatchEvent` objects (automatically converts legacy `[string, string][]` tuples)
- `stats` always has `{ possession, shots, xg }` shape
- `chapters` is always an `Array`
- `articleIntro` and `articleNote` have fallback empty string values

```js
// ✅ CORRECT: Always normalize raw data
const match = normalizeMatch(rawData);
matches.push(match);

// ❌ AVOID: Storing raw match data without normalization
matches.push(rawData);
```

### 5.2 Match ID Format

```
[league-slug]-[YYYY]-[MM]-[DD]-[HH]-[MM]-[SS]-[home-slug]-[away-slug]
```

Example: `premier-league-2023-08-13-00-30-00-newcastle-aston-villa`

For seed/demo matches: use short descriptive slug: `man-city-arsenal`, `psg-marseille`

Rules:
- Lowercase only
- Hyphens as separators, no underscores
- No accented characters (ASCII only)
- Must be unique across the entire dataset

### 5.3 Status Values

Status values in the data layer are **always English enum strings**:

```
"Final" | "Preview" | "Analysis" | "Live brief" | "Tactical room" | "Draft"
```

For display, always use `displayStatus(match.status)` which returns the localized label via `STATUS_LABELS[currentLanguage]`.

**Never store localized strings** (e.g. `"Kết thúc"`) in the `status` field.

### 5.4 MatchEvent Format

The canonical format for match timeline events is an array of typed objects. Anonymous tuples are legacy and deprecated:

```js
// ✅ CANONICAL MatchEvent format:
events: [
  { minute: "04'", minuteVal: 4, text: "Australia đẩy hậu vệ biên lên rất cao..." },
  { minute: "66'", minuteVal: 66, text: "Substitution: Messi for Di Maria" }
]

// ❌ DEPRECATED legacy format (do not use in new data):
events: [
  ["04'", "Description text..."],
  ["66'", "Another event..."]
]
```

*Note: While `normalizeMatch()` automatically handles legacy tuple conversion on startup for backward compatibility, all editors and new match creations MUST save events using the canonical object format.*

### 5.5 Minute Parsing Utility

When resolving timeline minutes for sorting, filtering, or AI context logic, do not use manual regex or `.replace("'", "")` string manipulation. Always use the helper utility `parseMinuteVal(minuteStr)`:

```js
// ✅ CORRECT:
const minuteVal = parseMinuteVal(evt.minute); // handles "45+2'" -> 45, "04'" -> 4

// ❌ AVOID:
const minuteVal = parseInt(evt.minute.replace("'", "")); // fails on complex injury time strings like "45+2'"
```

---

## 6. i18n Conventions

### 6.1 Adding a New Translation Key

1. Add to `COPY.vi` first (Vietnamese is the base language)
2. Add matching key to `COPY.en`
3. Use `t("yourKey")` in render function
4. Never hardcode UI text directly in template literals

```js
// In COPY object
const COPY = {
  vi: {
    myNewKey: "Nội dung tiếng Việt có dấu đầy đủ"
  },
  en: {
    myNewKey: "English content here"
  }
};

// In render function
`<span>${escapeHtml(t("myNewKey"))}</span>`
```

### 6.2 Dynamic (parametrized) Strings

```js
// Convention: use {paramName} placeholders
vi: { homeMore: "Xem thêm {count} trận" }
en: { homeMore: "Load {count} more" }

// Usage
t("homeMore", { count: remaining })
```

### 6.3 Match Content i18n

Match content translation uses a **separate overlay** (`SEED_TRANSLATIONS`) or database lookup, not the `COPY` dictionary. Team name translations use `TEAM_TRANSLATIONS` map.

---

## 7. Security Conventions

| Rule | Rationale |
|---|---|
| Always use `escapeHtml()` for text content | Prevent XSS via dataset or user input |
| Always use `escapeAttr()` for attribute values | Prevent attribute injection |
| Never use `innerHTML` with uncleaned user input | XSS risk |
| Never use `eval()` | Arbitrary code execution risk |
| Admin check via `isAdmin()` before sensitive actions | Prevent unauthorized access |
| Passwords never logged to console | Never `console.log(password)` |
| Admin password hardcoded for DEMO ONLY | Replace with real auth before any public deployment |

---

## 8. Git / Commit Conventions

### Commit Message Format

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

| Type | When to use |
|---|---|
| `feat` | New feature (new render, new UI section) |
| `fix` | Bug fix |
| `refactor` | Code restructuring without behavior change |
| `style` | CSS-only changes |
| `i18n` | Translation / language additions |
| `data` | Changes to `dataset/matches.json` |
| `docs` | Documentation only |
| `chore` | Build/config changes |

**Examples:**
```
feat(admin): add collapsible group-by accordion
fix(i18n): correct missing diacritics in Vietnamese COPY dict
style(card): increase match-card border-radius to 10px
data(matches): add 2024-2025 Premier League season
docs: add coding convention and ERD documentation
```

---

## 9. Anti-Patterns to Avoid

| ❌ Anti-pattern | ✅ Correct approach |
|---|---|
| Hardcoding UI text in template literals | Use `t("key")` |
| Using `document.write()` | Use `element.innerHTML` or `replaceChildren()` |
| Storing localized status strings | Store English enum, display with `displayStatus()` |
| Skipping `normalizeMatch()` on raw data | Always normalize before pushing to `matches[]` |
| Mutating `matches[]` directly without `saveMatches()` | Call `saveMatches()` after any mutations |
| Using `==` for comparisons | Always use strict `===` |
| `var` declarations | Use `const` / `let` only |
| Unawaited promises in event handlers | Always `await` or `.catch()` async operations |
| `console.log` left in production code | Use `console.warn` for degraded states only |
