/**
 * Rating.tsx  &  CheckItem.tsx
 *
 * Rating    — renders N filled/empty star SVGs.
 *             Optional numeric label. Accessible via aria-label.
 * CheckItem — green check-circle icon + text. Used in service lists.
 *
 * Usage:
 *   <Rating value={5} />
 *   <Rating value={4.9} label="4.9/5" showLabel />
 *
 *   <CheckItem>General Fitness Yoga</CheckItem>
 *   <CheckItem tone="blue">Kids Yoga</CheckItem>
 */
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { Tone } from "@/theme/tones";

/* ── Rating ──────────────────────────────────────────────────── */
interface RatingProps {
  value: number;       // 0–5, supports .5
  max?: number;
  label?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const starSizes = { sm: "w-3.5 h-3.5", md: "w-5 h-5", lg: "w-6 h-6" };

export function Rating({
  value,
  max = 5,
  label,
  showLabel = false,
  size = "md",
  className,
}: RatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={label ?? `${value} out of ${max} stars`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const fill = i < Math.floor(value) ? "full" : i < value ? "half" : "empty";
          return (
            <StarIcon key={i} fill={fill} className={starSizes[size]} />
          );
        })}
      </div>
      {showLabel && label && (
        <span className="text-sm font-semibold text-ink ml-1">{label}</span>
      )}
    </div>
  );
}

function StarIcon({ fill, className }: { fill: "full" | "half" | "empty"; className?: string }) {
  if (fill === "empty") {
    return (
      <svg viewBox="0 0 20 20" className={cn("text-gray-200", className)} aria-hidden="true">
        <path
          d="M10 1.5l2.59 5.24 5.78.84-4.19 4.08.99 5.76L10 14.77l-5.17 2.65.99-5.76L1.63 7.58l5.78-.84L10 1.5z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (fill === "half") {
    return (
      <svg viewBox="0 0 20 20" className={cn("text-yellow-400", className)} aria-hidden="true">
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="var(--color-border-light)" />
          </linearGradient>
        </defs>
        <path
          d="M10 1.5l2.59 5.24 5.78.84-4.19 4.08.99 5.76L10 14.77l-5.17 2.65.99-5.76L1.63 7.58l5.78-.84L10 1.5z"
          fill="url(#half-star)"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" className={cn("text-yellow-400", className)} aria-hidden="true">
      <path
        d="M10 1.5l2.59 5.24 5.78.84-4.19 4.08.99 5.76L10 14.77l-5.17 2.65.99-5.76L1.63 7.58l5.78-.84L10 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── CheckItem ───────────────────────────────────────────────── */
const checkToneClasses: Partial<Record<Tone, string>> = {
  green:  "bg-tone-green-bg text-tone-green-fg",
  pink:   "bg-tone-pink-bg text-tone-pink-fg",
  blue:   "bg-tone-blue-bg text-tone-blue-fg",
  purple: "bg-tone-purple-bg text-tone-purple-fg",
};

interface CheckItemProps {
  children: React.ReactNode;
  tone?: Extract<Tone, "green" | "pink" | "blue" | "purple">;
  className?: string;
  textClassName?: string;
}
export function CheckItem({
  children,
  tone = "green",
  className,
  textClassName,
}: CheckItemProps) {
  const circleClass = checkToneClasses[tone] ?? checkToneClasses.green!;
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full",
          circleClass
        )}
      >
        <Check size={13} strokeWidth={2.5} />
      </span>
      <span className={cn("type-body text-ink leading-snug", textClassName)}>
        {children}
      </span>
    </div>
  );
}
