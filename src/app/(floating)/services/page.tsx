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
      <div className="py-8 md:py-16 flex flex-col gap-8 lg:gap-10">
        <Container size="xl">

          {/* ══════════════════════════════════════════════════════════
              PANEL 1: STUDIO CLASSES (Full Width)
              Row 1: 4 cards | Row 2: 3 cards (matching screenshot)
          ══════════════════════════════════════════════════════════ */}
          <div className="rounded-[28px] bg-white/95 border border-rose-200/70 p-5 sm:p-7 shadow-card">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-rose-100/70">
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
                <span className="text-2xl">🪷</span>
              </div>

              {/* Right: Practice Together · Grow Together badge */}
              <div className="flex items-center gap-2 self-start sm:self-center text-xs font-semibold text-rose-700 bg-rose-50/80 px-4 py-1.5 rounded-full border border-rose-200/80 shadow-soft">
                <MapPin size={14} className="text-rose-500 fill-rose-100" />
                <span>Practice Together Grow Together</span>
                <span className="text-emerald-600">🌿</span>
              </div>
            </div>

            {/* Cards Grid — Desktop: 7 in one row | Mobile: 2-col top 4 + 3-col bottom 3 */}
            <div className="hidden lg:grid lg:grid-cols-7 gap-3">
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

            {/* Mobile/Tablet: Row 1 (4 cards) + Row 2 (3 cards) */}
            <div className="flex flex-col gap-4 lg:hidden">
              {/* Row 1: 4 Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
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

              {/* Row 2: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
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
              PANEL 2: HOME YOGA CLASSES (Full Width)
          ══════════════════════════════════════════════════════════ */}
          <div className="rounded-[28px] p-5 sm:p-7 bg-[#F4FAF5] border border-[#D5EBD7] shadow-soft mt-6 sm:mt-8 relative overflow-hidden">
            {/* Decorative leaf top-right */}
            <span className="absolute top-4 right-5 text-emerald-600 text-2xl select-none" aria-hidden="true">🌿</span>

            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#E1F2E3] max-w-xl">
              <div className="w-10 h-10 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 shadow-soft">
                <HOME_YOGA.icon size={20} />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl leading-tight">
                  {HOME_YOGA.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-0.5">
                  {HOME_YOGA.subtitle}
                </p>
              </div>
            </div>

            {/* Body Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left: Checklist */}
              <div className="md:col-span-4 flex flex-col gap-3">
                {HOME_YOGA.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-[#2E7D32] fill-emerald-100 shrink-0" />
                    <span className="font-heading font-semibold text-navy text-sm leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Middle: Script Note & Pink Pricing Badge */}
              <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="font-[var(--font-script)] text-emerald-950/80 text-lg sm:text-xl leading-snug text-center">
                  <span>Your Space.</span><br />
                  <span>Your Pace.</span><br />
                  <span className="text-emerald-900 font-semibold">Our Support. ♡</span>
                </div>

                <div className="rounded-2xl p-4 bg-[#FFF0F4] border border-[#FAD2DF] shadow-xs text-center min-w-[160px]">
                  <span className="text-xs text-muted block leading-tight font-medium">Starting from</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="font-heading font-black text-primary text-2xl sm:text-3xl leading-none">
                      {HOME_YOGA.pricing.amount}
                    </span>
                    <span className="text-xs text-muted font-normal"> {HOME_YOGA.pricing.period}</span>
                  </div>
                  <span className="text-xs text-muted block mt-1 font-medium">{HOME_YOGA.pricing.details}</span>
                </div>
              </div>

              {/* Right: Woman Stretching Pose Illustration */}
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[320px] h-48 sm:h-52 rounded-2xl overflow-hidden shadow-soft bg-white/40 border border-emerald-100">
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

          {/* ══════════════════════════════════════════════════════════
              PANEL 3: ONLINE YOGA CLASSES (Full Width)
          ══════════════════════════════════════════════════════════ */}
          <div className="rounded-[28px] p-5 sm:p-7 bg-[#F0F8FF] border border-[#D3E9FA] shadow-soft mt-6 sm:mt-8 relative overflow-hidden">
            {/* Decorative leaf top-right */}
            <span className="absolute top-4 right-5 text-emerald-600 text-2xl select-none" aria-hidden="true">🌿</span>

            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#E0F0FE] max-w-xl">
              <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-soft">
                <ONLINE_YOGA.icon size={20} />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl leading-tight">
                  {ONLINE_YOGA.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-0.5">
                  {ONLINE_YOGA.subtitle}
                </p>
              </div>
            </div>

            {/* Body Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left: 4 Priced Items with Checkmarks */}
              <div className="md:col-span-5 flex flex-col gap-3">
                {ONLINE_YOGA.services.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 border-b border-sky-100/80 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle2 size={18} className="text-[#2E7D32] fill-emerald-100 shrink-0" />
                      <span className="font-heading font-semibold text-navy text-sm leading-snug truncate">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0 text-right">
                      <span className="font-heading font-extrabold text-navy text-sm sm:text-base">
                        {item.price}
                      </span>
                      <span className="text-xs text-muted">{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center: Boy (Kayo) with Headphones & Laptop Illustration */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-soft bg-white/40 border border-sky-100">
                  <Image
                    src="/images/services/online_yoga_boy.jpg"
                    alt="Online Yoga with Kayo"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right: Globe Note */}
              <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right gap-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shadow-soft">
                  <Globe size={22} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-navy/85 max-w-[180px] leading-snug">
                  {ONLINE_YOGA.globeLine}
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              PANEL 4: CORPORATE YOGA & TTC (2 EQUAL COLUMNS)
          ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 sm:mt-8 items-stretch">

            {/* ── Left: Corporate Yoga ──────────────────────────────── */}
            <div className="rounded-[28px] p-5 sm:p-7 bg-[#FFF6F0] border border-[#FDE4D2] shadow-soft flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-4 right-5 text-emerald-600 text-xl select-none" aria-hidden="true">🌿</span>

              <div>
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-orange-100/90">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-soft">
                    <CORPORATE_YOGA.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-navy text-lg sm:text-xl leading-tight">
                      {CORPORATE_YOGA.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-0.5">
                      {CORPORATE_YOGA.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  {/* Price Badge */}
                  <div className="rounded-2xl p-4 bg-white/95 border border-orange-200/80 shadow-soft shrink-0">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-navy leading-none block">
                      ₹2,000
                    </span>
                    <span className="text-xs text-muted font-medium block mt-1">per session</span>
                  </div>

                  {/* Corporate Team Illustration */}
                  <div className="relative flex-1 h-24 sm:h-28 rounded-2xl overflow-hidden shadow-soft bg-white/60 border border-orange-100">
                    <Image
                      src="/images/services/corporate_yoga_team_clean.jpg"
                      alt="Corporate Wellness Team"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Teacher Training Course (TTC) ───────────────── */}
            <div className="rounded-[28px] p-5 sm:p-7 bg-[#FAF5FF] border border-[#E9D8FD] shadow-soft flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-4 right-5 text-purple-600 text-xl select-none" aria-hidden="true">🌿</span>

              <div>
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-purple-100/90">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-soft">
                    <TTC.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-navy text-lg sm:text-xl leading-tight">
                      {TTC.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-0.5">
                      {TTC.subtitle}
                    </p>
                  </div>
                </div>

                {/* 3 Price Cards in 1 Row */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {TTC.tiers.map((tier) => (
                    <div
                      key={tier.hours}
                      className="rounded-2xl p-3 sm:p-4 bg-white/95 border border-purple-200/80 shadow-soft text-center flex flex-col justify-between"
                    >
                      <span className="text-[11px] sm:text-xs font-bold text-purple-900 block leading-tight">
                        {tier.hours}
                      </span>
                      <span className="font-heading text-sm sm:text-lg font-black text-navy mt-1.5 block">
                        {tier.price}
                      </span>
                    </div>
                  ))}
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
        subtitle="Ancient Whispers, Modern Echoes"
        scriptRight={SERVICES_CTA.scriptRight}
      />
    </>
  );
}
