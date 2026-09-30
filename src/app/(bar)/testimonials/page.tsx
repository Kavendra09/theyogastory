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
import { RatingSummaryBar, ReviewGrid, GoogleLogo } from "@/features/testimonials";
import { testimonialsHero } from "@/data/heroes";
import { TESTIMONIALS_SECTION, TESTIMONIALS_CTA } from "@/data/testimonials";
import { ExternalLink, Star, ArrowRight } from "lucide-react";

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
        <Container size="xl">
          <RatingSummaryBar />
        </Container>
      </div>

      {/* ── 3. Reviews Section ("Here's What They Say") ───────────── */}
      <section className="py-6 sm:py-10 mb-16 relative" aria-labelledby="testimonials-heading">
        <Container size="xl">
          {/* Section Heading matching screenshot */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2">
              <span className="text-emerald-600 text-base sm:text-lg">🌿</span>
              <span className="text-emerald-700/30 text-sm hidden sm:inline">──────</span>
              <h2 id="testimonials-heading" className="font-heading font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
                {TESTIMONIALS_SECTION.title}
              </h2>
              <span className="text-emerald-700/30 text-sm hidden sm:inline">──────</span>
              <span className="text-emerald-600 text-base sm:text-lg">🌿</span>
            </div>
            <p className="text-muted text-xs sm:text-sm">
              {TESTIMONIALS_SECTION.subtitle}
            </p>
          </div>

          {/* Interactive Review Grid (3 cols tablet/desktop, mobile carousel) */}
          <ReviewGrid />
        </Container>
      </section>

      {/* ── 4. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft="Same Mat Brighter Days ♡"
        titleParts={[
          { t: "Be A Part of " },
          { t: "Our Story", accent: true },
        ]}
        subtitle={TESTIMONIALS_CTA.subtitle}
        action={
          <div className="flex justify-center mt-1">
            <a
              href={TESTIMONIALS_CTA.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-pill hover:scale-105 transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0">
                <GoogleLogo className="w-3.5 h-3.5" />
              </div>
              <span>{TESTIMONIALS_CTA.buttonLabel}</span>
              <ArrowRight size={15} />
            </a>
          </div>
        }
      />
    </>
  );
}
