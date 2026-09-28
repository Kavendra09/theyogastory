"use client";

import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

interface PreFooterBannerProps {
  type: "career" | "testimonials";
  onActionClick?: () => void;
}

export default function PreFooterBanner({ type, onActionClick }: PreFooterBannerProps) {
  if (type === "testimonials") {
    return (
      <section className="relative w-full py-4 sm:py-6 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#FFF0F6] via-[#FFF5F9] to-[#FFF0F6] border border-[#FAD2E1] py-8 px-6 sm:px-12 shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Background Organic Wave Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,40 C150,80 350,10 500,45 C650,80 850,20 1000,50 C1100,70 1180,30 1200,40 L1200,120 L0,120 Z"
                  fill="#FCE7F3"
                  fillOpacity="0.4"
                />
              </svg>
            </div>

            {/* Left Corner Foliage & Handwritten Text */}
            <div className="flex items-center gap-4 z-10 select-none">
              <div className="hidden lg:block w-16 h-28 relative shrink-0 opacity-80">
                <svg viewBox="0 0 80 140" fill="none" className="w-full h-full text-[#4E7B5C]">
                  <path d="M10 130 Q30 70 70 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M30 90 C15 75 25 55 45 70 C30 85 25 80 30 90 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M50 55 C35 40 45 20 65 35 C50 50 45 45 50 55 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M20 110 C5 95 15 75 35 90 C20 105 15 100 20 110 Z" fill="currentColor" fillOpacity="0.85" />
                </svg>
              </div>

              <div className="flex flex-col items-center -rotate-6">
                <span className="font-script text-2xl sm:text-3xl text-brand-navy font-bold leading-none">
                  Same Mat
                </span>
                <span className="font-script text-2xl sm:text-3xl text-brand-navy font-bold leading-none mt-1">
                  Brighter Days
                </span>
                <span className="font-script text-2xl text-brand-navy font-bold mt-1">
                  ♡
                </span>
              </div>
            </div>

            {/* Center Content: Heading, Subhead, CTA Button */}
            <div className="flex-1 flex flex-col items-center text-center z-10">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-navy tracking-tight leading-tight">
                Be A Part of Our <span className="text-brand-pink font-serif">Story</span>
              </h3>
              <p className="text-xs sm:text-sm text-brand-navy/75 font-medium mt-1 mb-4">
                Have a story to share? We&apos;d love to hear from you!
              </p>

              <button
                onClick={onActionClick}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-pink via-[#E11D74] to-[#D81B60] hover:from-[#D81B60] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-pinkPill hover:shadow-pinkHover hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                    />
                  </svg>
                </div>
                <span>Write a Review on Google</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>

            {/* Right Side Brand Crest & Foliage */}
            <div className="flex items-center gap-4 z-10 select-none">
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                {/* Stylized Lotus Outline Icon */}
                <svg viewBox="0 0 40 32" fill="none" className="w-9 h-7 text-brand-pink mb-1">
                  <path
                    d="M20 2C17.5 8 13.5 14 7 18C13 18 17.5 14 20 2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 2C22.5 8 26.5 14 33 18C27 18 22.5 14 20 2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 6C18.5 12 16 18 11 22C16 22 18.5 18 20 6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 6C21.5 12 24 18 29 22C24 22 21.5 18 20 6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 22C12 23.5 20 25.5 28 25.5C34 25.5 37 22 37 22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-serif text-sm font-bold text-brand-navy tracking-tight">
                  THE YOGA STORY
                </span>
                <span className="font-serif italic text-[10px] text-brand-navy/60">
                  Ancient Whispers, Modern Echoes
                </span>
              </div>

              <div className="hidden lg:block w-16 h-28 relative shrink-0 opacity-80 scale-x-[-1]">
                <svg viewBox="0 0 80 140" fill="none" className="w-full h-full text-[#4E7B5C]">
                  <path d="M10 130 Q30 70 70 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M30 90 C15 75 25 55 45 70 C30 85 25 80 30 90 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M50 55 C35 40 45 20 65 35 C50 50 45 45 50 55 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M20 110 C5 95 15 75 35 90 C20 105 15 100 20 110 Z" fill="currentColor" fillOpacity="0.85" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }


  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2] to-[#FFF0F6]/60 overflow-hidden">
      {/* Decorative leafy branch left */}
      <div className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-25">
        <svg viewBox="0 0 160 200" fill="none" className="h-full text-brand-green">
          <path
            d="M-20,180 Q40,120 70,60 Q100,10 130,-20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M35,120 C50,110 60,95 45,85 C30,75 25,95 35,120 Z"
            fill="currentColor"
          />
          <path
            d="M65,75 C80,65 90,50 75,40 C60,30 55,50 65,75 Z"
            fill="currentColor"
          />
          <path
            d="M20,150 C35,140 45,125 30,115 C15,105 10,125 20,150 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Decorative leafy branch right */}
      <div className="absolute top-0 right-0 w-48 h-full pointer-events-none opacity-25 scale-x-[-1]">
        <svg viewBox="0 0 160 200" fill="none" className="h-full text-brand-green">
          <path
            d="M-20,180 Q40,120 70,60 Q100,10 130,-20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M35,120 C50,110 60,95 45,85 C30,75 25,95 35,120 Z"
            fill="currentColor"
          />
          <path
            d="M65,75 C80,65 90,50 75,40 C60,30 55,50 65,75 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FFF5F9] via-[#FAF7F2] to-[#FFF5F9] border border-[#FAD2E1]/70 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Handwritten Annotation on Left */}
          <div className="hidden md:flex flex-col items-start -rotate-6 select-none shrink-0 w-40">
            <span className="font-script text-2xl text-brand-navy/70 leading-tight">
              People\nPractice\nPurpose
            </span>
            <Heart className="w-4 h-4 text-brand-pink fill-brand-pink/20 stroke-[2] mt-1 ml-4" />
          </div>

          {/* Center Title & Subtitle / CTA */}
          <div className="flex-1 text-center max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight">
              Let&apos;s Create A Healthier Tomorrow,{" "}
              <span className="text-brand-pink italic">Together.</span>
            </h3>
            <p className="text-sm sm:text-base text-brand-navy/70 mt-2 font-normal">
              Join a team that believes in mindfulness, growth and positive change.
            </p>
          </div>

          {/* Right: The Yoga Story 3D Logo */}
          <div className="shrink-0 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-md mb-2">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white">
                <Image
                  src="/images/yoga-story-3d-logo.jpg"
                  alt="The Yoga Story 3D Logo"
                  fill
                  sizes="56px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <span className="font-serif text-sm font-bold text-brand-navy tracking-tight">
              THE YOGA STORY
            </span>
            <span className="font-serif italic text-[10px] text-brand-navy/60">
              Ancient Whispers, Modern Echoes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
