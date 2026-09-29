/**
 * (bar)/testimonials/page.tsx — Testimonials Page
 *
 * Route: /testimonials
 * Layout: (bar) with solid white header (variant="bar") & full footer
 *
 * Sections:
 *  1. PageHero (testimonialsHero config)
 *  2. RatingSummaryBar (Google score, 5-star rating, 3 trust badges, Google Business link)
 *  3. SectionHeading ("Here's What They Say", centered with leaves)
 *  4. ReviewGrid (3-col desktop/tablet grid, mobile carousel, working client-side filters)
 *  5. CtaBanner closing ("Be A Part of Our Story" + "Write a Review on Google" button)
 */
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { RatingSummaryBar, ReviewGrid } from "@/features/testimonials";
import { testimonialsHero } from "@/data/heroes";
import { TESTIMONIALS_SECTION, TESTIMONIALS_CTA } from "@/data/testimonials";
import { ExternalLink, Star } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — The Yoga Story",
  description:
    "Read real Google reviews and experiences from members of The Yoga Story community in Gurgaon and Dehradun. 4.9/5 rated yoga studio.",
  openGraph: {
    title: "Testimonials | The Yoga Story",
    description: "Read real Google reviews and experiences from members of The Yoga Story community in Gurgaon and Dehradun. 4.9/5 rated yoga studio.",
    url: "https://theyogastory.co.in/testimonials",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ── 1. PageHero ───────────────────────────────────────────── */}
      <PageHero
        page="testimonials"
        eyebrow={testimonialsHero.eyebrow}
        titleParts={testimonialsHero.titleParts}
        titleParts2={testimonialsHero.titleParts2}
        subtitle={testimonialsHero.subtitle}
        description={testimonialsHero.description}
        tagChips={testimonialsHero.tagChips}
        artSrc={testimonialsHero.artSrc}
        artAlt={testimonialsHero.artAlt}
        kinBubble={testimonialsHero.kinBubble}
        kayoBubble={testimonialsHero.kayoBubble}
        sideNotes={testimonialsHero.sideNotes}
        theme={testimonialsHero.theme}
      />

      {/* ── 2. Rating Summary Bar Section ─────────────────────────── */}
      <div className="relative -mt-6 sm:-mt-8 z-30 mb-8 sm:mb-12">
        <Container size="lg">
          <RatingSummaryBar />
        </Container>
      </div>

      {/* ── 3. Reviews Section ("Here's What They Say") ───────────── */}
      <section className="py-6 sm:py-10 mb-16 relative" aria-labelledby="testimonials-heading">
        <Container size="lg">
          {/* Section Heading with mobile subtitle */}
          <div className="text-center mb-8 sm:mb-12">
            <SectionHeading
              id="testimonials-heading"
              variant="centered-with-leaves"
              eyebrow={TESTIMONIALS_SECTION.eyebrow}
              titleParts={[{ t: TESTIMONIALS_SECTION.title }]}
              subtitle={
                <span className="block sm:hidden text-muted text-xs mt-1">
                  {TESTIMONIALS_SECTION.mobileSubtitle}
                </span>
              }
            />
          </div>

          {/* Interactive Review Grid (3 cols tablet/desktop, mobile carousel) */}
          <ReviewGrid />
        </Container>
      </section>

      {/* ── 4. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft="Real Stories ♡"
        titleParts={[
          { t: "Be A Part of " },
          { t: "Our Story", accent: true },
        ]}
        subtitle={TESTIMONIALS_CTA.subtitle}
        scriptRight="Share the Joy ☺"
        action={
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              href={TESTIMONIALS_CTA.buttonHref}
              className="bg-white text-primary border-white hover:bg-white/95 shadow-card font-bold"
            >
              <Star size={16} className="fill-amber-400 text-amber-400 mr-1" />
              {TESTIMONIALS_CTA.buttonLabel}
              <ExternalLink size={14} className="ml-1 opacity-70" />
            </Button>
          </div>
        }
      />
    </>
  );
}
