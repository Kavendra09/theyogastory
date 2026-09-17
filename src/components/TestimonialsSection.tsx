"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="organic-shape-1 w-[500px] h-[500px] -top-20 -left-20 bg-sage-200/25" />
      <div className="organic-shape-2 w-[450px] h-[450px] -bottom-20 -right-20 bg-terracotta-200/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-sage-200">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Voices of Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight mb-5">
            Loved by Seekers, Healers & Everyday Practitioners
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Read how mindful movement and intentional breath have shifted the lives, postures, and nervous systems of our community members.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative mb-16">
          <div className="relative bg-cream-100 rounded-3xl p-8 sm:p-12 border border-earth-200/80 shadow-elevated overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-terracotta-200/40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-warmgold text-warmgold drop-shadow-sm"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-sage-800 bg-sage-100 px-2.5 py-0.5 rounded-full">
                    Verified Member
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal-900 italic font-medium leading-snug mb-8">
                  &ldquo;{activeItem.quote}&rdquo;
                </blockquote>

                {/* User Profile */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-earth-200/70">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-terracotta-300">
                      <Image
                        src={activeItem.avatar}
                        alt={activeItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-charcoal-900 leading-tight">
                        {activeItem.name}
                      </h4>
                      <p className="text-xs text-charcoal-700">
                        {activeItem.role} • {activeItem.location}
                      </p>
                      <span className="inline-block text-[11px] font-medium text-terracotta-600 mt-0.5">
                        Practices: {activeItem.classAttended}
                      </span>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 rounded-full bg-cream-50 hover:bg-terracotta-500 hover:text-cream-50 text-charcoal-800 border border-earth-200 flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-11 h-11 rounded-full bg-cream-50 hover:bg-terracotta-500 hover:text-cream-50 text-charcoal-800 border border-earth-200 flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-terracotta-500"
                    : "w-2.5 bg-earth-200 hover:bg-earth-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Small Grid of Additional Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={`card-${item.id}`}
              className="bg-cream-100/70 p-6 rounded-2xl border border-earth-200/60 shadow-soft"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warmgold text-warmgold" />
                ))}
              </div>
              <p className="text-xs text-charcoal-700 leading-relaxed italic mb-4">
                &ldquo;{item.quote.slice(0, 110)}...&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">{item.name}</div>
                  <div className="text-[10px] text-charcoal-700">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
