/**
 * src/data/about.ts
 *
 * All copy and configuration for the /about page.
 * No hardcoded strings in JSX.
 */
import type { AccentPart } from "@/components/ui/AccentText";
import type { Tone } from "@/theme/tones";
import { Sparkles, Brain, Users, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Mobile-only Intro Block ─────────────────────────────────────── */
export const ABOUT_MOBILE_INTRO = {
  eyebrow: "OUR STORY",
  titleParts: [
    { t: "More Than Yoga. " },
    { t: "We're Building ", accent: true },
    { t: "a Story." },
  ] satisfies AccentPart[],
  paragraphs: [
    "Behind every class is a dream — to make wellness accessible, joyful, and deeply human. Meet the people and values at the heart of The Yoga Story.",
    "At The Yoga Story, yoga is more than a practice — it's a path to a healthier, happier, and more mindful life. We believe wellness should be accessible to everyone, regardless of age, experience, or background.",
  ],
};

/* ── Philosophy Row ──────────────────────────────────────────────── */
export interface PhilosophyPillar {
  icon: LucideIcon;
  label: string;
  tone: Tone;
  description: string;
}

export const PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  heading: "Move. Breathe. Belong.",
  scriptTag: "Move · Breathe · Belong ♡",
  paragraph:
    "We believe that true wellness is holistic — connecting the physical, mental, and communal aspects of our lives. Every practice is an opportunity to cultivate strength, peace, and meaningful connection.",
  pillars: [
    {
      icon: Sparkles,
      label: "Authentic Practice",
      tone: "green",
      description: "Rooted in timeless yogic traditions, adapted for modern daily living.",
    },
    {
      icon: Brain,
      label: "Mindful Living",
      tone: "pink",
      description: "Breathwork and awareness that extend far beyond your yoga mat.",
    },
    {
      icon: Users,
      label: "Supportive Community",
      tone: "pink",
      description: "An inclusive space where everyone belongs and grows together.",
    },
    {
      icon: Smile,
      label: "A Healthier Happier You",
      tone: "yellow",
      description: "Nurturing body, mind, and spirit for lasting balance and joy.",
    },
  ] satisfies PhilosophyPillar[],
  quoteCard: {
    quote: "Yoga is not just something you practice. It's something you live.",
    author: "THE YOGA STORY",
    tone: "pink" as Tone,
  },
};

/* ── Meet Kin & Kayo ─────────────────────────────────────────────── */
export interface CharacterProfile {
  name: string;
  role: string;
  tone: "pink" | "blue";
  avatarImage: string;
  description: string;
  quote: string;
  badge: string;
}

export const CHARACTERS: CharacterProfile[] = [
  {
    name: "Kin",
    role: "The Little Yoga Explorer",
    tone: "pink",
    avatarImage: "/images/kin-kayo-home-hero.jpg",
    badge: "Explorer",
    description:
      "Curious, playful, and always ready to try a new pose! Kin reminds us to keep our practice lighthearted, joyful, and full of wonder. Every wobble is just balance in disguise.",
    quote: "“Every wobble is just balance in disguise! 💗”",
  },
  {
    name: "Kayo",
    role: "The Little Mindfulness Mentor",
    tone: "blue",
    avatarImage: "/images/kin-kayo-mascots.jpg",
    badge: "Mentor",
    description:
      "Calm, thoughtful, and deeply grounded. Kayo teaches us to pause, breathe, and find quiet stillness even on the busiest days. In stillness, strength unfolds naturally.",
    quote: "“In the stillness of breath, you find your strength. 💙”",
  },
];

export const CHARACTERS_SECTION = {
  eyebrow: "MEET KIN & KAYO",
  titleParts: [
    { t: "The Heart and Soul of " },
    { t: "Our Community", accent: true },
  ] satisfies AccentPart[],
  paperNote: "Different personalities.\nSame beautiful journey. ♡",
};

/* ── Purpose Card ────────────────────────────────────────────────── */
export const PURPOSE = {
  eyebrow: "OUR CORE PURPOSE",
  title: "Our Purpose",
  signpostItems: [
    { label: "Healthier You", tone: "green" as Tone },
    { label: "Kinder Mind",   tone: "pink" as Tone },
    { label: "Brighter Days", tone: "yellow" as Tone },
  ],
  paragraphs: [
    "We started The Yoga Story with a simple conviction: that ancient yogic wisdom shouldn't feel distant, rigid, or intimidating. It should feel warm, accessible, and deeply personal.",
    "Through thoughtfully designed classes, compassionate certified guides, and an uplifting community, we are here to support every step of your wellness journey — today, tomorrow, and for years to come.",
  ],
  scriptNote: "Every Journey Matters ☺",
};

/* ── Closing Section ─────────────────────────────────────────────── */
export const ABOUT_CLOSING = {
  title: "This is The Yoga Story.",
  tagline: "Ancient Whispers, Modern Echoes.",
  scriptLeft: "Ancient Whispers ♡",
  scriptRight: "Modern Echoes ☺",
  ctaLabel: "Start Your Yoga Story",
  ctaHref: "/contact",
};
