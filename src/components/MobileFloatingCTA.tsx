"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

interface MobileFloatingCTAProps {
  onBookClick?: () => void;
}

export default function MobileFloatingCTA({ onBookClick }: MobileFloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-4 right-4 z-40 sm:hidden flex justify-center pointer-events-none"
        >
          <button
            onClick={handleClick}
            id="mobile-sticky-book-btn"
            className="pointer-events-auto w-full max-w-sm inline-flex items-center justify-between bg-gradient-to-r from-brand-pink to-[#D81B60] active:from-[#D81B60] active:to-[#AD1457] text-white font-semibold px-6 py-4 rounded-full shadow-elevated border border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-serif font-bold tracking-wide">
                Book a Free Trial Class
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full font-sans font-bold">
              Reserve Mat →
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
