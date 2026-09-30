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
        <Container size="xl">

          {/* ══════════════════════════════════════════════════════════
              PANEL 1: STUDIO CLASSES (Full Width)
              Desktop: 7 cards in 1 row | Mobile: 4+3 grid
          ══════════════════════════════════════════════════════════ */}
          <div className="rounded-[28px] bg-white/90 border border-rose-200/60 p-5 sm:p-7 shadow-card">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-rose-100/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-soft">
                  <STUDIO_CLASSES.icon size={20} />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-navy text-xl sm:text-2xl leading-tight">
                    {STUDIO_CLASSES.title}
                  </h2>
                  <p className="text-muted text-xs sm:text-sm mt-0.5">
                    {STUDIO_CLASSES.subtitle}
                  </p>
                </div>
              </div>

              {/* Center Pink Lotus (hidden on mobile) */}
              <div className="hidden lg:flex items-center justify-center text-primary" aria-hidden="true">
                <span className="text-xl">🪷</span>
              </div>

              {/* Right: Practice Together · Grow Together badge */}
              <div className="flex items-center gap-2 self-start sm:self-center text-xs font-semibold text-rose-700 bg-rose-50/80 px-3.5 py-1.5 rounded-full border border-rose-200/80 shadow-soft">
                <MapPin size={14} className="text-rose-500 fill-rose-100" />
                <span>Practice Together Grow Together</span>
                <span className="text-emerald-600">🌿</span>
              </div>
            </div>

            {/* Desktop: 7 in 1 row (lg:grid-cols-7) */}
            <div className="hidden lg:grid lg:grid-cols-7 gap-3 mb-2">
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

            {/* Mobile & Tablet: Row 1 (4 cards) + Row 2 (3 cards) */}
            <div className="lg:hidden flex flex-col gap-3 mb-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STUDIO_CLASSES.services.slice(0, 4).map((service) => (
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STUDIO_CLASSES.services.slice(4).map((service) => (
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
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              ROW 2: 3-COLUMN SECTION (Desktop: 3 cols | Mobile: Stacked)
              Col 1: Home Yoga Classes (5 cols)
              Col 2: Online Yoga Classes (3.5 cols)
              Col 3: Corporate Yoga & TTC (3.5 cols)
          ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mt-6 sm:mt-8 items-stretch">

            {/* ── COL 1: Home Yoga Classes (xl:col-span-5) ───────────── */}
            <div className="xl:col-span-5 rounded-[28px] p-5 sm:p-6 bg-[#F4FAF5] border border-[#D5EBD7] shadow-soft flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E1F2E3]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 shadow-soft">
                      <HOME_YOGA.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-navy text-lg sm:text-xl leading-tight">
                        {HOME_YOGA.title}
                      </h3>
                      <p className="text-muted text-xs leading-tight mt-0.5">
                        {HOME_YOGA.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-emerald-600 text-lg">🌿</span>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Left: Checklist + Pink Price Box */}
                  <div className="sm:col-span-6 flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-2.5">
                      {HOME_YOGA.checklist.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#2E7D32] fill-emerald-100 shrink-0" />
                          <span className="font-heading font-semibold text-navy text-xs sm:text-xs leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl p-3 bg-[#FFF0F4] border border-[#FAD2DF] shadow-xs mt-1">
                      <span className="text-[10px] text-muted block leading-tight">Starting from</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-heading font-extrabold text-primary text-xl leading-none">
                          {HOME_YOGA.pricing.amount}
                        </span>
                        <span className="text-[11px] text-muted font-normal"> {HOME_YOGA.pricing.period}</span>
                      </div>
                      <span className="text-[10px] text-muted block mt-0.5">{HOME_YOGA.pricing.details}</span>
                    </div>
                  </div>

                  {/* Right: Woman Stretching Illustration + Script Note */}
                  <div className="sm:col-span-6 flex flex-col items-center gap-2">
                    <span className="font-[var(--font-script)] text-emerald-900/80 text-sm sm:text-base leading-tight text-center">
                      Your Space.<br />Your Pace.<br />Our Support. ♡
                    </span>
                    <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-white/60 border border-emerald-100 shadow-soft">
                      <Image
                        src={HOME_YOGA.illustration}
                        alt="Home Yoga Practice"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── COL 2: Online Yoga Classes (xl:col-span-3) ──────────── */}
            <div className="xl:col-span-3 rounded-[28px] p-5 sm:p-6 bg-[#F0F8FF] border border-[#D3E9FA] shadow-soft flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#E0F0FE]">
                  <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-soft">
                    <ONLINE_YOGA.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-navy text-lg leading-tight">
                      {ONLINE_YOGA.title}
                    </h3>
                    <p className="text-muted text-xs leading-tight mt-0.5">
                      {ONLINE_YOGA.subtitle}
                    </p>
                  </div>
                </div>

                {/* 4 Priced Items with Checkmarks */}
                <div className="flex flex-col gap-3 my-2">
                  {ONLINE_YOGA.services.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-1.5 border-b border-sky-100/60 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2 size={15} className="text-[#2E7D32] fill-emerald-100 shrink-0" />
                        <span className="font-heading font-semibold text-navy text-xs leading-snug truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-0.5 shrink-0 text-right">
                        <span className="font-heading font-extrabold text-navy text-xs sm:text-sm">
                          {item.price}
                        </span>
                        <span className="text-[10px] text-muted">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Globe Line */}
              <div className="pt-3 border-t border-sky-200/60 flex items-center gap-2.5 text-xs font-semibold text-navy/85 mt-4">
                <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-soft">
                  <Globe size={15} />
                </div>
                <span className="leading-tight text-[11px] sm:text-xs">
                  {ONLINE_YOGA.globeLine}
                </span>
              </div>
            </div>

            {/* ── COL 3: Corporate Yoga & TTC Stack (xl:col-span-4) ────── */}
            <div className="xl:col-span-4 flex flex-col justify-between gap-4">

              {/* Corporate Yoga Card */}
              <div className="rounded-[28px] p-4 sm:p-5 bg-[#FFF6F0] border border-[#FDE4D2] shadow-soft flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-orange-100/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-soft">
                        <CORPORATE_YOGA.icon size={16} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy text-base leading-tight">
                          {CORPORATE_YOGA.title}
                        </h3>
                        <p className="text-muted text-[11px] leading-tight">
                          {CORPORATE_YOGA.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-emerald-600 text-sm">🌿</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-2xl p-3 bg-white/90 border border-orange-200/60 shadow-xs">
                      <span className="font-heading text-2xl font-extrabold text-navy leading-none block">
                        ₹2,000
                      </span>
                      <span className="text-[10px] text-muted block mt-0.5">per session</span>
                    </div>

                    <div className="relative w-36 h-20 rounded-xl overflow-hidden shadow-soft shrink-0">
                      <Image
                        src="/images/services/corporate_yoga_team_clean.jpg"
                        alt="Corporate Wellness Team"
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <span className="font-[var(--font-script)] text-xs text-orange-950/70 text-right leading-tight hidden sm:block">
                      Healthy Teams<br />Brighter Tomorrow ♡
                    </span>
                  </div>
                </div>
              </div>

              {/* Teacher Training Course (TTC) Card */}
              <div className="rounded-[28px] p-4 sm:p-5 bg-[#FAF5FF] border border-[#E9D8FD] shadow-soft flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-purple-100/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-soft">
                        <TTC.icon size={16} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy text-base leading-tight">
                          {TTC.title}
                        </h3>
                        <p className="text-muted text-[11px] leading-tight">
                          {TTC.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-purple-600 text-sm">🌿</span>
                  </div>

                  <div className="flex items-center justify-between gap-2.5">
                    {/* 3 Price Pills */}
                    <div className="grid grid-cols-3 gap-2 flex-1">
                      {TTC.tiers.map((tier) => (
                        <div
                          key={tier.hours}
                          className="rounded-2xl p-2.5 bg-white/95 border border-purple-200/80 shadow-soft text-center flex flex-col justify-between"
                        >
                          <span className="text-[10px] font-bold text-purple-900 block leading-tight">
                            {tier.hours}
                          </span>
                          <span className="font-heading text-xs sm:text-sm font-extrabold text-navy mt-1 block">
                            {tier.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stack of 4 Wooden Blocks on Right */}
                    <div className="flex flex-col items-center gap-1 shrink-0 ml-1">
                      {["Learn", "Practice", "Teach", "Inspire"].map((word, i) => (
                        <div
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#F5E6C8] border border-[#E6D4B2] text-[9.5px] font-heading font-bold text-[#5C4033] shadow-xs text-center min-w-[54px]"
                        >
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

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
