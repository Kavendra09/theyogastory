/**
 * LocationsHeading.tsx
 * src/features/contact/LocationsHeading.tsx
 *
 * Section heading for locations section with handwritten ScriptNote decoration.
 */
import { cn } from "@/lib/utils";

interface LocationsHeadingProps {
  className?: string;
}

export function LocationsHeading({ className }: LocationsHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 mb-2", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-tight">
          Our Locations
        </h2>
        <span className="text-emerald-600 text-lg">🌿</span>
        <span className="hidden sm:inline text-navy/20 font-light mx-1">──</span>
        <span className="hidden sm:inline text-muted text-xs sm:text-sm font-normal">
          Two centres. One vision — Healthier People, Happier Tomorrows.
        </span>
      </div>
      <p className="sm:hidden text-muted text-xs">
        Visit our centres and be a part of our growing community.
      </p>
    </div>
  );
}
