/**
 * FeatureCard.tsx
 * src/components/ui/FeatureCard.tsx
 *
 * Reusable icon + title + description card used on:
 *  - Home  (5 cards: Yoga for All Ages, Expert Guidance, …)
 *  - About (pillar cards)
 *  - Contact (info cards)
 *
 * Reads bg / icon colour from tone map.
 * Optional `compact` prop for smaller mobile-first variant.
 *
 * Usage:
 *   <FeatureCard
 *     icon={Users}
 *     title="Yoga for All Ages"
 *     description="From toddlers to seniors …"
 *     tone="pink"
 *   />
 */
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import { IconCircle } from "./IconCircle";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: Tone;
  compact?: boolean;
  className?: string;
  /** Optional detail line below description */
  detail?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone = "pink",
  compact = false,
  className,
  detail,
}: FeatureCardProps) {
  const toneMap = TONE_MAP[tone];

  return (
    <div
      className={cn(
        "card group flex flex-col gap-3 transition-all duration-300",
        compact ? "p-4" : "p-5 md:p-6",
        className
      )}
    >
      {/* Icon circle */}
      <IconCircle tone={tone} size={compact ? "sm" : "md"}>
        <Icon
          size={compact ? 16 : 20}
          strokeWidth={1.8}
          className={toneMap.fg}
        />
      </IconCircle>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className={cn("font-heading font-semibold text-ink leading-snug", compact ? "text-sm" : "text-base")}>
          {title}
        </h3>
        <p className={cn("text-muted leading-relaxed", compact ? "text-xs" : "text-sm")}>
          {description}
        </p>
        {detail && (
          <p className="text-xs text-muted/70 mt-1 italic">{detail}</p>
        )}
      </div>
    </div>
  );
}
