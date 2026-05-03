# Relationships & Attachment Domain — Layer 2 + 3

## Layer 2: Theories within Relationships & Attachment

| Tier | Theory | Structural Type | Status |
|---|---|---|---|
| **Cornerstone** | Adult Attachment (Brennan/Fraley dimensional) | Dimensional / continuous | Anxiety × Avoidance 2D space; strong meta-analytic support |
| **Include** | Bowlby's Attachment Theory | Foundational / developmental | The original framework; teach as background to adult model |
| **Include (with caveat)** | Four Attachment Styles | Categorical / accessibility shortcut | Pedagogically useful; psychometrically weaker than dimensions |

**Note on size:** This is the most parsimonious domain. Three theories that are all expressions of the same underlying framework — original (Bowlby) → adult adaptation (Hazan & Shaver) → modern dimensional (Brennan/Fraley). Not a sprawling field.

**Note on what's *not* here:** Communication theories, conflict resolution frameworks, relational dialectics — all have lay value but lack the empirical robustness of attachment. Resist scope creep. The domain stays tight.

---

## Layer 3: Components within each theory

### Adult Attachment — Dimensional (cornerstone)

This is the **field grammar** theory. Two continuous axes, four region labels as accessibility shortcuts.

```
Adult Attachment (Dimensional)
│
└── TWO DIMENSIONS
	│
	├── Anxiety axis (low ←→ high)
	│   ├── Low: comfortable trusting, low fear of abandonment
	│   └── High: hyperactivating strategies, fear of rejection,
	│            preoccupation with relationship security
	│
	└── Avoidance axis (low ←→ high)
		├── Low: comfortable with closeness, interdependence
		└── High: deactivating strategies, discomfort with intimacy,
				 preference for self-reliance
│
└── REGIONS (continuous, not discrete — labels for accessibility)
	├── Secure (low anxiety, low avoidance)
	│   └── Comfortable with intimacy and independence; trusts others;
	│       communicates needs directly
	├── Preoccupied / Anxious (high anxiety, low avoidance)
	│   └── Craves closeness; sensitive to rejection signals;
	│       hyperactivates the attachment system
	├── Dismissing-Avoidant (low anxiety, high avoidance)
	│   └── Self-reliant; values independence over closeness;
	│       deactivates attachment needs
	└── Fearful-Avoidant (high anxiety, high avoidance)
		└── Wants closeness but fears it; oscillates between
			seeking and withdrawing
│
└── BEHAVIORAL EXPRESSIONS (per region — what users actually recognize)
	├── In conflict (each region's typical pattern)
	├── In intimacy (each region's typical pattern)
	└── Under stress (each region's typical pattern)

CONTINUITY NOTE (always visible)
└── Most people show patterns across multiple regions.
	Regions describe tendencies on a continuous spectrum, not types.
	Movement across the field is possible with insight and context.
```

**Total nodes:** 2 axes + 4 regions × 3 behavioral contexts = 14 region-context cards + 2 axis explainers + 1 continuity note = ~17 nodes.

**Visual grammar:** The 2D field. Click anywhere in a region surfaces that region's content. Behavioral expressions are accessed within the region panel.

### Bowlby's Attachment Theory (include — background framing)

This is the *origin story*, not a parallel theory.

```
Bowlby's Attachment Theory
│
├── CORE INSIGHT
│   └── Infants form attachment bonds with caregivers;
│       quality of these bonds shapes internal working models
│
├── THE ATTACHMENT SYSTEM
│   ├── Activated under threat/separation
│   ├── Aim: proximity to caregiver = felt security
│   └── Persists into adulthood as relational template
│
├── INTERNAL WORKING MODELS
│   ├── Beliefs about self (am I worthy of care?)
│   ├── Beliefs about others (will they be available?)
│   └── These models shape adult relationship patterns
│
└── CAREGIVER RESPONSIVENESS
	├── Sensitive, consistent → secure attachment
	├── Inconsistent → anxious patterns
	├── Rejecting → avoidant patterns
	└── Frightening → disorganized patterns
```

**~10 nodes.** Functions as the "why" behind adult attachment. Probably accessible *from within* the Adult Attachment view as a "where this comes from" expansion.

### Four Attachment Styles (categorical — with caveat)

Not a separate theory. A **simplified accessibility lens** over the dimensional model.

```
Four Attachment Styles
│
└── Status: Pedagogically useful, psychometrically weaker than dimensions
	├── What it gives you: a recognizable label, easy to discuss
	├── What it loses: the continuous nature of attachment
	└── How to use it: as shorthand for regions of the dimensional space

THE FOUR STYLES (mapped to dimensional regions)
├── Secure ↔ low anxiety, low avoidance region
├── Anxious-Preoccupied ↔ high anxiety, low avoidance region
├── Dismissive-Avoidant ↔ low anxiety, high avoidance region
└── Fearful-Avoidant (Disorganized) ↔ high anxiety, high avoidance region

CAVEAT NODE (always visible)
└── Categorical labels are a simplification.
	Most people sit between regions, not in one.
	"Disorganized" in adults has thinner measurement support
	than the anxious/avoidant dimensions.
```

**Visual implication:** This is *the same content* as the dimensional regions, viewed through a categorical lens. It's not a separate node tree — it's a **toggle** on the Adult Attachment view. "Show as styles" / "Show as dimensions." The data is the same; the framing changes.

---

## Cross-cutting tags applied

### Connections out of Relationships & Attachment

| From | To | Bridge |
|---|---|---|
| Attachment anxiety | Neuroticism (Personality) | Trait-level anxiety amplifies attachment anxiety |
| Attachment security | SDT — Relatedness (Motivation) | Secure attachment satisfies the relatedness need; insecurity starves it |
| Attachment insecurity | Emotion Regulation (Emotion) | Insecure attachment → maladaptive ER (suppression, hyperactivation) |
| Insecure attachment | Self-Compassion (Self & Identity) | Strong correlation; self-compassion can buffer attachment-related distress |
| Avoidant attachment | FAE (Cognition) | Avoidant patterns amplified by dispositional attribution toward partners |
| Bowlby — Internal working models | Self-Concept (Self & Identity) | Working models = attachment-flavored self-schemas |

### Evidence-weight tags
- Cornerstone theory: one anchor (Adult Attachment dimensional), full depth
- Include theories: Bowlby background + Four Styles accessibility layer

### Structural-type tags
- Adult Attachment: field/2D continuous space with regional labels
- Bowlby: foundational/developmental background
- Four Styles: categorical accessibility toggle on the dimensional model

---

## Design Notes for Implementation

- The "two views" pattern (dimensional vs. categorical styles) is worth highlighting as a design feature. Users should see this as "two ways of looking at the same thing" rather than two competing models.
- Continuity note is critical — without it, the field grammar quietly lies. The note is part of the content architecture.
- Behavioral expressions (in conflict / in intimacy / under stress) are where attachment becomes recognizable to users. Make these prominent.
- The connection to Self-Compassion is strong — attachment insecurity and self-compassion are tightly linked. Consider integrating them.
- Bowlby background should be accessible but not mandatory. Some users will want the origin story; others will want to jump to adult attachment directly.
