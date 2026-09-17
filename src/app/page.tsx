"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import InstructorsSection from "@/components/InstructorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<string>("Hatha & Vinyasa Yoga");

  const scrollToBooking = (preselected?: string) => {
    if (preselected) {
      setSelectedProgram(preselected);
      // Also update select input value if exists
      const selectEl = document.getElementById("booking-class") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = preselected;
      }
    }
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col text-charcoal-900 selection:bg-terracotta-200 selection:text-terracotta-900 relative">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={() => scrollToBooking("Free Introductory Trial")} />

      <main className="flex-grow">
        {/* 2. Hero Section with rotating headline and CTAs */}
        <Hero onOpenBooking={() => scrollToBooking("Free Introductory Trial")} />

        {/* 3. Services / Offerings Section (4 offerings grid) */}
        <ServicesSection onSelectService={(title) => scrollToBooking(title)} />

        {/* 4. About & Philosophy Section (Story + Split layout + Core pillars) */}
        <AboutSection />

        {/* 5. Programs Section (All 6 programs with interactive category tabs) */}
        <ProgramsSection onBookProgram={(title) => scrollToBooking(title)} />

        {/* 6. Instructors Section (Lead guides & credentials) */}
        <InstructorsSection />

        {/* 7. Testimonials Section (Interactive carousel with ratings) */}
        <TestimonialsSection />

        {/* 8. Booking & Appointment Section (Validated form + hours + studio info + WhatsApp) */}
        <BookingSection preselectedClass={selectedProgram} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Sticky Mobile Floating Booking Button */}
      <MobileFloatingCTA onBookClick={() => scrollToBooking("Free Introductory Trial")} />
    </div>
  );
}
