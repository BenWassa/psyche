# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)

---

## What This Is

Psyche Map — a psychology literacy app (not therapy, not self-help). Six domains, ~28 theories, ~150–180 navigable content nodes. Designed for the analytically-minded lay reader. **Parsimony as restraint** — deliberately thin so users don't sink time into the app instead of human contact.

---

## Commands

```bash
npm run dev        # dev server at localhost:3000
npm run build      # production build
npm run lint       # TypeScript type-check only (tsc --noEmit) — no ESLint configured
npm run preview    # preview production build
```

No test suite exists. Type checking is the only automated quality gate.

---

## Architecture

**Single-file app** — all UI logic lives in [src/App.tsx](src/App.tsx). No `components/` directory yet. All content/copy is hardcoded inline.

**Routing** is a `useState<ViewMode>` — no router library. Four views: `encyclopedia` → `domains` → `theory` → `settings`.

**State:** Two pieces of top-level state: `currentView` and `selectedDomain`. Inspector state (`inspectorKey`) lives inside `TheoryView`.

**Data model:**
- `DOMAIN_SEQUENCE` — ordered array of the 6 domain objects (id, name, accent class, structure description)
- `TRAIT_FACETS` — hardcoded Big Five facet pairs for Personality domain
- `INSPECTOR_COPY` — keyed record of all inspector panel content (eyebrow, title, summary, bullets, optional note)

**Component tree (all in App.tsx):**
```
App
├── EncyclopediaView          — landing/splash screen
└── shell (sidebar + header)
    ├── SidebarItem           — nav item (desktop)
    ├── BottomNavItem         — nav item (mobile)
    ├── DomainIndexView       → DomainCard (×6)
    ├── TheoryView            → InspectorPanel (slide-over)
    │   ├── PersonalityTheory → TheoryTileHeader, FacetPills, FacetPill
    │   ├── CognitionTheory
    │   ├── MotivationTheory
    │   ├── RelationshipsTheory
    │   ├── EmotionTheory
    │   └── SelfTheory
    └── SettingsView          → ToggleRow, SwitchRow, ActionRow
```

**Styling:** Tailwind CSS v4 with `@theme` block in [src/index.css](src/index.css). Custom utility classes defined in CSS (not Tailwind plugins): `.interactive-node`, `.domain-hero-title`, `.node-title`, `.panel-tag`, `.body-text`, `.mono-label`, `.elevation-soft`, `.star-surface`.

**Icons:** Material Symbols Outlined loaded via Google Fonts CDN. Used as `<span className="material-symbols-outlined">{icon_name}</span>`.

---

## Design System — Critical Tokens

**Do not deviate without explicit instruction.**

The palette is **Star Atlas v2** (midnight canvas, gold accent):

| Token | Value | Use |
|---|---|---|
| `--color-surface` | `#0a0f1e` | Body background |
| `--color-surface-dim` | `#111a31` | Recessed surface |
| `--color-surface-bright` | `#15213a` | Panel/card background |
| `--color-primary` | `#c49a3c` | Gold — active states only |
| `--color-on-surface` | `#f2eadb` | Primary text |
| `--color-on-surface-variant` | `#b7b0a1` | Secondary text |
| `--color-outline-variant` | `#22304f` | Borders |

**Typography:**
- Display/headings: `Fraunces` (variable weight, class `font-display`)
- Body copy: `Newsreader` (class `font-body`)
- Labels/tags/mono: `DM Mono` (class `font-mono`)

**Gold (`--color-primary`) is an active-state accent only** — active borders, hover states, selected indicators. Not for decorative fills.

**Dark surfaces only.** No light panels. Inspector drawer uses `bg-surface-bright`, not white/cream.

---

## The Six Domains (in sequence)

| # | Domain | Cornerstone theory | Visual grammar |
|---|---|---|---|
| 1 | Personality | Big Five (DeYoung facets) | Hierarchical: trait → facets |
| 2 | Cognition | Dual Process + Heuristics + CBT | Paired duality + catalog + loop |
| 3 | Motivation | SDT + Goal-Setting | Needs bento + process flow |
| 4 | Relationships | Adult Attachment (dimensional) | 2D field (anxiety × avoidance) |
| 5 | Emotion | Gross Process Model + Appraisal | Timeline + branching flow |
| 6 | Self & Identity | Self-Efficacy + Self-Compassion | Network + three-axis field |

Full Layer 2 + Layer 3 content in `/content/layers/`. Full domain architecture in `/content/domains.md`.

---

## 12 Visual Grammar Types

Each theory should render in its structurally honest grammar. Only type 1 is fully built.

| # | Type | Example | Status |
|---|---|---|---|
| 1 | Hierarchical card | Big Five | ✅ built |
| 2 | 2D field | Adult Attachment | not built |
| 3 | Timeline | Emotion Regulation | not built |
| 4 | Branching flow | Appraisal Theory | not built |
| 5 | Loop / cycle | CBT Triangle | not built |
| 6 | Paired duality | Dual Process | not built |
| 7 | Catalog/card deck | Heuristics & Biases | not built |
| 8 | Causal network | Self-Efficacy | not built |
| 9 | Single dimension | Regulatory Focus | not built |
| 10 | Formula | Expectancy Theory | not built |
| 11 | Perspective card | Constructed Emotion | not built |
| 12 | Evidence card | MBTI, Maslow, Grit | not built |

---

## Theory Tier System

1. **Cornerstone** — full depth, primary entry point
2. **Include** — full depth, secondary
3. **Popular but revised** — evidence card only (MBTI, Maslow, Grit, Self-Esteem etc.) — no graph nodes, just status / what's wrong / what to use instead

---

## DO NOTs

These are closed decisions.

- **DO NOT use light/warm palette** — no `#f9f8f6` surfaces, no terracotta primary. Star Atlas v2 only.
- **DO NOT use Inter** — body font is Newsreader, display is Fraunces.
- **DO NOT build galaxy/spatial navigation** — AI tooling cannot execute it at sufficient quality. Component-based layouts only.
- **DO NOT use top nav tabs** — wrong hierarchy for this app.
- **DO NOT put light surfaces on panels/inspector drawers** — dark `surface-bright` with gold border only.
- **DO NOT force all theories into the same card component** — theories have different structural types, different visual grammars.
- **DO NOT use Material Symbols icons in inspector body content** — icons only at navigation/action points.
- **DO NOT add sidebar domains other than the real six** — Personality, Cognition, Motivation, Relationships, Emotion, Self & Identity.

---

## Key Cross-Domain Bridges

Load-bearing connections users should be able to follow (full list in `/content/domains.md`):

- Neuroticism → Emotion Regulation (high-N → maladaptive ER; skills can buffer)
- Conscientiousness → Goal-Setting (trait basis of persistent effort)
- SDT Competence ↔ Self-Efficacy (conceptually identical constructs)
- Attachment → Emotion Regulation (attachment style predicts ER strategy)
- Appraisal Theory ↔ CBT (appraisal = what reappraisal changes)
- Self-Compassion ↔ Attachment (secure attachment correlates with self-compassion)

---

## Immediate Priorities (as of May 2026)

1. Retheme to Star Atlas v2 — tokens already correct in `index.css`, check all component classes
2. Fix sidebar domains — already correct in `DOMAIN_SEQUENCE`
3. Populate domain content stubs for all six domains
4. Evidence card component (type 12) for popular-but-revised theories
5. Tier visual treatment — cornerstone / include / popular-but-revised need distinct visual weight

Do not work on visual grammar types 2–12 until palette and content stubs are correct.
