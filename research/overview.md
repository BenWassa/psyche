# Psyche Content Synthesis — Research Patterns

## Overview

This document captures the key patterns and insights that emerged from mapping the six-domain psychology knowledge base. It synthesizes findings from three independent research reports and the Layer 2 + Layer 3 content decomposition.

---

## Major Findings

### 1. Domain Convergence is Strong

All three research sources independently converged on the same four cornerstone domains:
- Personality & Individual Differences
- Motivation & Behavioral Regulation
- Cognition & Decision Making / Judgment
- Attachment & Close Relationships

With two additional domains recommended for a full version:
- Emotion & Emotion Regulation
- Self & Identity

This convergence across independent sources validates the domain structure. Any future additions would likely be specialty domains (e.g., Development, Social Identity, Lifespan) rather than fundamental additions to the core.

### 2. Replication Crisis Materially Changed the Empirical Map

Theories that survived post-2015 replication scrutiny:
- **Big Five / HEXACO** — cross-cultural structural invariance in 50+ countries
- **Self-Determination Theory** — hundreds of studies, multiple meta-analyses across work, education, health
- **Dual Process Theory** — survives as a framework, though specific demos failed
- **Heuristics & Biases (core set)** — anchoring, availability, framing remain robust
- **Adult Attachment (dimensional)** — strong meta-analytic support across relationships, therapy, health
- **Emotion Regulation Process Model** — reappraisal vs suppression distinction holds across meta-analyses
- **Self-Efficacy** — massive applied evidence base
- **Self-Compassion** — r ≈ .47 with wellbeing, replicates well

Theories to exclude or caveat:
- **MBTI** — poor test-retest reliability (39–76% reclassify in 5 weeks); no scientific consensus
- **Type A→Heart Disease** — meta-analysis of 74,326 participants found near-zero effect
- **Maslow's Hierarchy (as sequential)** — Tay & Diener (2011) rejected the pyramid ordering
- **Ego Depletion** — registered replications show effect ≈ 0
- **Power Posing** — behavioral effects do not replicate
- **Social Priming** — many studies failed replication; Kahneman acknowledged this
- **Terror Management Theory (mortality-salience effects)** — z-curve analysis suggests selection-bias-driven literature; PLOS ONE failures
- **Grit (as distinct from Conscientiousness)** — Credé et al. (2017) meta-analysis shows it's psychometrically indistinguishable from conscientiousness facets

### 3. Structural Type Taxonomy is More Important Than Domain Taxonomy

The knowledge base cannot be rendered with a single visual grammar. Instead, twelve distinct structural types emerged:

| Grammar | Theories using it | Visual approach |
|---|---|---|
| Hierarchical (planet + facets) | Big Five, HEXACO, Dark Triad | Hub-and-spoke with drill-down |
| Field / 2D continuous | Adult Attachment, Self-Compassion (3-axis) | Cartesian plane or multi-axis space |
| Timeline / sequential | Emotion Regulation Process Model | Horizontal timeline with entry points |
| Branching flow | Appraisal Theory, Goal-Setting | Decision tree or process flow diagram |
| Loop / cycle | CBT Model, Cognitive Dissonance | Circular diagram with bidirectional arrows |
| Paired duality | Dual Process Theory | Two pillars with interaction arrows |
| Catalog / card deck | Heuristics & Biases, Cognitive Distortions | Card grid, each item self-contained |
| Causal network | Self-Efficacy, Attribution Theory | Network diagram with sources → outcome |
| Single dimension | Regulatory Focus | Bipolar slider or continuum |
| Formula | Expectancy Theory | Mathematical equation with components |
| Perspective card | Constructed Emotion Theory | Claim + implications card |
| Evidence card | Popular-but-revised theories (MBTI, Type A, Maslow, Grit, Self-Esteem, TMT, Broaden-and-Build) | Evidence status + what to use instead |

**Design implication:** The original PRD's two-grammar assumption (solar system vs. field) is insufficient. The app needs a flexible system that adapts visual treatment by structural type, not domain.

### 4. "Popular but Revised" is a Content Category

Theories like Maslow, MBTI, Grit, Self-Esteem, and TMT retain lay prominence. Users will search for them. Rather than ignoring them or relegating them to footnotes, the app should address them directly with evidence cards that say: "This is what people believe, this is what the evidence actually shows, here's what to use instead."

This approach:
- Earns credibility by engaging with what users know
- Teaches critical evaluation of popular psychology
- Provides clear replacement frameworks
- Prevents users from elsewhere in the internet misdirecting them

### 5. Theory Overlap is Structural, Not Redundant

Several pairs of theories are conceptually nearly identical but emerged from different traditions:
- **SDT Competence ≈ Self-Efficacy** (both describe capability beliefs; Bandura vs. Ryan & Deci)
- **Big Five Conscientiousness ≈ Grit** (Grit is a repackaging of perseverance facet)
- **Maslow Needs ≈ SDT Needs** (similar content, SDT is more parsimonious and replicated)

Rather than treating these as redundancy, the content should make the overlap *explicit*: "These are two ways of describing the same underlying construct from different theoretical traditions. Both labels are useful because they come with different supporting evidence and different research literatures."

### 6. Cross-Domain Connections Are Load-Bearing

Nine key connection bridges emerged across domains. Rather than treating domains as silos, the app should surface these explicitly:

| Connection | Why it matters for lay users |
|---|---|
| Big Five Neuroticism ↔ Emotion Regulation | A trait is a tendency, not destiny; regulation skills are the intervention lever |
| Conscientiousness ↔ Goal-Setting | Discipline is several processes, not one trait |
| Self-Efficacy ↔ Goal-Setting | Confidence affects goal choice and persistence |
| SDT Competence ↔ Self-Efficacy | Conceptual siblings — same underlying idea |
| Attachment Security ↔ SDT Relatedness | Secure bonds are motivational infrastructure |
| Attachment ↔ Emotion Regulation | Relationship style often shows up as emotional habits |
| Self-Compassion ↔ Attachment | Secure attachment correlates with self-compassion |
| Appraisal ↔ CBT Model | Both argue interpretation changes emotion |
| Dual Process ↔ Heuristics & Biases | System 1 generates the shortcuts |
| Attribution Errors ↔ Heuristics & Biases | FAE is itself a System 1 heuristic |
| Dissonance ↔ Self-Concept | Dissonance often involves self-concept threat |

These bridges are where the most pedagogical value lives — they show users how the theories fit together, not just what each one separately says.

### 7. Self & Identity is the Convergence Domain

This domain doesn't have the most theories, but it has the most outward connections (9+ bridges to other domains). It's where Personality traits, Cognitive schemas, Emotional discrepancies, Motivation beliefs, Attachment history, and Self-beliefs all intersect. Teaching it effectively requires first establishing vocabulary in other domains.

### 8. Process Theories Are the Most Actionable

Trait theories (Big Five) tell you "what you're like." Process theories (Gross, Appraisal, CBT, Goal-Setting, Attribution) tell you "what you can do." Emotion and Cognition domains are almost entirely process-based and offer direct intervention pathways. This has UX implications — process theories may warrant more prominent treatment of practical guidance.

### 9. Categorical Labels Are Pedagogically Useful But Dimensionally Weaker

Attachment styles (Secure, Anxious, Dismissing, Fearful) are more intuitive than "high on anxiety axis, low on avoidance axis," but the continuous dimensions are more accurate. The solution: treat styles as accessibility shortcuts with an explicit toggle to the underlying dimensions. "Most people sit between regions, not in one" — this continuity note becomes part of the content architecture.

### 10. Layer 2 Theory Tiers Vary by Domain

Different domains have different tier structures:
- **Personality:** 1 cornerstone, 2 include, 2 popular-but-revised (tight, anchored by Big Five)
- **Motivation:** 2 cornerstones, 2 include, 2 popular-but-revised (co-anchored by SDT and Goal-Setting)
- **Cognition:** 3 cornerstones, 2 include (dense, interconnected)
- **Relationships:** 1 cornerstone, 2 include (parsimonious, single framework family)
- **Emotion:** 2 cornerstones, 1 debate-flagged, 1 popular-but-revised (all process-based)
- **Self & Identity:** 2 cornerstones, 1 include, 2 popular-but-revised (heterogeneous, bridging role)

No two domains have identical tier distributions. This heterogeneity is real and worth preserving rather than forcing uniformity.

---

## Content Footprint Summary

| Metric | Count |
|---|---|
| Total theories (all tiers) | ~28 theories |
| Cornerstone theories | 12 theories |
| Include theories (with full depth) | 11 theories |
| Popular-but-revised (evidence cards) | 6 theories |
| Total navigable nodes (Layer 3) | ~150–180 nodes |
| Cross-domain connection bridges | ~50 bridges |
| Distinct visual grammars needed | 12 different types |

---

## Architecture Implications

### For Product Development

1. **Visual grammar flexibility is non-negotiable.** Don't try to force all theories into a solar-system or field model. Each structural type gets its own rendering.

2. **Connections are first-class content.** Don't relegate bridge theories to footnotes. Surface them as navigable relationships.

3. **"Popular but revised" is a pedagogical feature, not a liability.** Engage with what users know, then redirect to what the evidence shows.

4. **Self & Identity should be taught later in a learning sequence.** It integrates concepts from other domains. Start with Personality, then Cognition (universally engaging entry point), then Motivation, then Relationships, then Emotion, then Self.

5. **Dimension toggles (e.g., "show as styles / show as dimensions")** are worth implementing early. They let users understand both intuitive shortcuts and rigorous foundations in the same view.

### For Content Implementation

1. **Layer 2 (theories) should be explicit about tier and structure type** so users know what to expect when entering. A theory card preview: "This is a needs framework (dimensional) with 3 components" or "This is a process flow."

2. **Each domain needs an intro card** that explains its scope, how it connects to others, and recommended entry point.

3. **Continuity notes are content, not UX copy.** Whenever a categorical or simplified model is presented, the note explaining the underlying dimension is part of the architecture.

4. **Evidence status should be visible everywhere** — cornerstone / strong / moderate / contested / refuted — so users learn the difference between settled science and live debate.

5. **Layer 3 depth varies widely.** Big Five has 15 navigable nodes; Regulatory Focus has 8; popular-but-revised theories have 1 (the evidence card). Depth should match empirical complexity, not be forced to uniformity.

---

## Research Sources

Three independent research briefs were synthesized:
1. **Comprehensive Academic Literature Review** — 8 theory scorecards, domain map, cross-domain connections
2. **Psychology Theory Landscape Research Brief** — parallel domain assessment with emphasis on empirical triage post-replication crisis
3. **Deep Research Report** — structural taxonomy, theory-to-UI mapping implications, recommended domain set

All three sources converged on core domain structure and cornerstone theories, with differences only in emphasis and framing.

---

## Next Steps

1. **Domain introduction cards** — write the 2–3 sentence frame for each domain explaining its role and entry point
2. **Visual grammar prototypes** — build representative examples of each of the 12 structural types to verify feasibility
3. **Connection bridge prototyping** — design how users navigate from one theory to a related theory in another domain
4. **Learning sequence validation** — test whether the recommended order (Personality → Cognition → Motivation → Relationships → Emotion → Self) works pedagogically
