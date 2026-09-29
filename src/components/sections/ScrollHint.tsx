"use client";
/**
 * ScrollHint.tsx
 * src/components/sections/ScrollHint.tsx
 *
 * Animated mouse-icon + "SCROLL TO EXPLORE" label.
 * Centered below the hero. Auto-hides after the user scrolls 120px.
 * Reduced-motion safe.
 *
 * Usage:
 *   <ScrollHint />
 *   <ScrollHint label="SCROLL TO EXPLORE" className="mt-4" />
 */
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollHintProps {
  label?: string;
  className?: string;
  hideAfter?: number; // px scrolled before hiding, default 120
}

export function ScrollHint({
  label = "SCROLL TO EXPLORE",
  className,
  hideAfter = 120,
}: ScrollHintProps) {
  const [visible, setVisible]         = useState(true);
  const prefersReducedMotion          = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < hideAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-hint"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className={cn(
            "flex flex-col items-center gap-2 pointer-events-none select-none",
            className
          )}
          aria-hidden="true"
        >
          {/* Mouse icon */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 rounded-full border-2 border-muted/50 flex items-start justify-center pt-1.5"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-muted/60"
            />
          </motion.div>

          {/* Label */}
          <p className="type-eyebrow text-muted/70">{label}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
