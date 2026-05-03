---
name: Psyche Map
description: An interactive encyclopedia of psychology with structural honesty and evidence transparency
colors:
  surface: "#f9f8f6"
  surface-dim: "#f0efe9"
  surface-bright: "#ffffff"
  on-surface: "#2c2c2a"
  on-surface-variant: "#5c5c5a"
  outline: "#8c8c8a"
  outline-variant: "#d6d5cf"
  primary: "#a65d57"
  primary-container: "#ecd9d7"
  on-primary-container: "#2c2c2a"
  domain-cognition: "#6b7f8c"
  domain-self: "#7a8b79"
  domain-motivation: "#cba36b"
  domain-relationships: "#c28f8f"
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
    fontFamily: "Inter, Georgia, system-ui, sans-serif"
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

**Creative North Star: "Paper & Terracotta"**

Psyche Map is a compact, editorial interface for evidence-first psychology. The system prioritizes structural honesty while using a warm paper palette and restrained terracotta accents to create an approachable, printed-journal feel. Depth is achieved with soft shadows and subtle surface layering rather than high-contrast color masses; interaction feels calm, purposeful, and text-forward.

The system explicitly rejects loud, saturated UI trends and dark-mode-led aesthetics. Visual choices should support comprehension and reading comfort.

**Key Characteristics:**
- Light, paper surfaces with warm, human-centered typography
- Terracotta as a restrained active accent for focus and selection
- Soft, ambient shadows for tactile depth
- Serif display + neutral body type for readable editorial text
- Structural honesty: theories rendered in their native visual grammar
- Progressive disclosure via inspector panels and focused cards

## 2. Colors

The palette is **light, warm, and editorial**. Roles: paper surfaces, readable text, and a terracotta accent used sparingly for active states and focus.

### Primary (Terracotta)
- **Terracotta** (`#a65d57`): The single active accent color. Used for borders, focus states, selected items, and subtle UI emphasis. Apply sparingly (≤10% of any screen) so the accent remains meaningful.
- **Terracotta Container** (`#ecd9d7`): A soft terracotta wash used as a gentle background tint for selected or related content groupings (low opacity or subtle fills).
- **On-Terracotta** (`#f9f8f6` / `#ffffff`): Prefer a light on-terracotta color for WCAG contrast when terracotta is used as a fill; otherwise use the primary surface color for labels on terracotta outlines.

### Neutral (Paper + Text)
- **Paper Surface** (`#f9f8f6`): The primary app background — warm off-white, creating a readable, low-fatigue canvas.
- **Surface Dim** (`#f0efe9`): Recessed surfaces and inset areas.
- **Surface Bright** (`#ffffff`): Cards, panels, and the inspector drawer — crisp but warm white.
- **On Surface** (`#2c2c2a`): Primary text color — warm charcoal for high legibility.
- **On Surface Variant** (`#5c5c5a`): Secondary text, metadata, and labels.

### Structural (Borders & Dividers)
- **Outline** (`#8c8c8a`): Primary borders and dividers.
- **Outline Variant** (`#d6d5cf`): Faint dividers and low-contrast separators.

### Domain Palette (Contextual Tags Only)
- **Cognition Slate** (`#6b7f8c`): Domain tint for Cognition (5–10% opacity).
- **Self Sage** (`#7a8b79`): Domain tint for Self & Identity (5–10% opacity).
- **Motivation Ochre** (`#cba36b`): Domain tint for Motivation (5–10% opacity).
- **Relationships Rose** (`#c28f8f`): Domain tint for Relationships (5–10% opacity).

**Named Rules:**

**The Accent Restraint Rule.** Terracotta is active-state only. It appears on hover, focus, selection, and active navigation—never as a decorative fill or large mass.

**The Neutral Warmth Rule.** Neutrals are warm and paper-like to improve reading comfort and avoid clinical coldness.

**The Domain Color Rule.** Domain-specific colors are for contextual tagging at low opacity (5–10%) only; never saturated fills.

## 3. Typography

**Display Font:** Fraunces (serif, variable weight 300–900)  
**Body Font:** Inter (system-friendly UI face; use a readable serif for long-form body copy where appropriate)  
**Label/Mono Font:** DM Mono (monospace, weight 400–500)

**Character:** Fraunces provides authoritative display typography while `Inter` (or a serif for long-form content) provides readable UI/body text. DM Mono remains for labels and metadata.

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
- **Character:** Calm, readable, and tactile. Cards are the primary content containers and should feel like cut paper on a desk.
- **Shape:** 12px radius (`radius-md`).
- **Background:** Surface Bright (`#ffffff`) on top of Paper Surface (`#f9f8f6`).
- **Border:** 1px solid Outline Variant (`#d6d5cf`) at rest.
- **Shadow:** Interactive Rest at rest; elevates on hover to Interactive Hover.
- **Hover / Focus:** Border or small accent shifts to Terracotta (`#a65d57`) for focused/selected states. Node title may shift to Terracotta for emphasis. All transitions are 0.2–0.25s ease-out.


### Buttons
- **Primary Button:** Terracotta background (`#a65d57`) with light surface text (`#ffffff` or `#f9f8f6`), padding 12px × 24px, radius 12px, label in DM Mono. Hover: subtle shadow deepening; focus: clear outline.
- **Ghost Button:** Transparent background, on-surface text (`#2c2c2a`), 1px border (`#8c8c8a`). On hover: border and text shift to Terracotta.


### Navigation Items
- **Sidebar Item (inactive):** Transparent background, on-surface text (`#2c2c2a`), padding 12px × 16px, radius 8px. Hover: background shifts to a faint Terracotta Container (`#ecd9d7`). Focus: clear outline.
- **Sidebar Item (active):** Terracotta Container background (`#ecd9d7`), Terracotta text (`#a65d57`). Active state is distinct and stable.

### Typography Elements
- **Panel Tags:** DM Mono, 11px, 500 weight, 0.08em letter-spacing, uppercase. Color: Secondary Text. Used to label inspector sections (e.g., "INSPECTOR / HIERARCHICAL TRAIT").
- **Body Text:** Newsreader, 16px, 300 weight, 1.7 line-height. Color: Primary Text. Max 70ch width for legibility.


### Inputs & Forms
- **Input Field:** Surface Bright background, Outline border (1px), radius 8px, padding 12px × 16px, text in On Surface color. On focus: border shifts to Terracotta; on error: use a subtle red tint.

## 6. Do's and Don'ts

### Do:

- **Do** use Terracotta sparingly and only on active, interactive, or focused states. If more than 10% of a screen is terracotta, reduce.
- **Do** favor serif display headings while using neutral body typography (Inter or a readable serif for long-form) for UI and body copy as appropriate.
- **Do** use soft, diffused shadows for elevation. Avoid sharp drop shadows or directional lighting effects.
- **Do** maintain clear structural hierarchy through theory-appropriate visual grammars (grids for hierarchies, fields for 2D planes, timelines for processes). Never force different structures into the same visual mold.
- **Do** distinguish evidence quality visually (cornerstone vs. supported vs. revised). Tags and subtle color tints at very low opacity can carry this burden.
- **Do** respect `prefers-reduced-motion`. All transitions should be toggleable off or respect the user preference without breaking layout.
- **Do** keep line lengths capped at 65–75 characters for body text. Prevent wall-of-text readability issues.
- **Do** use the domain palette (Cognition Blue, Self Sage, Motivation Ochre, Relationships Rose) as very subtle background tints (5–10% opacity) or tag colors only. Never saturated.

### Don't:

- **Don't** use Terracotta as a background fill or large mass. It's an accent, not a primary color.
- **Don't** abandon serif for core editorial content; use neutral UI faces like Inter for chrome and small UI copy only.
- **Don't** add sharp, directional shadows or glassmorphism effects. This is not a dark-mode tech tool; it's a scholarly interface.
- **Don't** use pop psychology language, reductive personality labeling, or overly playful tone in any copy. Maintain rigor and evidence-based framing.
- **Don't** force theories into identical card layouts. A hierarchy should look like a hierarchy, a 2D field should look like a field, etc. Structural honesty is non-negotiable.
- **Don't** hide evidence quality. If a theory is in revision or not as well-supported as cornerstone research, surface that visually and textually.
- **Don't** use animated gradients, neon, or high-saturation color fills. The interface should feel refined, not aggressive.
- **Don't** create nested cards or complex container hierarchies. Keep nesting shallow and intentional.
- **Don't** rely on color alone to communicate state. Always pair color changes with text, icons, or other semantic cues.
