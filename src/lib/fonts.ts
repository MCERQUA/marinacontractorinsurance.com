import { Manrope, Inter } from "next/font/google";

// Body font — Inter (clean, legible for dense coverage copy)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Manrope (modern, confident nautical/modern feel)
export const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
