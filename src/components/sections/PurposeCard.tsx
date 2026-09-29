/**
 * PurposeCard.tsx
 * src/components/sections/PurposeCard.tsx
 *
 * Section 3 of /about page:
 *  - Green Panel container
 *  - Scene visual: signpost with 3 signs (Healthier You / Kinder Mind / Brighter Days), kids/characters with backpacks
 *  - Title "Our Purpose"
 *  - Two inspiring paragraphs
 *  - Script note: "Every Journey Matters ☺"
 */
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ScriptNote, LeafSprig, LotusIcon } from "@/components/ui/Atoms";
import { PURPOSE } from "@/data/about";
import { Compass, Heart, Sun, MapPin } from "lucide-react";

interface PurposeCardProps {
  className?: string;
}

export function PurposeCard({ className }: PurposeCardProps) {
  return (
    <section className={cn("py-12 md:py-20 relative", className)} aria-labelledby="purpose-heading">
      <Container size="lg">
        <div
          className={cn(
            "relative rounded-panel overflow-hidden shadow-card border border-tone-green-border",
            "bg-gradient-to-br from-tone-green-bg via-tone-green-panel to-tone-green-bg",
            "p-8 sm:p-12 lg:p-16"
          )}
        >
          {/* Decorative ambient leaf sprigs in corners */}
          <div className="absolute top-4 right-4 opacity-30 pointer-events-none select-none" aria-hidden="true">
            <LeafSprig color="var(--tone-green-fg)" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-25 pointer-events-none select-none" aria-hidden="true">
            <LeafSprig mirrored color="var(--tone-green-fg)" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* ── Left Column: Scene Visual (Signpost + Backpack Explorers) ── */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm rounded-card bg-white/80 backdrop-blur-sm p-6 border border-tone-green-border/80 shadow-soft">

                {/* Signpost Illustration Lockup */}
                <div className="flex flex-col items-center">

                  {/* Signpost Header Icon */}
                  <div className="w-12 h-12 rounded-full bg-tone-green-bg border border-tone-green-border flex items-center justify-center text-tone-green-fg shadow-soft mb-4">
                    <Compass size={24} strokeWidth={2} />
                  </div>

                  {/* The Signpost Pole with 3 Pointed Directional Signs */}
                  <div className="relative w-full flex flex-col items-center gap-3">
                    {/* Central Wooden Pole (visual SVG / bar) */}
                    <div className="absolute top-0 bottom-0 w-2.5 bg-signpost rounded-full shadow-inner z-0" aria-hidden="true" />

                    {/* Sign 1: Healthier You (Points Left) */}
                    <div className="relative z-10 w-full flex justify-start pl-2">
                      <div className="bg-tone-green-panel border-2 border-tone-green-border px-5 py-2 rounded-xl rounded-l-none shadow-soft flex items-center gap-2 -rotate-2">
                        <Heart size={16} className="text-tone-green-fg fill-tone-green-fg/20" />
                        <span className="font-heading font-bold text-ink text-sm tracking-wide">
                          Healthier You
                        </span>
                      </div>
                    </div>

                    {/* Sign 2: Kinder Mind (Points Right) */}
                    <div className="relative z-10 w-full flex justify-end pr-2">
                      <div className="bg-tone-pink-panel border-2 border-tone-pink-border px-5 py-2 rounded-xl rounded-r-none shadow-soft flex items-center gap-2 rotate-2">
                        <LotusIcon size={16} className="text-tone-pink-fg" />
                        <span className="font-heading font-bold text-ink text-sm tracking-wide">
                          Kinder Mind
                        </span>
                      </div>
                    </div>

                    {/* Sign 3: Brighter Days (Points Left) */}
                    <div className="relative z-10 w-full flex justify-start pl-4">
                      <div className="bg-tone-yellow-panel border-2 border-tone-yellow-border px-5 py-2 rounded-xl rounded-l-none shadow-soft flex items-center gap-2 -rotate-1">
                        <Sun size={16} className="text-tone-yellow-fg fill-tone-yellow-fg/20" />
                        <span className="font-heading font-bold text-ink text-sm tracking-wide">
                          Brighter Days
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Base Scene with Character Art / Backpacks */}
                  <div className="relative w-full h-44 mt-4 rounded-xl overflow-hidden shadow-inner bg-gradient-to-t from-cream-100 to-transparent flex items-end justify-center">
                    <Image
                      src="/images/kin-kayo-mascots.jpg"
                      alt="Kin and Kayo exploring the mindful path"
                      fill
                      sizes="320px"
                      className="object-contain object-bottom p-2"
                    />
                  </div>

                  {/* Corner Script Note on Signpost */}
                  <div className="mt-3 text-center">
                    <ScriptNote rotate={-3} className="text-sm text-tone-green-fg font-semibold">
                      {PURPOSE.scriptNote}
                    </ScriptNote>
                  </div>

                </div>

              </div>
            </div>

            {/* ── Right Column: Purpose Copy ───────────────────────── */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-5">

              <div className="inline-flex items-center gap-2">
                <span className="type-eyebrow text-tone-green-fg font-bold tracking-widest text-xs uppercase px-3 py-1 rounded-full bg-white/70 border border-tone-green-border">
                  {PURPOSE.eyebrow}
                </span>
              </div>

              <h2
                id="purpose-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight"
              >
                {PURPOSE.title}
              </h2>

              <div className="flex flex-col gap-4 text-body text-base sm:text-lg leading-relaxed">
                {PURPOSE.paragraphs.map((p, i) => (
                  <p key={i}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Signpost bullet chips */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {PURPOSE.signpostItems.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 border border-tone-green-border shadow-soft"
                  >
                    <MapPin size={13} className="text-tone-green-fg" />
                    <span className="text-ink">{item.label}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
