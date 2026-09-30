/**
 * src/data/contact.ts
 *
 * Contact page configuration, info strip data, locations, and form options.
 * Zero hardcoded text in JSX.
 */
import type { Tone } from "@/theme/tones";
import { Phone, Mail, Clock, MapPin, type LucideIcon } from "lucide-react";

export interface ContactInfoLine {
  text: string;
  href?: string;
}

export interface ContactInfoStripItem {
  id: string;
  title: string;
  lines?: ContactInfoLine[];
  handle?: string;
  tone: Tone;
  icon: LucideIcon;
}

export const CONTACT_INFO_STRIP: ContactInfoStripItem[] = [
  {
    id: "phone",
    title: "Call / WhatsApp Us",
    lines: [
      { text: "+91 98765 43210", href: "tel:+919876543210" },
      { text: "+91 98765 43211", href: "tel:+919876543211" },
      { text: "+91 98765 43212", href: "tel:+919876543212" },
    ],
    tone: "pink" as Tone,
    icon: Phone,
  },
  {
    id: "email",
    title: "Email Us",
    lines: [
      { text: "info@theyogastory.co.in", href: "mailto:info@theyogastory.co.in" },
      { text: "TheYogaStoryTYS@gmail.com", href: "mailto:TheYogaStoryTYS@gmail.com" },
    ],
    tone: "blue" as Tone,
    icon: Mail,
  },
  {
    id: "timings",
    title: "Our Timings",
    lines: [
      { text: "Mon - Fri: 6:00 AM - 9:00 PM" },
      { text: "Sat - Sun: 6:00 AM - 8:00 PM" },
    ],
    tone: "green" as Tone,
    icon: Clock,
  },
  {
    id: "social",
    title: "Follow Us",
    handle: "@theyogastory",
    tone: "pink" as Tone,
    icon: MapPin,
  },
];

export interface StudioLocation {
  id: string;
  name: string;
  subname?: string;
  addressLines: string[];
  mapsUrl: string;
  linkLabel: string;
  tone: Tone;
  isHead?: boolean;
}

export const CONTACT_LOCATIONS: StudioLocation[] = [
  {
    id: "gurgaon",
    name: "Gurgaon Centre",
    subname: "(Head Office)",
    addressLines: [
      "G-41, Basement,",
      "South City 1, Sector 41,",
      "Near Gurudwara,",
      "Gurugram, Haryana – 122022",
    ],
    mapsUrl: "https://maps.google.com/?q=G-41+Basement+South+City+1+Sector+41+Gurugram",
    linkLabel: "View on Google Maps",
    tone: "pink",
    isHead: true,
  },
  {
    id: "dehradun",
    name: "Dehradun Centre",
    subname: "",
    addressLines: [
      "Lane No. 9A,",
      "Ekta Vihar,",
      "Sahastradhara Road,",
      "Dehradun, Uttarakhand – 248001",
    ],
    mapsUrl: "https://maps.google.com/?q=Lane+9A+Ekta+Vihar+Sahastradhara+Road+Dehradun",
    linkLabel: "View on Google Maps",
    tone: "blue",
    isHead: false,
  },
];

export const SUBJECT_OPTIONS = [
  { value: "general", label: "General Enquiry" },
  { value: "studio-classes", label: "Studio Classes" },
  { value: "home-yoga", label: "Home Yoga Sessions" },
  { value: "online-yoga", label: "Online Yoga Classes" },
  { value: "teacher-training", label: "Teacher Training Course (TTC)" },
  { value: "corporate-wellness", label: "Corporate Wellness" },
  { value: "collaboration", label: "Collaboration / Career" },
];

export const CONTACT_PAGE_DATA = {
  locationsHeading: "Our Centres",
  locationsScriptNote: "Different Locations Same Purpose A Healthier You ♡",
  formTitle: "Send Us a Message",
  formSubtitle: "Fill out the form below and our team will get back to you within 24 hours.",
};

export const CONTACT_CTA = {
  scriptLeft: "Connect With Us ♡",
  titleParts: [
    { t: "Let's Create A Healthier Tomorrow, " },
    { t: "Together.", accent: true },
  ],
  subtitle: "Yoga connects us. So do conversations.",
  scriptRight: "Ancient Whispers ☺",
};
