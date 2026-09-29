/**
 * (floating)/about/page.tsx — About Page
 *
 * Route: /about
 * Layout: (floating) with glass floating header & minimal footer
 *
 * Sections:
 *  1. PageHero (aboutHero config)
 *  2. AboutMobileIntro (visible on mobile only)
 *  3. PhilosophyRow (Move. Breathe. Belong., 4 icon pillars, pink QuoteCard)
 *  4. MeetKinKayo (Kin & Kayo character profile cards + handwritten paper note)
 *  5. PurposeCard (green panel with signpost scene + purpose narrative)
 *  6. AboutClosing ("This is The Yoga Story. Ancient Whispers, Modern Echoes." with stones/mat scene + CTA)
 */
import { PageHero } from "@/components/sections/PageHero";
import { PhilosophyRow } from "@/components/sections/PhilosophyRow";
import { MeetKinKayo } from "@/components/sections/MeetKinKayo";
import { PurposeCard } from "@/components/sections/PurposeCard";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { aboutHero } from "@/data/heroes";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Yoga Story",
  description:
    "Behind every class is a dream — to make wellness accessible, joyful, and deeply human. Meet Kin, Kayo, and the philosophy driving The Yoga Story.",
  openGraph: {
    title: "About Us | The Yoga Story",
    description: "Behind every class is a dream — to make wellness accessible, joyful, and deeply human. Meet Kin, Kayo, and the philosophy driving The Yoga Story.",
    url: "https://theyogastory.co.in/about",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── 1. PageHero (About config) ─────────────────────────────── */}
      <PageHero
        page="about"
        eyebrow={aboutHero.eyebrow}
        titleParts={aboutHero.titleParts}
        titleParts2={aboutHero.titleParts2}
        subtitle={aboutHero.subtitle}
        description={aboutHero.description}
        actions={aboutHero.actions}
        artSrc={aboutHero.artSrc}
        artAlt={aboutHero.artAlt}
        kinBubble={aboutHero.kinBubble}
        kayoBubble={aboutHero.kayoBubble}
        sideNotes={aboutHero.sideNotes}
        theme={aboutHero.theme}
      />

      {/* ── 2. Section 1: Philosophy Row ──────────────────────────── */}
      <div id="journey">
        <PhilosophyRow />
      </div>

      {/* ── 3. Section 2: Meet Kin & Kayo ─────────────────────────── */}
      <div id="team">
        <MeetKinKayo />
      </div>

      {/* ── 4. Section 3: Our Purpose ─────────────────────────────── */}
      <PurposeCard />

      {/* ── 5. Section 4: Closing Banner ──────────────────────────── */}
      <CtaBanner
        scriptLeft="Ancient Whispers ♡"
        titleParts={[
          { t: "This is " },
          { t: "The Yoga Story.", accent: true },
        ]}
        subtitle="Ancient Whispers, Modern Echoes."
        scriptRight="Modern Echoes ☺"
      />
    </>
  );
}
