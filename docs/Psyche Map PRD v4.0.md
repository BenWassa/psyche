# **Psyche Map — PRD**

**v4.0 · The "Encyclopedia" Pivot (UI/UX Best Practices)**

*This document supersedes all v2.0 and v3.0 (Star Atlas / Galaxy) specifications. We have completely abandoned spatial \<canvas\>, 3D, and dark-mode "space" metaphors in favor of a high-end, mobile-first editorial architecture.*

## **1\. Problem & Pivot Context**

**The Core Problem:** Psychology's best theories have incompatible structures (hierarchies, dimensional fields, timelines). A UI that forces all of them into the exact same visual mold misrepresents the science.

**The Pivot:** Previous attempts used a spatial "Galaxy" metaphor. This resulted in brittle, inaccessible, and non-responsive UI. To build a production-ready, high-quality app, we are pivoting to **Standard UI/UX Best Practices**. We will use structural honesty—rendering theories via CSS Grid, Flexbox, and Bento Grids—wrapped in a premium "Swiss Design" encyclopedia aesthetic.

## **2\. Core Metaphor & Visual Direction**

**Metaphor:** A High-End Encyclopedia of Mind. Scholarly, rigorous, and highly legible.

**Aesthetic:** Swiss Design / Modern Editorial.

* **Theme:** Light "Paper" mode. Backgrounds are warm off-white (\#F7F7F5), text is sharp charcoal ink (\#1A1A1A), with a single muted brick-red accent (\#D34F4F) for interaction.  
* **Typography:** Massive serif display type (Fraunces) combined with highly legible, utilitarian sans-serif body copy (Inter).  
* **Visuals:** Strict geometric alignments. 1px borders. No floating blobs, no canvas animations, no weird 3D graphs.

## **3\. Architecture & Navigation**

The application uses a responsive, split-pane architecture. It is designed **mobile-first**.

### **Mobile (Default) Experience**

1. **Header:** Sticky top bar with "Psyche." branding and a Hamburger menu for Domain switching.  
2. **Central Canvas:** Single scrolling column. Theories are presented as stacked Bento Grid cards or responsive flex-containers.  
3. **Inspector (Detail View):** Tapping a node/card triggers a Bottom Sheet (or full-screen slide-over) containing the deep-dive content (Definition, Facets, Application), ensuring the user never loses their structural context.

### **Desktop Experience (3-Pane Split)**

1. **Left Sidebar (Persistent Nav):** 6 domains listed in the pedagogical sequence. Click to instantly swap the central canvas.  
2. **Central Canvas:** The structural representation of the theory (the "Map"). Max-width container, generous whitespace.  
3. **Right Inspector:** A 96-rem wide sliding panel. Clicks on the Central Canvas populate this panel with Layer 3 content.

## **4\. The Six Domains & Structural Translations**

We must maintain the 6-domain pedagogical sequence from the Knowledge Base, but translate their visual grammars into DOM-native UI patterns (Bento Grids, Columns, Flex flows).

### **1\. Personality (e.g., Big Five)**

* **Previous:** Solar System / Planets.  
* **New UI Pattern:** **Bento Grid / Columnar Layout.** 5 distinct cards. High Openness/Conscientiousness get larger spans or prominent visual hierarchy. Tapping a card opens the Inspector to reveal the sub-facets.

### **2\. Cognition (e.g., Dual Process)**

* **Previous:** Floating duality nodes.  
* **New UI Pattern:** **Split Cards.** Two high-contrast, side-by-side (or stacked on mobile) cards representing System 1 and System 2, with explicit directional arrows (using standard SVG icons) showing interaction.

### **3\. Motivation (e.g., SDT)**

* **Previous:** Triangle orbit.  
* **New UI Pattern:** **3-Part Bento.** Three equal-weight, elegantly bordered cards (Autonomy, Competence, Relatedness) sitting inside a single "Self-Determination" container.

### **4\. Relationships (e.g., Adult Attachment)**

* **Previous:** Unbounded 2D Field.  
* **New UI Pattern:** **CSS Grid Cartesian Plane.** A strict 2x2 grid with visible 1px axis borders. Quadrants are clickable target areas. Labels exist at the grid extremes (not centered). Tapping a quadrant opens the Inspector.  
* *Requirement:* The Inspector must dynamically inject the "Continuity Note" explaining that these are dimensions, not strict categories.

### **5\. Emotion (e.g., Emotion Regulation Process)**

* **Previous:** Horizontal line with floating dots.  
* **New UI Pattern:** **Process Timeline / Stepper.** A horizontal flex row (wrapping to vertical on mobile) of numbered steps. Clear visual indicators for "Intervention Points".

### **6\. Self & Identity (e.g., Self-Efficacy)**

* **Previous:** Free-floating node network.  
* **New UI Pattern:** **Input/Output Diagram.** Structured CSS Flexbox showing 4 "Source" cards feeding via structural lines into a central "Self-Efficacy" state, which feeds into an "Action" outcome.

## **5\. The Inspector Panel (Layer 3 Content)**

The single-column detail panel replaces nested tabs to ensure continuous reading.

**Content Hierarchy:**

1. **Tag:** e.g., "INSPECTOR / HIERARCHICAL TRAIT"  
2. **Title:** Massive Fraunces heading.  
3. **Core Tendency:** A highlighted blockquote or bordered section containing the primary definition.  
4. **Facets / Sub-structure:** A clean, unstyled list or mini-table mapping the sub-components.  
5. **In Practice:** A visually distinct box (light gray background or accent border) containing real-world applications.

## **6\. Out of Scope**

* HTML5 \<canvas\>, Three.js, WebGL, or complex mathematical positioning.  
* "Space", "Galaxy", or "Dark Mode" styling. (This is strictly a light/paper app).  
* Force-directed graphs or sprawling node networks (e.g., D3.js). We use predictable, strict grid layouts.  
* User accounts, quizzes, or data persistence.

## **7\. UX Testing Goals for this Version**

1. **Mobile Usability:** Do the Bento grids and Cartesian planes scale down gracefully to mobile screens without losing their structural meaning?  
2. **Pedagogical Flow:** Does the left-hand persistent navigation encourage users to progress sequentially from Personality to Self?  
3. **Interaction Cost:** Is the "Click Canvas \-\> Read Inspector" loop faster and more intuitive than zooming in/out of a spatial map?