# Psyche Map — Design System
**v0.2 · Star Atlas direction — full rewrite**

---

## Visual Reference

**19th-century astronomical atlases.** Specifically: Bode's *Uranographia* (1801), Jamieson's *Celestial Atlas* (1822). The defining qualities: deep night sky rendered in rich ink, celestial objects depicted with volume and care, fine hairline grid lines suggesting coordinate systems, elegant serif labels, the cosmos as a subject of rigorous scholarly attention. Beautiful because it is precise, not despite it.

This is not a science fiction UI. No lens flares, no motion blur, no HUD chrome. The atmosphere is that of a scholar's instrument — old enough to feel earned, precise enough to feel trustworthy.

---

## Principles

**Depth over flatness.** Every surface has atmosphere. The canvas is not a blank div — it is a rendering of space with real visual weight. Nodes are not circles with strokes — they are objects with dimension, gradient, and light.

**Gold as the only warmth.** One accent color. Used sparingly and intentionally. When gold appears, it means something — active state, selected edge, panel border. Not decorative.

**Restraint in structure, richness in surface.** The information architecture is deliberately spare. The visual surface earns the user's attention through quality of rendering, not quantity of elements.

**No valence in color.** Neuroticism and Openness, Fearful and Secure attachment — all rendered identically. The design does not editorialize.

---

## Color Tokens

```
/* Canvas */
--canvas:         #0A0F1E    /* Deep midnight navy. Primary background. */
--canvas-mid:     #0F1628    /* Slightly lighter. Panel background. */
--canvas-lift:    #141E36    /* Hover surfaces, subtle elevation. */

/* Text */
--ink:            #F0EBE0    /* Warm white. Primary text on dark. */
--ink-mid:        rgba(240,235,224,0.55)   /* Secondary text, labels. */
--ink-faint:      rgba(240,235,224,0.28)   /* Tertiary. Axis labels, hints. */

/* Gold accent — used only for active states, borders, key edges */
--gold:           #C49A3C    /* Warm antique gold. Not yellow, not orange. */
--gold-dim:       rgba(196,154,60,0.25)    /* Inactive gold. Orbit rings, resting edges. */
--gold-faint:     rgba(196,154,60,0.10)    /* Barely there. Grid, coordinate lines. */

/* Structural lines */
--line:           rgba(240,235,224,0.08)   /* Panel borders, dividers. */
--line-dim:       rgba(240,235,224,0.04)   /* Subtler grid lines. */

/* Node states — see Node Rendering section for gradient specs */
--node-resting-center:   rgba(20,30,54,0.95)
--node-resting-edge:     rgba(10,15,30,0.80)
--node-active-center:    rgba(196,154,60,0.30)
--node-active-edge:      rgba(10,15,30,0.90)
--node-dimmed-opacity:   0.22
```

### What happened to domain colors?
Scrapped. Three muted domain colors at equal visual weight produced no hierarchy and no atmosphere. The star atlas uses one accent register — gold — and lets depth of rendering do the rest. Domain identity is carried by node position and label, not color.

---

## Typography

### Fonts — unchanged from v0.1
```
Display: Fraunces (variable, opsz 9–144)
Body:    Newsreader
Mono:    DM Mono
```

### Scale — updated for dark background

```
Galaxy domain label:    Fraunces 64px / 200 italic / ink at 65% opacity
                        This is the primary visual anchor in galaxy view.
                        Large enough that it does the heavy lifting.

Node label (planet):    Fraunces 12px / 300 / ink at 80% opacity
Node label (moon):      DM Mono 8px / 300 / ls 2px / uppercase / ink-mid
Hub label:              DM Mono 8px / 300 / ls 4px / uppercase / ink-faint

Panel eyebrow:          DM Mono 8px / 300 / ls 3px / uppercase / ink-faint
Panel title:            Fraunces 40px / 200 / ink / opsz 40
Panel section label:    DM Mono 8px / 300 / ls 3px / uppercase / ink-mid
Panel definition:       Newsreader 15px / 300 italic / lh 1.8 / ink
Panel example:          Newsreader 13.5px / 300 / lh 1.85 / ink-mid
Panel continuity note:  Newsreader 12px / 300 italic / ink-faint

Axis label (field):     DM Mono 8.5px / 300 / ls 2px / uppercase / ink-faint
Region label (field):   Fraunces 13px / 200 italic / ink-mid
                        Positioned at outer corner. NOT centered.
```

---

## Canvas Atmosphere

This is the section that was entirely absent from v0.1. The canvas must be rendered, not left blank.

### Star Field
```
Implementation: SVG or canvas element, fixed, behind all content
Count:          90–120 points
Size:           0.5px (majority), 0.8px (some), 1.2px (rare — 8–10 total)
Opacity:        Varies per point — range 0.06 to 0.16
Distribution:   Irregular. No grid. No clustering. Use seeded random.
Color:          #F0EBE0 (warm white, same as --ink)
Animation:      None. Stars do not twinkle. This is a chart, not a screensaver.
```

### Coordinate Grid
```
Style:          Very faint lines suggesting a celestial coordinate system
Color:          var(--gold-faint) — rgba(196,154,60,0.08)
Stroke width:   0.5px
Pattern:        Concentric circles + radial lines from canvas center
                OR a simple rectangular grid — builder's choice
Opacity:        Low enough to be felt, not read
```

### Vignette
```
A subtle radial gradient darkening at the canvas edges:
background: radial-gradient(ellipse at center,
  transparent 40%,
  rgba(5,8,15,0.4) 100%
)
Position: fixed, full canvas, pointer-events none, z-index above star field
```

---

## Node Rendering

**The single most important upgrade from v0.1.** Nodes must read as objects in space, not diagram symbols.

### Planet Node (radius 30px)
```
Base circle:
  fill: radial-gradient(circle at 38% 36%,
    #1E2D52 0%,       /* lighter, suggesting a light source */
    #0A0F1E 65%,      /* deep center */
    #060B18 100%      /* edge falls off to near-black */
  )
  stroke: var(--gold-dim)    /* rgba(196,154,60,0.25) */
  stroke-width: 1px

Glow halo (separate element behind circle):
  fill: radial-gradient(circle,
    rgba(196,154,60,0.08) 0%,
    transparent 70%
  )
  radius: 52px  /* larger than circle */
  opacity: 0 at rest, 0.7 on hover, 1.0 when active

Active state:
  Circle fill shifts — lighter center becomes gold-tinted:
    radial-gradient(circle at 38% 36%,
      rgba(196,154,60,0.25) 0%,
      #0A0F1E 60%,
      #060B18 100%
    )
  Stroke: var(--gold) at full opacity
  Outer glow halo: fully visible

Dimmed state (non-selected planet after bloom):
  Entire node-group opacity: 0.22
  No glow
```

### Moon Node (radius 10px)
```
Same gradient approach, smaller scale:
  fill: radial-gradient(circle at 38% 36%,
    #1A2848 0%,
    #080D1A 100%
  )
  stroke: var(--gold-dim)
  stroke-width: 0.8px
  Glow halo radius: 20px

Active state: same as planet but scaled
```

### Hub Node (radius 44px)
```
Slightly different treatment — more transparent, more structural:
  fill: rgba(14,20,40,0.6)
  stroke: var(--gold-dim)
  stroke-width: 1px
  stroke-dasharray: 3 6   /* dashed — suggests reference point, not object */
  No glow halo
```

---

## Edges and Orbits

```
Hub → planet (resting):
  stroke: var(--gold-dim)   /* rgba(196,154,60,0.25) */
  stroke-width: 1px
  solid

Hub → planet (planet active):
  stroke: var(--gold)
  stroke-width: 1.2px
  opacity: 0.7

Hub → other planets (sibling dimmed):
  stroke: var(--gold-faint)
  stroke-width: 0.8px

Planet → moon (bloom only):
  stroke: var(--gold-dim)
  stroke-width: 0.8px
  stroke-dasharray: 3 5
  opacity 0 → 0.5 on bloom

Orbit rings (on planet hover, decorative):
  stroke: var(--gold-faint)
  stroke-width: 0.8px
  stroke-dasharray: 2 10
  fill: none
  radius: planet radius + 18px
```

---

## Field Grammar — Attachment Plane

```
Background: canvas color (--canvas). The plane IS the canvas.

Axes:
  stroke: rgba(240,235,224,0.12)
  stroke-width: 1px
  Full span of canvas area

Axis endpoint labels:
  DM Mono 8.5px / ink-faint / uppercase
  Placed at the four ends of the axes
  "LOW AVOIDANCE" / "HIGH AVOIDANCE" (x-axis ends)
  "LOW ANXIETY" / "HIGH ANXIETY" (y-axis ends)

Quadrant region washes:
  Each quadrant: a very subtle radial gradient wash
  Color: rgba(196,154,60,0.06) — gold, very low opacity
  Placed at the outer corner of each quadrant (not centered)
  Radius: ~35% of quadrant diagonal
  On hover/active: opacity increases to rgba(196,154,60,0.14)

Region labels:
  Fraunces 13px / 200 italic / ink-mid
  Position: outer corner of quadrant (e.g. Secure → bottom-left area)
  NOT centered in quadrant
  On hover: opacity 1.0
  At rest: opacity 0.55

Active region:
  Wash opacity increases
  Label opacity → 1.0
  A fine gold border traces the quadrant boundary at 15% opacity
```

---

## Panel — Dark Treatment

```
Width:          320px
Height:         100vh
Background:     var(--canvas-mid)   /* #0F1628 — slightly lighter than canvas */
Border-left:    1px solid rgba(196,154,60,0.20)   /* gold tint */
Padding:        52px 36px 64px
Transform:      translateX(100%) → translateX(0) on open
Overflow-y:     auto
Backdrop:       none — panel is opaque

Content: single scroll column, no inner tabs
Order:
  1. Eyebrow      DM Mono / domain + theory name / ink-faint
  2. Title        Fraunces 40px / 200 / ink
  3. Rule         1px / var(--line)
  4. Section label "CORE TENDENCY" / DM Mono / ink-mid
  5. Definition   Newsreader italic 15px / ink
  6. Rule
  7. Section label "FACETS" or "MINI-THEORY" or "PATTERNS"
  8. Sub-items    varies by domain
  9. Rule
  10. Section label "IN PRACTICE"
  11. Example     Newsreader 13.5px / border-left 1.5px gold at 30% / ink-mid italic
  12. (Attachment only) Rule + continuity note in ink-faint italic 12px
```

---

## Animation — Unchanged from v0.1

```
--ease-bloom:    cubic-bezier(0.34, 1.2, 0.64, 1)
--ease-panel:    cubic-bezier(0.4, 0, 0.2, 1)
--ease-galaxy:   cubic-bezier(0.4, 0, 0.2, 1)

Moon bloom:              350ms ease-bloom, stagger 0 / 60ms
Moon collapse:           250ms ease
Panel slide in:          400ms ease-panel
Panel slide out:         280ms ease
Galaxy → domain:         550ms ease-galaxy
Node hover:              180ms ease
Node dim (non-active):   300ms ease
Field region highlight:  250ms ease
Glow halo appear:        200ms ease
```

---

## Galaxy View — Cluster Rendering

```
Each cluster is a miniaturized version of its domain's actual structure.

Big Five cluster (scale ~0.45):
  5 planet nodes in pentagon, radius ~85px from cluster center
  No edges visible
  Domain label above: Fraunces 64px / 200 italic / ink at 60% opacity

SDT cluster (scale ~0.45):
  3 planet nodes in triangle, radius ~85px
  No edges visible
  Domain label above: same treatment

Attachment cluster (scale ~0.45):
  2D field plane rendered as a small rectangle (~130×100px)
  Faint axis lines visible within
  4 region labels at corners in DM Mono 7px
  Domain label above: same treatment

On cluster hover:
  Glow halos on nodes become visible
  Domain label opacity → 85%
  Cursor: pointer

On cluster click → domain enter transition:
  Selected cluster: scales to 100%, translates to center (550ms ease-galaxy)
  Other clusters: opacity → 0.3, scale → 0.4, drift to edges (550ms ease-galaxy)
```

---

## What Not To Do — Specific

The previous "What Not To Do" was too abstract. These are concrete.

- **Do not render nodes as flat circles with a stroke and solid fill.** Every node requires a radial gradient suggesting spherical volume. No exceptions.
- **Do not leave the canvas as a blank solid color.** Star field and coordinate grid are required elements, not optional decoration.
- **Do not use a light panel surface.** The panel background is dark (#0F1628). A white or cream panel sliding over a dark canvas creates a jarring visual break.
- **Do not add navigation tabs inside the panel.** The panel is one scroll column. No Context/Structures/In Practice tab bar.
- **Do not add top nav tabs for domain switching.** Navigation is spatial. Tabs are not spatial.
- **Do not center attachment region labels.** Labels live at quadrant outer corners.
- **Do not use Material Symbols or any icon library inside the panel body.** Section headers are text only.
- **Do not animate edges at rest.** No flowing dashoffset on idle canvas.
- **Do not introduce a third color.** Gold and warm white only. No blue accents, no green, no per-domain color coding.
- **Do not use Inter, Roboto, system-ui, or Space Grotesk anywhere.**
