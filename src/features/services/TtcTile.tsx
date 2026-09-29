/**
 * TtcTile.tsx
 * src/features/services/TtcTile.tsx
 *
 * Teacher Training Course tier tile:
 *  - hours: e.g. "200 Hours", "300 Hours", "500 Hours"
 *  - price: e.g. "₹54,999", "₹84,999", "₹1,20,999"
 *  - description?: e.g. "Foundation Course • Certification"
 *  - popular?: boolean (highlights "Most Popular")
 *  - tone: Tone styling (default "purple")
 */
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import { Award, Sparkles } from "lucide-react";

interface TtcTileProps {
  hours: string;
  price: string;
  description?: string;
  popular?: boolean;
  tone?: Tone;
  className?: string;
}

export function TtcTile({
  hours,
  price,
  description,
  popular = false,
  tone = "purple",
  className,
}: TtcTileProps) {
  const toneMap = TONE_MAP[tone];

  return (
    <div
      className={cn(
        "relative rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-3 transition-all duration-300",
        "bg-white/90 border shadow-soft hover:shadow-card hover:-translate-y-0.5",
        popular
          ? "border-tone-purple-border ring-2 ring-primary/20 bg-gradient-to-br from-white to-tone-purple-bg"
          : "border-border-light",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-2.5 right-4 z-10 px-2.5 py-0.5 rounded-full text-micro font-bold uppercase tracking-wider bg-primary text-white shadow-soft flex items-center gap-1">
          <Sparkles size={10} />
          Most Popular
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", toneMap.iconCircle)}>
            <Award size={16} strokeWidth={2} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-ink text-base sm:text-lg leading-tight">
              {hours}
            </h4>
            {description && (
              <p className="text-muted text-xs mt-0.5 leading-snug">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex items-baseline justify-between">
        <span className="text-2xs font-semibold text-muted uppercase tracking-wider">
          Tuition Fee
        </span>
        <span className="font-heading text-lg sm:text-xl font-extrabold text-ink">
          {price}
        </span>
      </div>
    </div>
  );
}
