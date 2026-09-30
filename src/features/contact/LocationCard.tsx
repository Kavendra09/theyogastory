/**
 * LocationCard.tsx
 * src/features/contact/LocationCard.tsx
 *
 * Studio location card:
 *  - Pin icon in tone circle
 *  - Location name & optional subname (e.g. "Head Office")
 *  - Address lines
 *  - "View on Google Maps" button
 *  - Gurgaon pink tone, Dehradun blue tone
 */
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TONE_MAP } from "@/theme/tones";
import { IconCircle } from "@/components/ui/IconCircle";
import { Button } from "@/components/ui/Button";
import type { StudioLocation } from "@/data/contact";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";

interface LocationCardProps {
  location: StudioLocation;
  className?: string;
}

export function LocationCard({ location, className }: LocationCardProps) {
  const toneMap = TONE_MAP[location.tone];

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5 transition-all duration-300",
        "border shadow-card hover:shadow-glass hover:-translate-y-1 bg-white/95",
        location.tone === "blue" ? "border-sky-200/80 bg-sky-50/20" : "border-rose-200/80 bg-rose-50/20",
        className
      )}
    >
      <div>
        {/* Top: Pin Icon & Name */}
        <div className="flex items-start gap-3.5 mb-4">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-soft",
              location.tone === "blue" ? "bg-sky-500 text-white" : "bg-primary text-white"
            )}
          >
            <MapPin size={20} className="fill-white" />
          </div>

          <div>
            <h3 className="font-heading font-bold text-navy text-lg sm:text-xl leading-tight">
              {location.name}
            </h3>
            {location.subname && (
              <span className="text-xs font-semibold text-navy/70 block mt-0.5">
                {location.subname}
              </span>
            )}
          </div>
        </div>

        {/* Address Lines with Pin outline */}
        <div className="flex items-start gap-2.5 text-body text-xs sm:text-sm leading-relaxed mb-4">
          <span className="text-navy/50 shrink-0 mt-0.5" aria-hidden="true">
            <MapPin size={16} />
          </span>
          <div>
            {location.addressLines.map((line, i) => (
              <p key={i} className="mb-0.5">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Link matching mockup */}
      <div className="pt-2 border-t border-border-light/60">
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-all"
        >
          <span className="text-primary text-sm font-normal">🗺️</span>
          <span>View on Google Maps →</span>
        </a>
      </div>
    </div>
  );
}
