/**
 * AboutMobileIntro.tsx
 * src/components/sections/AboutMobileIntro.tsx
 *
 * Mobile-only intro block:
 *  - Eyebrow "OUR STORY"
 *  - Title "More Than Yoga. We're Building a Story."
 *  - Two paragraphs
 *  - Only rendered on small screens (hidden on lg+)
 */
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { AccentText } from "@/components/ui/AccentText";
import { ABOUT_MOBILE_INTRO } from "@/data/about";

interface AboutMobileIntroProps {
  className?: string;
}

export function AboutMobileIntro({ className }: AboutMobileIntroProps) {
  return (
    <div className={cn("block lg:hidden py-8 px-4 bg-white/60 border-b border-border-light", className)}>
      <Container size="md">
        <div className="flex flex-col gap-3">
          <p className="type-eyebrow text-terracotta">{ABOUT_MOBILE_INTRO.eyebrow}</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy leading-snug">
            <AccentText parts={ABOUT_MOBILE_INTRO.titleParts} />
          </h2>
          <div className="flex flex-col gap-2.5 mt-1">
            {ABOUT_MOBILE_INTRO.paragraphs.map((p, i) => (
              <p key={i} className="type-body text-body text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
