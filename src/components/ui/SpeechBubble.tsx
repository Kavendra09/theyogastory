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
      <div className={cn("flex px-4 mb-0.5", tail === "left" ? "justify-start" : "justify-end")}>
        <span
          className={cn(
            "font-[var(--font-script)] text-xl font-bold tracking-wide select-none drop-shadow-xs",
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
          "relative rounded-[28px] px-5 py-3.5 shadow-soft",
          "bg-white/90 backdrop-blur-sm",
          isPink ? "border border-[#F7C5D5]" : "border border-[#BBE1FA]",
          "text-left min-w-[130px] max-w-[220px]"
        )}
      >
        <div className="space-y-0.5">
          {displayLines.map((line, i) => (
            <p key={i} className="text-xs sm:text-sm font-medium text-ink leading-snug">
              {line}
            </p>
          ))}
        </div>

        {/* ── Tail Pointing to Character ─────────────────────────── */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-[7px] w-3.5 h-3.5 bg-white/90",
            "transform rotate-45 pointer-events-none",
            isPink
              ? "border-r border-b border-[#F7C5D5]"
              : "border-r border-b border-[#BBE1FA]",
            tail === "left" ? "left-7" : "right-7"
          )}
        />
      </div>
    </motion.div>
  );
}
