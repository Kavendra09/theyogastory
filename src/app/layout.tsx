import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/layout/ChatWidget";

/* ── Fonts ───────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

/* ── Viewport ────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#FFF3EA",
  width: "device-width",
  initialScale: 1,
};

/* ── Metadata ────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    template: "%s | The Yoga Story",
    default: "The Yoga Story — Ancient Whispers, Modern Echoes",
  },
  description:
    "Thoughtfully designed yoga programs for a healthier, happier and more mindful you. Studio classes, home sessions, online yoga, and teacher training in Gurgaon & Dehradun.",
  keywords: [
    "The Yoga Story", "Yoga Studio", "Yoga Classes", "Pre-Natal Yoga",
    "Kids Yoga", "Senior Citizen Yoga", "Online Yoga", "Home Yoga",
    "Teacher Training Course", "Corporate Yoga", "Gurgaon Yoga", "Dehradun Yoga",
  ],
  authors: [{ name: "The Yoga Story" }],
  openGraph: {
    title: "The Yoga Story — Ancient Whispers, Modern Echoes",
    description: "Thoughtfully designed yoga programs for a healthier, happier and more mindful you.",
    url: "https://theyogastory.co.in",
    siteName: "The Yoga Story",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Yoga Story — Ancient Whispers, Modern Echoes",
    description: "More. Breathe. Belong.",
  },
};

/* ── Root Layout ─────────────────────────────────────────────────── */
/**
 * Root layout: injects fonts, global CSS, and the persistent ChatWidget.
 * Header and Footer are NOT rendered here — they live in route-group
 * layouts so each page group can choose the correct variant.
 *
 * Route groups:
 *   (floating)  → Home, About, Services   → SiteHeader variant="floating"
 *   (bar)       → Testimonials, Career, Contact → SiteHeader variant="bar"
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="page-bg text-body font-body antialiased overflow-x-hidden min-h-screen">
        {children}
        {/* Persistent WhatsApp chat widget */}
        <ChatWidget />
      </body>
    </html>
  );
}
