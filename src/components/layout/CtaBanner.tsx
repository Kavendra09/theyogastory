/**
 * CtaBanner.tsx
 *
 * Full-width pink wavy band used at the bottom of multiple pages.
 * Contains:
 *   - Left: ScriptNote decoration
 *   - Center: AccentText title + subtitle or a custom action slot
 *   - Right: brand logo lockup or custom right slot
 *   - Background leaf decorations
 *
 * Usage — Services page:
 *   <CtaBanner
 *     scriptLeft="More · Breathe · Belong ♡"
 *     titleParts={[{ t: "More Than Services." }]}
 *     subtitle="A Stronger, Healthier, Happier You."
 *     scriptRight="Same Mat, Brighter Days"
 *   />
 *
 * Usage — Testimonials "Be A Part of Our Story":
 *   <CtaBanner
 *     titleParts={[{ t: "Be A Part of " }, { t: "Our Story", accent: true }]}
 *     subtitle="Have a story to share? We'd love to hear from you!"
 *     action={<Button variant="primary" href={BRAND.googleReviewUrl}>Write a Review on Google</Button>}
 *   />
 *
 * Usage — Contact:
 *   <CtaBanner
 *     titleParts={[{ t: "Let's Create A Healthier Tomorrow, " }, { t: "Together.", accent: true }]}
 *     subtitle="Yoga connects us. So do conversations."
 *   />
 */
import { cn } from "@/lib/utils";
import { AccentText, type AccentPart } from "@/components/ui/AccentText";
import { ScriptNote, LeafSprig, LotusIcon } from "@/components/ui/Atoms";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/data/site";
import Image from "next/image";

interface CtaBannerProps {
  /** Handwritten script text on the left (optional) */
  scriptLeft?: string;
  /** Rotate angle for left script (default -6) */
  scriptLeftRotate?: number;
  /** Handwritten script text on the right (optional) */
  scriptRight?: string;
  /** Rotate angle for right script (default 6) */
  scriptRightRotate?: number;
  /** Main title parts for AccentText */
  titleParts: AccentPart[];
  /** Subtitle / supporting text */
  subtitle?: string;
  /** Custom action element (button / link) — replaces subtitle if both provided */
  action?: React.ReactNode;
  /** Custom right-side slot — replaces default logo lockup */
  rightSlot?: React.ReactNode;
  /** Background colour override (defaults to pink primary gradient) */
  bgClassName?: string;
  className?: string;
}

export function CtaBanner({
  scriptLeft,
  scriptLeftRotate = -6,
  scriptRight,
  scriptRightRotate = 6,
  titleParts,
  subtitle,
  action,
  rightSlot,
  bgClassName,
  className,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        bgClassName ?? "bg-primary-muted",
        className
      )}
    >
      {/* Wavy top edge */}
      <div className="absolute top-0 inset-x-0 leading-[0] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-6 md:h-8 text-white fill-current">
          <path d="M0,16 C360,0 720,32 1080,16 C1260,8 1360,20 1440,16 L1440,0 L0,0Z" />
        </svg>
      </div>

      {/* Wavy bottom edge */}
      <div className="absolute bottom-0 inset-x-0 leading-[0] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-6 md:h-8 text-white fill-current" style={{ transform: "scaleY(-1)" }}>
          <path d="M0,16 C360,0 720,32 1080,16 C1260,8 1360,20 1440,16 L1440,0 L0,0Z" />
        </svg>
      </div>

      {/* Leaf decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true">
        <LeafSprig mirrored className="w-20 h-20 md:w-28 md:h-28" color="var(--color-primary)" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true">
        <LeafSprig className="w-20 h-20 md:w-28 md:h-28" color="var(--color-primary)" />
      </div>

      <Container className="relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10">

          {/* Left script */}
          {scriptLeft && (
            <div className="hidden md:flex justify-center" aria-hidden="true">
              <ScriptNote rotate={scriptLeftRotate} className="text-primary/80 text-lg">
                {scriptLeft}
              </ScriptNote>
            </div>
          )}

          {/* Center content */}
          <div className="flex flex-col items-center text-center gap-3">
            <AccentText
              as="h2"
              className="type-h2 text-ink"
              parts={titleParts}
            />
            {subtitle && (
              <p className="type-body text-body max-w-lg">{subtitle}</p>
            )}
            {action && <div className="mt-2">{action}</div>}
          </div>

          {/* Right slot */}
          {(scriptRight || rightSlot) && (
            <div className="hidden md:flex flex-col items-center gap-3" aria-hidden={!rightSlot}>
              {rightSlot ?? (
                <>
                  {/* Default: logo lockup */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-soft flex items-center justify-center bg-white/40">
                      <Image src={BRAND.logo} alt="" width={40} height={40} className="object-contain w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-heading text-xs font-bold text-navy tracking-tight leading-none">
                        {BRAND.name.toUpperCase()}
                      </span>
                      <span className="font-heading italic text-3xs text-navy/60 mt-0.5">
                        {BRAND.tagline}
                      </span>
                    </div>
                  </div>
                  {scriptRight && (
                    <ScriptNote rotate={scriptRightRotate} className="text-primary/80 text-base">
                      {scriptRight}
                    </ScriptNote>
                  )}
                </>
              )}
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}
