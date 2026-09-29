/**
 * LocationsHeading.tsx
 * src/features/contact/LocationsHeading.tsx
 *
 * Section heading for locations section with handwritten ScriptNote decoration.
 */
import { cn } from "@/lib/utils";
import { ScriptNote } from "@/components/ui/Atoms";
import { CONTACT_PAGE_DATA } from "@/data/contact";

interface LocationsHeadingProps {
  className?: string;
}

export function LocationsHeading({ className }: LocationsHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-tight">
          {CONTACT_PAGE_DATA.locationsHeading}
        </h2>
      </div>

      <div className="pt-0.5">
        <ScriptNote rotate={-2} heart className="text-base sm:text-lg text-primary font-medium">
          {CONTACT_PAGE_DATA.locationsScriptNote.replace("♡", "").trim()}
        </ScriptNote>
      </div>
    </div>
  );
}
