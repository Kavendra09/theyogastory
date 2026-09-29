/**
 * AccentText.tsx
 *
 * Renders a heading from an array of text parts.
 * Accent parts render in `--color-primary` (pink), optionally italic.
 *
 * Usage:
 *   <AccentText
 *     as="h1"
 *     className="type-display"
 *     parts={[
 *       { t: "Our " },
 *       { t: "Services", accent: true },
 *     ]}
 *   />
 *
 *   // Renders: Our <span class="text-primary italic">Services</span>
 */
import { cn } from "@/lib/utils";
import type { ElementType, ComponentPropsWithoutRef } from "react";

export interface AccentPart {
  /** Text content of this segment */
  t: string;
  /** If true, renders in primary pink */
  accent?: boolean;
  /** If true, renders italic (commonly paired with accent) */
  italic?: boolean;
}

type AccentTextProps<T extends ElementType = "span"> = {
  parts: AccentPart[];
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "parts" | "as" | "className">;

export function AccentText<T extends ElementType = "span">({ parts, as, className, ...rest }: AccentTextProps<T>) {
  const Tag = (as ?? "span") as ElementType;
  return (
    <Tag className={cn(className)} {...rest}>
      {parts.map((part, i) =>
        part.accent || part.italic ? (
          <span
            key={i}
            className={cn(
              part.accent && "text-primary",
              part.italic && "italic"
            )}
          >
            {part.t}
          </span>
        ) : (
          <span key={i}>{part.t}</span>
        )
      )}
    </Tag>
  );
}
