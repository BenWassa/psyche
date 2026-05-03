# Psyche Knowledge Base — Six-Domain Architecture

## Overview

The Psyche psychology literacy app is built on six content domains, each anchored by cornerstone theories and connected through cross-domain bridges. This document provides the master architecture and rationale.

---

## Six Domains

### 1. Personality & Individual Differences

**What it covers:** Who people are — stable traits, character structure, individual differences  
**Cornerstone theory:** Big Five (OCEAN) with facet model (DeYoung)  
**Why this domain:** Most replicated structure in psychology; highest self-relevance for users; entry point that gives users a personalised self-map.

**Key theories:**
- Big Five / OCEAN (cornerstone, hierarchical)
- HEXACO (include, extends Big Five)
- Dark Triad (include, with caveat)
- MBTI (popular but revised, evidence card)
- Type A/B (popular but revised, evidence card)

**Structural type anchor:** Hierarchical (5 traits → 10 facets)  
**Node count:** ~35–40 navigable nodes  
**Connections out:** To Goal-Setting (Motivation), Self-Efficacy (Self & Identity), Neuroticism↔Emotion Regulation, Conscientiousness↔persistence

### 2. Motivation & Behavioral Regulation

**What it covers:** Why people act — needs, goals, drive, self-regulation, behavior change  
**Cornerstone theories:** Self-Determination Theory (autonomy/competence/relatedness) + Goal-Setting Theory  
**Why these domains:** Universal lay relevance ("how do I get myself to do things"); strongest applied evidence base across education, work, health.

**Key theories:**
- Self-Determination Theory (cornerstone, needs + continuum)
- Goal-Setting Theory (cornerstone, process flow)
- Regulatory Focus Theory (include, dimensional)
- Expectancy Theory (include, formula)
- Maslow's Hierarchy (popular but revised, evidence card)
- Grit (popular but revised, evidence card)

**Structural type anchor:** Two co-equal cornerstones — SDT (needs/continuum/mini-theories) + Goal-Setting (process flow)  
**Node count:** ~45–50 navigable nodes  
**Connections out:** To Self-Efficacy (co-anchor with SDT Competence), Attachment (relatedness need), Emotion Regulation, Conscientiousness

### 3. Cognition & Judgment

**What it covers:** How people think — biases, heuristics, reasoning errors, judgment, the cognitive loop  
**Cornerstone theories:** Dual Process Theory + Heuristics & Biases + Cognitive Behavioral Model  
**Why this domain:** High engagement and direct everyday utility; Dual Process serves as organizing framework; interconnected machinery (not three separate things).

**Key theories:**
- Dual Process Theory (cornerstone, paired duality)
- Heuristics & Biases (cornerstone, catalog)
- Cognitive Behavioral Model (cornerstone, loop)
- Cognitive Dissonance (include, process loop)
- Attribution Theory + FAE (include, with cross-cultural caveat)

**Structural type anchor:** Three distinct visual grammars (paired duality, catalog, loop)  
**Node count:** ~55–65 navigable nodes  
**Connections out:** To Appraisal (interpretation), CBT Model→Emotion Regulation, Dual Process↔Heuristics, FAE↔Attachment, Dissonance↔Self-Concept

### 4. Relationships & Attachment

**What it covers:** How people bond — attachment patterns, relational security, intimacy, trust  
**Cornerstone theory:** Adult Attachment Theory (dimensional, Brennan/Fraley)  
**Why this domain:** Highly relevant to adult relationships, couples work, relational health; strong meta-analytic support; dimensional model is honest.

**Key theories:**
- Adult Attachment (cornerstone, 2D field)
- Bowlby's Attachment Theory (include, foundational background)
- Four Attachment Styles (include with caveat, categorical accessibility toggle)

**Structural type anchor:** Field / 2D continuous space with regional labels  
**Node count:** ~25–30 navigable nodes (most parsimonious domain)  
**Connections out:** To Neuroticism (trait-level anxiety), SDT Relatedness, Emotion Regulation, Self-Compassion, FAE, Self-Concept

### 5. Emotion & Emotion Regulation

**What it covers:** How people feel — emotion generation, emotional experience, regulation strategies, affective patterns  
**Cornerstone theories:** Emotion Regulation Process Model (Gross) + Appraisal Theory (Lazarus)  
**Why this domain:** One of psychology's clearest practical bridges to daily life; actionable skills; both theory and intervention in one.

**Key theories:**
- Emotion Regulation Process Model (cornerstone, timeline)
- Appraisal Theory (cornerstone, branching flow)
- Constructed Emotion Theory (include, debate-flagged perspective)
- Broaden-and-Build (popular but revised, evidence card)

**Structural type anchor:** Two distinct visual grammars (timeline of strategies, appraisal branching flow)  
**Node count:** ~40–45 navigable nodes  
**Connections out:** To Appraisal→CBT Model, Reappraisal↔Dual Process, Attachment insecurity↔maladaptive ER, Self-Compassion, Neuroticism

### 6. Self & Identity

**What it covers:** How people understand and relate to themselves — beliefs about capability, self-relationship, identity coherence, resilience  
**Cornerstone theories:** Self-Efficacy (Bandura) + Self-Compassion (Neff)  
**Why this domain:** Convergence point where other domains' threads meet; direct bridge to behavior change and wellbeing; strong applied evidence base.

**Key theories:**
- Self-Efficacy (cornerstone, causal network)
- Self-Compassion (cornerstone, three-axis dimensional)
- Self-Concept & Self-Schemas (include, scaffolding)
- Self-Esteem (popular but revised, evidence card)
- Terror Management Theory (popular but revised, evidence card)

**Structural type anchor:** Two distinct visual grammars (network sources→belief→outcomes, three-axis field)  
**Node count:** ~35–40 navigable nodes  
**Connections out:** To SDT Competence, Goal-Setting, Conscientiousness, Attachment, Emotion Regulation, Big Five, Appraisal, Dissonance

## Cross-Domain Structure

### Learning Sequence (Recommended)
1. **Personality** — give users a self-map; establish trait vocabulary
2. **Cognition** — universally engaging; biases are immediate hooks
3. **Motivation** — builds on Self-Efficacy vocabulary from Personality
4. **Relationships** — builds on Self-Compassion vocabulary
5. **Emotion** — synthesizes Cognition + Self-understanding
6. **Self & Identity** — integrates threads from all others

### Connection Density
- Self & Identity: 9+ outward bridges (convergence hub)
- Cognition: 5–6 outward bridges (machinery layer)
- Emotion: 5+ outward bridges (integrative)
- Motivation: 4–5 outward bridges (behavior-driving)
- Relationships: 5–6 outward bridges (relational)
- Personality: 4–5 outward bridges (foundational)

### Key Bridge Pairs (Where Real Learning Happens)
| Domain 1 | Domain 2 | Bridge | UX implication |
|---|---|---|---|
| Personality (Neuroticism) | Emotion Regulation | High-N → maladaptive strategies; skills can buffer | Show "your Neuroticism score" → relevant ER strategies |
| Personality (Conscientiousness) | Goal-Setting | Trait basis of persistent effort | Show goal-persistence link |
| Motivation (SDT Competence) | Self-Efficacy | Conceptually identical constructs | Toggle between names, same underlying idea |
| Motivation (SDT Relatedness) | Attachment Security | Secure bonds satisfy relatedness need | Show: insecurity starves motivation |
| Cognition (Appraisal) | Emotion (Reappraisal) | What reappraisal actually changes | Show: you can shift emotion by reinterpreting |
| Cognition (Dual Process) | Emotion Regulation | System 1 → automatic thoughts; System 2 → restructuring | Show: intervention layer mapped to thinking modes |
| Relationships (Attachment) | Emotion Regulation | Attachment style predicts ER strategy | Show: "anxious attachment → hyperactivation patterns" |
| Self (Self-Compassion) | Attachment | Secure attachment → self-compassion | Show correlation and mechanism |
| Self (Self-Concept) | Emotion (Appraisal) | Self-discrepancies produce specific emotions | Show: "I'm not the self I should be" → anxiety/guilt |

## Theory Tier Distribution

| Domain | Cornerstone | Include | Popular-Revised |
|---|---|---|---|
| Personality | 1 (Big Five) | 2 (HEXACO, Dark Triad) | 2 (MBTI, Type A) |
| Motivation | 2 (SDT, Goal-Setting) | 2 (Reg Focus, Expectancy) | 2 (Maslow, Grit) |
| Cognition | 3 (Dual, Biases, CBT) | 2 (Dissonance, Attribution) | 0 |
| Relationships | 1 (Adult Attach) | 2 (Bowlby, Styles) | 0 |
| Emotion | 2 (Gross, Appraisal) | 1 (Constructed) | 1 (Broaden-Build) |
| Self & Identity | 2 (Efficacy, Compassion) | 1 (Self-Concept) | 2 (Self-Esteem, TMT) |
| **Total** | **12** | **11** | **6** |

## Structural Types at a Glance

| Type | Domains using | Theories | UI pattern |
|---|---|---|---|
| Hierarchical | Personality | Big Five, HEXACO, Dark Triad | Hub-and-spoke with drill-down |
| Field / 2D | Relationships, Self (variant) | Adult Attachment, Self-Compassion | Cartesian plane or multi-axis space |
| Timeline | Emotion | Emotion Regulation | Horizontal timeline with entry points |
| Branching flow | Cognition, Motivation | Appraisal, Goal-Setting | Decision tree or process flow |
| Loop | Cognition | CBT, Dissonance | Circular diagram, bidirectional |
| Duality | Cognition | Dual Process | Two pillars with interaction arrows |
| Catalog | Cognition | Heuristics & Biases | Card grid, self-contained items |
| Network | Self, Cognition | Self-Efficacy, Attribution | Network with sources and outcomes |
| Dimension | Motivation | Regulatory Focus | Bipolar slider or continuum |
| Formula | Motivation | Expectancy Theory | Mathematical components |
| Perspective | Emotion | Constructed Emotion | Claim + implications card |
| Evidence card | All domains (6 total) | Popular-but-revised theories | Status + what to use instead |

## Content Footprint

| Layer | Count | Notes |
|---|---|---|
| Domains | 6 | Personality, Motivation, Cognition, Relationships, Emotion, Self |
| Theories | 28 total | 12 cornerstone, 11 include, 6 popular-but-revised |
| Layer 2 (theory tier) | Explicit in each domain file | Accessibility to tier structure is important |
| Layer 3 (components) | ~150–180 nodes | Varies by theory structure type |
| Cross-domain bridges | ~50 navigable connections | Where real learning happens |
| Distinct visual grammars | 12 types | Non-negotiable for honest representation |

## Design Principles

1. **Structural honesty:** Each theory rendered in a way that reflects its actual structure, not a forced uniformity.

2. **Connection visibility:** Cross-domain bridges are first-class content, not footnotes. Navigation should surface them.

3. **Dimensional respect:** Categorical simplifications (e.g., attachment styles) always include explicit continuity notes and toggles to underlying dimensions.

4. **Evidence staging:** "Cornerstone / Include / Popular-but-revised" is visible everywhere so users learn the difference between settled science and live debate.

5. **Practical pathways:** Process theories get treatment that emphasizes what users can *do*, not just what they can *understand*.

6. **Learning sequence:** Teach in order: Personality → Cognition → Motivation → Relationships → Emotion → Self. Earlier domains establish vocabulary for later ones.

## Files in This Package

- `content-personality.md` — Personality domain (Layer 2 + 3 full decomposition)
