# **Psyche Map — Design System**

**v4.0 · Empathetic Editorial**

## **Visual Reference**

**High-end physical journal / Encyclopedia.** The aesthetic shifts from a dark, spatial "Star Atlas" to a tactile, light-theme editorial experience. It draws on Swiss Design (rigorous grids, clear typography) but softens it with "Empathetic" warmth. Think thick, textured paper, pressed charcoal ink, and sophisticated earth tones.

**The Medium:** We continue to achieve this entirely through standard CSS DOM elements. Depth is now created through structural layering, soft radii, and diffused drop shadows rather than radial gradients and dark backgrounds.

## **Color Tokens**

/\* Core Canvas (Warm, tactile, human) \*/  
\--surface:                   \#f9f8f6;    /\* Alabaster paper. Main background. \*/  
\--surface-dim:               \#f0efe9;    /\* Inset or secondary backgrounds. \*/  
\--surface-bright:            \#ffffff;    /\* Highest elevation (Cards/Panels). \*/

/\* Typography (Deep, warm charcoal) \*/  
\--on-surface:                \#2c2c2a;    /\* Primary text. Avoid pure \#000. \*/  
\--on-surface-variant:        \#5c5c5a;    /\* Secondary text, metadata. \*/

/\* Borders & Structure \*/  
\--outline:                   \#8c8c8a;    /\* Strong borders/dividers. \*/  
\--outline-variant:           \#d6d5cf;    /\* Faint structural lines. \*/

/\* Primary Interactions (Muted Terracotta) \*/  
\--primary:                   \#a65d57;    /\* Vitality and warmth. Active states. \*/  
\--primary-container:         \#ecd9d7;    /\* Soft highlight backgrounds. \*/  
\--on-primary-container:      \#4a2522;

/\* The "Emotional Depth" Palette (Washes and Tags ONLY) \*/  
\--domain-cognition:          \#6b7f8c;    /\* Slate Blue \*/  
\--domain-self:               \#7a8b79;    /\* Deep Sage \*/  
\--domain-motivation:         \#cba36b;    /\* Burnished Ochre \*/  
\--domain-relationships:      \#c28f8f;    /\* Dusty Rose \*/

## **Typography**

Typography balances academic authority with human nuance, dropping monospace fonts in favor of highly legible sans-serifs for data.

/\* Font Families \*/  
\--font-display: 'Fraunces', serif;       /\* Elegance and authority \*/  
\--font-body:    'Inter', sans-serif;     /\* Utilitarian legibility \*/

/\* Scale \*/  
.domain-hero-title {  
  font-family: var(--font-display);  
  font-size: clamp(3rem, 6vw, 4rem);     /\* Large but grounded \*/  
  font-weight: 300;  
  color: var(--on-surface);  
  letter-spacing: \-0.01em;  
  line-height: 1.2;  
}

.node-title { font: 300 24px/1.3 var(--font-display); }  
.panel-tag { font: 600 11px/1 var(--font-body); text-transform: uppercase; letter-spacing: 0.08em; }  
.body-text { font: 300 15px/1.6 var(--font-body); }

## **Global Atmosphere (CSS Background & Elevation)**

The stark darkness is replaced by a warm, paper-like environment. Depth is tactile.

body {  
  background-color: var(--surface);  
  color: var(--on-surface);  
}

/\* Diffused Elevation for floating elements \*/  
.elevation-soft {  
  box-shadow: 0 12px 24px rgba(44, 44, 42, 0.06);  
}

/\* Soft Radii \- shifting from machine-like to human-centric \*/  
.radius-sm { border-radius: 4px; }  
.radius-md { border-radius: 8px; }  
.radius-lg { border-radius: 12px; } /\* Standard Bento Card \*/  
.radius-xl { border-radius: 24px; } /\* Slide-out Panels \*/

## **Layout: Split-Pane Architecture**

Level 1 navigation abandons the vertical stack for a robust, 3-pane editorial layout.

1. **Left Sidebar:** Persistent navigation. width: 288px, bordered by \--outline-variant.  
2. **Central Canvas:** The structural representation of the theory. Responsive, max-width constrained, generous whitespace.  
3. **Right Inspector:** Slide-out detail panel (width: 400px). Elevated via .elevation-soft.

## **Node Rendering (The "Soft Bento")**

Nodes are no longer volumetric spheres. They are clean, structured cards that respond to interaction with subtle lifts.

.interactive-node {  
  background-color: var(--surface-bright);  
  border: 1px solid var(--outline-variant);  
  border-radius: 12px; /\* radius-lg \*/  
  transition: all 0.25s ease;  
  box-shadow: 0 4px 6px rgba(44, 44, 42, 0.02);  
}

.interactive-node:hover {  
  border-color: var(--primary);  
  background-color: var(--surface-bright);  
  transform: translateY(-2px);  
  box-shadow: 0 12px 24px rgba(44, 44, 42, 0.06);  
}

.interactive-node:hover .node-title {  
  color: var(--primary);  
}

## **Structural Grammars in the DOM**

**1\. Hierarchical (e.g., Big Five)**

* **Do:** Use CSS Grid to create asymmetrical "Bento" layouts. Large spans for dominant traits, smaller spans for minor ones.  
* **Don't:** Use absolute positioned spokes or radial planet arrangements.

**2\. Field / 2D Plane (e.g., Attachment)**

* **Do:** Create a Cartesian plane using a 2x2 CSS Grid with explicit \--outline axis borders. Place region labels in the outer corners. Provide hover states for the entire quadrant.  
* **Don't:** Center text or use floating dark-mode gradients.

**3\. Process / Timeline (e.g., Emotion Regulation)**

* **Do:** Use a horizontal Flexbox stepper with explicit connecting arrows/lines showing chronological flow.

## **What Not To Do — Specifics**

* **No dark mode.** The application is strictly a light/paper theme.  
* **No "Star Atlas" or galaxy metaphors.** Drop all starfields, volumetric gradients, and deep space aesthetics.  
* **No brutalist 0px corners.** Everything must have a soft, approachable radius (4px to 24px).  
* **No cheap rainbow color-coding.** The "Depth Palette" (Sage, Ochre, etc.) is *only* to be used at 5-10% opacity for faint background washes or tags, never as loud, saturated fills.