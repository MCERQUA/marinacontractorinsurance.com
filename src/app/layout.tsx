import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "32x32" }] },
  title: {
    default: "Marina Contractor Insurance | Contractors Choice Agency",
    template: "%s | Marina Contractor Insurance",
  },
  description: SITE.description,
  keywords: [
    "marina contractor insurance",
    "dock builder insurance",
    "pier construction insurance",
    "marine general liability insurance",
    "jones act insurance",
    "uslh coverage",
    "longshore harbor workers comp",
    "marine construction insurance",
    "waterfront contractor insurance",
    "pile driver insurance",
    "marine contractor general liability",
    "commercial diver insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Marina Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for marine & waterfront construction contractors — marine general liability, Jones Act & USL&H, workers' comp, builder's risk, equipment floaters, commercial auto. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marina Contractor Insurance — coverage for dock, pier & waterfront construction crews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for marine contractors. Marine GL, Jones Act, USL&H, workers' comp, builder's risk, equipment, commercial auto. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Marine General Liability Insurance for Marine Contractors",
      "Jones Act & USL&H (Longshore) Coverage for Maritime Crews",
      "General Liability Insurance for Upland Marina Operations",
      "Workers' Compensation for Marine Construction Crews",
      "Commercial Auto Insurance for Marine Contractor Trucks & Trailers",
      "Inland Marine / Equipment Insurance for Barges, Cranes & Dredges",
      "Builder's Risk Insurance for Dock, Pier & Marina Projects",
      "Umbrella / Excess Liability Insurance",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
