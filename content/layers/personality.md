# Personality Domain — Layer 2 + 3

## Layer 2: Theories within Personality

| Tier | Theory | Structural Type | Status |
|---|---|---|---|
| **Cornerstone** | Big Five (DeYoung facet model) | Trait / dimensional | The anchor. Most replicated structure in psychology. |
| **Include** | HEXACO | Trait / dimensional | Adds Honesty-Humility — empirically vital for ethical/exploitative behavior |
| **Include (with caveat)** | Dark Triad | Trait (overlapping) | Useful frame for "difficult people"; teach as low ends of normal traits, not separate species |
| **Popular but revised** | MBTI | Discredited typology | Address explicitly: poor reliability, no scientific consensus |
| **Popular but revised** | Type A/B | Refuted | The Type A→heart disease link was largely refuted; Big-Tobacco-funded origins compromise integrity |

**Note on Grit:** appears in literature reviews under Motivation, but evidence shows it's psychometrically indistinguishable from Conscientiousness. It belongs in Personality as a *footnote on Conscientiousness*, not as its own theory in either domain.

---

## Layer 3: Components within each theory

### Big Five (the cornerstone — full depth)

```
Personality
└── Big Five
	├── Openness
	│   ├── Intellect (engagement with abstract ideas)
	│   └── Aesthetic Openness (sensitivity to beauty, art, experience)
	├── Conscientiousness
	│   ├── Industriousness (persistent effort, follow-through)
	│   └── Orderliness (preference for structure, routine)
	├── Extraversion
	│   ├── Enthusiasm (warmth, positive affect, sociability)
	│   └── Assertiveness (dominance, drive, leadership)
	├── Agreeableness
	│   ├── Compassion (concern for others' wellbeing)
	│   └── Politeness (respect for norms, conflict avoidance)
	└── Neuroticism
		├── Withdrawal (anxiety, risk-aversion, disengagement)
		└── Volatility (moodiness, emotional reactivity)
```

5 traits × 2 facets = 10 nodes. Plus the trait-level itself = 15 nodes total. Clean hierarchy.

### HEXACO (extension — add when user is ready)

```
HEXACO
├── Honesty-Humility   ← the new sixth dimension
│   ├── Sincerity / Fairness
│   └── Greed-Avoidance / Modesty
├── Emotionality (≈ Neuroticism, slightly redefined)
├── eXtraversion
├── Agreeableness (vs anger)
├── Conscientiousness
└── Openness
```

Treated as an *extension* of Big Five, not a competitor. UI implication: HEXACO accessible from within the Big Five view as a "and what about Honesty-Humility?" expansion.

### Dark Triad (with caveat layer)

```
Dark Triad
├── Machiavellianism (strategic manipulation)
├── Narcissism (grandiosity, entitlement)
└── Psychopathy (callousness, impulsivity)

Caveat node: "These traits overlap heavily with each other and with low Honesty-Humility + low Agreeableness in Big Five/HEXACO. Most of the variance is captured by those broader frameworks."
```

3 nodes + caveat. Connects laterally to HEXACO Honesty-Humility.

### MBTI and Type A — Popular but Revised

These don't get a tree structure. They get a single "evidence card" each:

```
MBTI
└── Status: Discredited as a scientific instrument
	├── Why people know it: corporate use, decades of marketing
	├── What's wrong: 39–76% reclassify in 5 weeks, dichotomous scoring has no empirical basis
	└── What to use instead: Big Five (continuous, replicated, predictive)

Type A/B
└── Status: Refuted
	├── Original claim: Type A behavior → heart disease
	├── What's wrong: meta-analysis of 74,326 participants found near-zero effect; Big Tobacco funded original research
	└── What survives: hostility component, better captured by Big Five (low Agreeableness + high Neuroticism)
```

These exist in the knowledge base specifically *to be searched and corrected*, not to be browsed.

---

## Cross-cutting tags applied

### Connections out of Personality

| From | To | Bridge |
|---|---|---|
| Conscientiousness | Goal-Setting (Motivation) | "Discipline is several interacting processes, not one trait" |
| Conscientiousness | Self-Efficacy (Self & Identity) | Trait basis of agentic action |
| Neuroticism | Emotion Regulation (Emotion) | High-N predicts maladaptive regulation; ER skills can buffer trait effects |
| Neuroticism | Appraisal Theory (Emotion) | High-N → more frequent threat appraisals |
| Agreeableness / HEXACO H-H | Dark Triad | Dark traits = low ends of these dimensions |
| Big Five generally | Adult Attachment | Trait anxiety relates to attachment anxiety |

### Evidence-weight tags
- Cornerstone theories: full navigable depth
- Include theories: full navigable depth
- Popular-but-revised: evidence cards only (not graph nodes)

### Structural-type tags
- Big Five and HEXACO: hierarchical solar-system grammar (5–6 trait planets + facet moons)
- Dark Triad: flatter representation (3 overlapping nodes, no facet structure)
- MBTI/Type A: evidence cards, not graph nodes

---

## Design Notes for Implementation

- Big Five is the entry point; HEXACO and Dark Triad are expansions, not alternatives
- MBTI and Type A should be findable via search but explicitly labeled as "not recommended" with evidence-based alternatives
- The connection to Goal-Setting (Motivation) and Self-Efficacy (Self & Identity) should be prominent for users interested in behavior change
- Consider a "trait vocabulary" anchor in Personality that persists across the app — users learn "Neuroticism," "Conscientiousness," etc. once and reuse the language elsewhere
