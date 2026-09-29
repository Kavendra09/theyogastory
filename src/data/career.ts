/**
 * src/data/career.ts
 *
 * All job openings and career page data.
 * Zero hardcoded text in JSX.
 */
import type { Tone } from "@/theme/tones";
import { Share2, TrendingUp, Flower2, Award, Brush, type LucideIcon } from "lucide-react";

export interface JobOpening {
  id: string;
  title: string;
  subtitle?: string;
  location: "Gurgaon" | "Gurgaon / Dehradun";
  type: "Full-time" | "Part-time / Full-time";
  experience: string;
  description: string;
  tone: Tone;
  icon: LucideIcon;
}

export const JOBS_LIST: JobOpening[] = [
  {
    id: "social-media-executive",
    title: "Social Media Executive",
    subtitle: "(Social Media Handling)",
    location: "Gurgaon",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Manage our social media presence across platforms, create engaging content and build our online community.",
    tone: "pink",
    icon: Share2,
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing & Social Media Executive",
    subtitle: "",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Plan and execute digital campaigns, handle social media, drive lead generation and support our brand growth.",
    tone: "green",
    icon: TrendingUp,
  },
  {
    id: "yoga-teacher",
    title: "Yoga Teacher",
    subtitle: "(Yoga Coach)",
    location: "Gurgaon / Dehradun",
    type: "Part-time / Full-time",
    experience: "As per requirement",
    description:
      "Share your expertise, inspire others and be a part of our growing yoga community.",
    tone: "purple",
    icon: Flower2,
  },
  {
    id: "centre-manager",
    title: "Centre Manager",
    subtitle: "",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "2–5 years",
    description:
      "Oversee day-to-day centre operations, manage schedules, coordinate with members and lead the team for a smooth experience.",
    tone: "yellow",
    icon: Award,
  },
  {
    id: "centre-attendant",
    title: "Centre Attendant",
    subtitle: "(Studio Care & Support)",
    location: "Gurgaon / Dehradun",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Keep our centre clean, organized and welcoming for everyone. Provide basic assistance to ensure a great experience for our members.",
    tone: "blue",
    icon: Brush,
  },
];

export const CAREER_SECTION = {
  eyebrow: "WE ARE HIRING",
  title: "Current Openings",
  subtitle: "Find your place in our growing family of wellness enthusiasts.",
};

export const UPLOAD_CARDS_DATA = [
  {
    id: "general-resume",
    tone: "pink" as Tone,
    title: "Submit Your Resume",
    text: "Don't see a role that fits your current skillset? Send us your resume anyway! We're always looking for passionate talent to join our mission.",
    buttonLabel: "Upload Resume →",
    acceptedNote: "Accepted formats: PDF, DOC, DOCX (Max 5 MB)",
  },
  {
    id: "teacher-portfolio",
    tone: "green" as Tone,
    title: "Yoga Teacher Portfolio",
    text: "Are you a certified yoga teacher looking to teach with us? Share your certifications, teaching philosophy, and video links with our team.",
    buttonLabel: "Upload Portfolio →",
    acceptedNote: "Accepted formats: PDF, DOC, DOCX (Max 5 MB)",
  },
];

export const CAREER_CTA = {
  scriptLeft: "Grow With Us ♡",
  titleParts: [
    { t: "Let's Create A Healthier Tomorrow, " },
    { t: "Together.", accent: true },
  ],
  subtitle: "Join a team that believes in mindfulness, growth and positive change.",
  scriptRight: "Make A Difference ☺",
  ctaText: "Apply Today",
  ctaHref: "#openings",
};
