/**
 * HeroIconStrip.tsx
 * src/components/sections/HeroIconStrip.tsx
 *
 * Horizontal strip of 4 stat items (icon circle + label) shown below the
 * PageHero on the Home page. Tone-aware.
 *
 * Rendered as a floating card that overlaps the bottom of the hero section.
 */
import { cn } from "@/lib/utils";
import { IconCircle } from "@/components/ui/IconCircle";
import { Container } from "@/components/ui/Container";
import type { HeroStatItem } from "@/data/home";

interface HeroIconStripProps {
  items: HeroStatItem[];
  className?: string;
}

export function HeroIconStrip({ items, className }: HeroIconStripProps) {
  return (
    <div className={cn("relative z-20 -mt-6 mb-2", className)}>
      <Container size="lg">
        <div
          className={cn(
            "glass rounded-panel",
            "grid grid-cols-2 sm:grid-cols-4 divide-x divide-border-light",
            "overflow-hidden shadow-card"
          )}
          role="list"
          aria-label="Key benefits"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3",
                  "px-4 py-4 sm:py-5",
                  // Border between grid rows on mobile
                  i >= 2 && "border-t border-border-light sm:border-t-0"
                )}
                role="listitem"
              >
                <IconCircle tone={item.tone} size="sm">
                  <Icon size={16} strokeWidth={1.8} />
                </IconCircle>
                <span className="text-xs sm:text-sm font-semibold text-ink text-center sm:text-left leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
