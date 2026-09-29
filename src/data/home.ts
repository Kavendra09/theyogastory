/**
 * src/data/home.ts
 *
 * All copy and config data for the Home page sections.
 * No text is ever hardcoded in JSX — it lives here.
 */
import type { AccentPart } from "@/components/ui/AccentText";
import type { Tone } from "@/theme/tones";
import {
  HeartPulse, Brain, Users, Smile,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Hero icon strip ─────────────────────────────────────────────── */
export interface HeroStatItem {
  icon: LucideIcon;
  label: string;
  tone: Tone;
}

export const HERO_STATS: HeroStatItem[] = [
  { icon: HeartPulse, label: "Better Health",         tone: "green"  },
  { icon: Brain,      label: "Calmer Mind",           tone: "pink"   },
  { icon: Users,      label: "Stronger Community",    tone: "pink"   },
  { icon: Smile,      label: "Happier You",           tone: "yellow" },
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
    { t: "More Than Yoga. " },
    { t: "It's a Journey", accent: true },
    { t: " Together." },
  ] satisfies AccentPart[],
  body: [
    "At The Yoga Story, yoga is more than a practice — it's a path to a healthier, happier, and more mindful life. We believe wellness should be accessible to everyone, regardless of age, experience, or background.",
    "From our warm studio in Gurgaon to your living room screen, we bring expert guidance, personal attention, and genuine care to every session. This is your story. We're just here to help you write it.",
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
    icon: Users,
    title: "Yoga for All Ages",
    description: "From toddlers to seniors — every body, every stage of life has a home here.",
    tone: "pink",
  },
  {
    icon: HeartPulse,
    title: "Expert Guidance",
    description: "Certified instructors with years of experience in diverse yoga traditions.",
    tone: "green",
  },
  {
    icon: Brain,
    title: "Personal Attention",
    description: "Small batches and tailored sessions ensure you progress at your own pace.",
    tone: "pink",
  },
  {
    icon: Smile,
    title: "Holistic Wellness",
    description: "We weave breathwork, mindfulness, and movement into every class.",
    tone: "yellow",
  },
  {
    icon: HeartPulse,
    title: "Supportive Community",
    description: "Join a family of like-minded souls who lift each other higher, every day.",
    tone: "blue",
  },
];

/* ── Corner script notes ─────────────────────────────────────────── */
export const HOME_SCRIPT_NOTES = [
  { text: "Ancient Whispers,\nModern Echoes ♡", rotate: -6 },
  { text: "Same Mat\nBrighter Days ☺", rotate: 5 },
] as const;
