/**
 * src/data/heroes.ts
 *
 * Per-page PageHero configuration — all copy from screenshots.
 * Components import from here; NO text is hardcoded in JSX.
 */
import type { AccentPart } from "@/components/ui/AccentText";
import type { SpeechBubbleProps } from "@/components/sections/PageHero";
import type { IconStripItem } from "@/components/sections/IconStrip";
import {
  MessageCircle, Users, Heart, Leaf,
  Briefcase, UserCheck, Sun, Smile,
  Share2, TrendingUp, Flower2,
  HeartPulse, Brain,
} from "lucide-react";

/* ── Shared breadcrumb helper ─────────────────────────────────── */
export interface Breadcrumb { label: string; href: string }

/* ── SideNote helper ──────────────────────────────────────────── */
export interface SideNote {
  text: string;
  rotate?: number;
  /** Percentage from left edge of hero container */
  leftPct?: number;
  /** Percentage from top of hero container */
  topPct?: number;
  heart?: boolean;
  isCard?: boolean;
}

/* ── Full hero config type ────────────────────────────────────── */
export interface HeroConfig {
  page: string;
  eyebrow?: string;
  breadcrumb?: Breadcrumb[];
  titleParts: AccentPart[];
  /** Second title line — rendered as a separate AccentText block */
  titleParts2?: AccentPart[];
  subtitle?: string;
  description?: string;
  /** Vertical tag chips (left side, stacked) — used on testimonials */
  tagChips?: string[];
  /** Action buttons config — consumed by PageHero to render Buttons */
  actions?: Array<{
    label: string;
    href: string;
    variant?: "primary" | "outline" | "ghost";
    trailingIcon?: boolean;
  }>;
  iconStrip?: IconStripItem[];
  /** Path to hero art (Kin + Kayo composite) */
  artSrc: string;
  artAlt: string;
  kinBubble?: Omit<SpeechBubbleProps, "tone" | "tail"> & { delay?: number};
  kayoBubble?: Omit<SpeechBubbleProps, "tone" | "tail"> & { delay?: number};
  sideNotes?: SideNote[];
  theme: "warm" | "clean";
}

/* ═══════════════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════════════ */
export const homeHero: HeroConfig = {
  page: "home",
  eyebrow: "MOVE · BREATHE · BELONG",
  titleParts: [{ t: "A Healthier" }],
  titleParts2: [{ t: "Happier " }, { t: "You", accent: true }],
  description:
    "Authentic yoga practices, mindful living and a supportive community — for every age, every journey, every you.",
  actions: [
    { label: "Book a Trial Class", href: "/contact", variant: "primary", trailingIcon: true },
    { label: "Explore Our Classes", href: "/services", variant: "outline" },
  ],
  iconStrip: [
    { icon: Leaf,  label: "Better\nHealth"      },
    { icon: Heart, label: "Calmer\nMind"        },
    { icon: Users, label: "Stronger\nCommunity" },
    { icon: Sun,   label: "Happier\nYou"        },
  ],
  artSrc: "/assets/bg/home.jpg",
  artAlt: "Kin and Kayo — The Yoga Story mascots",
  kinBubble: {
    name: "Kin",
    lines: ["Kayo...", "Do we really have", "to sit quietly? 😣"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["Just a few", "minutes, Kin.", "Great things", "happen in stillness. 😊"],
    delay: 0.4,
  },
  sideNotes: [],
  theme: "warm",
};

/* ═══════════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════════ */
export const aboutHero: HeroConfig = {
  page: "about",
  eyebrow: "OUR STORY · OUR PEOPLE · OUR PURPOSE",
  titleParts: [{ t: "About " }, { t: "Us", accent: true }],
  subtitle: "More Than Yoga. We're Building a Story.",
  description:
    "Welcome to The Yoga Story — a space where ancient wisdom meets modern living, and where every breath, every movement and every moment becomes a part of your own story.",
  actions: [
    { label: "Our Journey ↓", href: "#journey", variant: "primary", trailingIcon: false },
  ],
  artSrc: "/assets/bg/about.jpg",
  artAlt: "Kin and Kayo sharing The Yoga Story",
  kinBubble: {
    name: "Kin",
    lines: ["So… this is our story?", "Yay! Tell me everything! ♡"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["Yes, Kin. It's a story of", "people, practice, and a", "happier tomorrow. And", "you're a part of it. 😊"],
    delay: 0.35,
  },
  theme: "warm",
};

/* ═══════════════════════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════════════════════ */
export const servicesHero: HeroConfig = {
  page: "services",
  breadcrumb: [
    { label: "Home",     href: "/" },
    { label: "Services", href: "/services" },
  ],
  titleParts: [{ t: "Our " }, { t: "Services", accent: true }],
  description: "Thoughtfully designed yoga programs for a healthier, happier and more mindful you.",
  eyebrow: "PEOPLE · PURPOSE · PRACTICE · A BRIGHTER TOMORROW",
  artSrc: "/assets/bg/services.jpg",
  artAlt: "Kin and Kayo showcasing yoga services",
  kinBubble: {
    name: "Kin",
    lines: ["So many ways to feel better!", "Which one will you choose? 💕"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["No matter your age, place or goal —", "The Yoga Story has a service for you! 💙"],
    delay: 0.4,
  },
  sideNotes: [],
  theme: "warm",
};

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
export const testimonialsHero: HeroConfig = {
  page: "testimonials",
  eyebrow: "REAL PEOPLE · REAL EXPERIENCES · A HEALTHIER TOMORROW",
  titleParts: [{ t: "What Our" }],
  titleParts2: [{ t: "Community", accent: true }, { t: " Says" }],
  subtitle: "Real stories. Real people. Real impact.",
  description:
    "From better health and calmer minds to brighter lives, hear from our amazing community about their Yoga Story.",
  tagChips: ["Yoga", "People", "Positive Change"],
  artSrc: "/assets/bg/testimonials.jpg",
  artAlt: "Kin and Kayo — our community mascots",
  kinBubble: {
    name: "Kin",
    lines: ["Real people.", "Real stories.", "Real inspiration! 💕"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["Every review", "motivates us", "to keep spreading", "wellness! 💙"],
    delay: 0.35,
  },
  sideNotes: [],
  theme: "clean",
};

/* ═══════════════════════════════════════════════════════════════
   CAREER
═══════════════════════════════════════════════════════════════ */
export const careerHero: HeroConfig = {
  page: "career",
  eyebrow: "PEOPLE · PRACTICE · PURPOSE · A BRIGHTER TOMORROW",
  titleParts: [{ t: "Build Your" }],
  titleParts2: [{ t: "Story", accent: true }, { t: " With Us" }],
  description:
    "Be a part of The Yoga Story — where people, purpose and wellness come together.",
  actions: [],
  iconStrip: [
    { icon: Leaf,       label: "Meaningful Work" },
    { icon: Users,      label: "Supportive Team" },
    { icon: Heart,      label: "Healthier Lives" },
    { icon: Flower2,    label: "Positive Impact" },
  ],
  artSrc: "/assets/bg/career.jpg",
  artAlt: "Kin and Kayo inviting you to join the team",
  kinBubble: {
    name: "Kin",
    lines: ["Kayo, kya yahan", "mere liye bhi", "koi job hai? ♥"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["Pehle yoga", "karna seekho,", "Kin. 😀"],
    delay: 0.35,
  },
  sideNotes: [],
  theme: "clean",
};

/* ═══════════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════════ */
export const contactHero: HeroConfig = {
  page: "contact",
  eyebrow: "PEOPLE · PRACTICE · PURPOSE",
  titleParts: [{ t: "Let’s " }, { t: "Connect", accent: true }],
  subtitle: "We’re here to listen, help and be a part of your Yoga Story.",
  description:
    "Have a question, want to join our classes, explore a collaboration or just say hello? Reach out to us — we’d love to hear from you!",
  iconStrip: [
    { icon: MessageCircle, label: "Ask a Question"       },
    { icon: Users,         label: "Join Our Community"   },
    { icon: Leaf,          label: "Explore Opportunities" },
    { icon: Heart,         label: "Let’s Grow Together"  },
  ],
  artSrc: "/assets/bg/contact.jpg",
  artAlt: "Kin and Kayo ready to connect with you",
  kinBubble: {
    name: "Kin",
    lines: ["Kayo, agar", "mujhe kuch puchna ho", "to kahan contact", "karen? ❤️"],
    delay: 0,
  },
  kayoBubble: {
    name: "Kayo",
    lines: ["Bahut easy hai,", "Kin. Just reach out —", "we’re always", "here! 😊"],
    delay: 0.35,
  },
  sideNotes: [],
  theme: "clean",
};

/* ── Map for easy page lookup ────────────────────────────────── */
export const HERO_CONFIGS: Record<string, HeroConfig> = {
  home:          homeHero,
  about:         aboutHero,
  services:      servicesHero,
  testimonials:  testimonialsHero,
  career:        careerHero,
  contact:       contactHero,
};
