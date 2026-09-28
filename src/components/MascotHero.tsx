"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface MascotHeroProps {
  type: "home" | "career" | "testimonials";
  onActionClick?: () => void;
}

const KIN_QUOTES = {
  home: [
    "Welcome to your sacred space! ✨",
    "Breathe, smile, and begin your story! 🌸",
    "Yoga is for every body and every heart! 💖",
  ],
  testimonials: [
    "Real people. Real stories. Real inspiration! ❤️",
    "Every kind review fills our hearts with joy! 🌸",
    "We are so grateful you found peace with us! 💖",
  ],
  career: [
    "Kayo, kya yahan mere liye bhi koi job hai? ❤️",
    "We're looking for passionate souls to join us! 🌟",
    "Work where your heart and purpose align! 🌸",
  ],
};

const KAYO_QUOTES = {
  home: [
    "Every breath is a fresh start. Begin today! 💙",
    "Inhale calm, exhale the rush. You belong here. 🧘‍♂️",
    "Quiet the mind, and the soul will speak. 🌿",
  ],
  testimonials: [
    "Every review motivates us to keep spreading wellness! 💙",
    "Your journey inspires new seekers to begin theirs. 🙏",
    "Together, we build a calmer tomorrow! ✨",
  ],
  career: [
    "Pehle yoga karna seekho, Kin. 😄",
    "Grow, lead, and inspire our mindful community! 🌿",
    "Ancient wisdom meets modern heart. Welcome! 💙",
  ],
};

export default function MascotHero({ type, onActionClick }: MascotHeroProps) {
  const isCareer = type === "career";
  const isHome = type === "home";
  const isTestimonials = type === "testimonials";

  const [kinIndex, setKinIndex] = useState(0);
  const [kayoIndex, setKayoIndex] = useState(0);

  const kinQuotes = KIN_QUOTES[type] || KIN_QUOTES.home;
  const kayoQuotes = KAYO_QUOTES[type] || KAYO_QUOTES.home;

  const cycleKinQuote = () => {
    setKinIndex((prev) => (prev + 1) % kinQuotes.length);
  };

  const cycleKayoQuote = () => {
    setKayoIndex((prev) => (prev + 1) % kayoQuotes.length);
  };

  const imageSrc = isHome
    ? "/images/kin-kayo-home-hero.jpg"
    : "/images/kin-kayo-mascots.jpg";

  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* 3D Soft ambient colored glow behind container */}
      <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-r from-pink-200/40 via-amber-100/30 to-sky-200/40 blur-2xl opacity-70 pointer-events-none" />

      {/* Main Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FAF7F2] to-[#FAF7F2] border-2 border-[#F5D5E2] shadow-xl">
        {/* The 3D Pixar Kin & Kayo image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src={imageSrc}
            alt="Kin and Kayo - The Yoga Story 3D Mascots"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-cover object-center"
          />
          {/* Subtle soft gradient overlay at top for clean text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Speech Bubble: Kin (Girl on Left) */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onClick={cycleKinQuote}
          className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 cursor-pointer group"
          title="Click to hear another thought from Kin!"
        >
          <div className="relative bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-[#FAD2E1] max-w-[170px] sm:max-w-[210px] bubble-tail-bottom transition-all transform group-hover:scale-105 active:scale-95">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-script text-base sm:text-lg font-bold text-brand-pink leading-none">
                Kin
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={kinIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] sm:text-xs text-brand-navy font-medium leading-snug"
              >
                {kinQuotes[kinIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Speech Bubble: Kayo (Boy on Right) */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={cycleKayoQuote}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 cursor-pointer group"
          title="Click to hear another thought from Kayo!"
        >
          <div className="relative bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-[#BAE6FD] max-w-[170px] sm:max-w-[210px] bubble-tail-bottom-right transition-all transform group-hover:scale-105 active:scale-95">
            <div className="flex items-center justify-end gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <span className="font-script text-base sm:text-lg font-bold text-[#0284C7] leading-none">
                Kayo
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={kayoIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] sm:text-xs text-brand-navy font-medium leading-snug text-right"
              >
                {kayoQuotes[kayoIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Wooden Board Badge Overlay (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onClick={onActionClick}
          className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-gradient-to-r from-[#B45309] to-[#D97706] backdrop-blur-md text-white px-3.5 py-1.5 sm:py-2 rounded-xl shadow-lg border border-[#FDE68A]/60 flex items-center gap-1.5 ${
            onActionClick ? "cursor-pointer hover:scale-105 active:scale-95 transition-all" : ""
          }`}
        >
          <span className="font-script text-xs sm:text-sm font-semibold tracking-wide">
            {isHome
              ? "Peace, Joy & Yoga ♡"
              : isCareer
              ? "Same Mat, Brighter Days ♡"
              : "Thank You for being a part of our journey ♡"}
          </span>
        </motion.div>

        {/* Handwritten Annotation on Career only */}
        {isCareer && (
          <div className="hidden sm:flex absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-cream-300 text-[11px] font-script text-brand-navy/80 font-bold items-center gap-1 shadow-sm">
            <span>Grow · Learn · Belong</span>
            <Heart className="w-3 h-3 text-brand-pink fill-brand-pink/30" />
          </div>
        )}
      </div>

      {/* Decorative Handwritten Note floating below the card */}
      <div className="mt-2.5 flex items-center justify-end gap-1.5 text-right px-2">
        <span className="font-script text-lg sm:text-xl text-brand-navy/60">
          More Breathe Belong
        </span>
        <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink/20" />
      </div>
    </div>
  );
}
