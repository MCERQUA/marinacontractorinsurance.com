// Centralized site data — used across nav, footer, schema, CTAs
// Marina Contractor Insurance — dock, pier, marina & waterfront construction contractors

export const SITE = {
  name: "Marina Contractor Insurance",
  legalName: "Marina Contractor Insurance (by Contractors Choice Agency)",
  domain: "marinacontractorinsurance.com",
  url: "https://marinacontractorinsurance.com",
  tagline: "Insurance for Marina, Dock & Waterfront Construction Contractors",
  description:
    "Specialized commercial insurance for marine construction contractors — dock & pier construction, marina build & repair, boat lifts, dredging, seawalls, revetments, and pile driving over water. Marine general liability, Jones Act & USL&H (Longshore) coverage, workers' comp, builder's risk, equipment floaters, commercial auto, and umbrella. Maritime exposures underwritten right. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "marine-general-liability",
    title: "Marine General Liability Insurance",
    short: "Core coverage for over-water operations",
    description:
      "Third-party bodily injury and property damage protection for your marine construction operations — built for over-water work that standard general liability excludes. Covers docks, piers, marinas, seawalls, and waterfront projects, including the watercraft and over-water exposures most GL policies strip out.",
    icon: "ShieldCheck",
    keywords: ["marine general liability", "marina contractor liability insurance", "over water work insurance", "dock construction liability", "pier builder insurance"],
  },
  {
    slug: "jones-act-uslh",
    title: "Jones Act & USL&H (Longshore) Coverage",
    short: "The critical maritime worker coverage",
    description:
      "Maritime worker protection that standard workers' comp does NOT provide. The Jones Act covers your crew on navigable waters, and USL&H (Longshore and Harbor Workers' Compensation Act) covers over-water marine construction. If your crew works over water — pile driving, dock work, dredging — this coverage is mandatory and frequently overlooked.",
    icon: "Anchor",
    keywords: ["jones act insurance", "uslh coverage", "longshore harbor workers comp", "maritime workers comp", "marine construction workers comp"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "For upland & landside marina operations",
    description:
      "Third-party bodily injury and property damage protection for your landside marina operations — staging yards, fabrication shops, upland site work, and any operation that stays ashore. Paired with marine GL to close the gap where the waterline begins.",
    icon: "ShieldCheck",
    keywords: ["marina contractor general liability", "dock builder GL insurance", "contractor liability insurance waterfront", "upland marine operations insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Pile drivers, divers & marine crews",
    description:
      "Coverage for the injury patterns unique to marine construction — falls into the water, struck-by pile and crane loads, dive injuries, and equipment amputations — correctly coded for marine trades. Coordinated with Jones Act and USL&H so there are no gaps between your landside and over-water crews.",
    icon: "HardHat",
    keywords: ["marina contractor workers comp", "marine construction workers comp", "pile driver workers comp", "commercial diver insurance", "waterfront contractor workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Trucks, trailers & dock-section haulers",
    description:
      "Coverage for the pickup trucks, dump trailers, lowboys, and material haulers that move your crew, pile sections, and dock materials between the yard and the launch — including hired/non-owned vehicles and loading liability.",
    icon: "Truck",
    keywords: ["marina contractor commercial auto", "marine construction truck insurance", "dock material hauling insurance", "trailer insurance marine contractor", "hired non owned auto contractor"],
  },
  {
    slug: "inland-marine-equipment",
    title: "Inland Marine / Equipment Insurance",
    short: "Barges, cranes, pile drivers, dredges & tugs",
    description:
      "Scheduled equipment coverage for the high-value marine gear that makes over-water work possible — barges, crane-mounted pile drivers, dredges, tug boats, workboats, air compressors, and hydraulic equipment. Coverage that follows your gear onto the water and between jobsites.",
    icon: "Wrench",
    keywords: ["marine equipment insurance", "barge insurance", "pile driver equipment insurance", "dredge insurance", "crane insurance marine contractor", "contractors equipment floater"],
  },
  {
    slug: "builders-risk",
    title: "Builder's Risk Insurance",
    short: "Docks, piers & marinas under construction",
    description:
      "Course-of-construction coverage for the dock, pier, marina, or waterfront structure you're building — pile sections, decking, materials, and labor in place — against fire, wind, storm, theft, and vandalism while the project is open to loss over the water.",
    icon: "Building2",
    keywords: ["builder's risk marine construction", "dock builder risk insurance", "pier construction insurance", "marina construction course of construction", "waterfront builder risk"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+",
    description:
      "Layered limits above your marine GL, auto, and employers' liability — essential when a drowning, a crane collapse over water, or a multi-party waterfront loss could otherwise exhaust your primary coverage. Maritime losses trend high; this is the layer that protects your business.",
    icon: "Umbrella",
    keywords: ["marina contractor umbrella insurance", "excess liability marine construction", "marine contractor umbrella policy", "high limit liability waterfront", "jones act umbrella"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "gulf-coast",
    name: "Gulf Coast",
    region: "TX · LA · MS · AL · FL Panhandle",
    blurb:
      "The busiest marine construction market in the country. We insure Gulf Coast marina contractors building and repairing docks, piers, seawalls, and waterfront structures across the bayou, bays, and Intracoastal Waterway — hurricane-zone over-water work that demands real maritime coverage.",
  },
  {
    slug: "florida-southeast",
    name: "Florida & the Southeast",
    region: "Florida · Georgia · Carolinas",
    blurb:
      "Florida and Southeast marina contractors running dock, pier, and boat-lift work in the country's largest recreational-boating market. Programs built for hurricane-zone over-water construction, seawall and revetment repair, and year-round marine operations.",
  },
  {
    slug: "chesapeake-mid-atlantic",
    name: "Chesapeake & Mid-Atlantic",
    region: "Maryland · Virginia · Delaware · NJ",
    blurb:
      "Chesapeake Bay and Mid-Atlantic marine construction — dock and pier builders, marina operators, and shoreline contractors working the Bay's vast waterfront. Coverage tuned to the region's tidal, freeze-thaw, and navigable-water Jones Act/USL&H exposures.",
  },
  {
    slug: "new-england-northeast",
    name: "New England & Northeast",
    region: "ME · NH · MA · RI · CT · NY",
    blurb:
      "New England and Northeast marina contractors building and repairing the region's iconic coastal docks, wharves, and yacht clubs. Programs built for hard-winter pile driving, ice damage repair, and the Northeast's demanding coastal permitting environment.",
  },
  {
    slug: "great-lakes",
    name: "Great Lakes",
    region: "MI · WI · MN · OH · IL · IN · PA · NY",
    blurb:
      "Great Lakes marine construction — dock, pier, seawall, and marina contractors working freshwater ports and inland waterways. Coverage tuned to the Lakes' navigable-water status, Jones Act/USL&H interplay, and freeze-cycle pile damage.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Washington · Oregon",
    blurb:
      "PNW marine contractors running tidal, wet-climate over-water construction — docks, piers, floats, and marine facilities along Puget Sound and the coast. Coverage built for tidal pile driving, dive work, and the region's rigorous aquatic-permitting environment.",
  },
  {
    slug: "california-west-coast",
    name: "California & West Coast",
    region: "California",
    blurb:
      "California marina and waterfront construction — dock, pier, marina, and seawall contractors working the coast, bays, and harbors. Programs built for the Coastal Act, sea-level-rise resilience work, and the state's demanding CSLB and aquatic-permitting environment.",
  },
  {
    slug: "texas-louisiana-gulf",
    name: "Texas & Louisiana Gulf",
    region: "Texas Gulf Coast · Louisiana",
    blurb:
      "Texas and Louisiana Gulf marine construction — the heavy industrial end of over-water work: deep pile driving, dredging, offshore support, and major waterfront facilities. Programs sized for heavy marine equipment, named-storm exposure, and Jones Act crews.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Jones Act & USL&H specialists", icon: "Anchor" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 400, suffix: "+", label: "Marine contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trades contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

