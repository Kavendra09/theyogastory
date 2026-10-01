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
    <div className={cn("flex flex-col gap-1.5 mb-2 text-center xl:text-left", className)}>
      {/* Tablet & Mobile: Centered heading with decorative leaves */}
      <div className="xl:hidden flex flex-col items-center gap-1">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3">
          <span className="text-emerald-600 text-lg">🌿</span>
          <span className="text-emerald-700/30 text-sm hidden sm:inline">──────</span>
          <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
            Our Locations
          </h2>
          <span className="text-emerald-700/30 text-sm hidden sm:inline">──────</span>
          <span className="text-emerald-600 text-lg scale-x-[-1]">🌿</span>
        </div>
        <p className="text-muted text-xs sm:text-sm">
          Visit our centres and be a part of our growing community.
        </p>
      </div>

      {/* Desktop: Inline heading with subtitle */}
      <div className="hidden xl:flex flex-wrap items-center gap-2.5">
        <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
          Our Locations
        </h2>
        <span className="text-emerald-600 text-lg">🌿</span>
        <span className="text-navy/20 font-light mx-1">──</span>
        <span className="text-muted text-xs sm:text-sm font-normal">
          Two centres. One vision — Healthier People, Happier Tomorrows.
        </span>
      </div>
    </div>
  );
}
