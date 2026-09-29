"use client";
/**
 * WatchStoryCard.tsx
 * src/components/sections/WatchStoryCard.tsx
 *
 * Glass card with a pulsing play button, eyebrow, heading, subtext.
 * Opens the studio YouTube link on click.
 *
 * Desktop: appears inline after the hero icon strip.
 * Mobile: full-width with right chevron arrow.
 *
 * Usage:
 *   <WatchStoryCard
 *     eyebrow="WATCH"
 *     heading="Watch Our Story"
 *     subtext="More than yoga, it's a way of life."
 *     href="https://youtube.com/@theyogastory"
 *   />
 */
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface WatchStoryCardProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  href?: string;
  className?: string;
}

export function WatchStoryCard({
  eyebrow,
  heading,
  subtext,
  href = "#",
  className,
}: WatchStoryCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass rounded-card flex items-center gap-4 px-5 py-4",
        "cursor-pointer select-none group",
        "hover:shadow-glass transition-all duration-300",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
        // Mobile: full-width row
        "w-full",
        // Desktop: auto-width
        "lg:w-auto lg:min-w-[260px]",
        className
      )}
      aria-label={`${heading} — opens YouTube`}
    >
      {/* Pulsing play button */}
      <div className="relative shrink-0">
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-primary/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-pill group-hover:bg-primary-hover transition-colors">
          <Play size={18} fill="white" className="text-white ml-0.5" />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        {eyebrow && (
          <p className="type-eyebrow text-terracotta mb-0.5">{eyebrow}</p>
        )}
        <p className="font-heading font-semibold text-ink text-sm leading-snug line-clamp-1">
          {heading}
        </p>
        {subtext && (
          <p className="text-xs text-muted mt-0.5 leading-snug line-clamp-1">{subtext}</p>
        )}
      </div>
    </motion.a>
  );
}
