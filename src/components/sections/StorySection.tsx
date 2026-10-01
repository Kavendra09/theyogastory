/**
 * StorySection.tsx
 * src/components/sections/StorySection.tsx
 *
 * "More Than Yoga. It's a Journey Together." section on the Home page.
 * Matches HomeScreen.jpeg reference screenshot:
 *  - Top curved transition from hero
 *  - Heading with decorative botanical leaf sprigs
 *  - Two-paragraph body text
 *  - 5 horizontal feature cards (Yoga for All Ages, Expert Guidance, etc.)
 *  - Bottom row with:
 *     * Left: "Ancient Whispers, Modern Echoes ♡" in handwritten script
 *     * Center: "SCROLL TO EXPLORE" with animated scroll indicator
 *     * Right: "Same Mat Brighter Days ☺" on pink notebook badge
 */
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { AccentText } from "@/components/ui/AccentText";
import { STORY_SECTION, FEATURE_CARDS } from "@/data/home";

interface StorySectionProps {
  className?: string;
}

export function StorySection({ className }: StorySectionProps) {
  return (
    <section
      className={cn("py-12 md:py-18 lg:py-20 relative overflow-hidden bg-white/95", className)}
      aria-labelledby="story-heading"
    >
      {/* Curved organic top wave transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] pointer-events-none overflow-hidden h-14 sm:h-20 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-full text-white/95">
          <path d="M0,40 C320,80 620,10 920,45 C1220,80 1380,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Subtle radial ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(214,51,108,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 flex flex-col gap-8 md:gap-10">

        {/* Section Heading with leaf sprigs flanking */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <p className="type-eyebrow text-terracotta tracking-widest uppercase font-semibold text-xs sm:text-sm mb-2.5">
            {STORY_SECTION.eyebrow}
          </p>

          {/* Heading with botanical leaf sprigs on both sides */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 w-full">
            {/* Left Leaf Sprig SVG */}
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" className="text-emerald-600/70 shrink-0 hidden sm:block">
              <path d="M40 22C28 20 18 14 10 4M10 4C14 6 22 7 26 5M10 4C8 10 9 18 15 22M22 13C26 15 32 14 36 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <h2 id="story-heading" className="font-heading font-extrabold text-navy text-2xl sm:text-3xl md:text-4xl leading-tight">
              <AccentText parts={STORY_SECTION.titleParts} />
            </h2>

            {/* Right Leaf Sprig SVG (mirrored) */}
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" className="text-emerald-600/70 shrink-0 hidden sm:block -scale-x-100">
              <path d="M40 22C28 20 18 14 10 4M10 4C14 6 22 7 26 5M10 4C8 10 9 18 15 22M22 13C26 15 32 14 36 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-2 text-center text-body text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
            {STORY_SECTION.body.map((para, i) => (
              <p key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* 5 Feature Cards in 1 Row — matching HomeScreen.jpeg */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4"
          role="list"
          aria-label="Why choose The Yoga Story"
        >
          {FEATURE_CARDS.map((card, i) => {
            const Icon = card.icon;
            const toneStyles = [
              { bg: "bg-[#FDF0F4]", text: "text-[#D6336C]", border: "border-[#F8BBD0]" },
              { bg: "bg-[#EAF5EA]", text: "text-[#2E7D32]", border: "border-[#C8E6C9]" },
              { bg: "bg-[#FDF0F4]", text: "text-[#D6336C]", border: "border-[#F8BBD0]" },
              { bg: "bg-[#FFF8E6]", text: "text-[#E68A00]", border: "border-[#FFE082]" },
              { bg: "bg-[#EEF4FB]", text: "text-[#1E88E5]", border: "border-[#BBDEFB]" },
            ];
            const tone = toneStyles[i % toneStyles.length];

            return (
              <div
                key={card.title}
                role="listitem"
                className="bg-white/95 rounded-2xl p-4 sm:p-4.5 border border-border-soft/70 shadow-soft hover:shadow-card transition-all duration-300 flex items-center gap-3.5 group hover:-translate-y-0.5"
              >
                {/* Left icon circle */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${tone.bg} ${tone.text} ${tone.border} shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Right title & desc */}
                <div className="flex flex-col min-w-0">
                  <h3 className="font-heading font-bold text-navy text-sm sm:text-[14px] leading-snug truncate">
                    {card.title}
                  </h3>
                  <p className="text-muted text-[11px] sm:text-xs leading-relaxed mt-0.5 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row: Script note left, SCROLL TO EXPLORE center, Pink book note right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-border-light/60">
          {/* Left: Ancient Whispers, Modern Echoes ♡ */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
            <span className="font-[var(--font-script)] font-normal text-navy/70 text-lg sm:text-xl lg:text-2xl leading-none -rotate-2 select-none">
              Ancient Whispers, Modern Echoes ♡
            </span>
          </div>

          {/* Center: Scroll to Explore */}
          <div className="w-full sm:w-1/3 flex justify-center">
            <div className="flex flex-col items-center gap-1.5 opacity-75 select-none">
              <div className="w-4 h-7 rounded-full border-2 border-navy/40 flex items-start justify-center pt-1">
                <div className="w-1 h-1.5 rounded-full bg-navy/60 animate-bounce" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-navy/60 uppercase">
                — SCROLL TO EXPLORE —
              </span>
            </div>
          </div>

          {/* Right: Same Mat Brighter Days ☺ on pink notebook badge */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <div className="bg-[#F8E7ED] border border-[#F2CAD6] px-4 py-2.5 rounded-xl shadow-xs rotate-2 transition-transform hover:rotate-0">
              <p className="font-[var(--font-script)] font-semibold text-ink text-sm sm:text-base leading-tight select-none">
                Same Mat Brighter Days ☺
              </p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
