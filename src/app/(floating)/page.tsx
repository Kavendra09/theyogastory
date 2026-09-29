/**
 * (floating)/page.tsx — Home Page
 *
 * Sections (in order):
 *  1. PageHero          — hero art, bubbles, script notes
 *  2. HeroIconStrip     — Better Health / Calmer Mind / Stronger Community / Happier You
 *  3. WatchStoryCard    — glass card, play icon, overlapping strip row
 *  4. ScrollHint        — animated mouse icon (auto-hides on scroll)
 *  5. StorySection      — "More Than Yoga" heading + body + 5 FeatureCards
 *
 * Corner ScriptNotes are rendered as absolute decorations around the
 * strip + story section transition.
 *
 * Server component — client islands imported as needed.
 */
import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { HeroIconStrip } from "@/components/sections/HeroIconStrip";
import { WatchStoryCard } from "@/components/sections/WatchStoryCard";
import { ScrollHint } from "@/components/sections/ScrollHint";
import { StorySection } from "@/components/sections/StorySection";
import { Container } from "@/components/ui/Container";
import { homeHero } from "@/data/heroes";
import { HERO_STATS, WATCH_STORY } from "@/data/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home — Ancient Whispers, Modern Echoes",
  description:
    "Thoughtfully designed yoga programs for a healthier, happier and more mindful you. Studio classes, home sessions, online yoga, and teacher training in Gurgaon & Dehradun.",
  openGraph: {
    title: "Home — Ancient Whispers, Modern Echoes | The Yoga Story",
    description: "Thoughtfully designed yoga programs for a healthier, happier and more mindful you.",
    url: "https://theyogastory.co.in",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <PageHero
        page="home"
        eyebrow={homeHero.eyebrow}
        titleParts={homeHero.titleParts}
        titleParts2={homeHero.titleParts2}
        subtitle={homeHero.subtitle}
        description={homeHero.description}
        actions={homeHero.actions}
        artSrc={homeHero.artSrc}
        artAlt={homeHero.artAlt}
        kinBubble={homeHero.kinBubble}
        kayoBubble={homeHero.kayoBubble}
        sideNotes={homeHero.sideNotes}
        theme={homeHero.theme}
      />

      {/* ── 2. Hero icon strip (overlaps hero bottom) ───────────── */}
      <HeroIconStrip items={HERO_STATS} />

      {/* ── 3. WatchStoryCard row + ScrollHint ──────────────────── */}
      <div className="relative py-6">

        <Container size="lg">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            {/* Watch story card — full-width mobile, auto on desktop */}
            <WatchStoryCard
              eyebrow={WATCH_STORY.eyebrow}
              heading={WATCH_STORY.heading}
              subtext={WATCH_STORY.subtext}
              href={WATCH_STORY.videoHref}
              className="sm:max-w-xs"
            />

            {/* ScrollHint — centered on desktop */}
            <div className="flex-1 flex justify-center">
              <Suspense fallback={null}>
                <ScrollHint label="SCROLL TO EXPLORE" />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>

      {/* ── 4. Story section ─────────────────────────────────────── */}
      <StorySection />
    </>
  );
}
