"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Building2, Home as HomeIcon, Monitor, Briefcase, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/data";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "studio":
        return <Building2 className="w-6 h-6 text-terracotta-500" />;
      case "home":
        return <HomeIcon className="w-6 h-6 text-sage-600" />;
      case "virtual":
        return <Monitor className="w-6 h-6 text-terracotta-500" />;
      case "corporate":
        return <Briefcase className="w-6 h-6 text-sage-600" />;
    }
  };

  const handleAction = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-terracotta-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sage-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-terracotta-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ways to Practice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight mb-5">
            Holistic Offerings for Every Chapter of Your Journey
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Whether you seek the shared resonance of our boutique studio, private guidance in your home, virtual clarity, or corporate rejuvenation — our sanctuary meets you where you are.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-cream-100/90 rounded-3xl p-6 border border-earth-200/80 shadow-soft hover:shadow-card hover:border-sage-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Preview */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-cream-50/95 backdrop-blur-md flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-cream-100 tracking-wide uppercase bg-charcoal-900/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {service.tagline}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2.5 group-hover:text-terracotta-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6 text-xs text-charcoal-700">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleAction(service.title)}
                id={`service-book-${service.id}`}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-cream-200/60 hover:bg-terracotta-500 hover:text-cream-50 text-charcoal-800 font-semibold text-xs transition-all duration-200 group/btn"
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 text-terracotta-600 group-hover/btn:text-cream-50 group-hover/btn:translate-x-1 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
