/**
 * Container.tsx
 * Max-width 1440px wrapper with responsive horizontal padding.
 * Usage:  <Container>...</Container>
 *         <Container as="section" size="sm">...</Container>
 */
import { cn } from "@/lib/utils";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const sizeClasses: Record<ContainerSize, string> = {
  sm:   "max-w-3xl",   // 768px  — narrow prose
  md:   "max-w-5xl",   // 1024px — standard sections
  lg:   "max-w-6xl",   // 1152px — wide grid
  xl:   "max-w-[1440px]", // full design frame
  full: "max-w-none",
};

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
}

export function Container({
  size = "xl",
  className,
  as: Tag = "div",
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
