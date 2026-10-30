---
name: LAYERED 3D Printing System
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#424754'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#64a8fe'
  on-secondary-container: '#003c70'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display:
    fontFamily: Bagel Fat One
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
  display-mobile:
    fontFamily: Bagel Fat One
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-lg:
    fontFamily: Bagel Fat One
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bagel Fat One
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Bagel Fat One
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Bagel Fat One
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 30px
  badge-display:
    fontFamily: Londrina Solid
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  badge-md:
    fontFamily: Londrina Solid
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.03em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 19px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  spec-code:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  spec-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style
This design system defines an energetic, tactile neo-brutalist experience crafted for the 3D printing and maker community. It blends the structural, unapologetic honesty of industrial fabrication with the playful joy of physical production. 

The aesthetic is anchored in high-contrast neo-brutalism: heavy 3px solid ink boundaries, unblurred hard offset drop shadows, expressive sticker-like badges, and plump silhouette radii. The emotional target is approachable mastery—inviting casual tinkerers and serious rapid-prototyping creators alike into a tactile digital workshop where elements feel physical, stamped, and ready to pick up off the build plate.

## Colors
The color architecture strictly excludes warm neon, greens, pinks, or tertiary spectrums, leaning decisively into an electric mechanical palette:

- **Canvas Background (`#F3F4F6`):** Cool light industrial grey reminiscent of clean factory floors and raw matte polymer.
- **Ink & Structure (`#1F2937`):** Deep carbon charcoal used for all borders, shadows, primary typography, technical specs, and solid utility blocks like footers and terminal bars.
- **Surface Fill (`#FFFFFF`):** Pure white container fill providing extreme contrast against the dark carbon borders.
- **Primary Accent (`#3B82F6`):** Vibrant tool blue for primary interactive triggers, highlighted cards, hero CTA surfaces, and active states.
- **Secondary Accent (`#60A5FA`):** Sky blue tint for layered hover states, secondary highlights, subtle depth backing, and sticker fills.

## Typography
Typography is organized into distinct functional tiers that balance brutalism with character:

- **Headlines & Display ("Bagel Fat One"):** Ultra-fat, rounded letterforms inject immediate charm and toy-like geometry. Reserved for section headers, titles, and hero value propositions.
- **Highlights, Badges & Numbers ("Londrina Solid"):** Hand-cut, chunky, and artisanal. Applied to price callouts, discount banners, sticker elements, and maker stamps.
- **Body Copy ("Space Grotesk"):** A high-clarity proportional grotesk with geometric quirkiness, set to a strict minimum of 17px for effortless scanning amidst high-contrast framing.
- **Specs & Labels ("Space Mono"):** Monospaced precision for technical 3D printing parameters (layer height, filament diameter, infill percentage, nozzle temperature, and technical metadata).

## Layout & Spacing
The layout follows a modular 12-column responsive fluid grid with generous margins and mechanical structural gaps:

- **Desktop (1024px+):** 12 columns, 24px (1.5rem) gutters, and 40px (2.5rem) outer canvas margins. Multi-column component grids (2, 3, or 4 items per row) allow bold borders to create geometric rhythm without crowding.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 24px outer canvas margins.
- **Mobile (< 768px):** 4 columns, 16px (1rem) gutters, 16px (1rem) outer canvas margins. Sticky callouts and cards span full viewport widths minus outer margins.

Vertical rhythm relies on generous intervals (`space-lg` to `space-xl`) to give bulky offset shadows ample breathing room and prevent overlapping silhouettes.

## Elevation & Depth
Elevation is strictly tactile and mechanical—blur radii are entirely prohibited. Depth is constructed exclusively through hard-edge ink projection:

- **Static Containers & Resting Cards:** Projected with `4px 4px 0px #1F2937` accompanied by a continuous `3px solid #1F2937` border.
- **Emphasized Surfaces & Sticky Cart/Checkout Modules:** Projected with `6px 6px 0px #1F2937`.
- **Interactive Press States (Buttons, Chips):** Interactive elements drop from `4px 4px 0px #1F2937` down to `0px 0px 0px #1F2937` on `:active`, translating `transform: translate(4px, 4px)` to simulate an authentic physical tactile switch or micro-switch snap.
- **Sticker Overlays:** Angled at random micro-rotations (-3deg to +3deg) sitting on a hard offset `4px 4px 0px #1F2937` baseline.

## Shapes
The design language enforces a signature chunky curved boundary:

- **Base Radii:** Standard cards, product showcases, modal containers, and inputs maintain a fixed `20px` border radius paired with the `3px solid #1F2937` outline.
- **Interactive Pills & Badges:** Badges, price chips, and action tags can utilize fully circular pill radii (`9999px`) while retaining the uniform 3px boundary and hard shadow.
- **Zero Fractional Radii:** Sharp corners are avoided in favor of friendly injection-molded curvature that mirrors finished filament prints and rounded tooling.

## Components

### Buttons
- **Primary Button:** `#3B82F6` fill, `3px solid #1F2937` border, `20px` border radius, `#FFFFFF` text in "Space Grotesk" Bold or "Bagel Fat One". Hard shadow `4px 4px 0px #1F2937`. Hover changes fill to `#60A5FA` with `6px 6px 0px #1F2937` shadow (translated -2px, -2px). Active snaps to `0px 0px 0px` with translate(4px, 4px).
- **Secondary Button:** `#FFFFFF` fill, `#1F2937` text, `3px solid #1F2937` border, `20px` border radius, `4px 4px 0px #1F2937` shadow.
- **Ghost/Tertiary:** `#F3F4F6` background, transparent border transitioning to `3px solid #1F2937` on focus/hover.

### Product & Filament Cards
- **Base Card:** `#FFFFFF` background, `3px solid #1F2937` border, `20px` corner radius, `4px 4px 0px #1F2937` shadow. Internal padding `1.25rem`.
- **Card Media Area:** `#F3F4F6` backdrop, framed by an internal bottom `3px solid #1F2937` border separating the model photo from technical details.

### Stickers, Price Tags & Chips
- **Price Tag:** Pill or slightly rotated rectangle (-2°), `#3B82F6` or `#60A5FA` background with bold `#1F2937` text in "Londrina Solid". `3px solid #1F2937` border, `3px 3px 0px #1F2937` shadow.
- **Spec Chips (Filament diameter, resin type, spool weight):** `#FFFFFF` fill, `#1F2937` typography in "Space Mono" (12px), `3px solid #1F2937` border, `9999px` pill radius, `2px 2px 0px #1F2937` offset.

### Form Inputs & Selectors
- **Input Fields:** `#FFFFFF` fill, `3px solid #1F2937` border, `20px` radius, `17px` "Space Grotesk" text, `4px 4px 0px #1F2937` hard shadow. Placeholder text in `#1F2937` with 50% opacity. Focused input displays a `#3B82F6` shadow border offset increase.

### Selection Controls
- **Checkboxes & Radios:** `24px x 24px`, `3px solid #1F2937` border, `6px` radius for checkboxes, full circle for radios. Unchecked state is `#FFFFFF`. Checked state fills `#3B82F6` with a chunky `#1F2937` checkmark.

### Domain-Specific Components
- **Print Bed Status Box:** Dark-mode container (`#1F2937` fill, `#FFFFFF` text, `3px solid #1F2937` border) displaying nozzle temperature and layer time using "Space Mono" glowing labels.
- **Filament Color Swatch Selector:** Bold circular buttons with `3px solid #1F2937` outlines, expanding with a `4px 4px 0px #1F2937` shadow and `#3B82F6` accent rings when active.