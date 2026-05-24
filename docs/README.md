# MatchPulse — Technical Documentation

> Tài liệu kỹ thuật chính thức cho dự án MatchPulse Football SPA.  
> Official technical documentation for the MatchPulse Football SPA project.

---

## Document Index

| # | Document | Mô tả | Description |
|---|---|---|---|
| 01 | [Use Case Diagram](./01_use_case_diagram.md) | Biểu đồ use case (Actors & Use Cases) | Visual actor/use-case map |
| 02 | [Use Case Specification](./02_use_case_specification.md) | Đặc tả chi tiết từng use case | Detailed flow for each UC |
| 03 | [Class Diagram](./03_class_diagram.md) | Biểu đồ lớp / kiểu dữ liệu | Logical data types & relationships |
| 04 | [Sequence Diagram](./04_sequence_diagram.md) | Biểu đồ tuần tự cho 4 luồng chính | 4 key interaction flows |
| 05 | [Activity Diagram](./05_activity_diagram.md) | Biểu đồ hoạt động (Flowchart) | 3 main process flowcharts |
| 06 | [ERD](./06_erd.md) | Entity-Relationship Diagram | Logical schema & migration plan |
| 07 | [Architecture Diagram](./07_architecture_diagram.md) | Kiến trúc tổng thể | Layer, data-flow & component map |
| 08 | [Coding Convention](./08_coding_convention.md) | Quy ước lập trình | Naming, style & safety rules |

---

## Quick Architecture Summary

```
index.html          ← SPA shell with <template> tags
app.js              ← All logic: router, render, state, i18n, agent (~2600 lines)
styles.css          ← All styles: design tokens + components (~1950 lines)
dataset/matches.json← Static data source (~250+ match records)
docs/               ← This documentation
```

**Hash-based routing:**
```
#/              → Home (hero + grid + rails)
#/league        → League cards + standings
#/match/:id     → Full article + video + AI chat
#/admin         → Admin dashboard (password protected)
#/admin/edit/:id→ Inline content editor
```

**Storage:**
- `localStorage['matchpulse.matches']` — cached match data
- `localStorage['matchpulse.lang']` — selected language (vi/en)
- `sessionStorage['matchpulse.role']` — admin session token

---

## Key Conventions at a Glance

| Rule | Convention |
|---|---|
| Constants | `UPPER_SNAKE_CASE` |
| Functions | `camelCase`, verb-first |
| Render functions | `render[ViewName]()` |
| Wire functions | `wire[ViewName]()` |
| CSS classes | `kebab-case` |
| State modifiers | `.is-[state]` |
| i18n keys | `camelCase`, page-namespaced |
| Match IDs | `[league]-[YYYY-MM-DD-HH-MM-SS]-[home]-[away]` |
| HTML escaping | Always `escapeHtml()` / `escapeAttr()` |
| UI text | Always `t("key")`, never hardcode |
| Match data | Always `normalizeMatch()` before use |

---

*Generated: 2026-05-24*
