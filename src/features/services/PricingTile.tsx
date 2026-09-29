/**
 * PricingTile.tsx
 * src/features/services/PricingTile.tsx
 *
 * Prominent pricing banner/tile used inside service category panels:
 *  - prefix: e.g. "Starting from"
 *  - amount: e.g. "₹9,000" or "₹2,000"
 *  - period?: e.g. "/ month" or "per session"
 *  - details?: e.g. "(3 days a week)"
 *  - tone: Tone styling
 */
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";

interface PricingTileProps {
  prefix?: string;
  amount: string;
  period?: string;
  details?: string;
  tone?: Tone;
  className?: string;
}

export function PricingTile({
  prefix,
  amount,
  period,
  details,
  tone = "green",
  className,
}: PricingTileProps) {
  const toneMap = TONE_MAP[tone];

  return (
    <div
      className={cn(
        "rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
        "bg-white/90 border shadow-soft",
        toneMap.border,
        className
      )}
    >
      <div className="flex flex-col">
        {prefix && (
          <span className="text-xs uppercase tracking-wider font-semibold text-muted">
            {prefix}
          </span>
        )}
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            {amount}
          </span>
          {period && (
            <span className="text-sm font-medium text-muted">
              {period}
            </span>
          )}
        </div>
      </div>

      {details && (
        <span
          className={cn(
            "self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold",
            toneMap.chip
          )}
        >
          {details}
        </span>
      )}
    </div>
  );
}
