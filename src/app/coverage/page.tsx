import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, LOCATIONS } from "@/lib/site";
import { AZ_REGIONS, buildPageFaqs } from "@/lib/content";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Marina Contractor Insurance — National Coverage, All 50 States",
  description:
    "Contractors Choice Agency writes marina contractor insurance in all 50 states — Gulf Coast, Florida & Southeast, Chesapeake, New England, Great Lakes, Pacific Northwest, California, and everywhere marine contractors work.",
  alternates: { canonical: `${SITE.url}/coverage` },
};

export default function CoveragePage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Coverage Area", item: `${SITE.url}/coverage` },
    ],
  };

  const faqs = buildPageFaqs([
    {
      q: "Do you only insure marine contractors in certain regions?",
      a: "No. Contractors Choice Agency is licensed in all 50 states and writes marina contractor programs for crews anywhere in the country — Gulf Coast, Florida and the Southeast, Chesapeake and Mid-Atlantic, New England, Great Lakes, Pacific Northwest, California, and everywhere in between.",
    },
    {
      q: "Can you write coverage if my crews work across multiple states or federal waters?",
      a: "Yes. Because we're licensed nationwide and understand the Jones Act and USL&H, a single program can follow your crews across state and federal water lines — marine GL, Jones Act/USL&H, workers' comp, builder's risk, and equipment coordinated without gaps.",
    },
    {
      q: "Do you understand the risks of marine construction in hurricane and coastal zones?",
      a: "Yes. We have markets that write named-storm, storm-surge, and coastal exposures and structure your builder's risk and equipment coverage so you're protected during the build in Gulf, Atlantic, and exposed coastal zones.",
    },
    {
      q: "How fast can I get a quote and certificate in my state?",
      a: "Typically 15 minutes for a standard program. Once bound, we turn around additional-insured certificates, waivers of subrogation, and license bonds usually within minutes — wherever you're building.",
    },
    {
      q: "Do regional coastal conditions affect my coverage?",
      a: "They can. Hurricane, named-storm, tidal, ice, and sea-level-rise exposures vary regionally and influence both how you build and how the risk is underwritten. We account for your region's coastal environment when structuring your program.",
    },
  ], 20);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-clay">Coverage Area</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                National reach.{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  All 50 states, every waterfront market.
                </span>
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                Contractors Choice Agency places marina contractor insurance programs in all 50 states —
                from Gulf Coast and Florida dock builders to Chesapeake and New England wharf contractors,
                Great Lakes marine work, and Pacific Northwest tidal operations.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Regions list */}
        <section className="bg-sonoran-sand py-16 md:py-20">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-10">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Where we write</span>
              <h2 className="mt-3 h-section">Marine regions we serve.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {AZ_REGIONS.map((region, i) => (
                <FadeIn key={region.name} delay={(i % 2) * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-adobe p-5">
                    <MapPin className="h-5 w-5 text-clay flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-espresso">{region.name}</p>
                      <p className="text-sm text-mocha">{region.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-10">
              <div className="rounded-3xl bg-espresso text-cream p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="font-heading font-extrabold text-2xl">Featured regions</p>
                  <p className="text-cream/75 mt-1">Dedicated pages for key marina contractor regions.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 text-cream font-heading font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {l.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Nationwide */}
        <section className="bg-cream py-16">
          <div className="container-tight">
            <FadeIn>
              <div className="rounded-[2rem] bg-warm-radial border border-adobe p-8 md:p-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-sage mx-auto" />
                <h2 className="mt-4 font-heading font-extrabold text-espresso text-2xl md:text-3xl">
                  Licensed and writing in all 50 states
                </h2>
                <p className="mt-3 text-mocha max-w-2xl mx-auto leading-relaxed">
                  Whether your crew builds docks on the Gulf, piers in New England,
                  or marinas on the Pacific coast — one agent, one coordinated program.
                  NPN #8608479.
                </p>
                <Link href="/quote" className="btn-primary mt-6">
                  Get a quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <FAQ
          eyebrow="Coverage questions"
          title={
            <>
              Coverage area{" "}
              <span className="text-clay">questions</span>
            </>
          }
          items={faqs}
          background="cream"
        />

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
