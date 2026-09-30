"use client";
/**
 * SpeechBubble.tsx
 *
 * Real Speech Bubble Component:
 * - Script name above ("Kin" in pink, "Kayo" in blue, rotated -8deg)
 * - Rounded 28px
 * - White/90 background with backdrop-blur-sm
 * - Thin pink or blue border
 * - Tail pointing to the character
 * - Framer-motion floating animation (reduced-motion safe)
 */
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Tone } from "@/theme/tones";

export type BubbleTone = Extract<Tone, "pink" | "blue">;
export type TailDirection = "left" | "right";

export interface SpeechBubbleProps {
  name: string;
  tone?: BubbleTone;
  text?: string;
  lines?: string[];
  tail?: TailDirection;
  delay?: number;
  className?: string;
}

export function SpeechBubble({
  name,
  tone = "pink",
  text,
  lines,
  tail = "left",
  delay = 0,
  className,
}: SpeechBubbleProps) {
  const prefersReducedMotion = useReducedMotion();

  const isPink = tone === "pink";
  const displayLines = lines && lines.length > 0 ? lines : text ? [text] : [];

  const floatTransition: Transition = {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  };

  const animateY = prefersReducedMotion ? 0 : [0, -5, 0];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: animateY }}
      transition={prefersReducedMotion ? undefined : floatTransition}
      className={cn("relative inline-flex flex-col select-none", className)}
    >
      {/* ── Script Name Above (rotated -8deg) ────────────────────── */}
      <div className={cn("flex px-3 sm:px-4 mb-0.5", tail === "left" ? "justify-start" : "justify-end")}>
        <span
          className={cn(
            "font-[var(--font-script)] text-base sm:text-xl font-bold tracking-wide select-none drop-shadow-xs",
            isPink ? "text-primary" : "text-[#0077B6]"
          )}
          style={{ transform: "rotate(-8deg)" }}
        >
          {name}
        </span>
      </div>

      {/* ── Bubble Body: Rounded 28px, white/90, thin pink/blue border ── */}
      <div
        className={cn(
          "relative rounded-[20px] sm:rounded-[28px] px-3.5 py-2 sm:px-5 sm:py-3.5 shadow-soft",
          "bg-white/95 sm:bg-white/90 backdrop-blur-sm",
          isPink ? "border border-[#F7C5D5]" : "border border-[#BBE1FA]",
          "text-left min-w-[90px] sm:min-w-[130px] max-w-[170px] sm:max-w-[220px]"
        )}
      >
        <div className="space-y-0.5">
          {displayLines.map((line, i) => (
            <p key={i} className="text-[11px] sm:text-xs md:text-sm font-medium text-ink leading-tight sm:leading-snug">
              {line}
            </p>
          ))}
        </div>

        {/* ── Tail Pointing to Character ─────────────────────────── */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-[5px] sm:-bottom-[7px] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-white/95 sm:bg-white/90",
            "transform rotate-45 pointer-events-none",
            isPink
              ? "border-r border-b border-[#F7C5D5]"
              : "border-r border-b border-[#BBE1FA]",
            tail === "left" ? "left-4 sm:left-7" : "right-4 sm:right-7"
          )}
        />
      </div>
    </motion.div>
  );
}
