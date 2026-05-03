---
name: Psyche Map
description: An interactive encyclopedia of psychology with structural honesty and evidence transparency
colors:
  surface: "#0a0f1e"
  surface-dim: "#111a31"
  surface-bright: "#15213a"
  on-surface: "#f2eadb"
  on-surface-variant: "#b7b0a1"
  outline: "#56607d"
  outline-variant: "#22304f"
  primary: "#c49a3c"
  primary-container: "rgba(196, 154, 60, 0.16)"
  on-primary-container: "#f6e7bf"
  domain-cognition: "#6f89c8"
  domain-self: "#7db08e"
  domain-motivation: "#d3a85a"
  domain-relationships: "#d08c8c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.3
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  md: "12px"
spacing:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  xxl: "24px"
elevation:
  soft: "0 16px 40px rgba(0, 0, 0, 0.38)"
  interactive-rest: "0 4px 10px rgba(0, 0, 0, 0.18)"
  interactive-hover: "0 18px 36px rgba(0, 0, 0, 0.26)"
components:
  interactive-node:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
    border: "1px solid {colors.outline-variant}"
  interactive-node-hover:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.primary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  sidebar-item:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "8px"
    padding: "12px 16px"
  sidebar-item-active:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.primary}"
    rounded: "8px"
    padding: "12px 16px"
---

# Design System: Psyche Map

## 1. Overview

**Creative North Star: "The Mind's Codex"**

Psyche Map is a scholarly, editorial interface designed for intellectuals seeking evidence-based understanding of psychology. The system prioritizes structural honesty over visual uniformity—each theory is rendered in a visual grammar that reflects its actual architecture. The aesthetic combines midnight-canvas simplicity with gold accents and cream typography, evoking a refined encyclopedia or research journal. Depth is achieved through soft, diffused shadows rather than drama; interaction feels exploratory and purposeful.

The system explicitly rejects pop psychology aesthetics, overly playful educational design, and generic SaaS dark-mode conventions. Every visual choice serves comprehension.

**Key Characteristics:**
- Dark, midnight canvas with cream typography and scholarly gold accents
- Soft, ambient shadows for tactile depth
- Serif typography for authority and legibility
- Structural honesty: theories rendered in their true visual form
- Progressive disclosure: complex content revealed through inspector panels
- Evidence quality visibly distinguished across all content

## 2. Colors

The palette is **dark, scholarly, and intentional**. Three color roles carry the system: a midnight surface for focus, cream for legible text, and gold for active states and emphasis.

### Primary (Scholarly Gold)
- **Scholarly Gold** (`#c49a3c`): The single accent color, used on active borders, hover states, and interactive highlights. Applied sparingly (≤10% of any screen) to maintain rarity and impact. Referenced in primary buttons, focused navigation items, and selected content.
- **Gold Container** (`rgba(196, 154, 60, 0.16)`): A semi-transparent gold wash used as background tint for related content groupings or subtle highlighting. Very low opacity to avoid visual heaviness.
- **Gold Text** (`#f6e7bf`): Supporting text when placed on gold backgrounds or within gold container regions.

### Neutral (Canvas + Text)
- **Midnight Canvas** (`#0a0f1e`): The primary surface for the entire app. Warm-tinted deep blue-black, providing visual rest and focus without the coldness of `#000`.
- **Surface Dim** (`#111a31`): Recessed or secondary surface for inset areas, sidebars, or secondary panels.
- **Surface Bright** (`#15213a`): The highest elevation layer—cards, floating panels, and inspector drawers. Slightly lighter than canvas to create visual separation.
- **Cream Text** (`#f2eadb`): Primary text color. Warm cream-white with slight ink warmth, avoiding harsh `#fff` contrast.
- **Secondary Text** (`#b7b0a1`): Metadata, timestamps, secondary descriptions, and labels. Clearly distinct from primary text but still legible.

### Structural (Borders & Dividers)
- **Strong Outline** (`#56607d`): Prominent borders, dividers, and clear structural lines when high contrast is needed.
- **Soft Outline** (`#22304f`): Faint borders, subtle separators, and low-contrast structural lines. Used for visual rhythm without visual weight.

### Domain Palette (Contextual Tags Only)
- **Cognition Blue** (`#6f89c8`): Tint for Cognition domain tags and backgrounds (5–10% opacity).
- **Self Sage** (`#7db08e`): Tint for Self & Identity domain tags and backgrounds (5–10% opacity).
- **Motivation Ochre** (`#d3a85a`): Tint for Motivation domain tags and backgrounds (5–10% opacity).
- **Relationships Rose** (`#d08c8c`): Tint for Relationships domain tags and backgrounds (5–10% opacity).

**Named Rules:**

**The Accent Restraint Rule.** Scholarly Gold is active-state only. It appears on hover, focus, selection, and active navigation—never as a decorative fill, background wash, or large mass. This rarity makes the accent meaningful.

**The Neutral Warmth Rule.** All neutral values (surfaces and text) are tinted slightly warm—never pure grayscale. This gives the interface humanity and prevents clinical coldness.

**The Domain Color Rule.** Domain-specific colors (Cognition Blue, Self Sage, etc.) are used at very low opacity (5–10%) as subtle background tints or tag backgrounds. They are never saturated fills or primary accent colors. They provide contextual visual interest without distraction.

## 3. Typography

**Display Font:** Fraunces (serif, variable weight 300–900)  
**Body Font:** Newsreader (serif, variable weight 300–700)  
**Label/Mono Font:** DM Mono (monospace, weight 400–500)

**Character:** The pairing of two serifs—Fraunces for display and Newsreader for body—creates a scholarly, editorial voice. Fraunces is elegant and authoritative, Newsreader is highly legible and warm. The monospace DM Mono is used sparingly for labels, tags, and data contexts, adding precision and technical credibility.

### Hierarchy

- **Display** (weight 300, size clamp(3rem, 6vw, 4rem), line-height 1.2): Hero titles and domain introductions. Appears once per page as the visual anchor.
- **Headline** (weight 300, size 24px, line-height 1.3): Card titles, theory names, major section heads within panels. Fraunces.
- **Body** (weight 300, size 16px, line-height 1.7): Content narrative, descriptions, and inspector panel copy. Newsreader. Max line length 70ch to maintain legibility.
- **Label** (weight 500, size 11px, letter-spacing 0.08em, uppercase): Tags, metadata, button text, navigation labels. DM Mono. Always uppercase and tightly letterspaced for precision.

**Named Rules:**

**The Weight Contrast Rule.** Hierarchy is achieved through size and weight contrast (1.5+ ratio between steps), not color shifts. A headline at 24px/300 feels distinct from body at 16px/300. Never flatten a hierarchy by using identical weights at different sizes.

**The Serif Authority Rule.** Typography is always serif (display or body). Avoid sans-serif in core content — it reads too light-handed for a scholarly context. DM Mono is used only for labels and metadata, preserving the serif dominance.

## 4. Elevation

**Psyche Map uses soft, ambient shadows to create tactile depth.** Depth is never created through color alone (no dark/light layer tricks without shadow support). Shadows are diffused and subtle, evoking printed pages or layered paper rather than dramatic digital elevation.

### Shadow Vocabulary

- **Soft Elevation** (`box-shadow: 0 16px 40px rgba(0, 0, 0, 0.38)`): Applied to floating panels (inspector drawer, modals, important overlays). Creates clear visual separation from the background canvas.
- **Interactive Rest** (`box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18)`): Applied to interactive nodes (cards, buttons) at rest. Provides subtle visual lift and depth without drama.
- **Interactive Hover** (`box-shadow: 0 18px 36px rgba(0, 0, 0, 0.26)`): Applied to interactive nodes on hover. Increases shadow blur radius and Y-offset slightly, reinforcing elevation response to interaction.

**Named Rules:**

**The Ambient Depth Rule.** Shadows are ambient and diffused, never sharp or directional. A soft blur and generous Y-offset create the sense of diffuse light, not a hard light source. This aesthetic feels refined and editorial, not volumetric or 3D.

**The Interaction Shadow Rule.** Shadows strengthen on hover / focus / active, signaling state change. At rest, the shadow is minimal. This creates a clear visual hierarchy of interaction depth.

## 5. Components

### Interactive Nodes (Cards)
- **Character:** Refined and scholarly. Cards are the primary content containers. They invite exploration without demanding attention.
- **Shape:** 12px radius (`radius-md`).
- **Background:** Surface Bright (`#15213a`), sitting on Surface (`#0a0f1e`). Clear but not harsh contrast.
- **Border:** 1px solid Soft Outline (`#22304f`) at rest. Subtle visual frame.
- **Shadow:** Interactive Rest at rest; elevates on hover to Interactive Hover.
- **Hover / Focus:** Border color shifts to Scholarly Gold. Node title text shifts to Scholarly Gold. Y-axis lift (-2px transform). Shadow deepens. All transitions are 0.25s ease-out.

### Buttons
- **Primary Button:** Scholarly Gold background, midnight text. Padding 12px × 24px. Radius 12px. All caps label in DM Mono. Hover state: subtle shadow deepening, no color shift (gold remains gold). Focus: clear focus outline.
- **Ghost Button:** Transparent background, cream text, 1px border (Soft Outline). Same padding and radius. On hover: border shifts to Scholarly Gold, text shifts to Gold. Focus: clear focus outline.

### Navigation Items
- **Sidebar Item (inactive):** Transparent background, cream text. Padding 12px × 16px. Radius 8px. Hover: background shifts to a very faint Gold Container. Focus: clear focus outline.
- **Sidebar Item (active):** Gold Container background (`rgba(196, 154, 60, 0.16)`), Scholarly Gold text. Same padding and radius. No additional hover effect needed—active state is always visually distinct.

### Typography Elements
- **Panel Tags:** DM Mono, 11px, 500 weight, 0.08em letter-spacing, uppercase. Color: Secondary Text. Used to label inspector sections (e.g., "INSPECTOR / HIERARCHICAL TRAIT").
- **Body Text:** Newsreader, 16px, 300 weight, 1.7 line-height. Color: Primary Text. Max 70ch width for legibility.

### Inputs & Forms
- **Input Field:** Surface Bright background, Soft Outline border (1px). Radius 8px. Padding 12px × 16px. Text in Primary Text color. On focus: border shifts to Scholarly Gold, optional subtle glow (optional—keep minimal). On error: border shifts to a subtle red-tint (introduce new error color if needed).

## 6. Do's and Don'ts

### Do:

- **Do** use Scholarly Gold sparingly and only on active, interactive, or focused states. If more than 10% of a screen is gold, reduce.
- **Do** preserve serif typography for all display and body content. Sans-serif is not an alternative.
- **Do** use soft, diffused shadows for elevation. Avoid sharp drop shadows or directional lighting effects.
- **Do** maintain clear structural hierarchy through theory-appropriate visual grammars (grids for hierarchies, fields for 2D planes, timelines for processes). Never force different structures into the same visual mold.
- **Do** distinguish evidence quality visually (cornerstone vs. supported vs. revised). Tags and subtle color tints at very low opacity can carry this burden.
- **Do** respect `prefers-reduced-motion`. All transitions should be toggleable off or respect the user preference without breaking layout.
- **Do** keep line lengths capped at 65–75 characters for body text. Prevent wall-of-text readability issues.
- **Do** use the domain palette (Cognition Blue, Self Sage, Motivation Ochre, Relationships Rose) as very subtle background tints (5–10% opacity) or tag colors only. Never saturated.

### Don't:

- **Don't** use Scholarly Gold as a background fill or large mass. It's an accent, not a primary color.
- **Don't** switch to sans-serif fonts for core content. No Inter, no system fonts. Serif + serif pairing only.
- **Don't** add sharp, directional shadows or glassmorphism effects. This is not a dark-mode tech tool; it's a scholarly interface.
- **Don't** use pop psychology language, reductive personality labeling, or overly playful tone in any copy. Maintain rigor and evidence-based framing.
- **Don't** force theories into identical card layouts. A hierarchy should look like a hierarchy, a 2D field should look like a field, etc. Structural honesty is non-negotiable.
- **Don't** hide evidence quality. If a theory is in revision or not as well-supported as cornerstone research, surface that visually and textually.
- **Don't** use animated gradients, neon, or high-saturation color fills. The interface should feel refined, not aggressive.
- **Don't** create nested cards or complex container hierarchies. Keep nesting shallow and intentional.
- **Don't** rely on color alone to communicate state. Always pair color changes with text, icons, or other semantic cues.
