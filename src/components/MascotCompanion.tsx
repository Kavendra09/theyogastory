"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, X, MessageCircle, ArrowRight, RefreshCw } from "lucide-react";

const COMPANION_TIPS = [
  {
    author: "Kin",
    color: "text-brand-pink",
    border: "border-[#FAD2E1]",
    bg: "bg-[#FFF0F6]",
    text: "Remember to drink a glass of water and give yourself a big smile! 🌸",
  },
  {
    author: "Kayo",
    color: "text-[#0284C7]",
    border: "border-[#BAE6FD]",
    bg: "bg-[#F0F9FF]",
    text: "Drop your shoulders away from your ears. Take one deep belly breath. 🧘‍♂️",
  },
  {
    author: "Kin",
    color: "text-brand-pink",
    border: "border-[#FAD2E1]",
    bg: "bg-[#FFF0F6]",
    text: "Yoga is a practice, not a performance. Come as you are today! 💖",
  },
  {
    author: "Kayo",
    color: "text-[#0284C7]",
    border: "border-[#BAE6FD]",
    bg: "bg-[#F0F9FF]",
    text: "Stillness is where clarity begins. Take 10 quiet seconds for yourself. 🌿",
  },
];

export default function MascotCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const currentTip = COMPANION_TIPS[tipIndex];

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % COMPANION_TIPS.length);
  };

  const handleBook = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-80 rounded-3xl bg-white/95 backdrop-blur-md border border-[#FAD2E1] shadow-2xl p-5 relative overflow-hidden"
          >
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-pink via-amber-400 to-[#0284C7]" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F5EFE6]">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#FAD2E1] shrink-0">
                  <Image
                    src="/images/yoga-story-3d-logo.jpg"
                    alt="The Yoga Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-brand-navy leading-none">
                    Kin & Kayo Whisper
                  </h4>
                  <span className="text-[10px] text-brand-navy/60 font-medium">
                    Your Mindful Companions
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-cream-100 hover:bg-cream-200 flex items-center justify-center text-brand-navy/70 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Whisper Bubble */}
            <div className={`mt-3.5 p-3.5 rounded-2xl ${currentTip.bg} border ${currentTip.border}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`font-script text-base font-bold ${currentTip.color}`}>
                  {currentTip.author} says:
                </span>
                <button
                  onClick={handleNextTip}
                  className="flex items-center gap-1 text-[10px] font-semibold text-brand-navy/60 hover:text-brand-pink transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Next Whisper</span>
                </button>
              </div>
              <p className="text-xs text-brand-navy leading-relaxed font-medium">
                {currentTip.text}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-3 border-t border-[#F5EFE6] flex items-center justify-between gap-2">
              <span className="font-script text-xs text-brand-navy/60">
                More Breathe Belong ♡
              </span>
              <button
                onClick={handleBook}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transition-all"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Collapsed Pill Button */
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-[#FAD2E1] hover:border-brand-pink px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* 3D Logo Crest preview */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-amber-300 shadow-sm shrink-0">
              <Image
                src="/images/yoga-story-3d-logo.jpg"
                alt="Kin & Kayo Logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-serif text-xs font-bold text-brand-navy">
                  Kin & Kayo
                </span>
                <Sparkles className="w-3 h-3 text-brand-pink group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-[10px] text-brand-navy/60 font-medium">
                Mindful Whisper
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
