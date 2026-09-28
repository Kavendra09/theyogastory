"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const EASEL_LINES: Record<string, string[]> = {
  home: ["Peace, Joy", "& Yoga ♡"],
  testimonials: ["Thank You", "for being a", "part of our", "journey ♡"],
  career: ["Same Mat,", "Brighter", "Days ♡"],
};

export default function MascotHero({ type, onActionClick }: MascotHeroProps) {
  const [kinIndex, setKinIndex] = useState(0);
  const [kayoIndex, setKayoIndex] = useState(0);

  const kinQuotes = KIN_QUOTES[type] || KIN_QUOTES.home;
  const kayoQuotes = KAYO_QUOTES[type] || KAYO_QUOTES.home;
  const easelLines = EASEL_LINES[type] || EASEL_LINES.home;

  const cycleKinQuote = () => setKinIndex((prev) => (prev + 1) % kinQuotes.length);
  const cycleKayoQuote = () => setKayoIndex((prev) => (prev + 1) % kayoQuotes.length);

  return (
    <div className="relative w-full max-w-[680px] mx-auto">
      {/* Soft ambient glow behind the card */}
      <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-r from-pink-200/40 via-amber-100/30 to-sky-200/40 blur-2xl opacity-70 pointer-events-none" />

      {/* Main Image Panel — unified 16/9 layout */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[#E8E1D5]/60 bg-white">

        {/* Master HD Kin & Kayo — same image across all page types */}
        <Image
          src="/images/kin-kayo-testimonials-master-hd.jpg"
          alt="Kin and Kayo – The Yoga Story Mascots"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 680px"
          className="object-cover object-center"
        />

        {/* Speech Bubble: Kin (Girl — Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onClick={cycleKinQuote}
          className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 cursor-pointer group"
          title="Click to hear another thought from Kin!"
        >
          <div className="relative bg-white/95 hover:bg-white backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-[#FAD2E1] max-w-[150px] sm:max-w-[185px] bubble-tail-bottom transition-all transform group-hover:scale-105 active:scale-95 select-none">
            <div className="font-script text-lg sm:text-xl font-bold text-brand-pink leading-none mb-0.5">
              Kin
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={kinIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] sm:text-xs text-brand-navy font-semibold leading-tight"
              >
                {kinQuotes[kinIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Speech Bubble: Kayo (Boy — Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={cycleKayoQuote}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 cursor-pointer group"
          title="Click to hear another thought from Kayo!"
        >
          <div className="relative bg-white/95 hover:bg-white backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-[#BAE6FD] max-w-[150px] sm:max-w-[185px] bubble-tail-bottom-right transition-all transform group-hover:scale-105 active:scale-95 select-none">
            <div className="font-script text-lg sm:text-xl font-bold text-[#0284C7] leading-none mb-0.5 text-right">
              Kayo
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={kayoIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] sm:text-xs text-brand-navy font-semibold leading-tight text-right"
              >
                {kayoQuotes[kayoIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Easel Board — Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onClick={onActionClick}
          className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-[80px] sm:w-[105px] text-center select-none rotate-[2deg] ${
            onActionClick ? "cursor-pointer hover:scale-105 active:scale-95 transition-all" : ""
          }`}
        >
          <p className="font-script text-[11px] sm:text-[13px] font-bold text-[#422006] leading-[1.2]">
            {easelLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < easelLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        {/* More Breathe Belong — Bottom Left */}
        <div className="hidden sm:block absolute bottom-3 left-4 z-20 text-left select-none opacity-80">
          <p className="font-script text-sm sm:text-[15px] font-bold text-brand-navy/70 leading-tight">
            More<br />
            Breathe<br />
            Belong
          </p>
          <span className="font-script text-sm text-brand-pink font-bold block leading-none">
            ♡
          </span>
        </div>

      </div>
    </div>
  );
}
