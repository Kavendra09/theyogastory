"use client";
/**
 * Chip.tsx  /  FilterChip.tsx  /  Badge.tsx
 *
 * Chip       — static tinted tag (read-only)
 * FilterChip — interactive toggle chip for filter bars (active state)
 * Badge      — small inline badge (count, status)
 *
 * Usage:
 *   <Chip tone="green">Kids Yoga</Chip>
 *
 *   <FilterChip active={filter === "5star"} onClick={() => setFilter("5star")}>
 *     ⭐ 5 Stars
 *   </FilterChip>
 *
 *   <Badge count={100} />
 *   <Badge variant="verified">Verified on Google</Badge>
 */
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import type { ButtonHTMLAttributes } from "react";

/* ── Chip ────────────────────────────────────────────────────── */
interface ChipProps {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
export function Chip({ tone = "pink", children, className, icon }: ChipProps) {
  const toneClass = TONE_MAP[tone].chip;
  return (
    <span className={cn("chip", toneClass, className)}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

/* ── FilterChip ──────────────────────────────────────────────── */
interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export function FilterChip({
  active = false,
  icon,
  children,
  className,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "chip inline-flex items-center gap-1.5 border transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
        "min-h-[44px] py-2 px-4 text-xs font-semibold rounded-pill",
        active
          ? "bg-primary text-white border-primary shadow-pill"
          : "bg-white text-body border-border-soft hover:border-primary hover:text-primary"
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

/* ── Badge ───────────────────────────────────────────────────── */
interface BadgeCountProps {
  count: number;
  className?: string;
}
interface BadgeVariantProps {
  variant: "verified" | "google" | "trusted";
  children?: React.ReactNode;
  className?: string;
}
type BadgeProps = BadgeCountProps | BadgeVariantProps;

const badgeVariantClasses = {
  verified: "bg-tone-green-bg text-tone-green-fg border-tone-green-border",
  google:   "bg-white text-body border-border-soft",
  trusted:  "bg-tone-pink-bg text-primary border-tone-pink-border",
};

export function Badge(props: BadgeProps) {
  if ("count" in props) {
    return (
      <span
        className={cn(
          "chip bg-primary-muted text-primary border border-tone-pink-border",
          props.className
        )}
      >
        {props.count}+
      </span>
    );
  }
  const { variant, children, className } = props as BadgeVariantProps;
  return (
    <span className={cn("chip border", badgeVariantClasses[variant], className)}>
      {children}
    </span>
  );
}
