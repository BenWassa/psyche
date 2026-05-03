# Psyche Map — Design System
**v0.1 · Prototype reference**

---

## Principles

**Gravity without grimness.** Light mode, warm tones, serious typography. The UI doesn't editorialize — it presents difficult content (Neuroticism, avoidant attachment, ego depletion) with the same visual weight as positive content. No color-coding happiness. No affirmative microcopy.

**Honest visual grammar.** The map system uses two distinct grammars — solar system and field — chosen by theory structure, not aesthetics. A designer should not override this to make domains look more consistent. The inconsistency is the point.

**Parsimony as restraint.** At every layer: fewer labels, shorter copy, fewer visible edges. The map shows structure. The panel shows content. These don't overlap.

---

## Color Tokens

```
--bg:           #ECEAE2   /* Warm off-white. Main canvas. */
--bg-recede:    #E4E1D8   /* Slightly deeper. Inactive cluster backgrounds. */
--surface:      #F5F3EE   /* Panel, modal, card surfaces. */
--ink:          #1C1810   /* Primary text. Warm near-black. */
--ink-mid:      #6A6050   /* Secondary text, labels, annotations. */
--ink-faint:    #A89E90   /* Tertiary. Axis labels, hints. */
--line:         rgba(28,24,16,0.10)   /* Edges, dividers, borders. */
--line-dim:     rgba(28,24,16,0.05)   /* Orbit rings, grid. */
--overlay:      rgba(28,24,16,0.45)   /* Canvas dim when panel open. Not used in v0.1. */
```

### Domain Colors
Each domain has a primary color (nodes, active edges, panel accents) and a tint (orbit rings, bloom halos, field washes).

```
Personality (Big Five)
  --d-personality:        #4A6582   /* Muted slate blue */
  --d-personality-tint:   rgba(74,101,130,0.10)

Motivation (SDT)
  --d-motivation:         #7A5230   /* Warm terracotta */
  --d-motivation-tint:    rgba(122,82,48,0.10)

Attachment
  --d-attachment:         #3D5C48   /* Deep sage */
  --d-attachment-tint:    rgba(61,92,72,0.10)
```

### Node State Colors
```
--node-resting:   var(--surface)             /* Fill */
--node-hover:     #FFFFFF                    /* Fill on hover */
--node-active:    var(--domain-color)        /* Fill when selected */
--node-dimmed:    rgba(236,234,226,0.5)      /* Receded nodes */
```

---

## Typography

### Fonts
```
Display (node labels, panel titles, domain names):
  Fraunces — variable, opsz 9–144
  Weights used: 200 (light italic), 400 (regular), 600 (semibold)
  Load: ?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,400;0,9..144,600;1,9..144,200

Body (panel content, definitions, examples):
  Newsreader — serif, editorial weight
  Weights used: 300, 400, italic 300
  Load: ?family=Newsreader:ital,wght@0,300;0,400;1,300

Label / Mono (axes, coordinates, eyebrows, tags):
  DM Mono — monospaced, light
  Weights used: 300, 400
  Load: ?family=DM+Mono:wght@300;400
```

### Scale
```
Node label (planet):    Fraunces 13px / 400 / ls 0.5px
Node label (moon):      DM Mono 9px / 300 / ls 2px / uppercase
Node label (hub):       DM Mono 9px / 300 / ls 3px / uppercase
Domain cluster label:   Fraunces 16px / 200 italic
Panel eyebrow:          DM Mono 8.5px / 300 / ls 3px / uppercase
Panel title:            Fraunces 36px / 200 / opsz 36
Panel section label:    DM Mono 8px / 300 / ls 3px / uppercase
Panel definition:       Newsreader 15px / 300 italic / lh 1.75
Panel example:          Newsreader 13.5px / 300 / lh 1.8 / color ink-mid
Axis label (field):     DM Mono 9px / 300 / ls 2px / uppercase / ink-faint
Region label (field):   Fraunces 11px / 200 italic / ink-mid
```

---

## Spatial Layout

### Canvas
- Full viewport, no scroll
- SVG viewBox: `0 0 800 600` (desktop prototype)
- Graph area: left ~60% of canvas (0–480px)
- Panel area: right ~40% (480–800px) — slide-in, not static

### Solar System Grammar — Node Positions
```
Hub (center):       cx 280, cy 300
  radius: 44px

Planets (pentagon around hub):
  orbit radius from hub: 190px
  planet radius: 30px
  angle offset: -90° (first planet at top)

Moons (bloom from planet on click):
  orbit radius from parent planet: 88px
  moon radius: 19px
  angle: outward from hub, ±40° off the planet-hub axis
  bloom from planet center, not from hub
```

### Field Grammar — Attachment Plane
```
Plane bounds:       x: 80–480, y: 60–520 (within 800×600 canvas)
Axes cross at:      280, 290 (center of plane)

X-axis label (left):   "low avoidance"   right end: "high avoidance"
Y-axis label (bottom): "low anxiety"     top end:   "high anxiety"

Quadrant regions (soft, gradient-edged):
  Secure:      x<280, y>290   (low avoid, low anxiety)
  Preoccupied: x<280, y<290   (low avoid, high anxiety)
  Dismissing:  x>280, y>290   (high avoid, low anxiety)
  Fearful:     x>280, y<290   (high avoid, high anxiety)

Region boundaries: no hard lines. Each quadrant has a 60px gradient
fade zone at each axis crossing. Use radial-gradient washes in
domain tint color, opacity 0.12–0.18.

Region labels: placed near outer corner of each quadrant, not centered.
Clicking anywhere in a region activates that region's panel content.
```

### Galaxy View (Entry State)
```
Three domain clusters visible simultaneously, loosely placed:
  Personality cluster:   cx ~160, cy ~200
  Motivation cluster:    cx ~400, cy ~160
  Attachment cluster:    cx ~300, cy ~430

Each cluster: a loose arrangement of its planet nodes, no edges visible,
domain label prominent. Scale: ~55% of full domain view size.

On enter: selected cluster scales to 100% and shifts to center.
Others scale to 40%, opacity 0.35, drift to canvas edges.
```

---

## Edges and Orbits

```
Hub → planet edge:
  stroke: var(--domain-color)
  stroke-width: 1.2px
  opacity: 0.22 (resting) / 0.55 (planet active)
  style: solid

Planet → moon edge (bloom only, not visible at rest):
  stroke: var(--domain-color)
  stroke-width: 1px
  opacity: 0 → 0.4 on bloom
  style: dashed, dasharray 4 5

Orbit rings (decorative, optional):
  stroke: var(--line-dim)
  stroke-width: 1px
  style: dashed, dasharray 2 8
  only shown on planet hover, not at rest

Field axes:
  stroke: var(--line)
  stroke-width: 1px
  solid, full span of plane
```

---

## Animation

### Timing Functions
```
--ease-bloom:    cubic-bezier(0.34, 1.2, 0.64, 1)   /* Slight spring. Moon reveal. */
--ease-panel:    cubic-bezier(0.4, 0, 0.2, 1)        /* Smooth decel. Panel slide. */
--ease-galaxy:   cubic-bezier(0.4, 0, 0.2, 1)        /* Domain transition. */
--ease-dim:      ease                                 /* Node dimming. */
```

### Durations
```
Moon bloom (appear):          350ms  ease-bloom
Moon collapse (disappear):    250ms  ease
Panel slide in:               400ms  ease-panel
Panel slide out:              280ms  ease
Galaxy → domain transition:   550ms  ease-galaxy
Domain → galaxy return:       400ms  ease-galaxy
Node hover state:             180ms  ease
Node dim (non-active nodes):  300ms  ease-dim
Field region highlight:       250ms  ease
```

### Bloom Mechanic Detail
```
1. User clicks planet node
2. Simultaneously:
   a. Clicked planet: stroke → domain color full opacity, fill → node-active
   b. Other planets: opacity → 0.25, scale → 0.92 (transform-origin: node center)
   c. Hub edges to other planets: opacity → 0.08
   d. Moon nodes: scale from 0 → 1, opacity 0 → 1, from planet center outward
   e. Planet → moon edges: opacity 0 → 0.4
3. Stagger moon appearances: 0ms / 60ms (first and second moon)
4. Panel slides in from right simultaneously with bloom start

Collapse (ESC or back-click):
1. Moons scale → 0, opacity → 0 (150ms)
2. After 80ms: other planets restore opacity/scale (250ms)
3. Panel slides out simultaneously with collapse start
```

---

## Panel — Slide-in

```
Width:          320px
Height:         100vh
Position:       fixed right 0, top 0
Background:     var(--surface)
Border-left:    1px solid var(--line)
Padding:        48px 36px 60px
Transform:      translateX(100%) → translateX(0) on open
Overflow-y:     auto

Content order:
  1. Eyebrow      DM Mono / domain + theory
  2. Title        Fraunces 36px / trait or need or style name
  3. Rule         1px / var(--line)
  4. Section label: "Core Tendency"
  5. Definition   Newsreader italic 15px
  6. Rule
  7. Section label: "Facets" or "Mini-theory" or "Patterns" (domain-adaptive label)
  8. Sub-items    varies by domain (tags, list, or linked node label)
  9. Rule
  10. Section label: "In Practice"
  11. Example     Newsreader 13.5px / border-left 2px domain color @ 30% opacity
  
  Attachment only — append after example:
  12. Rule
  13. Continuity note  (italic, ink-faint, 12px Newsreader)
      "These regions describe tendencies on a continuous spectrum.
       Most people show patterns across multiple styles."
```

---

## What Not To Do

- Do not use purple gradients, blue-white backgrounds, or glowing neon
- Do not add hover tooltips — content lives in the panel only
- Do not animate edges continuously at rest (no flowing dashoffset on idle state)
- Do not use the same visual grammar for Attachment as for Big Five/SDT — the difference is intentional
- Do not add color-coded valence (green = good, red = bad) — Neuroticism and Fearful Attachment get the same visual treatment as Openness and Secure
- Do not label the example section with "Example" — use "In Practice"
- Do not use Inter, Roboto, or system-ui anywhere
