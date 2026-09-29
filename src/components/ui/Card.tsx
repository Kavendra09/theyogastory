/**
 * Card.tsx  &  Panel.tsx
 *
 * Card  — white surface, 16px radius, shadow, optional tone accent border.
 *         Hover lifts slightly (pass hover=true, default true).
 * Panel — larger 24px radius, tinted bg from tone, no hover lift by default.
 *         Use for full-width coloured section blocks.
 *
 * Usage:
 *   <Card tone="green" padding="lg">...</Card>
 *   <Panel tone="pink" className="mt-12">...</Panel>
 */
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import { cva, type VariantProps } from "class-variance-authority";

/* ── Card ──────────────────────────────────────────────────────── */
const cardVariants = cva(
  ["card", "transition-all duration-200"],
  {
    variants: {
      padding: {
        none: "",
        sm:   "p-4",
        md:   "p-6",
        lg:   "p-8",
        xl:   "p-10",
      },
      hover: {
        true:  "hover:-translate-y-1 cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      padding: "md",
      hover: true,
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const TONE_BORDER_LEFT: Record<Tone, string> = {
  pink:   "border-l-4 border-l-tone-pink-fg",
  green:  "border-l-4 border-l-tone-green-fg",
  blue:   "border-l-4 border-l-tone-blue-fg",
  yellow: "border-l-4 border-l-tone-yellow-fg",
  purple: "border-l-4 border-l-tone-purple-fg",
  orange: "border-l-4 border-l-tone-orange-fg",
};

export function Card({
  tone,
  padding,
  hover,
  children,
  className,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        cardVariants({ padding, hover }),
        tone && TONE_BORDER_LEFT[tone],
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ── Panel ─────────────────────────────────────────────────────── */
const panelVariants = cva(["panel"], {
  variants: {
    padding: {
      none: "",
      sm:   "p-5 md:p-6",
      md:   "p-6 md:p-8",
      lg:   "p-8 md:p-10 lg:p-12",
      xl:   "p-10 md:p-14 lg:p-16",
    },
  },
  defaultVariants: {
    padding: "lg",
  },
});

interface PanelProps extends VariantProps<typeof panelVariants> {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Panel({
  tone,
  padding,
  children,
  className,
  as: Tag = "div",
}: PanelProps) {
  const toneClass = tone ? TONE_MAP[tone].panel : "";

  return (
    <Tag
      className={cn(
        panelVariants({ padding }),
        toneClass,
        className
      )}
    >
      {children}
    </Tag>
  );
}
