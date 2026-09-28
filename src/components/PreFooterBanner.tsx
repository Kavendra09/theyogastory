"use client";

import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

interface PreFooterBannerProps {
  type: "career" | "testimonials";
  onActionClick?: () => void;
}

export default function PreFooterBanner({ type, onActionClick }: PreFooterBannerProps) {
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
              {type === "career" ? "People\nPractice\nPurpose" : "Same Mat\nBrighter Days"}
            </span>
            <Heart className="w-4 h-4 text-brand-pink fill-brand-pink/20 stroke-[2] mt-1 ml-4" />
          </div>

          {/* Center Title & Subtitle / CTA */}
          <div className="flex-1 text-center max-w-xl">
            {type === "career" ? (
              <>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight">
                  Let&apos;s Create A Healthier Tomorrow,{" "}
                  <span className="text-brand-pink italic">Together.</span>
                </h3>
                <p className="text-sm sm:text-base text-brand-navy/70 mt-2 font-normal">
                  Join a team that believes in mindfulness, growth and positive change.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight">
                  Be A Part of Our <span className="text-brand-pink italic">Story</span>
                </h3>
                <p className="text-sm sm:text-base text-brand-navy/70 mt-2 font-normal mb-5">
                  Have a story to share? We&apos;d love to hear from you!
                </p>
                <button
                  onClick={onActionClick}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] hover:to-[#AD1457] text-white px-7 py-3 rounded-full text-sm font-semibold shadow-pinkPill hover:shadow-pinkHover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#4285F4] font-bold text-xs shadow-sm">
                    G
                  </span>
                  <span>Write a Review on Google</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
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
