/**
 * ServiceCategoryPanel.tsx
 * src/features/services/ServiceCategoryPanel.tsx
 *
 * Tone-aware category panel container used on /services.
 * Accepts:
 *  - tone: "pink" | "green" | "blue" | "orange" | "purple"
 *  - icon: LucideIcon
 *  - title: string
 *  - subtitle?: string
 *  - eyebrow?: string
 *  - rightSlot?: React.ReactNode (e.g. location pin or script note)
 *  - children: React.ReactNode
 */
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import { IconCircle } from "@/components/ui/IconCircle";

interface ServiceCategoryPanelProps {
  tone: Tone;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ServiceCategoryPanel({
  tone,
  icon: Icon,
  title,
  subtitle,
  eyebrow,
  rightSlot,
  children,
  className,
}: ServiceCategoryPanelProps) {
  const toneMap = TONE_MAP[tone];

  return (
    <div
      className={cn(
        "rounded-panel p-5 sm:p-7 md:p-8 border shadow-card transition-all duration-300",
        toneMap.panel,
        toneMap.border,
        className
      )}
    >
      {/* ── Category Header ───────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-black/5">
        <div className="flex items-center gap-3.5">
          <IconCircle tone={tone} size="md" className="shrink-0 shadow-soft">
            <Icon size={20} strokeWidth={2} />
          </IconCircle>
          <div>
            {eyebrow && (
              <span className="type-eyebrow text-terracotta text-micro tracking-widest block uppercase mb-0.5">
                {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted text-xs sm:text-sm mt-0.5 leading-snug">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {rightSlot && (
          <div className="shrink-0 self-start sm:self-center">
            {rightSlot}
          </div>
        )}
      </div>

      {/* ── Category Content ──────────────────────────────────────── */}
      <div>{children}</div>
    </div>
  );
}
