"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Leaf, Shield, Award } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <Leaf className="w-5 h-5 text-sage-600" />,
      title: "Breath as the Living Teacher",
      desc: "Every posture serves your respiratory rhythm, never forcing the body into contortion, but inviting organic release.",
    },
    {
      icon: <Shield className="w-5 h-5 text-terracotta-500" />,
      title: "Intimate Cohorts (Max 14)",
      desc: "Never get lost in an overcrowded studio. Our instructors personally see, honor, and adjust your alignment every class.",
    },
    {
      icon: <Heart className="w-5 h-5 text-sage-600" />,
      title: "Somatic Trauma-Informed Space",
      desc: "An atmosphere steeped in gentle consent, natural cedar aromatherapy, and nervous system down-regulation.",
    },
    {
      icon: <Award className="w-5 h-5 text-terracotta-500" />,
      title: "Lineage with Modern Anatomy",
      desc: "Honoring classical Himalayan and Ashtanga roots while employing modern biomechanics and physical therapy protocols.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Background Organic Blobs */}
      <div className="organic-shape-1 w-96 h-96 top-10 right-0 bg-sage-200/20" />
      <div className="organic-shape-2 w-96 h-96 -bottom-10 left-0 bg-terracotta-200/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-cream-50 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
                  alt="A meditator finding stillness at The Yoga Story studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-cream-50/95 backdrop-blur-md p-6 rounded-2xl shadow-elevated border border-earth-200/80 max-w-xs">
                <div className="flex items-center gap-2 mb-2 text-terracotta-600">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Our Core Motto
                  </span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-charcoal-900 leading-snug">
                  &ldquo;Yoga is not about touching your toes. It is about what you learn on the way down.&rdquo;
                </p>
                <span className="block mt-2 text-xs font-semibold text-sage-700">
                  — The Yoga Story Foundation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Philosophy & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-sage-200 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Philosophy & Lineage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-950 tracking-tight leading-tight mb-6">
              Where Ancient Lineage Meets Mindful Modern Healing
            </h2>

            <div className="space-y-4 text-base text-charcoal-700 leading-relaxed mb-8">
              <p>
                <strong>The Yoga Story</strong> was born from a singular realization: true wellness isn&apos;t a performance or an extreme workout. It is an intentional return to somatic wholeness — an unhurried dialog between your breath, your fascia, and your peace of mind.
              </p>
              <p>
                Founded in the tranquil canopy of Bengaluru, our earthen studio provides a sensory pause from sirens, screens, and ceaseless busyness. With sustainable cork mats, living indoor plants, and natural acoustic insulation, our space invites your nervous system to exhale deeply the moment you step through our threshold.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-earth-200/80">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cream-50 border border-earth-200 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-charcoal-700 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
