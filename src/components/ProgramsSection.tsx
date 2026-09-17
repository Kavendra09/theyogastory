"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, BarChart, CheckCircle2, ArrowRight } from "lucide-react";
import { PROGRAMS_DATA, ProgramItem } from "@/lib/data";

interface ProgramsSectionProps {
  onBookProgram?: (programTitle: string) => void;
}

export default function ProgramsSection({ onBookProgram }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "flow", label: "Flow & Posture" },
    { id: "mind", label: "Stillness & Breath" },
    { id: "holistic", label: "Ayurveda & Lifestyle" },
  ];

  const filterPrograms = (item: ProgramItem) => {
    if (activeTab === "all") return true;
    if (activeTab === "flow") {
      return item.id === "hatha-vinyasa" || item.id === "prenatal-yoga";
    }
    if (activeTab === "mind") {
      return item.id === "meditation-mindfulness" || item.id === "stress-management";
    }
    if (activeTab === "holistic") {
      return item.id === "nutrition-coaching" || item.id === "ayurveda-guidance";
    }
    return true;
  };

  const visiblePrograms = PROGRAMS_DATA.filter(filterPrograms);

  const handleBooking = (title: string) => {
    if (onBookProgram) {
      onBookProgram(title);
    } else {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-sage-200">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Curated Pathways</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight mb-5">
            Transformative Wellness Programs
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Choose a dedicated pathway designed to dissolve chronic tension, awaken somatic stamina, and cultivate calm awareness.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-terracotta-500 text-cream-50 shadow-md shadow-terracotta-500/25 scale-105"
                    : "bg-cream-100 text-charcoal-800 hover:bg-cream-200/80 border border-earth-200/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visiblePrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-cream-100 rounded-3xl overflow-hidden border border-earth-200/80 shadow-soft hover:shadow-card hover:border-terracotta-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/20 to-transparent" />

                    <div className="absolute top-3 right-3 bg-cream-50/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-sage-800 flex items-center gap-1.5 shadow-sm">
                      <Clock className="w-3 h-3 text-terracotta-500" />
                      <span>{program.duration}</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-cream-200/90">
                        {program.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-cream-50 leading-tight">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <p className="text-sm text-charcoal-700 leading-relaxed mb-5">
                      {program.description}
                    </p>

                    {/* Metadata Badges */}
                    <div className="flex items-center gap-2 mb-5 text-xs text-charcoal-700">
                      <span className="inline-flex items-center gap-1 bg-cream-200/60 px-2.5 py-1 rounded-md font-medium">
                        <BarChart className="w-3 h-3 text-sage-600" />
                        {program.intensity}
                      </span>
                      <span className="inline-flex items-center bg-cream-200/60 px-2.5 py-1 rounded-md font-medium">
                        {program.level}
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="border-t border-earth-200/60 pt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-sage-800 block mb-2">
                        Core Benefits
                      </span>
                      <ul className="space-y-1.5 text-xs text-charcoal-700">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => handleBooking(program.title)}
                    id={`program-book-${program.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-terracotta-500 hover:to-terracotta-600 text-cream-50 font-semibold py-3 px-4 rounded-xl text-xs transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span>Reserve Program Spot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
