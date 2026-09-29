/**
 * SectionHeading.tsx
 *
 * Composes: optional eyebrow label + AccentText title + optional subtitle.
 * Two layout variants:
 *   "centered-with-leaves"  — centered, lotus + leaf sprigs flanking title
 *   "left-with-line"        — left-aligned, green line separator under eyebrow
 *
 * Usage:
 *   <SectionHeading
 *     variant="centered-with-leaves"
 *     eyebrow="Real People · Real Experiences"
 *     titleParts={[{ t: "What Our " }, { t: "Community Says", accent: true }]}
 *     subtitle="Real stories. Real people. Real impact."
 *   />
 */
import { cn } from "@/lib/utils";
import { AccentText, type AccentPart } from "./AccentText";
import { LeafSprig, LotusIcon } from "./Atoms";

type SectionHeadingVariant = "centered-with-leaves" | "left-with-line";

interface SectionHeadingProps {
  id?: string;
  variant?: SectionHeadingVariant;
  eyebrow?: string;
  titleParts: AccentPart[];
  subtitle?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  variant = "centered-with-leaves",
  eyebrow,
  titleParts,
  subtitle,
  className,
}: SectionHeadingProps) {
  const isCentered = variant === "centered-with-leaves";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <p className={cn("type-eyebrow", !isCentered && "mb-1")}>
          {eyebrow}
        </p>
      )}

      {/* Left-with-line: thin green separator */}
      {variant === "left-with-line" && (
        <div className="w-10 h-0.5 bg-tone-green-fg rounded-full" aria-hidden="true" />
      )}

      {/* Title row */}
      <div
        className={cn(
          "flex items-center",
          isCentered ? "gap-3 flex-wrap justify-center" : "gap-2"
        )}
      >
        {isCentered && (
          <span className="hidden sm:flex items-center gap-2" aria-hidden="true">
            <LeafSprig mirrored className="w-8 h-8 opacity-70" />
            <LotusIcon className="w-6 h-6 text-tone-green-fg" />
          </span>
        )}

        <AccentText
          as="h2"
          id={id}
          className="type-h2"
          parts={titleParts}
        />

        {isCentered && (
          <span className="hidden sm:flex items-center gap-2" aria-hidden="true">
            <LotusIcon className="w-6 h-6 text-tone-green-fg" />
            <LeafSprig className="w-8 h-8 opacity-70" />
          </span>
        )}
      </div>

      {/* Centered variant: thin green lines flanking lotus */}
      {isCentered && (
        <div className="flex items-center gap-3 w-full max-w-xs mx-auto" aria-hidden="true">
          <div className="flex-1 h-px bg-tone-green-fg opacity-40" />
          <LotusIcon className="w-5 h-5 text-tone-green-fg opacity-60" />
          <div className="flex-1 h-px bg-tone-green-fg opacity-40" />
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "type-body text-muted",
            isCentered ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
