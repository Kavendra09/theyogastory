"use client";
/**
 * Button.tsx
 *
 * Variants: primary | outline | ghost | link
 * Sizes:    sm | md | lg
 * Optional: trailingIcon (ArrowRight default) | asChild-style href → <Link>
 *
 * Usage:
 *   <Button variant="primary" size="lg" href="/contact">Start Your Yoga Story</Button>
 *   <Button variant="outline" trailingIcon>Learn More</Button>
 *   <Button variant="ghost" size="sm" onClick={fn}>Cancel</Button>
 */

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

/* ── CVA variant definition ──────────────────────────────────────── */
const buttonVariants = cva(
  // base
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold font-[var(--font-body)]",
    "transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: [
          "btn-primary",      // gradient + pill + shadow from globals.css
          "text-white",
        ],
        outline: [
          "bg-white/90 text-primary",
          "border-2 border-primary",
          "rounded-pill",
          "hover:bg-primary hover:text-white",
          "transition-colors duration-200",
          "shadow-soft",
        ],
        ghost: [
          "bg-transparent text-primary",
          "rounded-pill",
          "hover:bg-primary-muted",
          "transition-colors duration-200",
        ],
        link: [
          "bg-transparent text-primary underline-offset-4",
          "hover:underline rounded-none",
          "p-0 h-auto",
        ],
      },
      size: {
        sm: "min-h-[44px] h-11 px-5  text-xs  gap-1.5",
        md: "min-h-[44px] h-11 px-7  text-sm  gap-2",
        lg: "min-h-[48px] h-13 px-9  text-base gap-2.5 min-w-[180px]",
      },
    },
    compoundVariants: [
      // link variant ignores size padding
      { variant: "link", size: "sm", class: "px-0 h-auto min-h-0" },
      { variant: "link", size: "md", class: "px-0 h-auto min-h-0" },
      { variant: "link", size: "lg", class: "px-0 h-auto min-h-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonBaseProps extends ButtonVariantProps {
  trailingIcon?: boolean | React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && Boolean((props as ButtonAsLink).href);
}

export function Button(props: ButtonProps) {
  const { variant, size, trailingIcon, className, children, ...rest } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  const icon =
    trailingIcon === true ? (
      <ArrowRight className="shrink-0" size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
    ) : trailingIcon ? (
      trailingIcon
    ) : null;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (isLinkProps(rest as ButtonProps)) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}

export { buttonVariants };
