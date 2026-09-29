/**
 * src/theme/tones.ts
 *
 * Tone system — every tintable element (icon circle, card background,
 * chip, panel accent line) accepts a `tone` prop and reads its
 * Tailwind classes from this map.
 *
 * The hex values never live here — they live as CSS custom properties
 * in globals.css under --tone-<tone>-<stop>.
 * This map only carries the Tailwind class names that resolve those vars.
 */

export type Tone = "pink" | "green" | "blue" | "yellow" | "purple" | "orange";

export interface ToneClasses {
  /** lightest tint — icon circle background, chip fill */
  bg: string;
  /** icon / label foreground colour */
  fg: string;
  /** border / divider accent */
  border: string;
  /** panel tint — slightly richer than bg */
  panel: string;
  /** icon circle composite (bg + fg combined) */
  iconCircle: string;
  /** chip composite (bg + fg + border) */
  chip: string;
}

export const TONE_MAP: Record<Tone, ToneClasses> = {
  pink: {
    bg:         "bg-tone-pink-bg",
    fg:         "text-tone-pink-fg",
    border:     "border-tone-pink-border",
    panel:      "bg-tone-pink-panel",
    iconCircle: "bg-tone-pink-bg text-tone-pink-fg",
    chip:       "bg-tone-pink-bg text-tone-pink-fg border border-tone-pink-border",
  },
  green: {
    bg:         "bg-tone-green-bg",
    fg:         "text-tone-green-fg",
    border:     "border-tone-green-border",
    panel:      "bg-tone-green-panel",
    iconCircle: "bg-tone-green-bg text-tone-green-fg",
    chip:       "bg-tone-green-bg text-tone-green-fg border border-tone-green-border",
  },
  blue: {
    bg:         "bg-tone-blue-bg",
    fg:         "text-tone-blue-fg",
    border:     "border-tone-blue-border",
    panel:      "bg-tone-blue-panel",
    iconCircle: "bg-tone-blue-bg text-tone-blue-fg",
    chip:       "bg-tone-blue-bg text-tone-blue-fg border border-tone-blue-border",
  },
  yellow: {
    bg:         "bg-tone-yellow-bg",
    fg:         "text-tone-yellow-fg",
    border:     "border-tone-yellow-border",
    panel:      "bg-tone-yellow-panel",
    iconCircle: "bg-tone-yellow-bg text-tone-yellow-fg",
    chip:       "bg-tone-yellow-bg text-tone-yellow-fg border border-tone-yellow-border",
  },
  purple: {
    bg:         "bg-tone-purple-bg",
    fg:         "text-tone-purple-fg",
    border:     "border-tone-purple-border",
    panel:      "bg-tone-purple-panel",
    iconCircle: "bg-tone-purple-bg text-tone-purple-fg",
    chip:       "bg-tone-purple-bg text-tone-purple-fg border border-tone-purple-border",
  },
  orange: {
    bg:         "bg-tone-orange-bg",
    fg:         "text-tone-orange-fg",
    border:     "border-tone-orange-border",
    panel:      "bg-tone-orange-panel",
    iconCircle: "bg-tone-orange-bg text-tone-orange-fg",
    chip:       "bg-tone-orange-bg text-tone-orange-fg border border-tone-orange-border",
  },
};

/** Convenience helper — read a specific stop from the tone map */
export function getToneClasses(tone: Tone): ToneClasses {
  return TONE_MAP[tone];
}

/** All valid tone values (useful for zod enums / prop validation) */
export const TONES = Object.keys(TONE_MAP) as Tone[];
