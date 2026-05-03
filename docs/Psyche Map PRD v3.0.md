# **Psyche Map — PRD**

**v3.0 · The DOM-Native Pivot**

Changes from v2.0 represent a fundamental shift in navigation architecture to align with AI-tooling strengths and mobile viability. The core visual metaphor remains unchanged.

## **Problem & Pivot Context**

Psychology's best theories have incompatible structures. We must represent them honestly without forcing them into uniform UI molds.

**The v2.0 Failure:** Attempting to build this via a spatial, coordinate-based \<canvas\> "galaxy" resulted in brittle code that AI coding tools failed to render reliably.

**The v3.0 Pivot:** We are abandoning spatial canvas navigation. Level 1 navigation is now a highly atmospheric, typography-led **vertical scroll of full-width domain cards**. This plays directly to the strengths of modern DOM layout (CSS Grid/Flexbox) while actually *improving* the pedagogical narrative by enforcing a sequential journey.

## **Core Metaphor**

**Cosmic / star atlas.** Rendered in the visual language of a 19th-century astronomical chart — precise, atmospheric, scholarly.

*Previous:* A freely explorable 3D galaxy.

*Current:* A deep-space scroll. The user acts as an astronomer panning vertically down a massive celestial chart.

## **Level 1 Architecture: The Vertical Journey**

The entry state is a vertical stack of 6 full-width domain sections. This sequence is strictly ordered to support the pedagogical sequence defined in the knowledge base.

**The Scroll Sequence:**

1. **Personality:** Foundational traits (The user's starting point).  
2. **Cognition:** Mental machinery and biases.  
3. **Motivation:** Needs, goals, and behavioral drive.  
4. **Relationships:** Attachment and social bonds.  
5. **Emotion:** Regulation and affective experience.  
6. **Self & Identity:** The integration of all the above.

**Interaction Model:**

* Each domain occupies min-h-\[80vh\] to 100vh.  
* Scrolling downwards feels like panning a telescope across a vast chart.  
* Each section contains the domain's title (massive typography), a brief introductory frame, and stylized DOM-native previews of its cornerstone theories.  
* Clicking a theory preview opens the **Detail Panel**.

## **Detail Panel (Level 2/3)**

The single-column detail panel from v2.0 is retained but triggered via the domain cards rather than clicking a spatial "planet".

* **Action:** Slides in from the right edge.  
* **Content:** Single scrolling column. No inner tabs.  
* **Structure:** 1\. Eyebrow (Domain)  
  2\. Theory Title  
  3\. Rule  
  4\. Core Tendency / Definition  
  5\. Facets / Mini-Theory / Catalog (Adapts to structural type)  
  6\. Rule  
  7\. In Practice (Application)

## **Structural Types in a DOM-Native World**

We still must support heterogeneous theory structures, but we build them using CSS, not canvas.

* **Hierarchical (Big Five):** Represented as a hub-and-spoke layout built with flexbox or absolute positioned DOM nodes within a container. Nodes retain volume via CSS radial gradients.  
* **Dimensional / Field (Attachment):** A CSS Grid representation of a Cartesian plane. Faint border axes, quadrant areas mapped to grid cells with soft radial-gradient background washes.  
* **Timeline / Process (Emotion Regulation):** A horizontal scrolling or flex-row timeline of steps.  
* **Catalog (Heuristics):** A clean CSS masonry or grid layout of cards.

## **Out of Scope**

* Canvas API (\<canvas\>), Three.js, or any complex coordinate math.  
* User self-placement/quizzes.  
* Backend persistence or auth.  
* Theories beyond the 6 core domains.

## **What This Prototype Is Testing**

1. Does the vertical scroll successfully establish the pedagogical narrative sequence?  
2. Do CSS radial gradients and fixed background patterns successfully replicate the "depth" of the v2.0 canvas?  
3. Can diverse structural types (hierarchical vs. dimensional) coexist inside standard DOM \<section\> blocks without feeling like a generic SaaS product?