# **Psyche Map — Design System**

**v3.0 · Star Atlas in the DOM**

## **Visual Reference**

**19th-century astronomical atlases.** Bode's *Uranographia* (1801). Deep night sky, volumetric objects, fine hairline grids, elegant serif typography.

**The Medium:** We are achieving this atmosphere entirely through CSS DOM elements, avoiding \<canvas\>. Depth is created via fixed backgrounds, radial gradients, and layered opacity.

## **Color Tokens**

/\* Canvas Atmosphere \*/  
\--canvas:         \#0A0F1E;    /\* Deep midnight navy. Main background. \*/  
\--canvas-mid:     \#0F1628;    /\* Panel background. \*/  
\--canvas-lift:    \#141E36;    /\* Hover surfaces. \*/

/\* Typography \*/  
\--ink:            \#F0EBE0;    /\* Warm white. Primary text. \*/  
\--ink-mid:        rgba(240, 235, 224, 0.55);   
\--ink-faint:      rgba(240, 235, 224, 0.28); 

/\* Gold Accents (Strictly restricted usage) \*/  
\--gold:           \#C49A3C;    /\* Warm antique gold. \*/  
\--gold-dim:       rgba(196, 154, 60, 0.25);  /\* Inactive states, section borders. \*/  
\--gold-faint:     rgba(196, 154, 60, 0.10);  /\* Grid lines. \*/

/\* Lines \*/  
\--line:           rgba(240, 235, 224, 0.08); 

## **Typography**

The typography carries the structural weight of the application.

/\* Font Families \*/  
\--font-display: 'Fraunces', serif;     /\* Variable, opsz 9-144 \*/  
\--font-body:    'Newsreader', serif;  
\--font-mono:    'DM Mono', monospace;

/\* Scale \*/  
.domain-hero-title {  
  font-family: var(--font-display);  
  font-size: clamp(4rem, 8vw, 7rem);   /\* Massive scaling for full-width \*/  
  font-weight: 200;  
  font-style: italic;  
  color: var(--ink);  
  opacity: 0.85;  
}

.node-label { font: 300 12px var(--font-display); opacity: 0.8; }  
.panel-eyebrow { font: 300 8px/3px var(--font-mono); text-transform: uppercase; }  
.panel-title { font: 200 40px var(--font-display); }  
.body-text { font: 300 15px/1.8 var(--font-body); }

## **Global Atmosphere (CSS Background)**

To create the deep space feel without a canvas, apply a fixed, layered background to the root or \<body\>.

body {  
  background-color: var(--canvas);  
  background-image:   
    /\* 1\. Subtle Vignette \*/  
    radial-gradient(circle at 50% 50%, transparent 40%, rgba(5,8,15,0.6) 100%),  
    /\* 2\. Faint Coordinate Grid \*/  
    linear-gradient(var(--gold-faint) 1px, transparent 1px),  
    linear-gradient(90deg, var(--gold-faint) 1px, transparent 1px);  
  background-size: 100% 100%, 100px 100px, 100px 100px;  
  background-attachment: fixed;  
}

*Note: A static SVG of a seeded starfield (opacity 0.1) should be fixed z-index: 0 underneath the scrolling content.*

## **Layout: Full-Width Domain Stack**

Level 1 navigation is a vertical stack of DOM sections.

.domain-section {  
  min-height: 85vh;  
  width: 100%;  
  display: flex;  
  flex-direction: column;  
  justify-content: center;  
  padding: 10vh 5vw;  
  border-bottom: 1px solid var(--gold-faint); /\* Separation of galaxies \*/  
  position: relative;  
  z-index: 1;  
}

## **Node Rendering (DOM Elements)**

Nodes (formerly planets/moons) must read as volumetric objects, not flat SaaS UI circles.

.theory-node {  
  width: 60px;  
  height: 60px;  
  border-radius: 50%;  
  background: radial-gradient(circle at 38% 36%,   
    \#1E2D52 0%,   
    \#0A0F1E 65%,   
    \#060B18 100%  
  );  
  border: 1px solid var(--gold-dim);  
  box-shadow: 0 0 20px 0 rgba(196,154,60,0.0); /\* Glow transitions on hover \*/  
  transition: all 0.3s ease;  
}

.theory-node:hover {  
  box-shadow: 0 0 30px 5px rgba(196,154,60,0.15); /\* Gold halo \*/  
  border-color: var(--gold);  
}

## **Structural Grammars in the DOM**

**1\. Hierarchical (e.g., Big Five)**

* **Do:** Use absolute positioning inside a relative container, or CSS grid layout to map out a pentagon/triangle of DOM nodes connected by simple 1px borders (divs acting as lines).  
* **Don't:** Try to use an HTML5 canvas or SVG line-drawing library.

**2\. Field / 2D Plane (e.g., Attachment)**

* **Do:** A 2x2 CSS Grid container. Add border-right and border-bottom to the cells to create the axes. Place labels absolutely in the outer corners of the container. Apply a faint gold radial-gradient to the grid cells on hover.  
* **Don't:** Center the text in the quadrants.

## **What Not To Do — Specifics**

* **No \<canvas\> tags.** The atmosphere is pure CSS.  
* **No grid of equal-sized boxes for domains.** Domains are full-width, stacked vertically.  
* **No flat circles.** Every node gets a radial gradient.  
* **No standard "light mode" panels.** The slide-out detail panel is var(--canvas-mid) with a faint gold left border.  
* **No icon libraries (e.g., Lucide, Material).** Typography is the only iconography we use.