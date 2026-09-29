/**
 * (bar)/career/page.tsx — Career Page
 *
 * Route: /career
 * Layout: (bar) with solid white header (variant="bar") & full footer
 * Active Link: "Career"
 *
 * Sections:
 *  1. PageHero (careerHero config)
 *  2. SectionHeading ("Current Openings")
 *  3. CareerOpenings (LocationFilter, 5 JobCards, 2 UploadCards side by side)
 *  4. CtaBanner closing ("Let's Create A Healthier Tomorrow, Together.")
 */
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { CareerOpenings } from "@/features/career";
import { careerHero } from "@/data/heroes";
import { CAREER_SECTION, CAREER_CTA } from "@/data/career";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Build Your Story With Us | The Yoga Story",
  description:
    "Join the team at The Yoga Story. Explore current openings in Gurgaon & Dehradun across yoga teaching, social media, marketing, centre management, and studio support.",
  openGraph: {
    title: "Careers — Build Your Story With Us | The Yoga Story",
    description: "Join the team at The Yoga Story. Explore current openings in Gurgaon & Dehradun across yoga teaching, marketing, management, and studio care.",
    url: "https://theyogastory.co.in/career",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function CareerPage() {
  return (
    <>
      {/* ── 1. PageHero ───────────────────────────────────────────── */}
      <PageHero
        page="career"
        eyebrow={careerHero.eyebrow}
        titleParts={careerHero.titleParts}
        titleParts2={careerHero.titleParts2}
        subtitle={careerHero.subtitle}
        description={careerHero.description}
        actions={careerHero.actions}
        iconStrip={careerHero.iconStrip}
        artSrc={careerHero.artSrc}
        artAlt={careerHero.artAlt}
        kinBubble={careerHero.kinBubble}
        kayoBubble={careerHero.kayoBubble}
        sideNotes={careerHero.sideNotes}
        theme={careerHero.theme}
      />

      {/* ── 2. Openings Section ───────────────────────────────────── */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <Container size="lg">
          <CareerOpenings />
        </Container>
      </section>

      {/* ── 3. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft={CAREER_CTA.scriptLeft}
        titleParts={CAREER_CTA.titleParts}
        subtitle={CAREER_CTA.subtitle}
        scriptRight={CAREER_CTA.scriptRight}
      />
    </>
  );
}
