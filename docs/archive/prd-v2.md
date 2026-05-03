# Psyche Map — PRD
**v0.2 · Corrections from Stitch prototype**

Changes from v0.1 are marked ⚠️. Core interaction architecture unchanged.

---

## Problem

Psychology's best theories have incompatible structures. A UI that forces all of them into the same visual mold either misrepresents the science or breaks on contact with dimensional theories like attachment. This prototype stress-tests whether one adaptive map system can hold multiple structural types without lying about what the theories actually say.

---

## Core Metaphor

**Cosmic / star atlas.** Domains are galaxies. Theories are planets. Facets and sub-structures are moons. The metaphor is rendered in the visual language of a 19th-century astronomical chart — precise, atmospheric, scholarly — not a science fiction interface.

---

## Visual Direction

See `psyche-design-v2.md` for full token and rendering spec. Summary:

- Dark midnight canvas. Deep navy, not black.
- Gold and warm white as the only two accent registers. No rainbow domain colors.
- Nodes rendered with dimension — radial gradients, glow halos. Not flat circles.
- Canvas has atmosphere — sparse star field, faint coordinate grid.
- Panel is dark, consistent with canvas. Not a light surface sliding over dark.

---

## Three Domains

### 1 — Personality · Big Five (DeYoung)
**Structure type:** Hierarchical
**Visual grammar:** Solar system

- Center hub: *Personality*
- 5 planet nodes in pentagon: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
- Click planet → 2 moon nodes bloom outward, other planets dim to 0.25 opacity
- Click moon → panel populates with facet content
- ESC or re-click → moons collapse, full pentagon restores
- Planet→moon edges: dashed, appear on bloom only

### 2 — Motivation · Self-Determination Theory (Ryan & Deci)
**Structure type:** Hierarchical, shallow
**Visual grammar:** Solar system, looser

- Center hub: *Motivation*
- 3 planet nodes in triangle: Autonomy, Competence, Relatedness
- Each planet has 1 moon — its linked mini-theory:
  - Autonomy → Cognitive Evaluation Theory
  - Competence → Organismic Integration Theory
  - Relatedness → Basic Psychological Needs Theory
- Sparse layout is intentional — honest to the theory's simplicity

### 3 — Attachment · Adult Attachment Theory (Brennan et al.)
**Structure type:** Dimensional / continuous
**Visual grammar:** 2D field

- Not hub-and-spoke. A labeled 2D plane.
- X-axis: Avoidance (low → high). Y-axis: Anxiety (low → high).
- 4 style regions with soft gradient boundaries — no hard lines, no discrete nodes:
  - Secure (low anxiety, low avoidance)
  - Preoccupied (high anxiety, low avoidance)
  - Dismissing (low anxiety, high avoidance)
  - Fearful (high anxiety, high avoidance)
- ⚠️ Region labels: outer corner of each quadrant. NOT centered. Centered reads as categorical. Corner placement reads as regional.
- Clicking anywhere in a region populates panel
- Panel includes continuity note: *"These regions describe tendencies on a continuous spectrum. Most people show patterns across multiple styles."*

---

## Navigation

⚠️ **No top nav tabs. No sidebar switcher. Navigation is spatial throughout.**

The Stitch prototype used header tabs to switch domains. This is incorrect and changes the product's fundamental feel from spatial exploration to tabbed content.

**Correct model:**

**Entry state — Galaxy view:**
- Three domain clusters visible simultaneously on the canvas
- Each cluster: a miniaturized version of its actual theory structure (Big Five shows 5 small planet nodes in pentagon formation; SDT shows 3 in triangle; Attachment shows the 2D field plane at small scale)
- ⚠️ Clusters must reflect real theory node counts and arrangement — not abstract placeholder blobs
- Domain name label prominent above each cluster in large italic Fraunces
- No edges visible in galaxy view — structure implied by node positions only

**Entering a domain:**
- Click any cluster → canvas animates that cluster to full size at center
- Other clusters recede (opacity 0.3, scale 0.4) to canvas edges but remain visible
- Breadcrumb label top-left shows current domain, clickable to return to galaxy

**Returning:**
- Click receded cluster OR click breadcrumb → return transition

---

## Content Panel

⚠️ **Single scroll column. No inner tabs.**

The Stitch prototype added Context / Structures / In Practice tabs inside the panel. This was not spec'd and fragments content that should be read as one continuous unit.

**Correct model:**
- Slide-in from right on node/region click
- Single scrolling column, no tab navigation within
- Content order: eyebrow → title → rule → Core Tendency → rule → Facets/Mini-theory/Patterns → rule → In Practice
- Attachment panel appends continuity note after In Practice
- Panel background: dark, consistent with canvas (not a light surface)

---

## Two Visual Grammars — Unchanged

| Grammar | When used | Honest about |
|---|---|---|
| Solar system | Hierarchical theories (Big Five, SDT) | Separable structures with real sub-components |
| Field / 2D plane | Dimensional theories (Attachment) | Continuous spectrums, no discrete types |

---

## Out of Scope

- User self-placement on any theory's space
- Mobile layout
- Any backend or persistence
- Theories beyond these three domains
- DSM-adjacent or clinical content
- Search

---

## What This Prototype Is Testing

1. Does bloom/collapse read clearly, or cluttered at 5 planets + 2 moons?
2. Does the SDT triangle feel appropriately lean, or incomplete?
3. Does the attachment field cohere with the solar system domains, or feel like a different app?
4. Does spatial galaxy navigation orient or disorient?
5. Is a single-column panel sufficient across all three structural types?

---

## Stitch Deviations — Do Not Repeat

| What Stitch did | What spec says |
|---|---|
| Top nav tabs for domain switching | Spatial galaxy clusters only |
| Light panel surface over dark canvas | Panel matches canvas — dark |
| Inner tabs in panel (Context/Structures/In Practice) | Single scroll column, no inner tabs |
| Abstract blob clusters in galaxy view | Miniaturized real theory structure |
| Attachment region labels centered in quadrant | Labels at outer corner of each quadrant |
| Material Symbols icons in panel section headers | Typography only — no icons in panel body |
