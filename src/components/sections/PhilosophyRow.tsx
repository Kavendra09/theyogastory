/**
 * PhilosophyRow.tsx
 * src/components/sections/PhilosophyRow.tsx
 *
 * Section 1 of /about page:
 *  - "OUR PHILOSOPHY" eyebrow + "Move. Breathe. Belong." heading + paragraph
 *  - 4 icon circles in a horizontal row: Authentic Practice, Mindful Living, Supportive Community, A Healthier Happier You
 *  - Pink QuoteCard on the right: "Yoga is not just something you practice. It's something you live."
 *
 * Layout matches AboutUs2.jpeg reference screenshot:
 *  Desktop: [Left: eyebrow + heading + paragraph + 4 horiz icons] [Right: Quote Card]
 *  Mobile: stacked vertically
 */
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { IconCircle } from "@/components/ui/IconCircle";
import { ScriptNote, LotusIcon } from "@/components/ui/Atoms";
import { PHILOSOPHY } from "@/data/about";
import { Quote } from "lucide-react";

interface PhilosophyRowProps {
  className?: string;
}

export function PhilosophyRow({ className }: PhilosophyRowProps) {
  return (
    <section className={cn("py-12 md:py-20 relative", className)} aria-labelledby="philosophy-title">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left Column: Philosophy Text + 4 Icon Items ─────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Header */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-emerald-600/40" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-terracotta">
                  {PHILOSOPHY.eyebrow}
                </span>
                <div className="h-px w-6 bg-emerald-600/40" />
              </div>

              {/* Main Heading — "Move. Breathe. Belong." with Belong in primary */}
              <h2
                id="philosophy-title"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight"
              >
                Move. Breathe.{" "}
                <span className="text-primary">Belong.</span>
              </h2>

              {/* Lead Paragraph */}
              <p className="type-body text-body text-sm sm:text-base leading-relaxed mt-4 max-w-lg">
                {PHILOSOPHY.paragraph}
              </p>
            </div>

            {/* 4 Icon Pillars — horizontal row matching screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
              {PHILOSOPHY.pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className="flex flex-col items-center text-center gap-2 p-3 sm:p-4 rounded-2xl bg-white/80 border border-border-light shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5"
                  >
                    <IconCircle tone={pillar.tone} size="lg" className="shrink-0">
                      <Icon size={22} strokeWidth={1.8} />
                    </IconCircle>
                    <h3 className="font-heading font-semibold text-navy text-xs leading-snug">
                      {pillar.label}
                    </h3>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ── Right Column: Pink QuoteCard ─────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className={cn(
                "relative w-full max-w-md rounded-panel p-8 sm:p-10",
                "bg-gradient-to-br from-tone-pink-bg via-tone-pink-panel to-cream-start",
                "border-2 border-primary/20 shadow-card flex flex-col justify-between",
                "overflow-hidden transition-all duration-300 hover:shadow-glass hover:border-primary/30"
              )}
            >
              {/* Background decorative lotus watermark */}
              <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none select-none text-primary" aria-hidden="true">
                <LotusIcon size={180} />
              </div>

              {/* Quote icon mark */}
              <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-soft flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20">
                <Quote size={24} className="rotate-180 fill-primary/20 text-primary" />
              </div>

              {/* Quote Text */}
              <div className="relative z-10">
                <blockquote className="font-heading italic text-xl sm:text-2xl text-ink font-semibold leading-snug">
                  &ldquo;{PHILOSOPHY.quoteCard.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                  <span className="type-eyebrow text-terracotta tracking-wider font-bold text-xs">
                    {PHILOSOPHY.quoteCard.author}
                  </span>
                </div>
              </div>

              {/* Bottom decorative script accent */}
              <div className="mt-8 pt-6 border-t border-primary/15 flex items-center justify-between">
                <span className="type-script text-primary text-base">
                  Every breath is a new beginning ♡
                </span>
                <LotusIcon size={20} className="text-primary/60" />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
