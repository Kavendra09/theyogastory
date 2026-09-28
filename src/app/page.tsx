"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MeetKinAndKayoSection from "@/components/MeetKinAndKayoSection";
import ProgramsSection from "@/components/ProgramsSection";
import InstructorsSection from "@/components/InstructorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import MascotCompanion from "@/components/MascotCompanion";

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
        {/* 2. Hero Section with Kin & Kayo 3D Showcase and CTAs */}
        <Hero onOpenBooking={() => scrollToBooking("Free Introductory Trial")} />

        {/* 3. Services / Offerings Section (4 offerings grid) */}
        <ServicesSection onSelectService={(title) => scrollToBooking(title)} />

        {/* 4. About & Philosophy Section (Story + Split layout + Core pillars) */}
        <AboutSection />

        {/* 5. Meet Kin & Kayo (The Soul & Mindful Companions of The Yoga Story) */}
        <MeetKinAndKayoSection onBookTrial={() => scrollToBooking("Free Introductory Trial")} />

        {/* 6. Programs Section (All 6 programs with interactive category tabs) */}
        <ProgramsSection onBookProgram={(title) => scrollToBooking(title)} />

        {/* 7. Instructors Section (Lead guides & credentials) */}
        <InstructorsSection />

        {/* 8. Testimonials Section (Interactive carousel with ratings) */}
        <TestimonialsSection />

        {/* 9. Booking & Appointment Section (Validated form + hours + studio info + WhatsApp) */}
        <BookingSection preselectedClass={selectedProgram} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Sticky Mobile Floating Booking Button */}
      <MobileFloatingCTA onBookClick={() => scrollToBooking("Free Introductory Trial")} />

      {/* 12. Kin & Kayo Interactive Mascot Companion (Floating mindful tips) */}
      <MascotCompanion />
    </div>
  );
}
