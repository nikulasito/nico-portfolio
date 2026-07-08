---
name: Kinetic Forge
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#c5c7c8'
  on-tertiary: '#2e3132'
  tertiary-container: '#8f9192'
  on-tertiary-container: '#272a2b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a premium developer persona, blending the hyper-functional utility of high-end developer tools with the editorial elegance of modern fintech. The brand personality is professional, technical, and precise, yet feels approachable through soft edges and fluid transitions.

The design style is a synthesis of **Minimalism** and **Glassmorphism**. It prioritizes heavy whitespace and a strictly governed information hierarchy to ensure technical projects remain the focus. Depth is achieved not through heavy skeuomorphism, but through light-refracting layers, subtle inner-glows, and microscopic borders that mimic high-end hardware interfaces.

## Colors

The palette is anchored in a deep, near-black environment to maximize contrast and reduce eye strain during extended viewing. 

- **Primary (Indigo):** Used for primary actions, active states, and brand-critical highlights.
- **Secondary (Emerald):** Reserved for success states, secondary metrics, and "live" indicators.
- **Surface:** A tiered system of grays starting from the background (#09090B) to the primary surface (#111827).
- **Accents:** Utilize low-opacity versions of Indigo and Emerald for "aura" glows and glassmorphic tints.
- **Borders:** Subtle 1px lines using `#FFFFFF10` (10% white) to define shapes against the dark background without creating visual noise.

## Typography

This design system utilizes a trio of typefaces to establish a technical yet readable environment. 

1. **Geist** handles the heavy lifting for headlines, providing a precise, geometric feel that screams "modern engineering." 
2. **Inter** is the workhorse for body text, ensuring maximum legibility across all browser engines.
3. **JetBrains Mono** is used sparingly for labels, metadata, and code snippets to inject a developer-centric aesthetic.

Type scales are generous. On desktop, large display type should be used to create clear entry points into sections. On mobile, sizes are aggressively reduced and letter-spacing is tightened to ensure titles do not wrap awkwardly.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid hybrid grid**. Content is contained within a maximum width of 1200px to maintain readability on ultra-wide monitors, while fluidly scaling down to mobile widths.

- **Desktop:** 12-column grid with 24px gutters. Use large section gaps (120px+) to create a "gallery" feel.
- **Mobile:** 4-column grid with 20px side margins.
- **Rhythm:** All spacing (padding, margins, gaps) must be a multiple of the 8px base unit. 

Components should use "Stack" patterns (Vertical or Horizontal) to maintain consistent internal rhythm. Heavy use of `gap` properties ensures that layout logic remains decoupled from the components themselves.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Glassmorphism**.

1. **Level 0 (Base):** Background color #09090B.
2. **Level 1 (Surface):** Cards and containers use #111827. They should feature a 1px border (#FFFFFF10).
3. **Level 2 (Float):** Modals or popovers use the surface color but add a 20px backdrop blur (saturate 150%) and a soft ambient shadow.

**Shadows:** Shadows are not black; they are ultra-diffused Indigo or Neutral tints with 0% offset and a wide (40px+) blur radius, used exclusively for the highest-priority elements.

## Shapes

The design system employs a **Rounded** shape language. This softens the technical nature of the content and makes the UI feel more modern and premium.

- **Cards & Primary Sections:** Use `rounded-xl` (1.5rem / 24px) to create a soft, friendly frame for complex data.
- **Buttons & Inputs:** Use `rounded-lg` (1rem / 16px) for a comfortable touch target that remains distinct from the larger container shapes.
- **Chips & Tags:** Use fully rounded (pill) shapes for status indicators and technology tags.

## Components

### Buttons
- **Primary:** Solid Indigo fill with white text. On hover, apply a subtle Indigo outer glow (bloom).
- **Secondary:** Ghost style. 1px border (#FFFFFF15) with a slight #FFFFFF05 background fill.
- **Tertiary:** Text only with a Chevron-right icon. Transition color to white on hover.

### Cards
Cards are the primary container. They must feature a subtle linear gradient border (top-left to bottom-right) from #FFFFFF15 to #FFFFFF05. Background should be #111827 at 80% opacity with a 12px backdrop blur.

### Chips & Tags
Used for tech stacks (e.g., "React", "Rust"). Small caps using JetBrains Mono. Border 1px, no fill. On hover, fill with the primary color at 10% opacity.

### Inputs
Fields should be dark, using #09090B as the background and #111827 as the border. Focus state moves the border color to Primary Indigo and adds a subtle 2px Indigo outer glow.

### Lists
Project lists should use a horizontal "row" format with metadata in JetBrains Mono. On hover, the entire row should lift slightly with a background change to #111827.