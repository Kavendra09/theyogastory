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
  services: 365,
  career: 365,
  contact: 382,
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
          {/* Breadcrumb: x=115, y=100 */}
          {breadcrumb && breadcrumb.length > 0 && (
            <Pin x={115} y={100} w={200}>
              <Breadcrumbs items={breadcrumb} />
            </Pin>
          )}

          {/* H1: x=115, y=130 */}
          <Pin x={115} y={130} w={380}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 50)" }}>
              <AccentText parts={titleParts} />
            </h1>
          </Pin>

          {/* Paragraph: x=115, y=205 */}
          <Pin x={115} y={205} w={490}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 14)" }}>
              {description}
            </p>
          </Pin>

          {/* Tiny Line: x=115, y=275 */}
          <Pin x={115} y={275} w={450}>
            <p className="text-2xs font-semibold text-terracotta tracking-wider uppercase" style={{ fontSize: "calc(var(--u) * 10.5)" }}>
              {eyebrow || "PEOPLE · PURPOSE · PRACTICE · A BRIGHTER TOMORROW"}
            </p>
          </Pin>

          {/* Kin bubble: x=545, y=105 */}
          {kinBubble && (
            <Pin x={545} y={105} w={220}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1025, y=95 */}
          {kayoBubble && (
            <Pin x={1025} y={95} w={230}>
              <SpeechBubble
                name={kayoBubble.name}
                lines={kayoBubble.lines}
                tone="blue"
                tail="right"
                delay={kayoBubble.delay ?? 0.4}
              />
            </Pin>
          )}
        </>
      );

    case "testimonials":
      return (
        <>
          {/* Eyebrow: x=90, y=95 */}
          <Pin x={90} y={95} w={480}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold" style={{ fontSize: "calc(var(--u) * 12)" }}>
              {eyebrow || "REAL PEOPLE · REAL EXPERIENCES / A HEALTHIER TOMORROW"}
            </p>
          </Pin>

          {/* H1: x=90, y=130 */}
          <Pin x={90} y={130} w={400}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight" style={{ fontSize: "calc(var(--u) * 48)" }}>
              <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
              {titleParts2 && (
                <span className="block whitespace-nowrap mt-1"><AccentText parts={titleParts2} /></span>
              )}
            </h1>
          </Pin>

          {/* Bold Line: x=90, y=230 */}
          {subtitle && (
            <Pin x={90} y={230} w={420}>
              <p className="font-heading font-bold text-ink whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 18)" }}>
                {subtitle}
              </p>
            </Pin>
          )}

          {/* Paragraph: x=90, y=265 */}
          <Pin x={90} y={265} w={500}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Kin bubble: x=685, y=215 */}
          {kinBubble && (
            <Pin x={685} y={215} w={210}>
              <SpeechBubble
                name={kinBubble.name}
                lines={kinBubble.lines}
                tone="pink"
                tail="left"
                delay={kinBubble.delay ?? 0}
              />
            </Pin>
          )}

          {/* Kayo bubble: x=1210, y=225 */}
          {kayoBubble && (
            <Pin x={1210} y={225} w={220}>
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
          {/* Eyebrow: x=130, y=95 */}
          <Pin x={130} y={95} w={450}>
            <p className="type-eyebrow text-terracotta tracking-wider font-semibold" style={{ fontSize: "calc(var(--u) * 12)" }}>
              {eyebrow || "PEOPLE · PURPOSE · PRACTICE / A BRIGHTER TOMORROW"}
            </p>
          </Pin>

          {/* H1: x=130, y=130 */}
          <Pin x={130} y={130} w={380}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight" style={{ fontSize: "calc(var(--u) * 48)" }}>
              <span className="block whitespace-nowrap"><AccentText parts={titleParts} /></span>
              {titleParts2 && (
                <span className="block whitespace-nowrap mt-1"><AccentText parts={titleParts2} /></span>
              )}
            </h1>
          </Pin>

          {/* Paragraph: x=130, y=210 */}
          <Pin x={130} y={210} w={460}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Icon Strip: x=130, y=280 */}
          {iconStrip && (
            <Pin x={130} y={280} w={550}>
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

          {/* H1: Let's Connect ♡ on ONE line: x=90, y=130 */}
          <Pin x={90} y={130} w={450}>
            <h1 className="font-heading font-black text-navy leading-[1.05] tracking-tight whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 46)" }}>
              <AccentText parts={titleParts} />
            </h1>
          </Pin>

          {/* Subtitle: x=90, y=200 */}
          {subtitle && (
            <Pin x={90} y={200} w={520}>
              <p className="font-heading font-semibold text-ink leading-snug whitespace-nowrap" style={{ fontSize: "calc(var(--u) * 17)" }}>
                {subtitle}
              </p>
            </Pin>
          )}

          {/* Paragraph: x=90, y=235 */}
          <Pin x={90} y={235} w={560}>
            <p className="type-body text-body leading-relaxed" style={{ fontSize: "calc(var(--u) * 13.5)" }}>
              {description}
            </p>
          </Pin>

          {/* Icon Strip: x=90, y=310 */}
          {iconStrip && (
            <Pin x={90} y={310} w={570}>
              <IconStrip items={iconStrip} tone="green" layout="row" />
            </Pin>
          )}

          {/* Kin bubble: x=710, y=100 */}
          {kinBubble && (
            <Pin x={710} y={100} w={220}>
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

      {/* ── Full-Bleed Background Image (ONE image, no blurred-plant layers, no ghost-blobs) ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src={artSrc}
          alt=""
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

      {/* ── Mobile / Tablet View (<1024px): Stacked Responsive ──── */}
      <div className="block lg:hidden w-full relative py-8">
        <Container className="relative z-10">
          <div className="flex flex-col gap-3.5">
            {breadcrumb && breadcrumb.length > 0 && (
              <Breadcrumbs items={breadcrumb} />
            )}

            {eyebrow && (
              <p className="type-eyebrow text-terracotta">{eyebrow}</p>
            )}

            <h1
              className="font-heading font-black text-navy leading-[1.05] tracking-tight text-3xl sm:text-4xl"
            >
              <span className="block">
                <AccentText parts={titleParts} />
              </span>
              {titleParts2 && titleParts2.length > 0 && (
                <span className="block mt-1">
                  <AccentText parts={titleParts2} />
                </span>
              )}
            </h1>

            {subtitle && (
              <p className="font-heading text-base font-semibold text-ink/90 leading-snug">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="type-body text-body text-sm max-w-md">
                {description}
              </p>
            )}

            {tagChips && tagChips.length > 0 && (
              <TagChips chips={tagChips} />
            )}

            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-1">
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
            )}

            {iconStrip && (
              <div className="mt-2">
                <IconStrip items={iconStrip} tone="green" layout="inline" />
              </div>
            )}

            {/* Mobile speech bubbles */}
            <div className="flex gap-3 flex-wrap mt-3">
              {kinBubble && (
                <SpeechBubble
                  name={kinBubble.name}
                  lines={kinBubble.lines}
                  tone="pink"
                  tail="left"
                  delay={kinBubble.delay ?? 0}
                  className="max-w-[48%]"
                />
              )}
              {kayoBubble && (
                <SpeechBubble
                  name={kayoBubble.name}
                  lines={kayoBubble.lines}
                  tone="blue"
                  tail="right"
                  delay={kayoBubble.delay ?? 0.3}
                  className="max-w-[48%]"
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
