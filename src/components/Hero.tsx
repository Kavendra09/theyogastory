"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart, Users } from "lucide-react";
import MascotHero from "@/components/MascotHero";

interface HeroProps {
  onOpenBooking?: () => void;
}

const ROTATING_HEADLINES = [
  "Find Your Balance.",
  "Breathe. Move. Transform.",
  "Return to Your Center.",
  "Awaken Sacred Stillness.",
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % ROTATING_HEADLINES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExplore = () => {
    const el = document.getElementById("programs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-cream-100"
    >
      {/* Ambient Organic Shapes Decoration */}
      <div
        className="organic-shape-1 w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] -top-24 -left-24 bg-terracotta-300/20"
        aria-hidden="true"
      />
      <div
        className="organic-shape-2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] -bottom-20 -right-20 bg-sage-300/25"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-warmgold/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-800 border border-sage-300/60 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-terracotta-500" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Welcome to Bengaluru&apos;s Mindful Sanctuary
              </span>
            </div>

            {/* Main Heading with Rotating Dynamic Phrase */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-brand-navy tracking-tight leading-[1.15] mb-6">
              A Sacred Space to{" "}
              <span className="block text-brand-pink min-h-[2.4em] sm:min-h-[1.25em] mt-1 sm:mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block italic font-normal"
                  >
                    {ROTATING_HEADLINES[headlineIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-navy/75 max-w-2xl font-normal leading-relaxed mb-8">
              Step off the frantic pace of modern life into an earthen oasis of
              Vinyasa, grounding Yin, restorative sound journeys, and mindful
              living. Tailored for both raw beginners and devoted seekers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={handleBooking}
                id="hero-book-trial-btn"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] hover:to-[#AD1457] text-white font-semibold px-8 py-4 rounded-full shadow-pinkPill hover:shadow-pinkHover hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                <span>Book a Free Trial Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleExplore}
                id="hero-explore-classes-btn"
                className="inline-flex items-center justify-center gap-2 bg-cream-50/80 hover:bg-cream-50 text-charcoal-800 border border-earth-200/90 font-semibold px-7 py-4 rounded-full shadow-sm hover:border-sage-400 hover:text-sage-800 transition-all duration-200 text-base"
              >
                <Compass className="w-5 h-5 text-sage-600" />
                <span>Explore Classes</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-earth-200/70 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  14+
                </div>
                <div className="text-xs sm:text-sm text-charcoal-700 font-medium">
                  Practitioner Cap / Class
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  4.9★
                </div>
                <div className="text-xs sm:text-sm text-charcoal-700 font-medium">
                  500+ Sanctuary Reviews
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-charcoal-700 font-medium">
                  Natural Earthen Props
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Kin & Kayo 3D Mascot Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <MascotHero type="home" onActionClick={handleBooking} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
