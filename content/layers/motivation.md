# Motivation Domain — Layer 2 + 3

## Layer 2: Theories within Motivation

| Tier | Theory | Structural Type | Status |
|---|---|---|---|
| **Cornerstone** | Self-Determination Theory (Ryan & Deci) | Needs / motivational | Strongest applied evidence base; cross-cultural support |
| **Cornerstone** | Goal-Setting Theory (Locke & Latham) | Process / applied | Effect sizes 0.4–0.8; specific challenging goals reliably outperform "do your best" |
| **Include** | Regulatory Focus Theory (Higgins) | Dimensional (promotion ↔ prevention) | Meta-analytically supported; useful for cognitive reframing |
| **Include** | Expectancy Theory (Vroom) | Process / cognitive equation | Pragmatic diagnostic tool — pinpoints *where* motivation fails |
| **Popular but revised** | Maslow's Hierarchy | Needs taxonomy (not hierarchy) | Pyramid ordering empirically rejected; need *content* still useful |
| **Popular but revised** | Grit (Duckworth) | Redundant construct | Statistically indistinguishable from Conscientiousness |

**Note on Self-Efficacy:** Often grouped with Motivation in the literature, but it's fundamentally a *belief about the self* — sits more naturally in Self & Identity. Connection bridge keeps it accessible from Motivation.

---

## Layer 3: Components within each theory

### Self-Determination Theory (cornerstone — full depth)

SDT has a richer structure than Big Five. It has **three needs** + a **continuum of motivation quality** + **mini-theories** that elaborate specific aspects.

```
Self-Determination Theory
│
├── THREE BASIC PSYCHOLOGICAL NEEDS
│   ├── Autonomy (acting in alignment with one's values)
│   ├── Competence (effectance, mastery, capability)
│   └── Relatedness (caring for and being cared for by others)
│
├── MOTIVATION CONTINUUM (autonomous ↔ controlled)
│   ├── Intrinsic motivation (doing for its own sake)
│   ├── Identified regulation (acting from values)
│   ├── Introjected regulation (acting from internalized pressure)
│   ├── External regulation (acting for rewards/punishments)
│   └── Amotivation (not acting)
│
└── MINI-THEORIES (sub-frameworks)
	├── Cognitive Evaluation Theory (how rewards affect intrinsic motivation)
	├── Organismic Integration Theory (how external goals get internalized)
	├── Causality Orientations Theory (individual differences in motivation orientation)
	└── Basic Psychological Needs Theory (need satisfaction → wellbeing)
```

**Total node count:** 3 needs + 5 continuum points + 4 mini-theories = 12 nodes. Plus the SDT root.

**Important structural insight:** SDT can't be rendered as a simple hub-and-moons. It has three structurally different sub-elements (needs, continuum, mini-theories). This means SDT itself probably needs a **tabbed or layered view** within its node — a complication the original PRD didn't anticipate.

### Goal-Setting Theory (cornerstone — full depth)

This is a *process* theory, not a structural one. Different visual grammar.

```
Goal-Setting Theory
│
└── THE GOAL → PERFORMANCE LOOP
	├── 1. Goal characteristics
	│   ├── Specificity (vs vague "do your best")
	│   ├── Difficulty (challenging but attainable)
	│   ├── Commitment (acceptance of the goal)
	│   └── Importance (alignment with values)
	│
	├── 2. Mediators (how goals influence performance)
	│   ├── Direction (focus of attention)
	│   ├── Effort (intensity of action)
	│   ├── Persistence (duration of effort)
	│   └── Strategy use (task-relevant approaches)
	│
	└── 3. Moderators (when goals work best)
		├── Self-efficacy (belief in capability)
		├── Feedback (knowledge of progress)
		└── Task complexity (simple vs complex tasks)
```

**Visual implication:** This is a *flow*, not a hierarchy. UI should render it as a process diagram — characteristics flow into mediators flow into moderated outcomes.

### Regulatory Focus Theory (include)

Cleanest dimensional structure in the domain.

```
Regulatory Focus
└── Single dimension: Promotion ←————————→ Prevention
	│
	├── Promotion focus
	│   ├── Drives toward: growth, advancement, gains
	│   ├── Strategy: eagerness, exploration
	│   └── Emotion when failing: dejection
	│
	└── Prevention focus
		├── Drives toward: security, obligation, loss-avoidance
		├── Strategy: vigilance, caution
		└── Emotion when failing: agitation
```

**4–8 nodes, plus the dimension itself.** Maps cleanly to a single bipolar slider visualization.

### Expectancy Theory (include)

A formula-based theory. Three multiplicative components.

```
Expectancy Theory
└── Motivation = Expectancy × Instrumentality × Valence
	├── Expectancy: "Can my effort produce good performance?"
	├── Instrumentality: "Will good performance lead to outcomes?"
	└── Valence: "Do I value those outcomes?"
```

**3 nodes plus the formula.** Pedagogically useful as a *diagnostic tool* — when motivation breaks down, which factor failed?

### Maslow and Grit — Popular but Revised

```
Maslow's Hierarchy
└── Status: Hierarchy refuted, taxonomy useful
	├── What people know: pyramid (physiological → safety → love → esteem → self-actualization)
	├── What's wrong: Tay & Diener (2011) Gallup data shows needs operate in parallel, not sequentially; cross-cultural tests reject ordering
	├── What survives: the *content* of needs as a useful list
	└── What to use instead: SDT (autonomy/competence/relatedness) — more parsimonious, replicated cross-culturally

Grit
└── Status: Redundant construct
	├── What people know: Duckworth's "passion + perseverance" predicts success
	├── What's wrong: Credé et al. (2017) meta-analysis of 88 studies — grit ≈ Conscientiousness (perseverance facet); incremental validity is small
	└── What to use instead: Conscientiousness in Big Five (a known, replicated trait)
```

---

## Cross-cutting tags applied

### Connections out of Motivation

| From | To | Bridge |
|---|---|---|
| SDT — Competence | Self-Efficacy (Self & Identity) | Conceptual siblings — the same idea expressed two ways |
| SDT — Relatedness | Adult Attachment (Relationships) | Insecure attachment starves the relatedness need |
| Goal-Setting | Self-Efficacy (Self & Identity) | Self-efficacy is a primary mediator of goal pursuit |
| Goal-Setting — Persistence | Conscientiousness (Personality) | The trait basis of sustained effort |
| Regulatory Focus | Appraisal Theory (Emotion) | Promotion vs prevention shape threat/challenge appraisals |
| Maslow critique | SDT | The replacement framework |
| Grit critique | Conscientiousness | The construct it actually maps to |

### Evidence-weight tags
- Cornerstone theories: two equal anchors (SDT and Goal-Setting), both with full depth
- Include theories: full depth
- Popular-but-revised: evidence cards only

### Structural-type tags
- SDT: needs framework with continuum and mini-theories (requires tabbed/layered view)
- Goal-Setting: process flow diagram
- Regulatory Focus: bipolar dimensional slider
- Expectancy Theory: diagnostic formula
- Maslow/Grit: evidence cards

---

## Design Notes for Implementation

- SDT and Goal-Setting are co-cornerstones, not competing. Both needed for full motivation literacy.
- The connection between SDT (autonomy/competence/relatedness) and Self-Efficacy (Self & Identity) is critical — these are nearly identical constructs from different traditions. Users benefit from seeing both labels.
- Regulatory Focus is the best entry for "how do I reframe my goals" — make this accessible from Goal-Setting module.
- Maslow and Grit should be findable via search but explicitly labeled as "popular but replaced by" SDT and Conscientiousness respectively.
- Goal-Setting's real-world utility is high — consider case examples (fitness, work, learning) in the goal-setting module.
