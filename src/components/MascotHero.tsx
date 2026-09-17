"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface MascotHeroProps {
  type: "career" | "testimonials";
}

export default function MascotHero({ type }: MascotHeroProps) {
  const isCareer = type === "career";

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
      {/* Container with rounded border, subtle shadow and warm glow */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FAF7F2] to-[#FAF7F2] border border-[#F5D5E2]/80 shadow-md">
        {/* The 3D Pixar Kin & Kayo image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src="/images/kin-kayo-mascots.jpg"
            alt="Kin and Kayo - The Yoga Story Mascots"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle soft gradient overlay at top for clean text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Speech Bubble: Kin (Girl) */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20"
        >
          <div className="relative bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-lg border border-[#FAD2E1] max-w-[190px] sm:max-w-[220px] bubble-tail-bottom">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-script text-base sm:text-lg font-bold text-brand-pink leading-none">
                Kin
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            </div>
            <p className="text-[11px] sm:text-xs text-brand-navy font-medium leading-snug">
              {isCareer
                ? "Kayo, kya yahan mere liye bhi koi job hai? ❤️"
                : "Real people. Real stories. Real inspiration! ❤️"}
            </p>
          </div>
        </motion.div>

        {/* Speech Bubble: Kayo (Boy) */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
        >
          <div className="relative bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-lg border border-[#BAE6FD] max-w-[190px] sm:max-w-[220px] bubble-tail-bottom-right">
            <div className="flex items-center justify-end gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <span className="font-script text-base sm:text-lg font-bold text-[#0284C7] leading-none">
                Kayo
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-brand-navy font-medium leading-snug text-right">
              {isCareer
                ? "Pehle yoga karna seekho, Kin. 😄"
                : "Every review motivates us to keep spreading wellness! 💙"}
            </p>
          </div>
        </motion.div>

        {/* Wooden Board Badge Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-[#D97706]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl shadow-md border border-[#FDE68A]/60 flex items-center gap-1.5"
        >
          <span className="font-script text-xs sm:text-sm font-semibold tracking-wide">
            {isCareer ? "Same Mat, Brighter Days ♡" : "Thank You for being a part of our journey ♡"}
          </span>
        </motion.div>

        {/* Handwritten "Grow Learn Belong" annotation on career */}
        {isCareer && (
          <div className="hidden sm:flex absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-cream-300 text-[11px] font-script text-brand-navy/80 font-bold items-center gap-1 shadow-sm">
            <span>Grow · Learn · Belong</span>
            <Heart className="w-3 h-3 text-brand-pink fill-brand-pink/30" />
          </div>
        )}
      </div>

      {/* Decorative Handwritten Note floating below the card */}
      <div className="mt-2 flex items-center justify-end gap-1.5 text-right px-2">
        <span className="font-script text-lg sm:text-xl text-brand-navy/60">
          More Breathe Belong
        </span>
        <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink/20" />
      </div>
    </div>
  );
}
