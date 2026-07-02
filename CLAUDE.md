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

Psyche Map — a psychology literacy app (not therapy, not self-help). Six domains, ~28 theories, ~85 navigable content nodes (target ~150–180). Designed for the analytically-minded lay reader. **Parsimony as restraint** — deliberately thin so users don't sink time into the app instead of human contact.

---

## Commands

```bash
npm run dev        # dev server at localhost:3000 (runs content compile first)
npm run build      # production build (runs content compile first)
npm run lint       # TypeScript type-check only (tsc --noEmit) — no ESLint configured
npm run preview    # preview production build
npm run content    # compile content/nodes/**/*.md → src/data/content.generated.ts
```

No test suite exists. Type checking + the content compiler's validations are the automated quality gates.

---

## Architecture

**Modular React app** — shell and view state in [src/App.tsx](src/App.tsx); views in `src/views/`, per-domain grammar screens in `src/domains/`, shared atoms in `src/components/` and `src/components/ui/`.

**Content pipeline (source of truth = markdown):**
- `content/nodes/<domain>/*.md` — structured markdown, one file per theory, multiple `## node: <id>` blocks per file. Each node carries `title`, `tier` (cornerstone|include|revised), `grammar`, plus sections `### Structure`, `### Note`, `### Bridges` (`- [target-id] description`), `### Sources`, and (for revised-tier) `### Known for / Survives / Evidence shows / Instead` with `status:` and optional `year:`.
- `scripts/build-content.mjs` — zero-dependency compiler. Validates domains, tiers, duplicate ids, bridge targets, evidence completeness. Fails the build on error.
- `src/data/content.generated.ts` — generated output, committed. **Never edit by hand**; edit the markdown and run `npm run content`.
- `src/data/content.ts` — typed accessors (`getNode`, `nodesForDomain`, `evidenceNodesForDomain`).
- `content/layers/*.md` — upstream reference material (Layer 2+3 decompositions). Authoring source, not compiled.

**Routing** is a `useState<ViewMode>` — no router library. Four views: `encyclopedia` → `domains` → `theory` → `settings`.

**State:** `currentView`, `selectedDomain`, and `inspectorKey` all live in App (inspector state is lifted so bridge chips can jump across domains via `navigateToNode`).

**Data model:** `ContentNode` in [src/types.ts](src/types.ts) — id, domain, theory, title, tier, grammar, summary, bullets, note?, bridges[], sources[], evidence?. `DOMAIN_SEQUENCE` and `TRAIT_FACETS` (facet ids + labels) in `src/data/domains.ts`.

**Component tree:**
```
App                          — view/domain/inspector state, navigateToNode
├── EncyclopediaView         — landing/splash screen
├── SettingsView (in App)    — local-data clear + about (no fake rows)
└── shell (sidebar + header)
    ├── SidebarItem / BottomNavItem
    ├── DomainIndexView      → DomainCard (×6)
    └── TheoryView           — header, domain screen, next-in-sequence footer
        ├── InspectorPanel   — grammar eyebrow, tier badge, summary, Key structure,
        │                      "Worth knowing" note, Connects-to bridge chips (navigate),
        │                      collapsible Sources, evidence block for revised nodes
        └── per-domain screens (src/domains/)
            ├── PersonalityTheory  — hierarchy (traits + clickable facet pills),
            │                        HEXACO/Dark Triad, SelfLocation, EvidenceStrip
            ├── CognitionTheory    — paired duality, bias card deck, CBT loop
            ├── MotivationTheory   — SDT bento + continuum, goal-setting flow,
            │                        dimension (Reg Focus), formula (Expectancy)
            ├── RelationshipsTheory— 2D Cartesian field with clickable axes/regions
            ├── EmotionTheory      — ER timeline, appraisal branching, perspective card
            └── SelfTheory         — causal network, three-axis field, self-concept
```

Shared grammar atoms: `TheorySection` (header = theory-root click target), `NodeChip`, `FlowArrow` in `src/components/ui/TheorySection.tsx`. `EvidenceStrip` renders all revised-tier nodes of a domain as `EvidenceCard`s. `SelfLocation` = bring-your-own Big Five scores (0–120 per trait, localStorage key `psyche.bigfive.v1`, local-only, pointers to bridges at high/low bands).

**Styling:** Tailwind CSS v4 with `@theme` block in [src/index.css](src/index.css). Custom utility classes: `.interactive-node`, `.domain-hero-title`, `.node-title`, `.panel-tag`, `.body-text`, `.mono-label`, `.elevation-soft`, `.trait-slider`.

**Icons:** Material Symbols Outlined loaded via Google Fonts CDN. Used as `<span className="material-symbols-outlined">{icon_name}</span>`.

---

## Design System — Critical Tokens

**Do not deviate without explicit instruction.**

The palette is **Empathetic Editorial v4.0** (warm paper, terracotta accent):

| Token | Value | Use |
|---|---|---|
| `--color-surface` | `#f9f8f6` | Body background (warm off-white) |
| `--color-surface-dim` | `#f0efe9` | Recessed / inset backgrounds |
| `--color-surface-bright` | `#ffffff` | Cards, panels (highest elevation) |
| `--color-primary` | `#a65d57` | Terracotta — active states only |
| `--color-primary-container` | `#ecd9d7` | Soft highlight backgrounds |
| `--color-on-surface` | `#2c2c2a` | Primary text (warm charcoal) |
| `--color-on-surface-variant` | `#5c5c5a` | Secondary text, metadata |
| `--color-outline` | `#8c8c8a` | Strong borders/dividers |
| `--color-outline-variant` | `#d6d5cf` | Faint structural lines |

**Domain accent washes (5–10% opacity backgrounds or tags only — never loud fills):**
- `--color-domain-cognition: #6b7f8c` (slate blue)
- `--color-domain-self: #7a8b79` (deep sage)
- `--color-domain-motivation: #cba36b` (burnished ochre)
- `--color-domain-relationships: #c28f8f` (dusty rose)

**Typography:**
- Display/headings: `Fraunces` (variable weight, class `font-display`)
- Body copy: `Inter` (class `font-body`)
- Labels/tags/mono: `DM Mono` (class `font-mono`)

**Terracotta (`--color-primary`) is an active-state accent only** — active borders, hover states, selected indicators. Not for decorative fills.

**Light surfaces only.** No dark panels, no dark theme (the former `[data-theme="dark"]` block was removed deliberately). Inspector drawer uses `bg-surface-bright` (white) with terracotta border.

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

Full Layer 2 + Layer 3 content in `/content/layers/`. Full domain architecture in `/content/domains.md`. Compiled app content in `/content/nodes/`.

---

## 12 Visual Grammar Types

Each theory renders in its structurally honest grammar.

| # | Type | Example | Status |
|---|---|---|---|
| 1 | Hierarchical card | Big Five | ✅ built |
| 2 | 2D field | Adult Attachment | ✅ built |
| 3 | Timeline | Emotion Regulation | ✅ built |
| 4 | Branching flow | Appraisal Theory | ✅ built |
| 5 | Loop / cycle | CBT Triangle | ✅ built |
| 6 | Paired duality | Dual Process | ✅ built |
| 7 | Catalog/card deck | Heuristics & Biases | ✅ built |
| 8 | Causal network | Self-Efficacy | ✅ built |
| 9 | Single dimension | Regulatory Focus | ✅ built |
| 10 | Formula | Expectancy Theory | ✅ built |
| 11 | Perspective card | Constructed Emotion | ✅ built |
| 12 | Evidence card | MBTI, Maslow, Grit | ✅ built |

All grammars are first-pass DOM-native layouts — refinement welcome, replacement with canvas/graph libs is not.

---

## Theory Tier System

1. **Cornerstone** — full depth, primary entry point
2. **Include** — full depth, secondary
3. **Popular but revised** (`tier: revised` in content) — evidence card + inspector evidence block (MBTI, Type A/B, Maslow, Grit, Self-Esteem, TMT, Broaden-and-Build) — status / what's wrong / what to use instead

---

## DO NOTs

These are closed decisions.

- **DO NOT use dark palette** — no midnight canvas, no `#0a0f1e`, no Star Atlas v2. Paper/light theme only.
- **DO NOT use Newsreader** — body font is Inter, display is Fraunces.
- **DO NOT build galaxy/spatial navigation** — AI tooling cannot execute it at sufficient quality. Component-based layouts only.
- **DO NOT use top nav tabs** — wrong hierarchy for this app.
- **DO NOT put dark surfaces on panels/inspector drawers** — light `surface-bright` (white) with terracotta border only.
- **DO NOT force all theories into the same card component** — theories have different structural types, different visual grammars.
- **DO NOT use Material Symbols icons in inspector body content** — icons only at navigation/action points.
- **DO NOT add sidebar domains other than the real six** — Personality, Cognition, Motivation, Relationships, Emotion, Self & Identity.
- **DO NOT use loud domain color fills** — domain accent colors at 5–10% opacity only (background washes or tags).
- **DO NOT edit `src/data/content.generated.ts` by hand** — edit `content/nodes/**/*.md` and run `npm run content`.
- **DO NOT send user trait scores anywhere** — self-location data is localStorage-only by design.

---

## Key Cross-Domain Bridges

Bridges are first-class content: every node's `### Bridges` section compiles into clickable "Connects to" chips in the inspector that navigate across domains. Load-bearing examples (full list in `/content/domains.md`):

- Neuroticism → Emotion Regulation (high-N → maladaptive ER; skills can buffer)
- Conscientiousness → Goal-Setting (trait basis of persistent effort)
- SDT Competence ↔ Self-Efficacy (conceptually identical constructs)
- Attachment → Emotion Regulation (attachment style predicts ER strategy)
- Appraisal Theory ↔ CBT (appraisal = what reappraisal changes)
- Self-Compassion ↔ Attachment (secure attachment correlates with self-compassion)

---

## Immediate Priorities (as of July 2026)

1. ~~Retheme~~ **Done** — Paper v4.0 tokens live in `index.css`
2. ~~Content engine~~ **Done** — markdown-compiled node graph (85 nodes), bridges, sources, tiers
3. ~~Visual grammars 2–12~~ **Done** (first pass) — refine spacing/responsiveness as content grows
4. Deepen content toward the ~150–180 node target (behavioral-expression cards for attachment regions, SDT mini-theories, more debiasing tactics)
5. Deep-linkable routes + prerendering — deferred until content is done (owner decision, July 2026)
6. Search across nodes (evidence cards "findable and corrected" requires search eventually)
