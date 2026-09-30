/**
 * ServiceCard.tsx
 * src/features/services/ServiceCard.tsx
 *
 * Compact service card used in Studio Classes (7 cards row on desktop, 4+3 on mobile):
 *  - Background / top image
 *  - IconCircle with tone color
 *  - Service name
 *  - Price ("₹3,000 / month" or "Consult for Details")
 */
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Tone } from "@/theme/tones";
import { IconCircle } from "@/components/ui/IconCircle";

interface ServiceCardProps {
  image?: string;
  icon: LucideIcon;
  tone?: Tone;
  name: string;
  price: string;
  period?: string;
  isConsult?: boolean;
  className?: string;
}

export function ServiceCard({
  image,
  icon: Icon,
  tone = "pink",
  name,
  price,
  period,
  isConsult = false,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white/95",
        "border border-border-light shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300",
        "p-2.5 sm:p-3 text-left",
        className
      )}
    >
      <div>
        {/* Top Image */}
        {image && (
          <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden mb-2.5 bg-cream-100">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 180px, 220px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Icon & Name Row */}
        <div className="flex items-start gap-2 mb-2">
          <IconCircle tone={tone} size="sm" className="shrink-0 mt-0.5 shadow-soft">
            <Icon size={13} strokeWidth={2} />
          </IconCircle>

          <h3 className="font-heading font-bold text-navy text-xs sm:text-xs leading-snug line-clamp-2 min-h-[2.4em]">
            {name}
          </h3>
        </div>
      </div>

      {/* Price tag */}
      <div className="mt-1 pt-2 border-t border-border-light/60 flex items-baseline gap-1">
        {isConsult ? (
          <div className="flex flex-col">
            <span className="text-2xs text-muted font-medium">{price}</span>
            <span className="font-heading font-bold text-navy text-xs sm:text-sm">
              {period}
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="font-heading font-extrabold text-navy text-sm sm:text-base">
              {price}
            </span>
            {period && (
              <span className="text-2xs text-muted font-medium">
                {period}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
