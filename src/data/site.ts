/**
 * src/data/site.ts
 *
 * Brand-level constants shared across all pages and layout components.
 * This is the SINGLE source of truth for:
 *  - Brand identity (name, tagline, logo path)
 *  - Navigation links
 *  - Social media handles and URLs
 *  - Contact information
 *  - Legal / footer links
 */

/* ── Brand ───────────────────────────────────────────────────────── */
export const BRAND = {
  name:    "The Yoga Story",
  tagline: "Ancient Whispers, Modern Echoes",
  logo:    "/assets/logo.png",
  /** WhatsApp number — override with NEXT_PUBLIC_WHATSAPP_NUMBER env var */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
  whatsappMsg: "Hello! I'd like to learn more about The Yoga Story.",
  googleReviewUrl: "https://g.page/r/theyogastory/review",
  googleMapsUrl:   "https://maps.google.com/?q=The+Yoga+Story+Gurgaon",
} as const;

/* ── Navigation ──────────────────────────────────────────────────── */
export interface NavLink {
  label:  string;
  href:   string;
  /** If true, active match is exact pathname equality */
  exact?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home",         href: "/",              exact: true  },
  { label: "About Us",     href: "/about",         exact: true  },
  { label: "Services",     href: "/services",      exact: true  },
  { label: "Our Team",     href: "/about#team",    exact: false },
  { label: "Testimonials", href: "/testimonials",  exact: true  },
  { label: "Career",       href: "/career",        exact: true  },
  { label: "Contact",      href: "/contact",       exact: true  },
] as const;

export const CTA_LABEL = "Start Your Yoga Story";
export const CTA_HREF  = "/contact";

/* ── Social Media ────────────────────────────────────────────────── */
export interface SocialLink {
  id:       string;
  label:    string;
  href:     string;
  icon:     "instagram" | "facebook" | "youtube" | "linkedin";
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "ig",  label: "Instagram", href: "https://instagram.com/theyogastory",  icon: "instagram" },
  { id: "fb",  label: "Facebook",  href: "https://facebook.com/theyogastory",   icon: "facebook"  },
  { id: "yt",  label: "YouTube",   href: "https://youtube.com/@theyogastory",   icon: "youtube"   },
  { id: "li",  label: "LinkedIn",  href: "https://linkedin.com/company/theyogastory", icon: "linkedin" },
] as const;

export const SOCIAL_HANDLE = "@theyogastory";

/* ── Contact Details ─────────────────────────────────────────────── */
export const CONTACT = {
  phones: [
    "+91 98765 43210",
    "+91 98765 43211",
    "+91 98765 43212",
  ],
  emails: [
    "info@theyogastory.co.in",
    "TheYogaStoryTYS@gmail.com",
  ],
  timings: {
    weekdays: "Mon – Fri: 6:00 AM – 9:00 PM",
    weekends: "Sat – Sun: 6:00 AM – 8:00 PM",
  },
} as const;

export const LOCATIONS = [
  {
    id:       "gurgaon",
    name:     "Gurgaon Centre",
    subname:  "(Head Office)",
    address:  "G-41, Basement,\nSouth City 1, Sector 41,\nNear Gurudwara,\nGurugram, Haryana – 122022",
    mapsUrl:  "https://maps.google.com/?q=G-41+Basement+South+City+1+Sector+41+Gurugram",
    isHead:   true,
  },
  {
    id:       "dehradun",
    name:     "Dehradun Centre",
    subname:  "",
    address:  "Lane No. 9A,\nEkta Vihar,\nSahastradhara Road,\nDehradun, Uttarakhand – 248001",
    mapsUrl:  "https://maps.google.com/?q=Lane+9A+Ekta+Vihar+Sahastradhara+Road+Dehradun",
    isHead:   false,
  },
] as const;

/* ── Footer ──────────────────────────────────────────────────────── */
export const FOOTER_LEFT   = ["People · Practice · Purpose", "A Brighter Tomorrow"] as const;
export const FOOTER_RIGHT  = "More Breathe Belong" as const;
export const FOOTER_LEGAL  = [
  { label: "Privacy Policy",    href: "/privacy"  },
  { label: "Terms & Conditions", href: "/terms"   },
] as const;
export const COPYRIGHT = `© ${new Date().getFullYear()} The Yoga Story. All rights reserved.`;
