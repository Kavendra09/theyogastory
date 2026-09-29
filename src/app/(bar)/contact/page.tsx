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
      <div className="relative -mt-6 sm:-mt-8 z-30 mb-8 sm:mb-12">
        <Container size="lg">
          <ContactInfoStrip />
        </Container>
      </div>

      {/* ── 3. Main Section: Locations & Form ─────────────────────── */}
      <section className="py-6 sm:py-10 mb-16 relative" aria-labelledby="contact-heading">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* ── Left on Desktop / Row on Tablet: Locations ───────── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <LocationsHeading />

              {/* Tablet: 2 cols row; Desktop/Mobile: stacked */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                {CONTACT_LOCATIONS.map((loc) => (
                  <LocationCard key={loc.id} location={loc} />
                ))}
              </div>
            </div>

            {/* ── Right on Desktop / Full Width on Tablet: Form ────── */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

      {/* ── 4. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft={CONTACT_CTA.scriptLeft}
        titleParts={CONTACT_CTA.titleParts}
        subtitle={CONTACT_CTA.subtitle}
        scriptRight={CONTACT_CTA.scriptRight}
      />
    </>
  );
}
