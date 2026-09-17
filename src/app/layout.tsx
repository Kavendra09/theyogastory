import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The Yoga Story | Boutique Yoga & Holistic Wellness Sanctuary",
  description:
    "An earthen sanctuary dedicated to mindful movement, breathwork, and nervous system harmony. Studio classes, private home sessions, and immersive wellness programs in a serene terracotta and sage environment.",
  keywords: [
    "The Yoga Story",
    "Yoga Studio",
    "Vinyasa Flow",
    "Hatha Yoga",
    "Sound Meditation",
    "Prenatal Yoga",
    "Ayurveda & Wellness",
    "Corporate Wellness",
    "Private Yoga Sessions",
  ],
  authors: [{ name: "The Yoga Story" }],
  openGraph: {
    title: "The Yoga Story | Sanctuary of Conscious Movement & Peace",
    description:
      "Step onto the mat and reconnect with your inner stillness. Discover thoughtful classes, master instructors, and restorative programs.",
    url: "https://theyogastory.com",
    siteName: "The Yoga Story",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Yoga Story | Boutique Yoga & Wellness Studio",
    description: "Breathe. Move. Transform. Welcome to The Yoga Story sanctuary.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} ${caveat.variable}`}>
      <body className="font-sans bg-cream-100 text-charcoal-900 selection:bg-brand-pinkLight selection:text-brand-pink">
        {children}
      </body>
    </html>
  );
}
