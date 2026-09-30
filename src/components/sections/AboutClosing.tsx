/**
 * AboutClosing.tsx
 * src/components/sections/AboutClosing.tsx
 *
 * Closing section on /about:
 *  - "This is The Yoga Story. Ancient Whispers, Modern Echoes."
 *  - Soothing scene with balanced zen stones, rolled mat, lotus petals, and warm light
 *  - Script notes: "Ancient Whispers ♡" and "Modern Echoes ☺"
 *  - CTA button to begin journey
 */
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ScriptNote, LotusIcon, WaveDivider } from "@/components/ui/Atoms";
import { ABOUT_CLOSING } from "@/data/about";
import { ArrowRight } from "lucide-react";

interface AboutClosingProps {
  className?: string;
}

export function AboutClosing({ className }: AboutClosingProps) {
  return (
    <section className={cn("relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden", className)}>
      {/* Top gentle wave */}
      <div className="absolute top-0 inset-x-0 z-10 pointer-events-none" aria-hidden="true">
        <WaveDivider color="var(--cream-100)" className="h-6 sm:h-8" />
      </div>

      {/* Warm ambient background with radiant gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, var(--color-cream-start) 0%, var(--color-cream-mid) 45%, var(--tone-pink-panel) 80%, var(--color-cream-start) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient blurred glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-border-soft) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Top Lotus Icon mark */}
          <div className="w-14 h-14 rounded-full bg-white/90 shadow-soft border border-primary/20 flex items-center justify-center text-primary mb-6 ring-4 ring-white/60">
            <LotusIcon size={28} />
          </div>

          {/* Left & Right floating script notes (desktop) */}
          <div className="w-full relative">
            <div className="hidden lg:block absolute -top-10 -left-6 pointer-events-none select-none" aria-hidden="true">
              <ScriptNote rotate={-8} heart className="text-xl text-primary font-medium">
                {ABOUT_CLOSING.scriptLeft.replace("♡", "").trim()}
              </ScriptNote>
            </div>
            <div className="hidden lg:block absolute -top-10 -right-6 pointer-events-none select-none" aria-hidden="true">
              <ScriptNote rotate={6} className="text-xl text-navy/60 font-medium">
                {ABOUT_CLOSING.scriptRight}
              </ScriptNote>
            </div>

            {/* Main Title */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
              {ABOUT_CLOSING.title}
            </h2>
          </div>

          {/* Subtitle / Tagline in elegant italic Playfair */}
          <p className="font-heading italic text-xl sm:text-2xl md:text-3xl text-primary font-semibold mt-3 mb-8">
            {ABOUT_CLOSING.tagline}
          </p>

          {/* Zen Stones & Rolled Mat Scene Graphic */}
          <div className="relative w-full max-w-md my-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-soft flex items-center justify-center gap-6 sm:gap-8">

            {/* Balanced Zen Stones graphic */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-3 rounded-full bg-stone-1 shadow-sm mb-0.5" />
              <div className="w-10 h-4 rounded-full bg-stone-2 shadow-sm mb-0.5" />
              <div className="w-14 h-5 rounded-full bg-stone-3 shadow-sm mb-0.5" />
              <div className="w-20 h-6 rounded-full bg-stone-4 shadow-md" />
              <span className="type-script text-xs text-muted mt-1.5">Balance</span>
            </div>

            {/* Divider line */}
            <div className="h-14 w-px bg-border-light" />

            {/* Rolled Mat graphic */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center">
                {/* Rolled mat cylinder */}
                <div className="w-16 sm:w-20 h-7 rounded-full bg-gradient-to-r from-primary to-primary-hover shadow-md border border-white/40 flex items-center justify-end pr-1.5">
                  <div className="w-4 h-5 rounded-full border-2 border-white/50 bg-primary-hover" />
                </div>
              </div>
              <span className="type-script text-xs text-primary mt-2">Same Mat ☺</span>
            </div>

            {/* Divider line */}
            <div className="h-14 w-px bg-border-light" />

            {/* Lotus Blossom */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cream-50 flex items-center justify-center text-primary shadow-soft">
                <LotusIcon size={24} />
              </div>
              <span className="type-script text-xs text-muted mt-1.5">Belong ♡</span>
            </div>

          </div>

          {/* CTA Action button */}
          <div className="mt-8">
            <Link
              href={ABOUT_CLOSING.ctaHref}
              className="btn-primary inline-flex items-center gap-3 h-12 px-8 text-base font-semibold shadow-pill hover:scale-105 transition-all"
            >
              {ABOUT_CLOSING.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile script notes */}
          <div className="lg:hidden flex items-center justify-center gap-6 mt-6 pt-4 border-t border-navy/10 w-full" aria-hidden="true">
            <ScriptNote rotate={-3} heart className="text-sm text-primary">
              Ancient Whispers
            </ScriptNote>
            <span className="text-navy/30">•</span>
            <ScriptNote rotate={3} className="text-sm text-navy/60">
              Modern Echoes ☺
            </ScriptNote>
          </div>

        </div>
      </Container>
    </section>
  );
}
