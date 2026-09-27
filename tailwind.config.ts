import type { Config } from "tailwindcss";

/* ============================================================
   MARINA CONTRACTOR INSURANCE — "Harbor" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to ocean navy (primary) / sunset coral (secondary) / sand-gold (accent).
   clay = deep ocean navy · sage = sunset coral · gold = warm sand-gold · cream = paper · sand = sand
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        cream: "#FBF8F3",          // page background (warm paper)
        sand: "#F0EBE3",           // alt section bg (sand)
        white: "#FFFFFF",          // cards
        // === Primary — Deep Ocean Navy (token name: clay) ===
        clay: {
          DEFAULT: "#134E3A",      // primary — deep pine green (was ocean navy)
          dark: "#0D3A2B",
          light: "#1D6B50",
          50: "#ECF5F1",
          100: "#CDE6DB",
          200: "#9CCBB7",
          300: "#66AE8F",
          400: "#358C6B",
          500: "#1D6B50",
          600: "#134E3A",
          700: "#0D3A2B",
          800: "#082519",
          900: "#04150E",
        },
        // === Secondary — Sunset Coral (token name: sage) ===
        sage: {
          DEFAULT: "#E76F51",      // secondary — sunset coral
          dark: "#C8553A",
          light: "#F08C73",
          50: "#FDF0EC",
          100: "#F9DACE",
          200: "#F2B2A0",
          300: "#EB8B71",
          400: "#E76F51",
          500: "#C8553A",
          600: "#A8442E",
          700: "#823322",
        },
        // === Accent — Warm Sand-Gold (token name: gold) ===
        gold: {
          DEFAULT: "#E9C46A",      // accent — warm sand-gold
          dark: "#C9A14A",
          light: "#F1D89A",
          50: "#FBF5E6",
          100: "#F7EBC8",
          200: "#F1D89A",
          300: "#E9C46A",
          400: "#DDB451",
          500: "#C9A14A",
          600: "#9C7829",
        },
        // === Text ===
        espresso: "#1C1A17",       // headings (deep navy-charcoal ink)
        cocoa: "#3F3A35",          // body (slate-navy)
        mocha: "#6B625A",          // muted (slate)
        // === Borders / dividers ===
        adobe: "#DEE2E0",          // soft sand border
        adobeDark: "#CDD3D1",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F0EBE3 40%, #FBF1E6 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(231,111,81,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(19,78,58,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #134E3A 0%, #1D6B50 100%)",
        "sage-gradient": "linear-gradient(135deg, #E76F51 0%, #F08C73 100%)",
        "gold-gradient": "linear-gradient(135deg, #E9C46A 0%, #F1D89A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(19, 78, 58, 0.20), 0 4px 12px -6px rgba(28, 26, 23, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(19, 78, 58, 0.25), 0 10px 30px -10px rgba(28, 26, 23, 0.10)",
        card: "0 2px 8px -2px rgba(28, 26, 23, 0.06), 0 1px 3px -1px rgba(28, 26, 23, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(19, 78, 58, 0.22), 0 8px 20px -8px rgba(28, 26, 23, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(19, 78, 58, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
