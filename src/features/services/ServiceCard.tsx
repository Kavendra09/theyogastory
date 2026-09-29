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
        "group relative flex flex-col justify-between rounded-card overflow-hidden bg-white/95",
        "border border-border-light shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300",
        "p-3.5 sm:p-4 text-center sm:text-left",
        className
      )}
    >
      <div>
        {/* Optional Image thumbnail with floating icon */}
        {image && (
          <div className="relative w-full h-20 sm:h-24 rounded-lg overflow-hidden mb-3 bg-cream-100">
            <Image
              src={image}
              alt={name}
              fill
              sizes="180px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 left-2 z-10">
              <IconCircle tone={tone} size="sm" className="shadow-soft ring-2 ring-white/90">
                <Icon size={14} strokeWidth={2} />
              </IconCircle>
            </div>
          </div>
        )}

        {!image && (
          <div className="mb-2.5">
            <IconCircle tone={tone} size="sm">
              <Icon size={16} strokeWidth={2} />
            </IconCircle>
          </div>
        )}

        {/* Name */}
        <h3 className="font-heading font-semibold text-ink text-xs sm:text-sm leading-snug line-clamp-2 min-h-[2.4em]">
          {name}
        </h3>
      </div>

      {/* Price tag */}
      <div className="mt-3 pt-2.5 border-t border-border-light/70 flex flex-col items-center sm:items-start">
        <span className="font-heading font-bold text-ink text-sm sm:text-base leading-none">
          {price}
        </span>
        {period && (
          <span className="text-micro text-muted block mt-1 font-normal">
            {period}
          </span>
        )}
      </div>
    </div>
  );
}
