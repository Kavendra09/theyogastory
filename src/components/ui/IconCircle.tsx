/**
 * IconCircle.tsx
 *
 * Circular tinted icon container — reads colour from the tone map.
 *
 * Usage:
 *   <IconCircle tone="green" size="md"><Home size={20} /></IconCircle>
 *   <IconCircle tone="blue" size="lg" icon={<Phone />} />
 */
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";

type IconCircleSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<IconCircleSize, string> = {
  xs: "w-7  h-7  [&>svg]:w-3.5 [&>svg]:h-3.5",
  sm: "w-9  h-9  [&>svg]:w-4   [&>svg]:h-4",
  md: "w-11 h-11 [&>svg]:w-5   [&>svg]:h-5",
  lg: "w-14 h-14 [&>svg]:w-6   [&>svg]:h-6",
  xl: "w-16 h-16 [&>svg]:w-7   [&>svg]:h-7",
};

interface IconCircleProps {
  tone?: Tone;
  size?: IconCircleSize;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function IconCircle({
  tone = "pink",
  size = "md",
  icon,
  children,
  className,
}: IconCircleProps) {
  const toneClass = TONE_MAP[tone].iconCircle;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0 rounded-full",
        toneClass,
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {icon ?? children}
    </span>
  );
}
