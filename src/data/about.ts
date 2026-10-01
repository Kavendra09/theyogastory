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
    "We believe that wellness should feel natural, joyful and accessible. Our approach combines the timeless essence of yoga with the needs of modern life, helping people build a practice that can grow with them.",
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
      "Curious, playful and full of questions. She reminds us that yoga doesn't always have to be serious — sometimes it's okay to laugh, explore and be a little mischievous.",
    quote: "\"Big questions, bigger dreams! ♡\"",
  },
  {
    name: "Kayo",
    role: "The Little Mindfulness Mentor",
    tone: "blue",
    avatarImage: "/images/kin-kayo-mascots.jpg",
    badge: "Mentor",
    description:
      "Calmer, thoughtful and a little more mindful. He helps Kin slow down, breathe and see things differently — although keeping up with her isn't always easy!",
    quote: "\"Small steps make big changes. ☺\"",
  },
];

export const CHARACTERS_SECTION = {
  eyebrow: "",
  titleParts: [
    { t: "Meet " },
    { t: "Kin", accent: true },
    { t: " & " },
    { t: "Kayo", accent: true },
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
    "To create a space where people don't simply practice yoga, but discover a healthier relationship with their body, breath, mind and life.",
    "Because everyone's journey is different.\nAnd every journey deserves its own story.",
  ],
  scriptNote: "This is The Yoga Story. ☺",
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
