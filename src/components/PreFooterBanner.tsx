"use client";

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

          {/* Right: The Yoga Story Lotus Logo */}
          <div className="shrink-0 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#FAD2E1] flex items-center justify-center p-2 shadow-sm mb-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand-pink">
                <path
                  d="M12 3C12 7.5 8.5 10.5 8.5 14.5C8.5 16.43 10.07 18 12 18C13.93 18 15.5 16.43 15.5 14.5C15.5 10.5 12 3 12 3Z"
                  fill="currentColor"
                  fillOpacity="0.85"
                />
                <path
                  d="M6 9.5C6.5 13 4.5 15 4.5 17C4.5 18.38 5.62 19.5 7 19.5C8.38 19.5 9.5 18.38 9.5 17C9.5 14.5 7.5 11.5 6 9.5Z"
                  fill="#F472B6"
                  fillOpacity="0.75"
                />
                <path
                  d="M18 9.5C17.5 13 19.5 15 19.5 17C19.5 18.38 18.38 19.5 17 19.5C15.62 19.5 14.5 18.38 14.5 17C14.5 14.5 16.5 11.5 18 9.5Z"
                  fill="#F472B6"
                  fillOpacity="0.75"
                />
              </svg>
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
