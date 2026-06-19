# Marina Contractor Insurance — Build QA

**Domain:** marinacontractorinsurance.com
**Niche:** Insurance for marine & waterfront construction contractors — dock, pier, marina, seawall, dredging, pile driving (CCA division)
**Identity:** "Harbor" — deep ocean navy (primary) / sunset coral (secondary) / warm sand-gold (accent); Manrope + Inter; water-wave + nautical rope motif.

## Build checklist
- [x] Next.js 15 (app router) + React 19 + Tailwind + TS + motion + lenis
- [x] 6–10 section homepage (Hero, TrustBar, ServicesGrid, WhyChooseUs, Process, CoverageMap, Stats, Testimonials, FAQ, FinalCTA)
- [x] 8 service pages (marine-general-liability, jones-act-uslh, general-liability, workers-compensation, commercial-auto, inland-marine-equipment, builders-risk, umbrella-excess-liability)
- [x] 8 location pages (waterfront regions)
- [x] Blog with 5 niche posts
- [x] Quote + contact forms → Netlify webhook (tenant=josh&site=marinacontractorinsurance.com)
- [x] 20 FAQs on homepage + each service + each location page (FAQPage JSON-LD)
- [x] Full SEO: sitemap.ts, robots.ts, llms.txt, per-page OG/Twitter, JSON-LD (InsuranceAgency, InsuranceService, FAQPage, BreadcrumbList, BlogPosting)
- [x] ≥10 generated images (11 via HF FLUX.1-schnell)
- [x] `pnpm run build` GREEN
- [x] All files committed (incl. package.json, netlify.toml)

## Key niche facts (accuracy anchors)
- **THE critical coverage gap:** standard workers' comp does NOT cover crew on navigable water. That work falls under the **Jones Act** (seamen on vessels) and **USL&H / Longshore** (over-water construction workforce). Missing this is the #1 marine contractor exposure.
- GL pain point: standard GL excludes **watercraft** and **operations over navigable water** — we place true marine GL.
- Common losses: sunken/damaged equipment (barge, crane, pile driver — equipment floater + hull/P&I), storm/wave damage to structures under construction (builder's risk), maritime injury claims (Jones Act/USL&H).
- Equipment floater = the movable marine gear; hull = the vessel itself; P&I = vessel liability. Coordinated, not the same.
- Typical marine GL cost: $2,500–$9,000/yr for $1M/$2M. Full program ≈ $9k–$35k/yr (higher than inland due to maritime exposure).
- Certificates & additional-insured endorsements turned around fast for marina owners, ports, Army Corps.
- Agency: Contractors Choice Agency, Chandler AZ, founded 2005, NPN 8608479, licensed all 50 states.

## Distinct identity (vs. other trade sites in the batch)
- Harbor palette, NOT the green/copper earth tones. Navy `#0B3D5C`, coral `#E76F51`, sand-gold `#E9C46A`.
- Manrope + Inter (not Sora).
- Water-wave + nautical motif (horizon-band = wave gradient, Anchor logo icon).
