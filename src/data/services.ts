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
  subtitle: "Practice Together, Grow Together",
  locationBadge: "Gurgaon & Dehradun Studios",
  tone: "pink" as Tone,
  icon: Home,
  services: [
    {
      id: "general-fitness",
      name: "General Fitness Yoga",
      price: "₹3,000",
      period: "per month",
      isConsult: false,
      tone: "pink",
      icon: Activity,
      image: "/images/yoga-blocks-hd.jpg",
    },
    {
      id: "prenatal-postnatal",
      name: "Pre-Natal & Post-Natal Yoga",
      price: "₹5,000",
      period: "per month",
      isConsult: false,
      tone: "pink",
      icon: Baby,
      image: "/images/cards-section-crop.jpg",
    },
    {
      id: "kids-yoga",
      name: "Kids Yoga",
      price: "₹3,500",
      period: "per month",
      isConsult: false,
      tone: "pink",
      icon: Smile,
      image: "/images/kin-kayo-testimonials-crop.jpg",
    },
    {
      id: "senior-yoga",
      name: "Senior Citizen Yoga",
      price: "₹3,500",
      period: "per month",
      isConsult: false,
      tone: "pink",
      icon: HeartPulse,
      image: "/images/kin-kayo-home-hero.jpg",
    },
    {
      id: "pranayama",
      name: "Pranayama Classes",
      price: "₹4,000",
      period: "per month",
      isConsult: false,
      tone: "pink",
      icon: Wind,
      image: "/images/yoga-blocks-hd.jpg",
    },
    {
      id: "panchakarma",
      name: "Panchakarma Therapy",
      price: "Consult for Details",
      period: "At Studio",
      isConsult: true,
      tone: "pink",
      icon: Flower2,
      image: "/images/cards-section-crop.jpg",
    },
    {
      id: "pranic-healing",
      name: "Pranic Healing",
      price: "Consult for Details",
      period: "At Studio",
      isConsult: true,
      tone: "pink",
      icon: Sparkles,
      image: "/images/kin-kayo-mascots.jpg",
    },
  ] satisfies StudioServiceItem[],
};

/* ── 2. Home Yoga ────────────────────────────────────────────────── */
export const HOME_YOGA = {
  eyebrow: "AT YOUR DOORSTEP",
  title: "Home Yoga",
  subtitle: "Personalized 1-on-1 Guidance at Home",
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
  scriptNote: "Your Space. Your Pace. Our Support. ♡",
  illustration: "/images/kin-kayo-home-hero.jpg",
};

/* ── 3. Online Yoga ──────────────────────────────────────────────── */
export const ONLINE_YOGA = {
  eyebrow: "LIVE INTERACTIVE SESSIONS",
  title: "Online Yoga",
  subtitle: "Live Online Batches with Certified Teachers",
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
  illustration: "/images/kin-kayo-testimonials-master-hd.jpg",
};

/* ── 5. Teacher Training Course (TTC) ────────────────────────────── */
export const TTC = {
  eyebrow: "YOGA ALLIANCE CERTIFIED",
  title: "Teacher Training Course",
  subtitle: "Deepen your practice. Share the gift of yoga.",
  tone: "purple" as Tone,
  icon: GraduationCap,
  tiers: [
    {
      hours: "200 Hours",
      price: "₹54,999",
      description: "Foundation Course • Certification",
      popular: false,
    },
    {
      hours: "300 Hours",
      price: "₹84,999",
      description: "Advanced Master Course",
      popular: true,
    },
    {
      hours: "500 Hours",
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
