/**
 * src/data/services.ts
 *
 * All service offerings, pricing tiers, and descriptions for /services.
 * Zero hardcoded text in JSX.
 */
import type { Tone } from "@/theme/tones";
import {
  Home,
  Laptop,
  Building2,
  GraduationCap,
  Sparkles,
  HeartPulse,
  Baby,
  Smile,
  Activity,
  Wind,
  Flower2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── 1. Studio Classes ───────────────────────────────────────────── */
export interface StudioServiceItem {
  id: string;
  name: string;
  price: string;
  period?: string;
  isConsult?: boolean;
  tone: Tone;
  icon: LucideIcon;
  image: string;
}

export const STUDIO_CLASSES = {
  eyebrow: "IN-STUDIO EXPERIENCE",
  title: "Studio Classes",
  subtitle: "Experience guided yoga sessions at our studio, in a calm and supportive environment.",
  locationBadge: "Gurgaon & Dehradun Studios",
  tone: "pink" as Tone,
  icon: Home,
  services: [
    {
      id: "general-fitness",
      name: "General Fitness Yoga",
      price: "₹3,000",
      period: "/ month",
      isConsult: false,
      tone: "pink",
      icon: Activity,
      image: "/images/services/general_fitness_clean.jpg",
    },
    {
      id: "prenatal-postnatal",
      name: "Pre-Natal & Post-Natal Yoga",
      price: "₹5,000",
      period: "/ month",
      isConsult: false,
      tone: "pink",
      icon: Baby,
      image: "/images/services/prenatal_yoga_clean.jpg",
    },
    {
      id: "kids-yoga",
      name: "Kids Yoga",
      price: "₹3,500",
      period: "/ month",
      isConsult: false,
      tone: "green",
      icon: Smile,
      image: "/images/services/kids_yoga_clean.jpg",
    },
    {
      id: "senior-yoga",
      name: "Senior Citizen Yoga",
      price: "₹3,500",
      period: "/ month",
      isConsult: false,
      tone: "purple",
      icon: HeartPulse,
      image: "/images/services/senior_yoga_clean.jpg",
    },
    {
      id: "pranayama",
      name: "Pranayama Classes",
      price: "₹4,000",
      period: "/ month",
      isConsult: false,
      tone: "blue",
      icon: Wind,
      image: "/images/services/pranayama_yoga_clean.jpg",
    },
    {
      id: "panchakarma",
      name: "Panchakarma Therapy",
      price: "At Studio",
      period: "Consult for Details",
      isConsult: true,
      tone: "orange",
      icon: Flower2,
      image: "/images/services/panchakarma_therapy_clean.jpg",
    },
    {
      id: "pranic-healing",
      name: "Pranic Healing",
      price: "At Studio",
      period: "Consult for Details",
      isConsult: true,
      tone: "purple",
      icon: Sparkles,
      image: "/images/services/pranic_healing_clean.jpg",
    },
  ] satisfies StudioServiceItem[],
};

/* ── 2. Home Yoga ────────────────────────────────────────────────── */
export const HOME_YOGA = {
  eyebrow: "AT YOUR DOORSTEP",
  title: "Home Yoga Classes",
  subtitle: "Personalized yoga sessions in the comfort of your home.",
  tone: "green" as Tone,
  icon: Home,
  checklist: [
    "General Fitness Yoga",
    "Pre-Natal & Post-Natal Yoga",
    "Kids Yoga",
    "Senior Citizen Yoga",
  ],
  pricing: {
    prefix: "Starting from",
    amount: "₹9,000",
    period: "/ month",
    details: "(3 days a week)",
  },
  scriptNote: "Your Space. Your Pace. Our Support.",
  illustration: "/images/services/home_yoga_woman.jpg",
};

/* ── 3. Online Yoga ──────────────────────────────────────────────── */
export const ONLINE_YOGA = {
  eyebrow: "LIVE INTERACTIVE SESSIONS",
  title: "Online Yoga Classes",
  subtitle: "Join from anywhere. Stay consistent. Stay healthy.",
  tone: "blue" as Tone,
  icon: Laptop,
  globeLine: "Same Guidance. More Flexibility. Anywhere in the World.",
  services: [
    { name: "General Fitness Yoga", price: "₹3,000", period: "/ month" },
    { name: "Pre-Natal & Post-Natal Yoga", price: "₹5,000", period: "/ month" },
    { name: "Kids Yoga", price: "₹3,500", period: "/ month" },
    { name: "Senior Citizen Yoga", price: "₹3,500", period: "/ month" },
  ],
};

/* ── 4. Corporate Yoga ───────────────────────────────────────────── */
export const CORPORATE_YOGA = {
  eyebrow: "WORKPLACE WELLNESS",
  title: "Corporate Yoga",
  subtitle: "Wellness for a healthier, more productive workplace.",
  tone: "orange" as Tone,
  icon: Building2,
  pricing: {
    amount: "₹2,000",
    period: "per session",
    details: "Custom corporate packages available",
  },
  features: [
    "Desk ergonomics & posture correction",
    "Stress relief & breathwork breaks",
    "Team mindfulness & energy boosters",
  ],
  illustration: "/images/services/corporate_yoga_team_clean.jpg",
};

/* ── 5. Teacher Training Course (TTC) ────────────────────────────── */
export const TTC = {
  eyebrow: "YOGA ALLIANCE CERTIFIED",
  title: "Teacher Training Course (TTC)",
  subtitle: "Deepen your practice. Share the gift of yoga.",
  tone: "purple" as Tone,
  icon: GraduationCap,
  tiers: [
    {
      hours: "200 Hours TTC",
      price: "₹54,999",
      description: "Foundation Course • Certification",
      popular: false,
    },
    {
      hours: "300 Hours TTC",
      price: "₹84,999",
      description: "Advanced Master Course",
      popular: true,
    },
    {
      hours: "500 Hours TTC",
      price: "₹1,20,999",
      description: "Comprehensive Complete Journey",
      popular: false,
    },
  ],
  accreditation: "Internationally Recognized Yoga Alliance Standards",
};

/* ── 6. Services CTA Banner ──────────────────────────────────────── */
export const SERVICES_CTA = {
  scriptLeft: "Move · Breathe · Belong ♡",
  titleParts: [
    { t: "More Than Services. " },
    { t: "A Stronger, Healthier, ", accent: true },
    { t: "Happier You." },
  ],
  subtitle: "Ready to start your yoga story? Book your first session with us today.",
  scriptRight: "Same Mat, Brighter Days ☺",
  ctaText: "Start Your Yoga Story",
  ctaHref: "/contact",
};
