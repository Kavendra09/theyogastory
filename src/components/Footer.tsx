"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-[#EAE3D6] py-10 relative overflow-hidden">
      {/* Botanical decorative leaves background elements */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-15 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" fill="none" className="text-brand-green">
          <path
            d="M20,90 Q40,30 80,10 Q60,60 20,90 Z"
            fill="currentColor"
          />
          <path
            d="M30,80 Q55,45 85,35 Q65,65 30,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-15 pointer-events-none -rotate-12 scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" className="text-brand-green">
          <path
            d="M20,90 Q40,30 80,10 Q60,60 20,90 Z"
            fill="currentColor"
          />
          <path
            d="M30,80 Q55,45 85,35 Q65,65 30,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner with 3D Logo & Kin & Kayo Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-8 mb-8 border-b border-[#EAE3D6]/70">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-md group-hover:scale-105 transition-all duration-300 shrink-0">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white">
                <Image
                  src="/images/yoga-story-3d-logo.jpg"
                  alt="The Yoga Story 3D Logo"
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-brand-navy leading-none">
                THE YOGA STORY
              </span>
              <span className="font-serif italic text-xs text-brand-navy/70 tracking-wide mt-1">
                Ancient Whispers, Modern Echoes
              </span>
            </div>
          </Link>

          {/* Kin & Kayo Whisper Message */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 border border-[#FAD2E1] px-4 py-2 rounded-full shadow-sm">
            <span className="font-script text-base text-brand-pink font-bold">Kin & Kayo:</span>
            <span className="text-xs text-brand-navy/80 font-medium">
              Every breath is a fresh beginning. See you on the mat! ✨
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: People · Practice · Purpose */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-navy/80">
              People &nbsp;·&nbsp; Practice &nbsp;·&nbsp; Purpose
            </span>
            <span className="text-xs text-brand-navy/60 font-medium mt-1">
              A Brighter Tomorrow
            </span>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white border border-[#E5DEC7] flex items-center justify-center text-brand-navy/80 hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white border border-[#E5DEC7] flex items-center justify-center text-brand-navy/80 hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all shadow-sm"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white border border-[#E5DEC7] flex items-center justify-center text-brand-navy/80 hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all shadow-sm"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white border border-[#E5DEC7] flex items-center justify-center text-brand-navy/80 hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right: More Breathe Belong ♡ */}
          <div className="flex items-center gap-1.5 text-center md:text-right">
            <span className="font-script text-2xl text-brand-navy/85 font-bold tracking-wide">
              More Breathe Belong
            </span>
            <Heart className="w-4 h-4 text-brand-pink fill-brand-pink/20 stroke-[2.5]" />
          </div>
        </div>

        {/* Subtle copyright & navigation */}
        <div className="mt-8 pt-6 border-t border-[#EAE3D6]/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-navy/50 gap-3">
          <p>© {new Date().getFullYear()} The Yoga Story. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-brand-pink transition-colors">
              Home
            </Link>
            <Link href="/career" className="hover:text-brand-pink transition-colors">
              Career
            </Link>
            <Link href="/testimonials" className="hover:text-brand-pink transition-colors">
              Testimonials
            </Link>
            <a href="/#booking" className="hover:text-brand-pink transition-colors">
              Contact & Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
