import type { Config } from "tailwindcss";

/**
 * THE YOGA STORY — Tailwind v3 Config
 *
 * HOW TO CHANGE A COLOR GLOBALLY (5-line summary):
 * 1. Open src/app/globals.css
 * 2. Find the CSS variable (e.g. --color-primary: #D6336C)
 * 3. Change its value (e.g. --color-primary: #E91E8C)
 * 4. Every Tailwind class that maps to that var() (e.g. text-primary,
 *    bg-primary, border-primary) will update automatically.
 * 5. No other files need editing — the config below only adds var()
 *    aliases; the hex never lives here.
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* ── Colors ─────────────────────────────────────────────── */
      colors: {
        /* Brand */
        primary:          "var(--color-primary)",
        "primary-hover":  "var(--color-primary-hover)",
        "primary-light":  "var(--color-primary-light)",
        "primary-muted":  "var(--color-primary-muted)",

        /* Semantic text */
        ink:        "var(--color-ink)",
        navy:       "var(--color-navy)",
        body:       "var(--color-body)",
        muted:      "var(--color-muted)",
        terracotta: "var(--color-terracotta)",

        /* Surfaces */
        surface:        "var(--color-surface)",
        "surface-solid":"var(--color-surface-solid)",
        "border-soft":  "var(--color-border-soft)",
        "border-light": "var(--color-border-light)",
        /* Kraft paper note */
        "kraft-bg":     "var(--color-kraft-bg)",
        "kraft-border": "var(--color-kraft-border)",

        /* Integrations & Micro Tokens */
        whatsapp:         "var(--color-whatsapp)",
        "whatsapp-hover": "var(--color-whatsapp-hover)",
        "google-blue":    "var(--color-google-blue)",
        "google-green":   "var(--color-google-green)",
        "google-yellow":  "var(--color-google-yellow)",
        "google-red":     "var(--color-google-red)",

        /* Natural elements */
        "stone-1":  "var(--color-stone-1)",
        "stone-2":  "var(--color-stone-2)",
        "stone-3":  "var(--color-stone-3)",
        "stone-4":  "var(--color-stone-4)",
        signpost:   "var(--color-signpost)",

        /* Page gradient stops */
        "cream-start": "var(--color-cream-start)",
        "cream-mid":   "var(--color-cream-mid)",
        "cream-end":   "var(--color-cream-end)",
        /* Cream tints (derived from page gradient stops) */
        "cream-50":    "#FFF9F4",
        "cream-100":   "#FFF3EA",
        "cream-200":   "#FBE4D8",

        /* Tone palette — exposed as semantic tokens */
        "tone-pink-bg":     "var(--tone-pink-bg)",
        "tone-pink-fg":     "var(--tone-pink-fg)",
        "tone-pink-border": "var(--tone-pink-border)",
        "tone-pink-panel":  "var(--tone-pink-panel)",

        "tone-green-bg":     "var(--tone-green-bg)",
        "tone-green-fg":     "var(--tone-green-fg)",
        "tone-green-border": "var(--tone-green-border)",
        "tone-green-panel":  "var(--tone-green-panel)",

        "tone-blue-bg":     "var(--tone-blue-bg)",
        "tone-blue-fg":     "var(--tone-blue-fg)",
        "tone-blue-border": "var(--tone-blue-border)",
        "tone-blue-panel":  "var(--tone-blue-panel)",

        "tone-yellow-bg":     "var(--tone-yellow-bg)",
        "tone-yellow-fg":     "var(--tone-yellow-fg)",
        "tone-yellow-border": "var(--tone-yellow-border)",
        "tone-yellow-panel":  "var(--tone-yellow-panel)",

        "tone-purple-bg":     "var(--tone-purple-bg)",
        "tone-purple-fg":     "var(--tone-purple-fg)",
        "tone-purple-border": "var(--tone-purple-border)",
        "tone-purple-panel":  "var(--tone-purple-panel)",

        "tone-orange-bg":     "var(--tone-orange-bg)",
        "tone-orange-fg":     "var(--tone-orange-fg)",
        "tone-orange-border": "var(--tone-orange-border)",
        "tone-orange-panel":  "var(--tone-orange-panel)",
      },

      /* ── Font families ──────────────────────────────────────── */
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
        body:    ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        script:  ["var(--font-script)", "Caveat", "cursive"],
        // Legacy aliases
        sans:    ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        serif:   ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
      },

      /* ── Border radii ───────────────────────────────────────── */
      borderRadius: {
        pill:  "var(--radius-pill)",
        card:  "var(--radius-card)",
        panel: "var(--radius-panel)",
        chip:  "var(--radius-chip)",
      },

      /* ── Shadows ────────────────────────────────────────────── */
      boxShadow: {
        soft:  "var(--shadow-soft)",
        card:  "var(--shadow-card)",
        glass: "var(--shadow-glass)",
        pill:  "var(--shadow-pill)",
        "pill-hover": "var(--shadow-pill-hover)",
      },

      /* ── Background images / gradients ──────────────────────── */
      backgroundImage: {
        "page-gradient":    "var(--gradient-page)",
        "primary-gradient": "var(--gradient-primary)",
        "primary-gradient-hover": "var(--gradient-primary-hover)",
      },

      /* ── Breakpoints (mobile-first) ──────────────────────────── */
      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl": "1536px",
      },

      /* ── Font sizes (semantic scale tokens) ─────────────────── */
      fontSize: {
        "3xs":   ["0.5625rem", { lineHeight: "1.3" }],   // 9px — micro
        micro:   ["0.625rem",  { lineHeight: "1.35" }],  // 10px — badge / micro caption
        "2xs":   ["0.6875rem", { lineHeight: "1.4" }],   // 11px — eyebrow / meta
        xs:      ["0.8125rem", { lineHeight: "1.5" }],   // 13px — small
        sm:      ["0.875rem",  { lineHeight: "1.55" }],  // 14px — regular small
        md:      ["0.9375rem", { lineHeight: "1.6" }],   // 15px — body-sm
        base:    ["1rem",      { lineHeight: "1.65" }],  // 16px — body
        lg:      ["1.125rem",  { lineHeight: "1.55" }],  // 18px
        xl:      ["1.25rem",   { lineHeight: "1.45" }],  // 20px
        "2xl":   ["1.5rem",    { lineHeight: "1.35" }],  // 24px
        "3xl":   ["1.875rem",  { lineHeight: "1.25" }],  // 30px
        "4xl":   ["2.25rem",   { lineHeight: "1.18" }],  // 36px
        "5xl":   ["3rem",      { lineHeight: "1.1"  }],  // 48px
      },
    },
  },

  plugins: [],
};

export default config;
