"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Award, GraduationCap } from "lucide-react";
import { INSTRUCTORS_DATA } from "@/lib/data";

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-terracotta-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Facilitators</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight mb-5">
            Guided by Compassionate, Lineage-Trained Teachers
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Our certified guides combine decades of personal sadhana, medical anatomy knowledge, and deep somatic intuition to hold safe space for your transformation.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS_DATA.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-cream-50 rounded-3xl overflow-hidden border border-earth-200/80 shadow-soft hover:shadow-card hover:border-sage-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />

                  {/* Experience Badge */}
                  <span className="absolute bottom-3 left-3 bg-cream-50/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-sage-800 shadow-sm">
                    {teacher.experience}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-[11px] font-semibold text-terracotta-600 uppercase tracking-wider block mb-1">
                    {teacher.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2 group-hover:text-sage-700 transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-sage-700 mb-3">
                    <Award className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                    <span>{teacher.specialty}</span>
                  </div>
                  <p className="text-xs text-charcoal-700 leading-relaxed mb-5">
                    {teacher.bio}
                  </p>

                  {/* Certifications Tags */}
                  <div className="border-t border-earth-200/60 pt-4 flex flex-wrap gap-1.5">
                    {teacher.certifications.map((cert, cIndex) => (
                      <span
                        key={cIndex}
                        className="inline-flex items-center gap-1 bg-cream-200/70 text-charcoal-700 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        <GraduationCap className="w-2.5 h-2.5 text-sage-600" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
