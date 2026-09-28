"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Wind,
  Flower2,
  ArrowRight,
  Sun,
  Smile,
  Compass,
} from "lucide-react";

interface MeetKinAndKayoProps {
  onBookTrial?: () => void;
}

const KIN_TIPS = [
  "Yoga isn't about touching your toes, it's about what you learn on the way down! 🌸",
  "Wobbling in tree pose? That's your nervous system growing stronger. Smile through it! ✨",
  "Drink a glass of warm water before morning practice to awaken your inner fire. 🍵",
  "Don't compare your Chapter 1 to someone else's Chapter 20. Your story is sacred. 💖",
];

const KAYO_TIPS = [
  "Inhale peace for 4 seconds, hold for 4 seconds, exhale calm for 4 seconds. 🧘‍♂️",
  "When thoughts race, gently bring your awareness to the rise and fall of your belly. 🌿",
  "Stillness is not the absence of energy — it is energy gathered in perfect harmony. 💙",
  "Drop your shoulders away from your ears right now. Feel that instant release. 🕊️",
];

export default function MeetKinAndKayoSection({ onBookTrial }: MeetKinAndKayoProps) {
  const [kinTipIndex, setKinTipIndex] = useState(0);
  const [kayoTipIndex, setKayoTipIndex] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"Inhale (Kin)" | "Hold" | "Exhale (Kayo)">("Inhale (Kin)");

  const nextKinTip = () => {
    setKinTipIndex((prev) => (prev + 1) % KIN_TIPS.length);
  };

  const nextKayoTip = () => {
    setKayoTipIndex((prev) => (prev + 1) % KAYO_TIPS.length);
  };

  const handleStartBreath = () => {
    if (isBreathing) {
      setIsBreathing(false);
      return;
    }
    setIsBreathing(true);
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 3;
      if (step === 0) setBreathPhase("Inhale (Kin)");
      else if (step === 1) setBreathPhase("Hold");
      else setBreathPhase("Exhale (Kayo)");
    }, 4000);

    // Stop after 24 seconds (2 full cycles)
    setTimeout(() => {
      clearInterval(interval);
      setIsBreathing(false);
    }, 24000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFF8FA] to-[#FAF7F2] relative overflow-hidden border-t border-[#EAE3D6]/70">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#FAD2E1] shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-brand-pink" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              The Soul of The Yoga Story
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
            Meet <span className="text-brand-pink italic">Kin & Kayo</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-navy/75 leading-relaxed">
            Yoga is not an intimidating ritual — it is a joyful story of coming home to yourself.
            Kin and Kayo are our studio mascots and mindful companions, walking alongside you every step of your journey.
          </p>
        </div>

        {/* 2 Main Character Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Kin (Joyful Seeker) */}
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-[#FAD2E1] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Soft pink corner gradient */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#FFF0F6] to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] border border-[#FAD2E1] flex items-center justify-center text-brand-pink shadow-sm">
                    <Flower2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-script text-2xl sm:text-3xl font-bold text-brand-pink leading-none">
                      Kin
                    </h3>
                    <span className="text-xs font-semibold text-brand-navy/70 tracking-wide uppercase">
                      The Joyful Seeker 🌸
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#FFF0F6] text-brand-pink text-xs font-bold border border-[#FAD2E1]">
                  Movement & Heart
                </span>
              </div>

              <p className="text-sm text-brand-navy/80 leading-relaxed mb-6">
                Kin brings playfulness, laughter, and courage to every posture. She believes that falling out of a balance is just an invitation to giggle and try again. Her energy sparks curiosity in beginners and rekindles passion in lifelong seekers.
              </p>

              {/* Character Attributes */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-cream-300/80">
                  <div className="flex items-center gap-1.5 text-brand-pink mb-1">
                    <Sun className="w-4 h-4" />
                    <span className="text-xs font-bold">Her Energy</span>
                  </div>
                  <p className="text-xs text-brand-navy/70">Curious, joyful, vibrant, kind</p>
                </div>
                <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-cream-300/80">
                  <div className="flex items-center gap-1.5 text-brand-pink mb-1">
                    <Smile className="w-4 h-4" />
                    <span className="text-xs font-bold">Favorite Asana</span>
                  </div>
                  <p className="text-xs text-brand-navy/70">Warrior II & Heart Openers</p>
                </div>
              </div>

              {/* Interactive Tip Bubble */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F9] to-white border border-[#FAD2E1] relative">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-brand-pink uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Kin&apos;s Mindful Whisper:
                  </span>
                  <button
                    onClick={nextKinTip}
                    className="text-[11px] text-brand-navy/60 hover:text-brand-pink font-semibold underline cursor-pointer"
                  >
                    Tap for new whisper
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={kinTipIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-brand-navy/85 italic leading-relaxed"
                  >
                    &ldquo;{KIN_TIPS[kinTipIndex]}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F5EFE6] flex items-center justify-between">
              <span className="font-script text-base text-brand-navy/65">
                Same Mat, Brighter Days ♡
              </span>
              <Heart className="w-4 h-4 text-brand-pink fill-brand-pink/30" />
            </div>
          </div>

          {/* Card 2: Kayo (Mindful Anchor) */}
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-[#BAE6FD] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Soft blue corner gradient */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#F0F9FF] to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shadow-sm">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-script text-2xl sm:text-3xl font-bold text-[#0284C7] leading-none">
                      Kayo
                    </h3>
                    <span className="text-xs font-semibold text-brand-navy/70 tracking-wide uppercase">
                      The Mindful Anchor 💙
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#F0F9FF] text-[#0284C7] text-xs font-bold border border-[#BAE6FD]">
                  Breath & Stillness
                </span>
              </div>

              <p className="text-sm text-brand-navy/80 leading-relaxed mb-6">
                Kayo is the gentle, steady anchor of our studio. With his tranquil presence and conscious breathwork, he teaches how to slow down the bustling mind, soften the tension in the chest, and ground deeply into the present moment.
              </p>

              {/* Character Attributes */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-cream-300/80">
                  <div className="flex items-center gap-1.5 text-[#0284C7] mb-1">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-bold">His Energy</span>
                  </div>
                  <p className="text-xs text-brand-navy/70">Calm, grounding, centered, patient</p>
                </div>
                <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-cream-300/80">
                  <div className="flex items-center gap-1.5 text-[#0284C7] mb-1">
                    <Wind className="w-4 h-4" />
                    <span className="text-xs font-bold">Favorite Asana</span>
                  </div>
                  <p className="text-xs text-brand-navy/70">Lotus (Padmasana) & Pranayama</p>
                </div>
              </div>

              {/* Interactive Tip Bubble */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F0F9FF] to-white border border-[#BAE6FD] relative">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Kayo&apos;s Mindful Whisper:
                  </span>
                  <button
                    onClick={nextKayoTip}
                    className="text-[11px] text-brand-navy/60 hover:text-[#0284C7] font-semibold underline cursor-pointer"
                  >
                    Tap for new whisper
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={kayoTipIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-brand-navy/85 italic leading-relaxed"
                  >
                    &ldquo;{KAYO_TIPS[kayoTipIndex]}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F5EFE6] flex items-center justify-between">
              <span className="font-script text-base text-brand-navy/65">
                More Breathe Belong ♡
              </span>
              <Heart className="w-4 h-4 text-[#0284C7] fill-[#0284C7]/30" />
            </div>
          </div>
        </div>

        {/* Interactive 3D Mindful Breath Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FFF5F9] via-white to-[#F0F9FF] border border-[#EAE3D6] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Animated Breath Ring */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-1000 ${
                isBreathing
                  ? "scale-110 bg-gradient-to-tr from-brand-pink to-[#0284C7] text-white shadow-lg shadow-pink-200"
                  : "bg-white border border-[#FAD2E1] text-brand-pink shadow-sm"
              }`}
            >
              <Wind className={`w-7 h-7 ${isBreathing ? "animate-spin" : ""}`} />
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-brand-navy">
                {isBreathing ? breathPhase : "Take a Mindful Breath with Kin & Kayo"}
              </h4>
              <p className="text-xs text-brand-navy/70 mt-0.5">
                {isBreathing
                  ? "Follow the rhythm — soften your jaw, relax your shoulders."
                  : "A quick 20-second grounding pause before you continue your day."}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleStartBreath}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-brand-navy/20 hover:border-brand-pink text-brand-navy hover:text-brand-pink transition-all shadow-sm"
            >
              {isBreathing ? "Stop Breath Break" : "Start 20s Breath Break"}
            </button>

            {onBookTrial && (
              <button
                onClick={onBookTrial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-pinkPill hover:shadow-pinkHover transition-all"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
