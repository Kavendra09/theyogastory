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
        "rounded-panel p-6 sm:p-7 flex flex-col justify-between gap-5 transition-all duration-300",
        "border shadow-card hover:shadow-glass hover:-translate-y-1",
        toneMap.panel,
        toneMap.border,
        className
      )}
    >
      <div>
        {/* Top: Pin Icon & Name */}
        <div className="flex items-start gap-3.5 mb-3.5">
          <IconCircle tone={location.tone} size="md" className="shrink-0 mt-0.5 shadow-soft">
            <MapPin size={20} strokeWidth={2} />
          </IconCircle>

          <div>
            <h3 className="font-heading font-bold text-navy text-lg sm:text-xl leading-tight">
              {location.name}
            </h3>
            {location.subname && (
              <span className="text-xs font-semibold text-primary block mt-0.5">
                {location.subname}
              </span>
            )}
          </div>
        </div>

        {/* Address Lines */}
        <div className="text-body text-xs sm:text-sm leading-relaxed mb-4 pl-1">
          {location.addressLines.map((line, i) => (
            <p key={i} className="mb-0.5">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Button link */}
      <div className="pt-2">
        <Button
          variant="outline"
          size="sm"
          href={location.mapsUrl}
          target="_blank"
          className="w-full sm:w-auto font-semibold gap-1.5 hover:border-primary hover:text-primary transition-all shadow-soft"
        >
          <span>{location.linkLabel}</span>
          <ExternalLink size={13} className="opacity-80" />
        </Button>
      </div>
    </div>
  );
}
