/**
 * src/data/home.ts
 *
 * All copy and config data for the Home page sections.
 * No text is ever hardcoded in JSX — it lives here.
 */
import type { AccentPart } from "@/components/ui/AccentText";
import type { Tone } from "@/theme/tones";
import {
  HeartPulse, Brain, Users, Smile, Flower2, Leaf, Heart, Sun,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Hero icon strip ─────────────────────────────────────────────── */
export interface HeroStatItem {
  icon: LucideIcon;
  label: string;
  tone: Tone;
}

export const HERO_STATS: HeroStatItem[] = [
  { icon: Leaf,  label: "Better Health",         tone: "green"  },
  { icon: Heart, label: "Calmer Mind",           tone: "pink"   },
  { icon: Users, label: "Stronger Community",    tone: "pink"   },
  { icon: Sun,   label: "Happier You",           tone: "yellow" },
];

/* ── Watch Story card ────────────────────────────────────────────── */
export const WATCH_STORY = {
  eyebrow:   "WATCH",
  heading:   "Watch Our Story",
  subtext:   "More than yoga, it's a way of life.",
  videoHref: "https://www.youtube.com/@theyogastory",
} as const;

/* ── Story section ───────────────────────────────────────────────── */
export const STORY_SECTION = {
  eyebrow: "THE YOGA STORY",
  titleParts: [
    { t: "More Than Yoga. It's a Journey " },
    { t: "Together.", accent: true },
  ] satisfies AccentPart[],
  body: [
    "With Kin's curiosity and Kayo's calm, we explore, learn and grow — one breath at a time.",
    "Join a community that believes in wellness, kindness and a better tomorrow.",
  ],
} as const;

/* ── Feature cards ───────────────────────────────────────────────── */
export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: Tone;
}

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    icon: Flower2,
    title: "Yoga for All Ages",
    description: "From little learners to lifelong practitioners",
    tone: "pink",
  },
  {
    icon: Leaf,
    title: "Expert Guidance",
    description: "Learn from experienced and passionate teachers",
    tone: "green",
  },
  {
    icon: Heart,
    title: "Personal Attention",
    description: "Small batches, big impact",
    tone: "pink",
  },
  {
    icon: Sun,
    title: "Holistic Wellness",
    description: "For a balanced and meaningful life",
    tone: "yellow",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Grow, connect and inspire together",
    tone: "blue",
  },
];

/* ── Corner script notes ─────────────────────────────────────────── */
export const HOME_SCRIPT_NOTES = [
  { text: "Ancient Whispers,\nModern Echoes ♡", rotate: -6 },
  { text: "Same Mat\nBrighter Days ☺", rotate: 5 },
] as const;
