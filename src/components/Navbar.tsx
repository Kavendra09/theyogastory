"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About Us", href: "/#about", isRoute: false },
    { name: "Services", href: "/#services", isRoute: false },
    { name: "Our Team", href: "/#instructors", isRoute: false },
    { name: "Testimonials", href: "/testimonials", isRoute: true },
    { name: "Career", href: "/career", isRoute: true },
    { name: "Contact", href: "/#booking", isRoute: false },
  ];

  const isActive = (item: typeof navLinks[0]) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href === "/career" && pathname === "/career") return true;
    if (item.href === "/testimonials" && pathname === "/testimonials") return true;
    return false;
  };

  const handleCtaClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      if (pathname === "/") {
        const el = document.getElementById("booking");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#booking";
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8E1D5]"
            : "bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Subtitle */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* 3D Sacred Lotus & Mountain Crest Badge */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shrink-0">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white">
                <Image
                  src="/images/yoga-story-3d-logo.jpg"
                  alt="The Yoga Story 3D Logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-brand-navy leading-none">
                THE YOGA STORY
              </span>
              <span className="font-serif italic text-[11px] sm:text-xs text-brand-navy/70 tracking-wide mt-1">
                Ancient Whispers, Modern Echoes
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    active
                      ? "text-brand-pink font-semibold"
                      : "text-brand-navy/80 hover:text-brand-pink"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-brand-pink rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Pill Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E6007A] via-[#E11D74] to-[#D81B60] hover:from-[#D81B60] hover:to-[#C2185B] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-pinkPill hover:shadow-pinkHover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Start Your Yoga Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleCtaClick}
              className="text-xs font-semibold px-3 py-1.5 bg-brand-pink text-white rounded-full shadow-sm"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-cream-200/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-navy/50 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-cream-50 z-50 shadow-2xl flex flex-col justify-between p-6 border-l border-cream-300 lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-cream-300">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-amber-500 shadow-sm shrink-0">
                      <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-white">
                        <Image
                          src="/images/yoga-story-3d-logo.jpg"
                          alt="The Yoga Story Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base font-bold text-brand-navy leading-tight">
                        THE YOGA STORY
                      </span>
                      <span className="font-serif italic text-[10px] text-brand-navy/70">
                        Ancient Whispers, Modern Echoes
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-cream-200 text-brand-navy"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5 mt-6">
                  {navLinks.map((link) => {
                    const active = isActive(link);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 text-base rounded-xl transition-all ${
                          active
                            ? "bg-brand-pink/10 text-brand-pink font-semibold"
                            : "text-brand-navy hover:bg-cream-200/60 font-medium"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-cream-300 flex flex-col gap-3">
                <button
                  onClick={handleCtaClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pinkHover text-white font-semibold py-3 px-6 rounded-full shadow-pinkPill text-sm transition-all"
                >
                  <span>Start Your Yoga Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
