/**
 * src/theme/typography.ts
 *
 * Typography token reference — maps semantic names to the
 * CSS utility classes defined in globals.css @layer utilities.
 *
 * Components import TYPOGRAPHY_CLASSES and spread onto elements
 * instead of remembering raw class strings.
 */

export const TYPOGRAPHY_CLASSES = {
  /** H1 hero display — clamp 48→88px, Playfair Display 700 */
  display: "type-display",

  /** Section H2 — clamp 28→40px, Playfair Display 700 */
  h2: "type-h2",

  /** Card / sub-section H3 — clamp 20→26px, Playfair Display 600 */
  h3: "type-h3",

  /** Eyebrow label — 11px, uppercase, 0.3em tracking, terracotta */
  eyebrow: "type-eyebrow",

  /** Body prose — clamp 15→17px, Inter 400, line-height 1.65 */
  body: "type-body",

  /** Caption / small — 13px, Inter 400, muted colour */
  small: "type-small",

  /** Handwritten script accent — Caveat, pink, clamp 20→32px */
  script: "type-script",

  /** Navy heading modifier — applied on top of h2/h3 */
  navy: "type-navy",
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY_CLASSES;
