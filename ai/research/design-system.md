# Design System — Marina Contractor Insurance ("Harbor")

Light, corporate, waterfront-modern. Distinct from sibling CCA sites (NOT the green/copper earth-toned identity of other trade sites).

## Palette (Tailwind token NAMES are shared across the component architecture; VALUES remapped here)
- **Primary — deep ocean navy** (`clay`): `#0B3D5C`, dark `#072B41`, light `#155779`
- **Secondary — sunset coral** (`sage`): `#E76F51`, dark `#C8553A`, light `#F08C73`
- **Accent — warm sand-gold** (`gold`): `#E9C46A`
- Backgrounds: `cream #FBF8F3`, `sand #F0EBE3`, white
- Text: `espresso #0E2230` (headings), `cocoa #36495A` (body), `mocha #6B7B89` (muted)
- Border: `adobe #DEE2E0`

## Typography
- Headings: **Manrope** (modern, confident nautical feel) via next/font
- Body: **Inter**

## Motifs
- **Water-wave band** (`horizon-band`): layered navy→coral→sand water lines
- **Ripple texture** (`grain`): faint wave/ripple grid texture for hero/CTA bands
- Wave top-edge accent on cards (`card-arch::before`): navy→coral→sand
- Nautical rope/cleat divider (`arch-divider`): stacked navy/coral/sand wave mark

## Components & motion
- motion (Framer) staggered hero entrances, scroll-reveal (`FadeIn`), count-up stats (`Counter`)
- lenis smooth scroll (`SmoothScroll`)
- All animations honor `prefers-reduced-motion`

## Generated imagery (11, HF FLUX.1-schnell)
hero, dock-construction, pile-driving, barge-crane, marina-build, marine-crew,
waterfront-project, marine-fabrication-shop, marine-trucks, crew-portrait, og-image.
Ocean navy / sunset coral / sand-gold tones; photorealistic marine construction, no text.
