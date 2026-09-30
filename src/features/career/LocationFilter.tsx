"use client";
/**
 * LocationFilter.tsx
 * src/features/career/LocationFilter.tsx
 *
 * Client filter dropdown / pills for selecting location:
 * "All Locations" / "Gurgaon" / "Dehradun"
 */
import { cn } from "@/lib/utils";
import { MapPin, ChevronDown } from "lucide-react";

interface LocationFilterProps {
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
  className?: string;
}

const LOCATIONS = ["All Locations", "Gurgaon", "Dehradun"];

export function LocationFilter({
  selectedLocation,
  onLocationChange,
  className,
}: LocationFilterProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {/* Desktop & Tablet: Segmented Buttons */}
      <div className="hidden sm:inline-flex items-center p-1 rounded-full bg-white border border-border-light shadow-soft">
        {LOCATIONS.map((loc) => {
          const active = selectedLocation === loc;
          return (
            <button
              key={loc}
              type="button"
              onClick={() => onLocationChange(loc)}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200",
                active
                  ? "bg-primary text-white shadow-soft"
                  : "text-navy/70 hover:text-navy hover:bg-primary-muted/60"
              )}
            >
              {loc}
            </button>
          );
        })}
      </div>

      {/* Mobile: Native styled select */}
      <div className="relative sm:hidden w-full">
        <div className="flex items-center justify-between w-full min-h-[44px] h-12 px-4 rounded-xl bg-white border border-border-light shadow-soft text-sm font-semibold text-navy">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange(e.target.value)}
              className="appearance-none bg-transparent pr-8 font-semibold text-navy focus:outline-none cursor-pointer w-full"
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <ChevronDown size={16} className="text-muted pointer-events-none -ml-5" />
        </div>
      </div>
    </div>
  );
}
