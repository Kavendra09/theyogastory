/**
 * PageHero.tsx
 * src/components/sections/PageHero.tsx
 *
 * ONE hero used by every page — driven entirely by props / HeroConfig data.
 *
 * Rules:
 * 1. Background is ONE full-bleed image (Image fill, object-cover).
 *    NO blurred plants, NO ghost blobs, NO left column gradients, NO hard edges.
 * 2. Hero heights at 1536 width:
 *    Home: 1024, About: 465, Services: 365, Career: 365, Contact: 382, Testimonials: 400.
 *    Desktop: height = calc(var(--u) * N). Content below flows normally.
 * 3. H1 scales with stage: font-size = calc(var(--u) * N).
 *    No H1 may wrap unless the spec shows it wrapping (nowrap on lines).
 * 4. SpeechBubble: rounded 28px, tail pointing to character, script name above.
 * 5. Position every element with <Pin> in design px at 1536 wide on desktop.
 */

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AccentText, type AccentPart } from "@/components/ui/AccentText";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArtStage, Pin } from "@/components/ui/ArtStage";
import { IconStrip, type IconStripItem } from "./IconStrip";
import type { Breadcrumb, SideNote } from "@/data/heroes";
import { ChevronRight } from "lucide-react";
import { LotusIcon, LeafSprig } from "@/components/ui/Atoms";

/* ── Exported prop types (used by heroes.ts) ────────────────────── */
export interface SpeechBubbleProps {
  name: string;
  lines: string[];
  delay?: number;
}

export interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  trailingIcon?: boolean;
}

interface PageHeroProps {
  page?: string;
  eyebrow?: string;
  breadcrumb?: Breadcrumb[];
  titleParts: AccentPart[];
  titleParts2?: AccentPart[];
  subtitle?: string;
  description?: string;
  tagChips?: string[];
  actions?: HeroAction[];
  iconStrip?: IconStripItem[];
  artSrc: string;
  artAlt: string;
  kinBubble?: SpeechBubbleProps;
  kayoBubble?: SpeechBubbleProps;
  sideNotes?: SideNote[];
  theme?: "warm" | "clean";
  heightPreset?: "sm" | "md" | "lg";
  className?: string;
}

const HERO_HEIGHTS_AT_1536: Record<string, number> = {
  home: 1024,
  about: 465,
  services: 350,
  career: 365,
  contact: 410,
  testimonials: 400,
};

/* ── Breadcrumb ─────────────────────────────────────────────────── */
function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-1">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight size={12} className="text-muted shrink-0" aria-hidden="true" />
            )}
            {i === items.length - 1 ? (
              <span className="text-xs text-muted font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-xs text-body hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Tag chips (Testimonials stacked left) ──────────────────────── */
function TagChips({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-col gap-1.5 mt-3" aria-label="Topic tags">
      {chips.map((c) => (
        <span
          key={c}
          className="chip bg-white/80 border border-border-soft text-ink text-xs px-3 py-1 w-fit"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

/* ── Handwritten corner note: thin script, 20-24px at 1536, opacity 0.7 ── */
function CornerNote({ note }: { note: SideNote }) {
  if (note.leftPct !== undefined && note.leftPct < 30 && (note.topPct ?? 50) < 45) {
    return null;
  }

  const lines = note.text.split("\n");
  const isCard = note.isCard ?? false;

  return (
    <div
      className="absolute hidden lg:block pointer-events-none select-none z-20"
      style={{
        left: `${note.leftPct ?? 82}%`,
        top: `${note.topPct ?? 50}%`,
        transform: `rotate(${note.rotate ?? 0}deg)`,
      }}
      aria-hidden="true"
    >
      {isCard ? (
        <div className="px-4 py-3 rounded-lg shadow-soft text-center bg-kraft-bg border border-kraft-border min-w-[90px] opacity-90">
          {lines.map((line, i) => (
            <p key={i} className="font-[var(--font-script)] text-ink text-sm leading-snug">
              {line}
            </p>
          ))}
        </div>
      ) : (
        <span className="font-[var(--font-script)] font-normal text-navy/70 lg:text-[calc(var(--u)*22)] leading-tight opacity-70 drop-shadow-xs">
          {lines.map((line, i) => (
            <span key={i} className="block text-center whitespace-nowrap">
              {line}
            </span>
          ))}
          {note.heart && <span className="text-primary ml-1">♡</span>}
        </span>
      )}
    </div>
  );
}

/* ── Pinned desktop content per page ────────────────────────────── */
interface PinnedProps {
  pageId: string;
  eyebrow?: string;
  breadcrumb?: Breadcrumb[];
  titleParts: AccentPart[];
  titleParts2?: AccentPart[];
  subtitle?: string;
  description?: string;
  actions: HeroAction[];
  iconStrip?: IconStripItem[];
  kinBubble?: SpeechBubbleProps;
  kayoBubble?: SpeechBubbleProps;
}

function PinnedPageContent({
  pageId,
  eyebrow,
  breadcrumb,
  titleParts,
  titleParts2,
  subtitle,
  description,
  actions,
  iconStrip,
  kinBubble,
  kayoBubble,
}: PinnedProps) {
  switch (pageId) {
    case "about":
      return (
        <>
          {/* Eyebrow: x=85, y=110 */}
          <Pin x={85} y={110} w={450}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold" style={{ fontSize: "calc(var(--u) * 12)" }}>
              {eyebrow || "OUR STORY · OUR PEOPLE · OUR PURPOSE"}
            </p>
          </Pin>

          {/* H1: x=85, y=135 */}
          <Pin x={85} y={135} w={350}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 52)" }}>
              <AccentText parts={titleParts} />
            </h1>
          </Pin>

          {/* Subtitle: x=85, y=220 */}
          <Pin x={85} y={220} w={540}>
            <p className="font-heading font-semibold text-ink leading-snug whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 18)" }}>
              More Than Yoga. We're Building <span className="text-primary">a Story.</span>
            </p>
          </Pin>

          {/* Paragraph: x=85, y=265 */}
          <Pin x={85} y={265} w={510}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Button: x=85, y=380 */}
          <Pin x={85} y={380} w={180}>
            <Button href="#journey" variant="primary" size="md">
              Our Journey ↓
            </Button>
          </Pin>

          {/* Kin bubble: x=585, y=115 */}
          {kinBubble && (
            <Pin x={585} y={115} w={230}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=960, y=120 */}
          {kayoBubble && (
            <Pin x={960} y={120} w={240}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="right"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );

    case "services":
      return (
        <>
          {/* Breadcrumb: x=75, y=95 */}
          {breadcrumb && breadcrumb.length > 0 && (
            <Pin x={75} y={95} w={200}>
              <Breadcrumbs items={breadcrumb} />
            </Pin>
          )}

          {/* H1: Our Services at x=75, y=125 */}
          <Pin x={75} y={125} w={420}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 52)" }}>
              <AccentText parts={titleParts} />
            </h1>
          </Pin>

          {/* Description: x=75, y=195 */}
          <Pin x={75} y={195} w={420}>
            <p className="type-body text-body font-medium leading-relaxed" style={{ fontSize: "calc(var(--u) * 14)" }}>
              {description}
            </p>
          </Pin>

          {/* Lotus + Script Note: x=140, y=242 */}
          <Pin x={140} y={242} w={280}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <div className="w-5 h-px bg-emerald-600/50" />
                <LotusIcon className="w-3.5 h-3.5 text-emerald-600" />
                <div className="w-5 h-px bg-emerald-600/50" />
              </div>
              <span className="font-[var(--font-script)] text-primary font-semibold whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 18)" }}>
                Move Breathe Belong ♡
              </span>
            </div>
          </Pin>

          {/* Eyebrow: x=75, y=272 */}
          <Pin x={75} y={272} w={480}>
            <p className="type-eyebrow text-terracotta tracking-wider font-bold whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 10.5)" }}>
              {eyebrow || "PEOPLE · PURPOSE · PRACTICE · A BRIGHTER TOMORROW"}
            </p>
          </Pin>

          {/* Kin bubble: x=505, y=95 directly above Kin */}
          {kinBubble && (
            <Pin x={505} y={95} w={205}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=890, y=85 directly above Kayo */}
          {kayoBubble && (
            <Pin x={890} y={85} w={225}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="left"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );

    case "testimonials":
      return (
        <>
          {/* Eyebrow: x=90, y=90 — nowrap, wider pin */}
          <Pin x={90} y={90} w={640}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 10.5)" }}>
              {eyebrow || "REAL PEOPLE · REAL EXPERIENCES · A HEALTHIER TOMORROW"}
            </p>
          </Pin>

          {/* H1: x=90, y=114 — 2 lines, 46px, wider pin */}
          <Pin x={90} y={114} w={480}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight" style={{ fontSize: "calc(var(--u) * 46)" }}>
              <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
              {titleParts2 && (
                <span className="block whitespace-nowrap mt-1"><AccentText parts={titleParts2} /></span>
              )}
            </h1>
          </Pin>

          {/* Bold Line: x=90, y=248 — below the 2-line H1 */}
          {subtitle && (
            <Pin x={90} y={248} w={480}>
              <p className="font-heading font-bold text-ink" style={{ fontSize: "calc(var(--u) * 17)" }}>
                {subtitle}
              </p>
            </Pin>
          )}

          {/* Paragraph: x=90, y=282 */}
          <Pin x={90} y={282} w={500}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Kin bubble: x=700, y=90 directly above Kin */}
          {kinBubble && (
            <Pin x={700} y={90} w={220}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1080, y=90 directly above Kayo */}
          {kayoBubble && (
            <Pin x={1080} y={90} w={220}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="right"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );

    case "career":
      return (
        <>
          {/* Eyebrow: x=130, y=90 — wider pin + nowrap */}
          <Pin x={130} y={90} w={620}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 10.5)" }}>
              {eyebrow || "PEOPLE · PURPOSE · PRACTICE · A BRIGHTER TOMORROW"}
            </p>
          </Pin>

          {/* H1: x=130, y=114 — slightly lower for eyebrow clearance */}
          <Pin x={130} y={114} w={490}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight" style={{ fontSize: "calc(var(--u) * 46)" }}>
              <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
              {titleParts2 && (
                <span className="block whitespace-nowrap mt-1"><AccentText parts={titleParts2} /></span>
              )}
            </h1>
          </Pin>

          {/* Paragraph: x=130, y=240 — pushed below 2-line title */}
          <Pin x={130} y={240} w={460}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Icon Strip: x=130, y=310 — pushed down accordingly */}
          {iconStrip && (
            <Pin x={130} y={310} w={550}>
              <IconStrip items={iconStrip} tone="green" layout="row" />
            </Pin>
          )}

          {/* Kin bubble: x=715, y=95 */}
          {kinBubble && (
            <Pin x={715} y={95} w={220}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1125, y=105 */}
          {kayoBubble && (
            <Pin x={1125} y={105} w={220}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="right"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );

    case "contact":
      return (
        <>
          {/* Eyebrow: x=90, y=95 */}
          <Pin x={90} y={95} w={450}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold" style={{ fontSize: "calc(var(--u) * 12)" }}>
              {eyebrow || "PEOPLE · PRACTICE · PURPOSE / A BRIGHTER TOMORROW"}
            </p>
          </Pin>

          {/* H1: Let's Connect ♡ on ONE line: x=90, y=125 */}
          <Pin x={90} y={125} w={450}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 48)" }}>
              <AccentText parts={titleParts} />
            </h1>
          </Pin>

          {/* Subtitle: x=90, y=188 */}
          {subtitle && (
            <Pin x={90} y={188} w={520}>
              <p className="font-heading font-semibold text-ink leading-snug whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 16)" }}>
                {subtitle}
              </p>
            </Pin>
          )}

          {/* Paragraph: x=90, y=218 */}
          <Pin x={90} y={218} w={560}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13)" }}>
              {description}
            </p>
          </Pin>

          {/* Icon Strip: x=90, y=268 — ample clearance above floor seam */}
          {iconStrip && (
            <Pin x={90} y={268} w={550}>
              <IconStrip items={iconStrip} tone="green" layout="row" variant="floating" />
            </Pin>
          )}

          {/* Kin bubble: x=680, y=90 */}
          {kinBubble && (
            <Pin x={680} y={90} w={210}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1040, y=90 — shifted left away from wooden easel */}
          {kayoBubble && (
            <Pin x={1040} y={90} w={215}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="left"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );

    case "home":
    default:
      return (
        <>
          {/* Eyebrow: x=72, y=182 */}
          {eyebrow && (
            <Pin x={72} y={182} w={420}>
              <p className="type-eyebrow text-terracotta tracking-wider font-semibold" style={{ fontSize: "calc(var(--u) * 13)" }}>
                {eyebrow}
              </p>
            </Pin>
          )}

          {/* H1: x=72, y=220 */}
          <Pin x={72} y={220} w={450}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight" style={{ fontSize: "calc(var(--u) * 64)" }}>
              <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
              {titleParts2 && (
                <span className="block whitespace-nowrap mt-1"><AccentText parts={titleParts2} /></span>
              )}
            </h1>
          </Pin>

          {/* Description: x=72, y=380 */}
          {description && (
            <Pin x={72} y={380} w={420}>
              <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 16)" }}>
                {description}
              </p>
            </Pin>
          )}

          {/* Actions: x=72, y=460 */}
          {actions && actions.length > 0 && (
            <Pin x={72} y={460} w={420}>
              <div className="flex flex-wrap items-center gap-3">
                {actions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant ?? "primary"}
                    size="md"
                    trailingIcon={action.trailingIcon}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </Pin>
          )}

          {/* Kin bubble: x=565, y=115 */}
          {kinBubble && (
            <Pin x={565} y={115} w={220}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1030, y=115 */}
          {kayoBubble && (
            <Pin x={1030} y={115} w={230}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="right"
                delay={kayoBubble.delay ?? 0.35}
              />
            </Pin>
          )}
        </>
      );
  }
}

export function PageHero({
  page,
  eyebrow,
  breadcrumb,
  titleParts,
  titleParts2,
  subtitle,
  description,
  tagChips,
  actions = [],
  iconStrip,
  artSrc,
  artAlt,
  kinBubble,
  kayoBubble,
  sideNotes = [],
  theme = "warm",
  className,
}: PageHeroProps) {
  // Determine page identifier
  const pageId =
    page ||
    (artSrc.includes("home.jpg")
      ? "home"
      : titleParts[0]?.t.toLowerCase().includes("community") || subtitle?.includes("stories")
      ? "testimonials"
      : eyebrow?.toLowerCase().includes("career") || eyebrow?.toLowerCase().includes("grow") || eyebrow?.toLowerCase().includes("purpose · practice")
      ? "career"
      : eyebrow?.toLowerCase().includes("connect") || eyebrow?.toLowerCase().includes("people · practice · purpose")
      ? "contact"
      : eyebrow?.toLowerCase().includes("services") || breadcrumb?.some(b => b.href.includes("services"))
      ? "services"
      : "about");

  const heightAt1536 = HERO_HEIGHTS_AT_1536[pageId] || 465;
  const isHome = pageId === "home";
  const h1Size = isHome ? 64 : 50;

  return (
    <section
      className={cn(
        "relative overflow-hidden w-full",
        "flex flex-col justify-center",
        className
      )}
      style={{
        minHeight: `min(100vh, max(auto, calc(var(--u) * ${heightAt1536})))`,
      }}
      aria-label="Page hero"
    >
      {/* ── Desktop explicit height lock ───────────────────────── */}
      <style>{`
        @media (min-width: 1024px) {
          section[aria-label="Page hero"] {
            height: calc(var(--u) * ${heightAt1536}) !important;
            min-height: calc(var(--u) * ${heightAt1536}) !important;
            max-height: calc(var(--u) * ${heightAt1536}) !important;
          }
        }
      `}</style>

      {/* ── Full-Bleed Background Image (Desktop & Tablet) ── */}
      <div className="hidden sm:block absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src={artSrc}
          alt={artAlt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Side notes in corners only (never over headings) ──────── */}
      {sideNotes.map((note, i) => (
        <CornerNote key={i} note={note} />
      ))}

      {/* ── Desktop View (>=1024px): Pinned on 1536 ArtStage ────── */}
      <div className="hidden lg:block w-full h-full relative">
        <ArtStage width={1536} height={heightAt1536}>
          <PinnedPageContent
            pageId={pageId}
            eyebrow={eyebrow}
            breadcrumb={breadcrumb}
            titleParts={titleParts}
            titleParts2={titleParts2}
            subtitle={subtitle}
            description={description}
            actions={actions}
            iconStrip={iconStrip}
            kinBubble={kinBubble}
            kayoBubble={kayoBubble}
          />
        </ArtStage>
      </div>

      {/* ── Mobile / Tablet View (<1024px): Responsive Layout ──── */}
      <div className="block lg:hidden w-full relative">
        {/* On tablet (sm to lg, 640px to 1023px): 2-col panoramic */}
        <div className="hidden sm:block w-full relative min-h-[340px] flex items-center py-6 sm:py-8">
          <Container className="relative z-10 w-full">
            <div className="flex flex-row items-center justify-between gap-4">
              {/* Left Column (50%) */}
              <div className="w-1/2 flex flex-col gap-2.5 z-10">
                {breadcrumb && breadcrumb.length > 0 && (
                  <Breadcrumbs items={breadcrumb} />
                )}
                {eyebrow && (
                  <p className="type-eyebrow text-terracotta text-micro tracking-wider font-semibold">
                    {eyebrow}
                  </p>
                )}
                <h1 className="font-heading font-black text-navy leading-[1.08] tracking-tight text-3xl md:text-4xl">
                  <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
                  {titleParts2 && (
                    <span className="block whitespace-nowrap mt-0.5"><AccentText parts={titleParts2} /></span>
                  )}
                </h1>
                {subtitle && (
                  <p className="font-heading text-sm md:text-base font-bold text-ink leading-snug">
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p className="type-body text-body text-xs md:text-sm leading-relaxed max-w-sm">
                    {description}
                  </p>
                )}
                {pageId === "services" && (
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex items-center gap-2 max-w-[160px]" aria-hidden="true">
                      <div className="flex-1 h-px bg-tone-green-fg/40" />
                      <LotusIcon className="w-3.5 h-3.5 text-tone-green-fg/80" />
                      <div className="flex-1 h-px bg-tone-green-fg/40" />
                    </div>
                    <span className="font-[var(--font-script)] text-sm text-primary/90 font-medium">
                      Move Breathe Belong ♡
                    </span>
                  </div>
                )}
                {pageId === "testimonials" && (
                  <div className="flex items-center gap-3 mt-1">
                    <div className="relative w-14 h-16 shrink-0">
                      <Image
                        src="/images/hero-left-blocks-clean.png"
                        alt="Yoga People Positive Change"
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>
                )}
                {actions.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {actions.map((action) => (
                      <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size="sm">
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column (50%): Speech bubbles over Kin & Kayo */}
              <div className="w-1/2 h-full relative flex items-start justify-between gap-2 pt-2">
                {kinBubble && (
                  <div className="max-w-[48%]">
                    <SpeechBubble
                      name={kinBubble.name}
                      lines={kinBubble.lines}
                      tone="pink"
                      tail="left"
                      delay={kinBubble.delay ?? 0}
                    />
                  </div>
                )}
                {kayoBubble && (
                  <div className="max-w-[48%] ml-auto">
                    <SpeechBubble
                      name={kayoBubble.name}
                      lines={kayoBubble.lines}
                      tone="blue"
                      tail="right"
                      delay={kayoBubble.delay ?? 0.3}
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>

        {/* On small mobile (<640px): Dedicated Clean Layout */}
        <div className="block sm:hidden w-full relative pt-6 pb-2 bg-gradient-to-b from-[#FFF5EC] via-[#FDF0E7] to-[#FBECE2]">
          {/* Top: Full-width Text Block */}
          <Container className="relative z-10 w-full mb-3">
            <div className="flex flex-col gap-2">
              {breadcrumb && breadcrumb.length > 0 && (
                <Breadcrumbs items={breadcrumb} />
              )}
              {eyebrow && (
                <p className="type-eyebrow text-terracotta text-[10px] tracking-wider font-semibold">
                  {eyebrow}
                </p>
              )}
              <h1 className="font-heading font-black text-navy leading-tight tracking-tight text-2xl">
                <AccentText parts={titleParts} />
                {titleParts2 && <span className="block mt-0.5"><AccentText parts={titleParts2} /></span>}
              </h1>
              {subtitle && (
                <p className="font-heading text-xs font-bold text-ink leading-snug">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="type-body text-body text-xs leading-relaxed max-w-sm">
                  {description}
                </p>
              )}
              {pageId === "services" && (
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="w-6 h-px bg-tone-green-fg/40" />
                    <LotusIcon className="w-3 h-3 text-tone-green-fg/80" />
                    <div className="w-6 h-px bg-tone-green-fg/40" />
                  </div>
                  <span className="font-[var(--font-script)] text-xs text-primary font-medium">
                    Move Breathe Belong ♡
                  </span>
                </div>
              )}
              {pageId === "testimonials" && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="relative w-10 h-12 shrink-0">
                    <Image
                      src="/images/hero-left-blocks-clean.png"
                      alt="Yoga People Positive Change"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="flex items-center gap-1" aria-hidden="true">
                    <LotusIcon className="w-3 h-3 text-tone-green-fg/80" />
                  </div>
                </div>
              )}
            </div>
          </Container>

          {/* Bottom: Dedicated Mascot Stage (Kin & Kayo with floating bubbles above them) */}
          <div className="relative w-full h-[190px] overflow-hidden">
            {/* Background showing Kin & Kayo sitting centered */}
            <Image
              src={artSrc}
              alt={artAlt}
              fill
              className="object-cover object-[55%_bottom] pointer-events-none select-none"
            />
            {/* Speech bubbles positioned cleanly above Kin and Kayo */}
            <div className="absolute inset-0 px-3 pt-2 flex items-start justify-between pointer-events-auto">
              {kinBubble && (
                <div className="max-w-[47%]">
                  <SpeechBubble
                    name={kinBubble.name}
                    lines={kinBubble.lines}
                    tone="pink"
                    tail="left"
                    delay={kinBubble.delay ?? 0}
                  />
                </div>
              )}
              {kayoBubble && (
                <div className="max-w-[49%] ml-auto">
                  <SpeechBubble
                    name={kayoBubble.name}
                    lines={kayoBubble.lines}
                    tone="blue"
                    tail="right"
                    delay={kayoBubble.delay ?? 0.3}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
