/**
 * IconStrip.tsx
 * src/components/sections/IconStrip.tsx
 *
 * Reusable horizontal strip of 4 icon+label items separated by thin
 * vertical dividers. Used in Career and Contact hero sections.
 *
 * Usage:
 *   <IconStrip items={[
 *     { icon: MessageCircle, label: "Ask a Question" },
 *     { icon: Users,          label: "Join Our Community" },
 *     { icon: Share2,         label: "Explore Opportunities" },
 *     { icon: Heart,          label: "Let's Grow Together" },
 *   ]} tone="green" />
 */
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";

export interface IconStripItem {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}

interface IconStripProps {
  items: IconStripItem[];
  tone?: Tone;
  /** "row" stacks icon above label (default); "inline" puts them side by side */
  layout?: "row" | "inline";
  className?: string;
}

export function IconStrip({
  items,
  tone = "green",
  layout = "row",
  className,
}: IconStripProps) {
  const toneClasses = TONE_MAP[tone];

  return (
    <div
      className={cn(
        "flex items-stretch gap-0",
        "rounded-xl overflow-hidden",
        "border border-border-light bg-white/80 shadow-soft",
        className
      )}
      role="list"
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isLast = idx === items.length - 1;

        return (
          <div
            key={item.label}
            className={cn(
              "flex-1 flex items-center justify-center gap-2.5",
              "px-3 py-3.5",
              layout === "row" ? "flex-col" : "flex-row",
              !isLast && "border-r border-border-light"
            )}
            role="listitem"
          >
            {/* Icon circle */}
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-full shrink-0",
                "w-9 h-9",
                toneClasses.iconCircle
              )}
              aria-hidden="true"
            >
              <Icon size={17} strokeWidth={1.8} />
            </span>

            {/* Label */}
            <div className={cn(layout === "row" ? "text-center" : "text-left")}>
              <span className="text-2xs sm:text-xs font-semibold text-ink leading-snug block">
                {item.label}
              </span>
              {item.sublabel && (
                <span className="text-micro text-muted leading-tight block mt-0.5">
                  {item.sublabel}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
