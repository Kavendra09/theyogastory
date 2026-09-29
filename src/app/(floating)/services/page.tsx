/**
 * (floating)/services/page.tsx — Services Page
 *
 * Route: /services
 * Layout: (floating) with glass floating header & minimal footer
 *
 * Structure:
 *  1. PageHero (servicesHero config)
 *  2. Studio Classes — full-width row with 7 cards (desktop: 7 in 1 row; mobile: 4+3 grid)
 *  3. 3-column section on desktop (stacked on mobile):
 *     - Col 1: Home Yoga (green panel + checklist + starting from ₹9,000 + script note + art)
 *     - Col 2: Online Yoga (blue panel + 4 priced items + globe line)
 *     - Col 3: Corporate Yoga (orange panel, ₹2,000/session) OVER Teacher Training Course (purple panel, 200/300/500h)
 *  4. CtaBanner closing: "More Than Services. A Stronger, Healthier, Happier You."
 */
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ScriptNote } from "@/components/ui/Atoms";
import { CtaBanner } from "@/components/layout/CtaBanner";
import {
  ServiceCategoryPanel,
  ServiceCard,
  PriceList,
  PricingTile,
  TtcTile,
} from "@/features/services";
import { servicesHero } from "@/data/heroes";
import {
  STUDIO_CLASSES,
  HOME_YOGA,
  ONLINE_YOGA,
  CORPORATE_YOGA,
  TTC,
  SERVICES_CTA,
} from "@/data/services";
import { MapPin, Globe, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — The Yoga Story",
  description:
    "Thoughtfully designed yoga programs for a healthier, happier and more mindful you. Studio classes in Gurgaon & Dehradun, home yoga, online yoga, corporate wellness, and teacher training.",
  openGraph: {
    title: "Our Services | The Yoga Story",
    description: "Thoughtfully designed yoga programs for a healthier, happier and more mindful you. Studio classes, home sessions, online yoga, corporate wellness, and teacher training.",
    url: "https://theyogastory.co.in/services",
    siteName: "The Yoga Story",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── 1. PageHero ───────────────────────────────────────────── */}
      <PageHero
        page="services"
        eyebrow={servicesHero.eyebrow}
        breadcrumb={servicesHero.breadcrumb}
        titleParts={servicesHero.titleParts}
        titleParts2={servicesHero.titleParts2}
        subtitle={servicesHero.subtitle}
        description={servicesHero.description}
        actions={servicesHero.actions}
        artSrc={servicesHero.artSrc}
        artAlt={servicesHero.artAlt}
        kinBubble={servicesHero.kinBubble}
        kayoBubble={servicesHero.kayoBubble}
        sideNotes={servicesHero.sideNotes}
        theme={servicesHero.theme}
      />

      {/* ── 2. Services Content Area ──────────────────────────────── */}
      <div className="py-12 md:py-20 flex flex-col gap-10 lg:gap-14">
        <Container size="lg">

          {/* ══════════════════════════════════════════════════════════
              ROW 1: STUDIO CLASSES (Full Width)
              Desktop: 7 cards in 1 row | Mobile: 4+3 grid
          ══════════════════════════════════════════════════════════ */}
          <ServiceCategoryPanel
            tone={STUDIO_CLASSES.tone}
            icon={STUDIO_CLASSES.icon}
            eyebrow={STUDIO_CLASSES.eyebrow}
            title={STUDIO_CLASSES.title}
            subtitle={STUDIO_CLASSES.subtitle}
          >
            {/* 7 Cards Grid: Desktop 7 in a row, Mobile 4 + 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5">
              {STUDIO_CLASSES.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  icon={service.icon}
                  tone={service.tone}
                  name={service.name}
                  price={service.price}
                  period={service.period}
                  isConsult={service.isConsult}
                />
              ))}
            </div>
          </ServiceCategoryPanel>

          {/* ══════════════════════════════════════════════════════════
              ROW 2: 3 COLUMNS DESKTOP / STACKED MOBILE
              Col 1: Home Yoga
              Col 2: Online Yoga
              Col 3: Corporate Yoga OVER Teacher Training Course
          ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 items-start">

            {/* ── COLUMN 1: HOME YOGA (Green Panel) ────────────────── */}
            <ServiceCategoryPanel
              tone={HOME_YOGA.tone}
              icon={HOME_YOGA.icon}
              eyebrow={HOME_YOGA.eyebrow}
              title={HOME_YOGA.title}
              subtitle={HOME_YOGA.subtitle}
              className="flex flex-col items-start w-full"
            >
              <div className="flex flex-col gap-5 w-full">
                {/* Checklist */}
                <PriceList
                  items={HOME_YOGA.checklist}
                  tone="green"
                />

                {/* Starting Price Banner */}
                <PricingTile
                  prefix={HOME_YOGA.pricing.prefix}
                  amount={HOME_YOGA.pricing.amount}
                  period={HOME_YOGA.pricing.period}
                  details={HOME_YOGA.pricing.details}
                  tone="green"
                />

                {/* Character Illustration thumbnail */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden bg-white/60 border border-tone-green-border shadow-inner flex items-end justify-center">
                  <Image
                    src={HOME_YOGA.illustration}
                    alt="Home yoga practice with The Yoga Story"
                    fill
                    sizes="340px"
                    className="object-contain object-bottom p-1"
                  />
                </div>

                {/* Script note */}
                <div className="text-center pt-1">
                  <ScriptNote rotate={-3} heart className="text-base text-tone-green-fg font-medium">
                    {HOME_YOGA.scriptNote.replace("♡", "").trim()}
                  </ScriptNote>
                </div>
              </div>
            </ServiceCategoryPanel>

            {/* ── COLUMN 2: ONLINE YOGA (Blue Panel) ───────────────── */}
            <ServiceCategoryPanel
              tone={ONLINE_YOGA.tone}
              icon={ONLINE_YOGA.icon}
              eyebrow={ONLINE_YOGA.eyebrow}
              title={ONLINE_YOGA.title}
              subtitle={ONLINE_YOGA.subtitle}
              className="flex flex-col items-start w-full"
            >
              <div className="flex flex-col gap-5 w-full">
                {/* 4 Priced Items List */}
                <PriceList
                  items={ONLINE_YOGA.services}
                  tone="blue"
                />

                {/* Globe line banner */}
                <div className="rounded-2xl p-4 bg-white/90 border border-tone-blue-border shadow-soft flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-tone-blue-bg flex items-center justify-center shrink-0 text-tone-blue-fg">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm sm:text-base leading-snug">
                      {ONLINE_YOGA.globeLine}
                    </p>
                    <p className="text-xs text-muted mt-1 leading-snug">
                      Live interactive 2-way camera feedback with certified instructors.
                    </p>
                  </div>
                </div>
              </div>
            </ServiceCategoryPanel>

            {/* ── COLUMN 3: CORPORATE YOGA over TTC ───────────────── */}
            <div className="flex flex-col gap-6 sm:gap-8 items-start w-full">

              {/* Top: CORPORATE YOGA (Orange Panel) */}
              <ServiceCategoryPanel
                tone={CORPORATE_YOGA.tone}
                icon={CORPORATE_YOGA.icon}
                eyebrow={CORPORATE_YOGA.eyebrow}
                title={CORPORATE_YOGA.title}
                subtitle={CORPORATE_YOGA.subtitle}
                className="w-full"
              >
                <div className="flex flex-col gap-4 w-full">
                  {/* Pricing tile: ₹2,000 per session */}
                  <PricingTile
                    amount={CORPORATE_YOGA.pricing.amount}
                    period={CORPORATE_YOGA.pricing.period}
                    details={CORPORATE_YOGA.pricing.details}
                    tone="orange"
                  />
                </div>
              </ServiceCategoryPanel>

              {/* Bottom: TEACHER TRAINING COURSE (Purple Panel) */}
              <ServiceCategoryPanel
                tone={TTC.tone}
                icon={TTC.icon}
                eyebrow={TTC.eyebrow}
                title={TTC.title}
                subtitle={TTC.subtitle}
                className="w-full"
              >
                <div className="flex flex-col gap-3 w-full">
                  {TTC.tiers.map((tier) => (
                    <TtcTile
                      key={tier.hours}
                      hours={tier.hours}
                      price={tier.price}
                      description={tier.description}
                      popular={tier.popular}
                      tone="purple"
                    />
                  ))}

                  <p className="text-2xs text-muted text-center italic pt-1">
                    {TTC.accreditation}
                  </p>
                </div>
              </ServiceCategoryPanel>

            </div>

          </div>

        </Container>
      </div>

      {/* ── 3. Closing CtaBanner ──────────────────────────────────── */}
      <CtaBanner
        scriptLeft={SERVICES_CTA.scriptLeft}
        titleParts={SERVICES_CTA.titleParts}
        subtitle={SERVICES_CTA.subtitle}
        scriptRight={SERVICES_CTA.scriptRight}
      />
    </>
  );
}
