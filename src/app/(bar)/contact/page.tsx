/**
 * (bar)/contact/page.tsx — Contact Page
 *
 * Route: /contact
 * Layout: (bar) with solid white header (variant="bar") & full footer
 * Active Link: "Contact"
 *
 * Sections:
 *  1. PageHero (contactHero config)
 *  2. ContactInfoStrip (4 columns: Call/WhatsApp, Email, Timings, Social)
 *  3. Locations & ContactForm:
 *     - Desktop: Locations left, Form right
 *     - Tablet: Locations row, Form full width below
 *     - Mobile: Stacked
 *  4. CtaBanner closing ("Let's Create A Healthier Tomorrow, Together.")
 */
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { LotusIcon } from "@/components/ui/Atoms";
import { Heart, Users, Sun } from "lucide-react";
import {
  ContactInfoStrip,
  LocationCard,
  ContactForm,
  LocationsHeading,
} from "@/features/contact";
import { contactHero } from "@/data/heroes";
import { CONTACT_LOCATIONS, CONTACT_CTA } from "@/data/contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — The Yoga Story",
  description:
    "Get in touch with The Yoga Story studio in Gurgaon & Dehradun. Reach out for class enquiries, home yoga, online sessions, corporate wellness, or teacher training.",
  openGraph: {
    title: "Contact Us | The Yoga Story",
    description: "Get in touch with The Yoga Story studio in Gurgaon & Dehradun. Reach out for class enquiries, home yoga, online sessions, corporate wellness, or teacher training.",
    url: "https://theyogastory.co.in/contact",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── 1. PageHero ───────────────────────────────────────────── */}
      <PageHero
        page="contact"
        eyebrow={contactHero.eyebrow}
        titleParts={contactHero.titleParts}
        titleParts2={contactHero.titleParts2}
        subtitle={contactHero.subtitle}
        description={contactHero.description}
        iconStrip={contactHero.iconStrip}
        artSrc={contactHero.artSrc}
        artAlt={contactHero.artAlt}
        kinBubble={contactHero.kinBubble}
        kayoBubble={contactHero.kayoBubble}
        sideNotes={contactHero.sideNotes}
        theme={contactHero.theme}
      />

      {/* ── 2. Contact Info Strip ─────────────────────────────────── */}
      <div className="relative mt-2 sm:mt-4 z-30 mb-8 sm:mb-12">
        <Container size="xl">
          <ContactInfoStrip />
        </Container>
      </div>

      {/* ── 3. Main Section: Locations & Form ─────────────────────── */}
      <section className="py-6 sm:py-10 mb-16 relative" aria-labelledby="contact-heading">
        <Container size="xl">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8 items-start">

            {/* ── Locations Block ────────────────────────────────────────── */}
            <div className="xl:col-span-7 flex flex-col gap-6">
              <LocationsHeading />

              {/* Grid: 2 cards on mobile, 3 on tablet, 2 cards + floating note on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-4 sm:gap-4 items-center">
                <div className="md:col-span-1 xl:col-span-5 h-full">
                  <LocationCard location={CONTACT_LOCATIONS[0]} className="h-full" />
                </div>
                <div className="md:col-span-1 xl:col-span-5 h-full">
                  <LocationCard location={CONTACT_LOCATIONS[1]} className="h-full" />
                </div>

                {/* Tablet box */}
                <div className="md:col-span-1 xl:hidden rounded-2xl p-6 bg-[#F3F8F3] border border-emerald-200/60 shadow-card flex flex-col items-center justify-center text-center gap-3 h-full">
                  <div className="w-10 h-10 flex items-center justify-center text-emerald-600 text-2xl">
                    🌿
                  </div>
                  <div className="font-[var(--font-script)] text-xl sm:text-2xl text-emerald-950/80 leading-snug">
                    <span className="block">Different</span>
                    <span className="block">Locations</span>
                    <span className="block mt-1 text-emerald-900 font-semibold">Same Purpose</span>
                    <span className="block mt-1">A Healthier</span>
                    <span className="block font-bold text-primary">You</span>
                    <span className="block text-primary mt-1 text-xl">♡</span>
                  </div>
                </div>

                {/* Desktop floating script note matching LetsConnect.jpeg */}
                <div className="hidden xl:flex xl:col-span-2 flex-col items-center justify-center text-center py-4 px-1">
                  <span className="text-2xl text-emerald-600 mb-1.5" aria-hidden="true">🌿</span>
                  <div className="font-[var(--font-script)] text-navy text-lg leading-tight select-none">
                    <span className="block">Different</span>
                    <span className="block">Locations</span>
                    <span className="block font-bold text-navy mt-1">Same Purpose</span>
                    <span className="block mt-1">A Healthier</span>
                    <span className="block font-bold text-primary text-xl">You</span>
                    <span className="block text-primary text-2xl mt-0.5">♡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form Block ────────────────────────────────────────────── */}
            <div className="xl:col-span-5">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

      {/* ── 4. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft={CONTACT_CTA.scriptLeft}
        centerSlot={
          <div className="w-full">
            {/* Desktop Center: Title + Subtitle */}
            <div className="hidden lg:flex flex-col items-center text-center gap-2">
              <h2 className="font-heading font-black text-navy text-2xl sm:text-3xl">
                Let&apos;s Create A Healthier Tomorrow, <span className="text-primary font-serif italic">Together.</span>
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Yoga connects us. So do conversations.
              </p>
            </div>

            {/* Tablet / Mobile Center: 4 Circular Feature Badges */}
            <div className="flex lg:hidden flex-wrap items-center justify-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shadow-soft">
                  <Heart size={16} />
                </span>
                <span className="text-2xs sm:text-xs font-semibold text-navy/90">
                  Purpose-Driven Work
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-soft">
                  <Users size={16} />
                </span>
                <span className="text-2xs sm:text-xs font-semibold text-navy/90">
                  Positive & Supportive Community
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-soft">
                  <LotusIcon className="w-4 h-4 text-emerald-600" />
                </span>
                <span className="text-2xs sm:text-xs font-semibold text-navy/90">
                  Healthier Lives
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center shadow-soft">
                  <Sun size={16} />
                </span>
                <span className="text-2xs sm:text-xs font-semibold text-navy/90">
                  A Brighter Tomorrow
                </span>
              </div>
            </div>
          </div>
        }
        scriptRight={CONTACT_CTA.scriptRight}
      />
    </>
  );
}
