// Rich, niche-accurate content blocks for Marina Contractor Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Truck, HardHat, Wrench, Anchor,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your marine operation",
    description:
      "15-min call or form. Crew size, the work you do (docks, piers, dredging, pile driving), how much is over water vs. upland, your equipment, and what your last carrier excluded.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop marine & maritime markets",
    description:
      "Specialty markets that actually write marine construction — with the Jones Act, USL&H, and over-water GL coverage that standard contractors carriers strip out.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for over-water work",
    description:
      "Marine GL + Jones Act/USL&H + workers' comp + builder's risk + equipment floater + auto, coordinated so there are no gaps between your landside and over-water operations.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Certificates & claims that move fast",
    description:
      "When a marina owner needs an additional-insured certificate before you mobilize, or a maritime claim happens, you reach a person with context — not a queue. 2-hour response.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: Anchor,
    title: "Jones Act & USL&H placed right",
    description:
      "Most contractors brokers don't know that crews on navigable water aren't covered by standard workers' comp. We place the Jones Act and USL&H (Longshore) coverage your over-water crews legally require — the gap that sinks uninsured marine contractors.",
  },
  {
    icon: ShieldCheck,
    title: "Marine GL that covers over-water work",
    description:
      "Standard general liability excludes watercraft and over-water operations. We place true marine general liability that covers the dock, pier, and waterfront work you actually do — not a landside policy that denies the claim when it happens on the water.",
  },
  {
    icon: Wrench,
    title: "Equipment coverage for marine gear",
    description:
      "Barges, cranes, pile drivers, dredges, and tugs are the heart of your operation — and they're expensive. We schedule your marine equipment at replacement cost so a loss over water doesn't come out of your pocket.",
  },
  {
    icon: Building2,
    title: "Builder's risk for docks & piers in progress",
    description:
      "The pile sections, decking, and labor you've put into a dock or pier are a real loss exposure over water. We write builder's risk that covers fire, storm, theft, and wave damage during construction.",
  },
  {
    icon: HardHat,
    title: "Certificates & additional insureds, fast",
    description:
      "Marina owners, ports, and developers require certificates before you mobilize. We turn additional-insured and waiver-of-subrogation endorsements around in minutes, not days.",
  },
  {
    icon: HardHat,
    title: "Run by people who know marine work",
    description:
      "We know how a pile-driving crew runs, what a USL&H claim looks like, and exactly what happens when coverage fails at the waterline. You'll never have to explain a marine jobsite to us.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS: FAQItem[] = [
  {
    q: "What kind of insurance does a marina contractor need?",
    a: "A marine construction contractor needs a bundle built around over-water work: marine general liability (which covers work that standard GL excludes), Jones Act and USL&H (Longshore) coverage for crew on navigable water, workers' comp for landside operations, builder's risk for the dock or pier under construction, an equipment floater for barges and pile drivers, commercial auto for trucks and trailers, and an umbrella. Most marina contractors also need contractor license and surety bonds.",
  },
  {
    q: "Why doesn't standard general liability cover over-water work?",
    a: "Most standard commercial general liability policies contain a watercraft exclusion and exclude operations over navigable water. That means a dock, pier, or marina loss that happens over the water can be denied outright. Marine general liability is specifically built to cover over-water and waterfront operations, and is the core coverage every marine contractor must carry.",
  },
  {
    q: "What is the Jones Act and why does a marine contractor need it?",
    a: "The Jones Act (Merchant Marine Act of 1920) gives maritime workers who are injured on navigable waters the right to sue their employer for negligence — separate from standard workers' comp. If your crew works on a barge, tug, or over navigable water, they are 'seamen' under the Jones Act and standard workers' comp does not cover them. You need Jones Act coverage, full stop.",
  },
  {
    q: "What is USL&H (Longshore) coverage?",
    a: "The Longshore and Harbor Workers' Compensation Act (USL&H) is the federal workers' comp system for maritime workers who are not 'seamen' — including dock builders, pile drivers, and marine construction crews working over navigable water. It sits alongside the Jones Act. If your crew works over water, USL&H coverage is mandatory, and the penalties for not carrying it are severe.",
  },
  {
    q: "How much does marina contractor insurance cost?",
    a: "Most marine contractors pay between $2,500 and $9,000 a year for a $1M/$2M marine general liability policy, depending on revenue, how much work is over water, crew size, equipment value, and claims history. Jones Act/USL&H is rated on over-water payroll. We quote the whole program in about 15 minutes and show you every market's price side by side.",
  },
  {
    q: "What happens if my crew gets hurt on navigable water without Jones Act coverage?",
    a: "It's a serious problem. Without Jones Act and USL&H coverage, you can be personally and corporately liable for the full cost of a maritime injury — and federal penalties under USL&H for failing to carry coverage are steep (often tens of thousands of dollars per day per uncovered worker). This is the single biggest coverage gap for marine contractors.",
  },
  {
    q: "Does workers' comp cover my pile-driving crew on a barge?",
    a: "Only the landside part. If your crew is working on a barge, tug, or over navigable water, standard state workers' comp does not apply — they fall under the Jones Act (if they qualify as seamen) or USL&H (Longshore). We coordinate all three (state comp, Jones Act, USL&H) so every crew member is covered everywhere they work.",
  },
  {
    q: "Does my insurance cover my barge, crane, and pile-driving equipment?",
    a: "General liability does not. Marine equipment — barges, crane-mounted pile drivers, dredges, tugs, workboats, and hydraulic gear — is covered under an inland marine / contractors equipment floater, and watercraft may need a separate protection & indemnity (P&I) or hull policy. We schedule your marine gear at replacement cost so a loss over water is covered.",
  },
  {
    q: "Do I need builder's risk for a dock or pier I'm building?",
    a: "Yes. The pile sections, decking, hardware, and labor you put into a dock, pier, or marina are a real loss exposure while the project is open — fire, storm, wave damage, theft, and vandalism all hit harder over water. Builder's risk (course of construction) covers that structure and materials until the project is complete and accepted.",
  },
  {
    q: "Are my subcontractors covered under my marine insurance?",
    a: "Your marine GL does not extend to independent subcontractors — they should carry their own coverage (including their own Jones Act/USL&H) and name you additional insured. If your subs are uninsured and cause a loss, you can be pulled in. We help set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability.",
  },
  {
    q: "Can you get me a certificate of insurance today?",
    a: "Yes. Once your program is bound we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements — usually within minutes. We know marina owners and ports won't let you mobilize without proof of coverage.",
  },
  {
    q: "Do you insure marine contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes marine contractors from the Gulf Coast and Florida to the Chesapeake, New England, the Great Lakes, and the Pacific coast.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Typically 15 minutes on a call for a standard marine program. Complex operations — heavy dredging, large waterfront facilities, deep-draft pile driving — may take a day or two to place with the right markets, but we move fast and tell you the timeline up front.",
  },
  {
    q: "What limits do marina contractors typically carry?",
    a: "Most marine contractors carry $1M per occurrence / $2M general aggregate for marine GL, plus an umbrella of $2M–$5M. Ports, the Army Corps of Engineers, and large marina owners often require $2M, $5M, or even $10M limits and additional insured status. We size limits to what your contracts actually demand.",
  },
  {
    q: "Do I need commercial auto for my work trucks?",
    a: "Yes. A personal auto policy typically excludes business use and will deny a claim when you're hauling dock sections, pile materials, or a crew to a launch. Commercial auto covers your trucks, dump trailers, and lowboys, including hired/non-owned vehicles when employees drive their own trucks for you.",
  },
  {
    q: "What if I work in a hurricane or named-storm zone?",
    a: "Building on the Gulf, Atlantic, or Florida coast adds real underwriting complexity — wind, named-storm, and storm-surge exposures hit marine builder's risk and equipment hard. We have markets that write these zones and structure your deductibles and coverage so you're protected during the build, not just after.",
  },
  {
    q: "Can you insure marine contractors with prior claims or cancellations?",
    a: "Often, yes. If you've had a maritime claim, a USL&H loss, a cancellation, or been declined, we have excess-and-surplus (E&S) markets for marine contractors other brokers won't touch. Bring your loss runs and we'll find a path.",
  },
  {
    q: "Does my marine GL cover work on boats and yachts?",
    a: "It depends on the work. Routine dock and pier construction is covered under marine GL, but work performed ON a vessel (boat repair, yacht work) may need a separate ship-repairer's legal liability policy. Tell us exactly what you do on and around vessels and we'll structure it correctly.",
  },
  {
    q: "What is additional insured status and why do marina owners want it?",
    a: "Additional insured status extends your marine liability coverage to the marina owner, port, or developer for your operations. They require it — along with a waiver of subrogation and primary/non-contributory endorsement — so that if a claim arises from your work, your policy responds first. We issue these endorsements routinely.",
  },
  {
    q: "How are marine insurance premiums calculated?",
    a: "Marine GL is usually rated on revenue or payroll (often split between over-water and upland); Jones Act and USL&H on over-water payroll by class; equipment on scheduled value; commercial auto on vehicles and drivers; builder's risk on the project value. We document your operation accurately so you're rated on real exposure, not a worst-case guess.",
  },
  {
    q: "Why use a specialty marine contractor insurance broker?",
    a: "Marine construction is one of the most coverage-specialized trades there is — Jones Act, USL&H, watercraft exclusions, and over-water GL traps that generic small-business carriers routinely miss or deny. A specialty broker knows the maritime statutes, the markets that write marine work, and how to manage a maritime claim — which means real coverage at a fairer price.",
  },
];

/* ============================================================
   GENERAL FAQs — reused as the tail on service & location pages
   so every page carries 20 FAQs (composed via buildPageFaqs)
   ============================================================ */
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: "How much does this coverage cost for a marine contractor?",
    a: "Most marina contractors pay $2,500–$9,000 a year for $1M/$2M marine general liability, with Jones Act/USL&H rated on over-water payroll and equipment floaters based on scheduled marine gear. We quote the full program in about 15 minutes and show every market's price.",
  },
  {
    q: "Do you insure marine contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes marine construction crews from the Gulf Coast and Florida to the Chesapeake, New England, the Great Lakes, and the Pacific coast.",
  },
  {
    q: "How fast can I get a quote and a certificate?",
    a: "About 15 minutes for a standard program. Once bound, we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements usually within minutes.",
  },
  {
    q: "What is the Jones Act and does it apply to my crew?",
    a: "The Jones Act covers crew members who work on navigable waters as 'seamen.' If your crew works on a barge, tug, or over navigable water, standard workers' comp does not apply — you need Jones Act coverage. We'll confirm exactly where your operations fall.",
  },
  {
    q: "Does standard workers' comp cover over-water work?",
    a: "Only upland. Over-water work on navigable waters falls under the Jones Act and USL&H (Longshore), not state workers' comp. We coordinate all three so every crew member is covered everywhere they work.",
  },
  {
    q: "Are my barge and pile-driving equipment covered?",
    a: "Equipment is covered under an inland marine / contractors equipment floater (and watercraft may need a separate hull/P&I policy), not under GL. We schedule barges, cranes, pile drivers, and dredges at replacement cost so a loss over water is covered.",
  },
  {
    q: "What limits should a marina contractor carry?",
    a: "Most marine contractors carry $1M/$2M marine GL with a $2M–$5M umbrella. Ports and large marina owners often require $2M–$10M limits plus additional-insured status. We size limits to your actual contract requirements.",
  },
  {
    q: "Do I need commercial auto for my work trucks?",
    a: "Yes — personal auto excludes business use and will deny claims when you haul dock sections or materials. Commercial auto covers your trucks, trailers, and lowboys, including hired/non-owned vehicles.",
  },
  {
    q: "Can you cover marine contractors with prior claims or cancellations?",
    a: "Often, yes. We have excess-and-surplus (E&S) markets for marine contractors with loss runs, USL&H claims, cancellations, or tough exposures that standard markets decline.",
  },
  {
    q: "How do you handle subcontracted marine work?",
    a: "Your marine GL doesn't cover independent subs — they should carry their own (including Jones Act/USL&H) and name you additional insured. We set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability.",
  },
  {
    q: "What happens if there's a claim?",
    a: "You reach a person with context, not a queue. We respond within 2 hours, help you document the loss, and manage the claim with the carrier so it's paid correctly and your operation keeps moving.",
  },
  {
    q: "Why use a specialty marine contractor insurance broker?",
    a: "Marine construction has Jones Act, USL&H, and over-water GL traps that generic carriers miss or deny. A specialty broker knows the maritime statutes, the markets that write marine work, and how to manage a maritime claim.",
  },
];

/** Compose a 20-item FAQ list for any page: specific FAQs first, then general fill. */
export function buildPageFaqs(specific: FAQItem[], count = 20): FAQItem[] {
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of [...specific, ...GENERAL_FAQS]) {
    const key = f.q.toLowerCase().slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= count) break;
  }
  return out;
}

/* ============================================================
   LOCATION FAQ EXTRAS — composed with GENERAL_FAQS on location pages
   ============================================================ */
export const LOCATION_FAQ_BASE: FAQItem[] = [
  {
    q: "Are you licensed to insure marine contractors in this region?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can bind and service marine contractor coverage in this region and coordinate certificates for work that crosses state and federal water lines.",
  },
  {
    q: "Do regional coastal conditions affect my marine coverage?",
    a: "They do. Hurricane, named-storm, tidal, ice, and sea-level-rise exposures vary by region and influence both how you build and how the risk is underwritten. We account for the region's coastal environment when structuring your program.",
  },
  {
    q: "Can you meet local port and marina owner insurance requirements here?",
    a: "Yes. We routinely issue the additional-insured status, waivers of subrogation, and primary/non-contributory endorsements that local ports, marina owners, and developers require before you mobilize.",
  },
  {
    q: "Do you handle seasonal marine construction cycles in this market?",
    a: "We do. We right-size coverage and payroll reporting for seasonal crew scaling and can structure policies to match your region's build season, including short-term project and installed-material coverage.",
  },
  {
    q: "How do storm and weather exposure affect my premium here?",
    a: "Wind, named-storm, storm-surge, and ice exposures vary by region and affect marine builder's risk, equipment, and auto pricing. We shop markets that write your region and structure deductibles so you're protected without overpaying.",
  },
  {
    q: "Can you add a project-specific builder's risk for a local waterfront build?",
    a: "Yes. For larger or unusual local waterfront projects we can write a project-specific builder's risk policy that covers the dock, pier, or marina structure and materials during construction, in addition to your ongoing program.",
  },
  {
    q: "Do you provide certificates to local ports and the Army Corps?",
    a: "Yes. We supply the certificates of insurance, additional-insured endorsements, and high-limit proof that local ports, the Army Corps of Engineers, and marina owners require — turned around fast.",
  },
  {
    q: "Who services my policy if my crew works across multiple regions?",
    a: "We do — coast to coast. Because we're licensed everywhere, a single program can follow your crews across regional and federal water lines, with one point of contact for certificates, endorsements, and claims.",
  },
];

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "marine-general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection built for over-water work that standard general liability excludes — covering docks, piers, marinas, seawalls, and waterfront projects, including the watercraft and navigable-water exposures most GL policies strip out.",
    whatsCovered: [
      "Bodily injury to the public, boaters, and other trades on your marine jobsite",
      "Property damage caused by your over-water and waterfront operations",
      "Operations over navigable water that standard GL excludes",
      "Products-completed operations for docks, piers, and marinas you've finished",
      "Defense costs and legal fees when you're named in a marine lawsuit",
      "Additional-insured status for the ports, marina owners, and developers you build for",
    ],
    whoItsFor: [
      "Dock and pier construction contractors working over water",
      "Marina build and repair contractors",
      "Seawall, revetment, and shoreline contractors",
      "Pile-driving and dredging crews working on navigable water",
      "Any marine contractor whose standard GL excludes the over-water work",
    ],
    whyCca: [
      "True marine GL — not a landside policy that denies the over-water claim",
      "Additional-insured and waiver-of-subrogation endorsements issued fast",
      "Limits scaled to what ports, the Corps, and marina owners actually require",
    ],
    faqs: [
      {
        q: "What does marine general liability cover?",
        a: "Marine GL covers third-party bodily injury and property damage caused by your marine construction operations — a boater hurt near your jobsite, damage you cause to an adjacent dock or vessel, or a completed-operations claim after the pier is built. It's specifically built for over-water work that standard GL excludes. It does not cover your own crew (Jones Act/USL&H/workers' comp) or your own equipment (equipment floater).",
      },
      {
        q: "Why won't my standard general liability cover over-water work?",
        a: "Standard commercial GL carries a watercraft exclusion and excludes operations over navigable water. So when a loss happens on or over the water — which is most of a marine contractor's job — a standard GL policy can deny the claim outright. Marine GL removes those exclusions and is the core coverage any over-water contractor must carry.",
      },
      {
        q: "What's the difference between marine GL and the Jones Act?",
        a: "Marine GL covers third parties — other people and their property. The Jones Act covers your own crew members when they're injured on navigable water. They're completely different coverages and you need both: marine GL for the public and the project, Jones Act and USL&H for your crew.",
      },
      {
        q: "Does marine GL cover damage to a boat or yacht near my jobsite?",
        a: "Often yes, for damage you cause to a third-party vessel as part of your operations. But if you're doing work ON vessels (boat or yacht repair), you need a separate ship-repairer's legal liability policy. Tell us exactly what you do on and around boats and we'll structure it correctly.",
      },
      {
        q: "Why do ports and marina owners require me to add them as additional insured?",
        a: "Additional-insured status extends your marine GL to the port or marina owner for your operations, so if a claim arises from your work your policy responds first. It's a standard contract requirement, along with a waiver of subrogation and primary/non-contributory language. We issue these routinely.",
      },
      {
        q: "Are marine subcontractors covered under my marine GL?",
        a: "No. Independent subcontractors need their own marine coverage (including their own Jones Act/USL&H) and should name you additional insured. If an uninsured sub causes a loss, you can be pulled in. We help set up certificate tracking so subcontracted work doesn't become your liability.",
      },
      {
        q: "What marine GL limits do contractors need?",
        a: "Most marine contractors carry $1M per occurrence / $2M general aggregate. Ports, the Army Corps, and large marina owners often require $2M, $5M, or $10M limits — we add an umbrella to reach them when needed.",
      },
      {
        q: "How is marine GL premium calculated?",
        a: "Marine GL is usually rated on revenue or payroll, often split between over-water and upland operations because the over-water exposure is rated higher. Accurate documentation of how much of your work is over water keeps the premium fair. We document your real operation so you're not rated on a worst-case guess.",
      },
    ],
  },
  "jones-act-uslh": {
    heroBlurb:
      "The maritime worker coverage that standard workers' comp does NOT provide. The Jones Act covers your crew on navigable water; USL&H (Longshore) covers over-water marine construction. If your crew works over water, this coverage is mandatory — and missing it is the single biggest gap for marine contractors.",
    whatsCovered: [
      "Jones Act coverage for 'seamen' working on vessels and barges",
      "USL&H (Longshore & Harbor Workers') coverage for over-water construction crews",
      "Medical and disability benefits for maritime injuries",
      "Protection from federal penalties for non-compliance",
      "Coverage for pile drivers, divers, and deck crew over navigable water",
      "Coordinated with state workers' comp so there are no gaps",
    ],
    whoItsFor: [
      "Marine contractors whose crews work on barges, tugs, or over navigable water",
      "Pile-driving crews with deck workers on the water",
      "Dock and pier builders whose crew works over water",
      "Dredging and marine construction operations",
      "Any contractor who hires crew that could be classified as 'seamen'",
    ],
    whyCca: [
      "The Jones Act / USL&H gap most brokers miss — placed correctly",
      "Coordinated with state workers' comp so every crew member is covered everywhere",
      "Protection from the severe federal penalties of non-compliance",
    ],
    faqs: [
      {
        q: "What is the Jones Act and who does it cover?",
        a: "The Jones Act (Merchant Marine Act of 1920) is a federal law that gives 'seamen' — crew members who work on vessels on navigable waters — the right to sue their employer for negligence if injured. If your crew works on a barge, tug, or other vessel on navigable water, they likely qualify as seamen under the Jones Act and standard state workers' comp does not cover them.",
      },
      {
        q: "What is USL&H (Longshore) coverage and how is it different from the Jones Act?",
        a: "The Longshore and Harbor Workers' Compensation Act (USL&H) is the federal workers' comp system for maritime workers who are NOT 'seamen' — including dock builders, pile drivers, and marine construction crews working over navigable water but not assigned to a specific vessel. The Jones Act covers seamen; USL&H covers the broader over-water workforce. Many marine contractors need both, plus state workers' comp for landside work.",
      },
      {
        q: "Doesn't my regular workers' comp cover my crew on the water?",
        a: "No — this is the critical trap. State workers' comp generally does NOT cover injuries that occur on navigable waters. Those claims fall under the Jones Act or USL&H instead. If you're carrying only state workers' comp and a crew member is hurt on a barge, the claim can be denied and you can be personally liable. We coordinate all three coverages.",
      },
      {
        q: "What happens if I don't carry Jones Act or USL&H coverage?",
        a: "The consequences are severe. Under USL&H, an employer who fails to secure coverage can face federal penalties of tens of thousands of dollars per uncovered worker per day, plus double compensation owed to the injured worker, plus possible criminal liability. This is the single most dangerous coverage gap in marine construction.",
      },
      {
        q: "How is Jones Act and USL&H premium calculated?",
        a: "Both are rated on over-water payroll by job classification. The rate reflects the maritime exposure (pile driving, diving, deck work). Because it's payroll-based, accurate classification of landside vs. over-water crew keeps your premium fair. We document your crew's real work split.",
      },
      {
        q: "Does Jones Act cover commercial divers?",
        a: "Often yes. Commercial divers working on navigable water for marine construction are frequently classified as seamen under the Jones Act or covered under USL&H, depending on the specifics. Diving is a high-hazard maritime specialty — we make sure your dive crew is properly classified and covered.",
      },
      {
        q: "What if my crew works both on land and over water?",
        a: "Most marine contractors have both. Landside work (yard, shop, upland site work) is covered under state workers' comp; over-water work falls under Jones Act and/or USL&H. We coordinate all three into one program so every crew member is covered wherever they're working that day, with no gaps and no double premium.",
      },
      {
        q: "How do I know if my work is on 'navigable water'?",
        a: "Navigable water is generally any body of water used (or capable of being used) for interstate or foreign commerce — which includes most coastal waters, bays, harbors, major rivers, and the Great Lakes. The line isn't always obvious, and getting it wrong is costly. We'll help assess your operations and confirm where Jones Act and USL&H apply.",
      },
    ],
  },
  "general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection for your landside marina operations — staging yards, fabrication shops, upland site work, and any operation that stays ashore. Paired with marine GL to close the gap where the waterline begins.",
    whatsCovered: [
      "Bodily injury to visitors, vendors, and the public on your upland sites",
      "Property damage from your landside operations and fabrication",
      "Yard, shop, and upland staging-area operations",
      "Products-completed operations for landside work",
      "Defense costs and legal fees",
      "Additional-insured status for the GCs and developers you work with",
    ],
    whoItsFor: [
      "Marine contractors with yards, shops, or upland operations",
      "Crews doing landside site prep and staging for waterfront projects",
      "Fabrication shops building dock sections and components on land",
      "Any marine contractor whose upland work needs separate coverage",
    ],
    whyCca: [
      "Upland GL coordinated with marine GL so there are no gaps at the waterline",
      "Additional-insured and waiver-of-subrogation endorsements issued fast",
      "Limits scaled to what your commercial contracts actually require",
    ],
    faqs: [
      {
        q: "Why do I need landside GL if I already have marine GL?",
        a: "Marine GL covers your over-water work, but many of your operations happen on land — the yard, the fabrication shop, upland staging, and landside site work. Standard GL covers those landside exposures. We pair the two so every part of your operation is covered with no gap at the waterline.",
      },
      {
        q: "What does landside GL cover for a marine contractor?",
        a: "It covers third-party bodily injury and property damage caused by your upland operations — a visitor hurt in your yard, damage you cause to adjacent upland property, or a completed-operations claim for landside work. It does not cover over-water operations (that's marine GL) or your own crew (that's workers' comp / Jones Act / USL&H).",
      },
      {
        q: "Does landside GL cover my fabrication shop?",
        a: "Yes. A shop where you fabricate dock sections, build components, or stage materials is a landside operation covered under standard GL, with property coverage for the building and contents. We coordinate the shop GL with your marine operations so coverage is seamless.",
      },
      {
        q: "How is landside GL different from marine GL in cost?",
        a: "Landside GL is generally rated lower than marine GL because the over-water exposure (which drives up cost) isn't present. Accurately splitting your operations between landside and over-water keeps the overall program fair. We document the real split.",
      },
      {
        q: "What GL limits do marine contractors carry for landside work?",
        a: "Most carry $1M per occurrence / $2M general aggregate, coordinated with their marine GL. Large commercial or government contracts often require $2M–$5M limits. We size limits to what your contracts actually demand.",
      },
      {
        q: "Are subcontractors covered under my landside GL?",
        a: "No. Independent subs need their own GL and should name you additional insured. If an uninsured sub causes a loss, you can be pulled in. We help set up certificate tracking so subcontracted work doesn't become your liability.",
      },
      {
        q: "Does landside GL cover the materials in my yard?",
        a: "GL covers your liability to others, not damage to your own materials. Materials stored in your yard are covered under commercial property or an installation floater. We coordinate all three so your materials are protected in the yard, in transit, and on the jobsite.",
      },
      {
        q: "How fast can I get a certificate for a landside project?",
        a: "Once your program is bound, we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements — usually within minutes. We know GCs and developers won't let you start without proof of coverage.",
      },
    ],
  },
  "workers-compensation": {
    heroBlurb:
      "Coverage for the injury patterns unique to marine construction — falls into the water, struck-by pile and crane loads, dive injuries, and equipment amputations — correctly coded for marine trades and coordinated with Jones Act and USL&H so there are no gaps.",
    whatsCovered: [
      "Medical treatment for on-the-job landside marine injuries",
      "Disability and lost-wage benefits for injured crew members",
      "Struck-by, material-handling, and equipment injuries",
      "Coordinated with Jones Act and USL&H for over-water crew",
      "Employers' liability (Part Two) protection",
      "Correct marine-trade class coding",
    ],
    whoItsFor: [
      "Marine contractors with W-2 employees",
      "Crews working in yards, shops, and upland sites",
      "Sole proprietors who elect to cover themselves",
      "Any marine contractor required by state law to carry workers' comp",
    ],
    whyCca: [
      "Correct marine-trade class coding — not generic construction codes",
      "Coordinated with Jones Act and USL&H for full over-water compliance",
      "Aggressive claims management to protect your experience modifier",
    ],
    faqs: [
      {
        q: "Does workers' comp cover my marine crew?",
        a: "It covers your crew for landside work. For work over navigable water, your crew falls under the Jones Act (if they're seamen) or USL&H (Longshore), not state workers' comp. We coordinate all three so every crew member is covered everywhere they work — landside under state comp, over water under Jones Act/USL&H.",
      },
      {
        q: "How much is workers' comp for a marine contractor?",
        a: "State workers' comp is rated on landside payroll by class code. Marine trades carry higher rates than office work because of the struck-by, fall, and equipment exposure, but good loss control and a clean experience modifier reduce it. Over-water payroll is rated separately under Jones Act/USL&H. We quote based on your actual payroll split.",
      },
      {
        q: "What's the most common serious marine construction injury?",
        a: "Struck-by injuries (from piles, crane loads, and swinging equipment), falls (into the water or from barges and docks), and equipment amputations top the list. Dive injuries are a specialty exposure. We respond within 2 hours and manage marine claims aggressively to control cost and protect your modifier.",
      },
      {
        q: "How do you handle a Jones Act claim versus a workers' comp claim?",
        a: "They're handled differently. A state workers' comp claim goes through your state comp carrier. A Jones Act or USL&H claim is a federal maritime claim with its own procedures and often higher benefit levels. We know the difference, place the right coverage for both, and manage each claim in the correct system.",
      },
      {
        q: "Do owner-operators need workers' comp on themselves?",
        a: "It depends on your state and structure. Many states exempt sole proprietors and single-member LLC owners, but you can elect coverage — and if you have any W-2 employees you must carry it. Note that Jones Act/USL&H rules for owner-operators working over water are different. We'll tell you exactly what applies.",
      },
      {
        q: "Will one claim make my rates unaffordable?",
        a: "A serious claim affects your experience modifier, but the impact is bounded and improves over time. The best defense is correct class coding, a documented safety program (especially fall and struck-by prevention), and aggressive claim management — all of which we provide to keep your mod down.",
      },
      {
        q: "What if my crew works in multiple states?",
        a: "Workers' comp follows where the work is performed, and each state has its own rules and rates. Because we're licensed in all 50 states, we structure a program that covers your crews across state lines without gaps — with Jones Act/USL&H layered in for the over-water work.",
      },
      {
        q: "How do audits work for marine workers' comp?",
        a: "At policy end, the carrier audits your actual payroll by class code (landside vs. over-water) and true-ups the premium. Accurate upfront classification of your crew's work split prevents audit shock. We help you classify payroll correctly from day one.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the pickup trucks, dump trailers, lowboys, and material haulers that move your crew, pile sections, and dock materials between the yard and the launch — including hired/non-owned vehicles and loading liability.",
    whatsCovered: [
      "Liability for at-fault accidents in work trucks and trailers",
      "Physical damage (comprehensive & collision) to owned vehicles",
      "Lowboy, dump, and material-hauling trailers",
      "Hired and non-owned auto for employees driving their own trucks",
      "Uninsured and underinsured motorist coverage",
      "Loading and unloading liability",
    ],
    whoItsFor: [
      "Marine contractors with owned trucks, dump trailers, or lowboys",
      "Crews that transport pile sections, dock materials, and equipment",
      "Operations whose employees drive personal trucks for work",
      "Any contractor whose personal auto policy would deny a work claim",
    ],
    whyCca: [
      "Business-use rating that won't deny your jobsite driving",
      "Trailer and heavy-material-hauling exposure factored in",
      "Fleet and single-vehicle programs available",
    ],
    faqs: [
      {
        q: "Why can't I use my personal auto policy for my work truck?",
        a: "Personal auto policies typically exclude business use and will deny a claim when you're hauling dock sections, pile materials, or a crew to a launch. Commercial auto is rated for business use and covers the real way marine contractors drive.",
      },
      {
        q: "What is hired and non-owned auto, and do marine contractors need it?",
        a: "Hired auto covers rental vehicles; non-owned auto covers employees driving their own personal vehicles for your business. If any crew member runs materials in their own truck, you want non-owned coverage — it protects your business when their personal policy falls short.",
      },
      {
        q: "Are the pile sections and materials in my truck covered by auto?",
        a: "Liability for an at-fault crash is covered, but the cargo generally is not. Materials in transit are an installation floater / inland marine matter. We coordinate auto liability with a materials floater so the cargo is protected too.",
      },
      {
        q: "Do I need commercial auto for a lowboy trailer?",
        a: "Yes. Heavy trailers need their own physical damage coverage and the truck towing them needs adequate liability. We schedule trailers and make sure the combined rig — especially when hauling a crane or pile driver — is properly insured.",
      },
      {
        q: "How is commercial auto rated for marine contractors?",
        a: "Premium is based on the vehicles (type, value, use), drivers (records and experience), and radius of operation. Clean driving records and accurate vehicle scheduling keep the cost down.",
      },
      {
        q: "What if an employee gets in an accident in a company truck?",
        a: "Commercial auto covers at-fault liability and physical damage for company vehicles. We respond fast, coordinate the claim, and get the truck repaired or replaced so the crew keeps moving.",
      },
      {
        q: "Do you insure marine fleets or just single trucks?",
        a: "Both. Whether you run a single work truck or a fleet of haulers, lowboys, and trailers, we structure a commercial auto program that covers every vehicle and driver.",
      },
      {
        q: "Does commercial auto cover loading and unloading pile sections?",
        a: "Many policies include some loading/unloading liability, but the cargo itself is an inland marine matter. We make sure the liability gap is closed and pair the auto policy with a materials and equipment floater.",
      },
    ],
  },
  "inland-marine-equipment": {
    heroBlurb:
      "Scheduled equipment coverage for the high-value marine gear that makes over-water work possible — barges, crane-mounted pile drivers, dredges, tug boats, workboats, and hydraulic equipment. Coverage that follows your gear onto the water and between jobsites.",
    whatsCovered: [
      "Barges and floating equipment platforms",
      "Crane-mounted pile drivers and material-handling cranes",
      "Dredges and hydraulic marine equipment",
      "Tugs, workboats, and crew boats (hull & P&I where applicable)",
      "Air compressors, generators, and hydraulic power units",
      "Theft, sinking, fire, storm, and transport damage",
    ],
    whoItsFor: [
      "Marine contractors with owned barges, cranes, or pile drivers",
      "Dredging operations with specialized marine equipment",
      "Crews running tugs and workboats to support over-water work",
      "Any contractor whose marine gear is too valuable to self-insure",
    ],
    whyCca: [
      "Marine equipment scheduled at replacement cost — not depreciated",
      "Coverage that follows your gear onto the water and between jobs",
      "Watercraft hull and P&I coordinated where applicable",
    ],
    faqs: [
      {
        q: "Does general liability cover my barge and pile driver?",
        a: "No. GL and commercial property do not cover marine equipment. Barges, cranes, pile drivers, dredges, and workboats are covered under an inland marine / contractors equipment floater, and vessels may need a separate hull and protection & indemnity (P&I) policy. We schedule your marine gear so a loss over water is covered.",
      },
      {
        q: "What is the difference between an equipment floater and hull insurance?",
        a: "An equipment floater (contractors equipment) covers movable construction gear like cranes, pile drivers, and compressors wherever they go. Hull insurance covers the vessel itself (barge, tug, workboat) and its machinery. P&I (protection & indemnity) is the liability side for vessels. We coordinate all three for marine contractors.",
      },
      {
        q: "Is marine equipment coverage replacement cost or actual cash value?",
        a: "We write marine equipment at replacement cost so a sunk barge or a crane that goes over is replaced or repaired new, not depreciated to pennies. Given the cost of marine gear, that's the difference between surviving a loss and going under.",
      },
      {
        q: "Does the equipment floater cover gear on the water and in transit?",
        a: "Yes — a marine equipment floater follows your gear wherever it goes: on the barge, on the water, in transit on a lowboy, and staged at the yard. That portability is exactly what marine contractors need, and it's why inland marine is the right form.",
      },
      {
        q: "How do I value my marine equipment for a floater?",
        a: "We build a schedule listing each major piece — barges, cranes, pile drivers, dredges, workboats — and its replacement value. You can update the schedule as you add or sell gear. Accurate scheduling keeps premiums fair and claims fast.",
      },
      {
        q: "Is my equipment covered if a barge sinks or a crane goes over?",
        a: "Yes — sinking, collision, capsize, and going-over are covered causes of loss under a marine equipment floater, subject to the policy terms and deductible. These are exactly the high-severity losses that make this coverage essential.",
      },
      {
        q: "Does the floater cover rented or leased marine equipment?",
        a: "It can. We can extend coverage to rented and leased equipment — which matters if you rent a crane, barge, or specialty dredge for a job. Tell us what you rent and we'll structure it, including coverage for the rental company's required limits.",
      },
      {
        q: "How fast are marine equipment claims paid?",
        a: "Once you document the loss (photos, repair estimate, police/marine report for theft or sinking), marine equipment claims are typically processed quickly so you can repair or replace gear and get back on the water. We help you document to keep it moving.",
      },
    ],
  },
  "builders-risk": {
    heroBlurb:
      "Course-of-construction coverage for the dock, pier, marina, or waterfront structure you're building — pile sections, decking, materials, and labor in place — against fire, wind, storm, theft, and vandalism while the project is open to loss over the water.",
    whatsCovered: [
      "Pile sections, decking, and materials installed over water",
      "Fire, wind, named-storm, and wave damage during construction",
      "Theft and vandalism of materials and installed work",
      "Soft costs and delayed opening (optional)",
      "Materials in transit and at staging areas",
      "Temporary structures, cofferdams, and marine forms",
    ],
    whoItsFor: [
      "Dock and pier builders responsible for materials they install",
      "Contractors whose project owner's master policy leaves gaps",
      "Marina owners and developers on new construction",
      "Crews building in hurricane, storm, or high-exposure water",
    ],
    whyCca: [
      "Closes the gap between delivered materials and installed work over water",
      "Written for the project's real value and construction timeline",
      "Covers the storm and wave exposures that hit hardest over water",
    ],
    faqs: [
      {
        q: "What does builder's risk cover for a dock or pier project?",
        a: "Builder's risk (course of construction) covers the structure and materials during construction — fire, wind, named-storm, wave damage, theft, and vandalism to the pile sections, decking, and installed work. It protects the value of what you're building while it's most exposed, which over water is especially dangerous.",
      },
      {
        q: "If the project owner carries builder's risk, do I need my own?",
        a: "Not always, but gaps are common. The owner's master policy may not cover materials you've delivered but not yet installed, or may carry a large deductible that falls on you. We review the project's program and add an installation floater if there's a gap.",
      },
      {
        q: "Does builder's risk cover storm and wave damage during construction?",
        a: "Yes — and this is critical for marine work. A partial dock or pier under construction is highly exposed to wind, storm surge, and wave action. Named-storm coverage may carry a separate deductible in coastal zones. We structure the policy for your region's weather and water exposure.",
      },
      {
        q: "Does builder's risk cover materials stolen from the jobsite?",
        a: "Yes — theft of materials from the site or staging area is a covered cause of loss under most builder's risk forms, subject to the policy terms and deductible. Given the value of pile sections and hardware, this is one of the most valuable parts of the coverage.",
      },
      {
        q: "Who buys builder's risk — the contractor, the owner, or the developer?",
        a: "It varies by contract. Often the owner or developer carries a master policy. When you're responsible for materials and labor you've put in place, an installation floater or your own builder's risk makes sure you're protected regardless of what the owner carries.",
      },
      {
        q: "What are soft costs in a marine builder's risk?",
        a: "Soft costs are the additional expenses from a construction delay — extra interest, real estate costs, re-engineering, and lost marina slip revenue. Soft-cost coverage is optional but valuable on larger waterfront projects where a storm or fire could push back completion.",
      },
      {
        q: "How is the builder's risk limit determined for a marine project?",
        a: "The limit should equal the completed value of the project (materials, labor, and profit) at the time of loss. We help you set the limit correctly so the dock, pier, or marina is fully insured throughout the build.",
      },
      {
        q: "Does builder's risk cover fire damage during marine construction?",
        a: "Yes. Fire is a covered peril, and a wood dock or pier under construction is exactly when the exposure peaks. Builder's risk covers fire damage to the structure and materials during construction.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your marine GL, auto, and employers' liability — essential when a drowning, a crane collapse over water, or a multi-party waterfront loss could otherwise exhaust your primary coverage. Maritime losses trend high; this is the layer that protects your business.",
    whatsCovered: [
      "Additional limits above marine GL, commercial auto, and employers' liability",
      "Limits from $2M up to $10M+ for catastrophic maritime claims",
      "Protection for multi-party waterfront losses",
      "Coverage that follows the underlying policy form",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Marine contractors whose contracts require higher limits",
      "Crews on port, Army Corps, or large marina projects",
      "Contractors with significant assets to protect",
      "Any marine contractor whose primary limits no longer match exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your underlying marine program",
      "Up to $10M+ available for high-exposure over-water operations",
      "Priced for marine contractors, not generic small business",
    ],
    faqs: [
      {
        q: "What does an umbrella policy cover for a marine contractor?",
        a: "An umbrella adds liability limits above your marine general liability, commercial auto, and employers' liability (including Jones Act/USL&H exposure). If a serious drowning, crane collapse, or waterfront loss exhausts your primary policy, the umbrella pays the layers above — protecting your assets and your contracts.",
      },
      {
        q: "How much umbrella coverage does a marine contractor need?",
        a: "It's driven by your largest realistic loss and your contract requirements. Ports and the Army Corps often require $5M–$10M total limits. Maritime losses (drownings, crane collapses) trend high. We model your worst-case scenarios and size the umbrella to what your work actually demands.",
      },
      {
        q: "Does the umbrella sit over Jones Act and USL&H too?",
        a: "It can sit over the employers' liability layer that responds to Jones Act and USL&H claims, subject to the policy form. Because maritime injury claims can be high-value, this layer matters. We confirm exactly how the umbrella interacts with your maritime coverages.",
      },
      {
        q: "Why would a port or marina owner require an umbrella?",
        a: "Large waterfront projects shift risk down to contractors and require proof of high limits — often $5M–$10M. Carrying an umbrella lets you bid that work and protects you from a catastrophic over-water claim that could otherwise sink your business.",
      },
      {
        q: "How is umbrella premium calculated?",
        a: "Umbrella premium is a fraction of your underlying liability cost and reflects your operations, underlying limits, and the umbrella layer chosen. It's one of the most cost-effective ways to add meaningful protection for a marine contractor.",
      },
      {
        q: "Can I add umbrella limits mid-policy if a contract requires it?",
        a: "Often yes. If a new waterfront project requires higher limits, we can frequently increase the umbrella (subject to underwriting) so you can take the work. Tell us the requirement and we'll move.",
      },
      {
        q: "Does the umbrella cover maritime injury and drowning claims?",
        a: "Yes. An umbrella responds to the same types of claims your underlying marine GL and employers' liability cover — including high-severity maritime injury and drowning claims — once primary limits are exhausted.",
      },
      {
        q: "What's the difference between umbrella and excess liability?",
        a: "A true umbrella can drop down to cover some claims not covered by underlying policies; a straight excess policy simply adds limits on top of the same coverage. We place the form that fits your marine exposure and budget.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Gulf Coast", note: "TX, LA, MS, AL, FL Panhandle — the busiest marine construction market" },
  { name: "Florida & the Southeast", note: "FL, GA, NC, SC — hurricane-zone dock, pier, and seawall work" },
  { name: "Chesapeake & Mid-Atlantic", note: "MD, VA, DE, NJ — tidal and navigable-water marine construction" },
  { name: "New England & Northeast", note: "ME, NH, MA, RI, CT, NY — coastal docks, wharves, and yacht clubs" },
  { name: "Great Lakes", note: "MI, WI, MN, OH, IL, IN, PA, NY — freshwater ports and inland waterways" },
  { name: "Pacific Northwest", note: "WA, OR — tidal, wet-climate Puget Sound and coastal marine work" },
  { name: "California & West Coast", note: "CA — Coastal Act, sea-level-rise resilience, harbor construction" },
  { name: "Texas & Louisiana Gulf", note: "TX Gulf, LA — heavy pile driving, dredging, major waterfront facilities" },
];

/* ============================================================
   US STATES — for quote form select
   ============================================================ */
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ============================================================
   Quote form select options (marina-specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "Marine General Liability Insurance",
  "Jones Act & USL&H (Longshore) Coverage",
  "General Liability (upland operations)",
  "Workers' Compensation",
  "Commercial Auto Insurance",
  "Inland Marine / Equipment (barges, cranes, dredges)",
  "Builder's Risk Insurance",
  "Umbrella / Excess Liability",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
