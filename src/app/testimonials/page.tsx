"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterBanner from "@/components/PreFooterBanner";
import WriteReviewModal from "@/components/WriteReviewModal";
import MascotHero from "@/components/MascotHero";
import Image from "next/image";
import { GOOGLE_TESTIMONIALS_DATA, GoogleReviewItem } from "@/lib/data";
import {
  Star,
  ShieldCheck,
  Heart,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function TestimonialsPage() {
  const [reviewsList, setReviewsList] = useState<GoogleReviewItem[]>(GOOGLE_TESTIMONIALS_DATA);
  const [filterType, setFilterType] = useState("Latest First");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Sorting / filtering
  const sortedReviews = [...reviewsList].sort((a, b) => {
    if (filterType === "Highest Rated") return b.rating - a.rating;
    return 0; // default order
  });

  const cardsPerPage = 5;
  const maxIndex = Math.max(0, sortedReviews.length - cardsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleNewReview = (newRev: { name: string; rating: number; quote: string }) => {
    const created: GoogleReviewItem = {
      id: `g-new-${Date.now()}`,
      name: newRev.name,
      initial: newRev.name.charAt(0).toUpperCase() || "M",
      rating: newRev.rating,
      date: "Just now",
      quote: newRev.quote,
      avatarBg: "bg-[#94A3B8]/35 text-[#334155]",
    };
    setReviewsList([created, ...reviewsList]);
  };

  const handleOpenGoogleBusiness = () => {
    window.open("https://maps.google.com/?q=The+Yoga+Story+Studio", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col text-brand-navy selection:bg-pink-100 selection:text-brand-pink relative overflow-x-hidden">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section - Ultra-HD Crystal Clear Vector Typography & 8K Mascots */}
        <section className="relative pt-2 pb-6 sm:pt-4 sm:pb-8 bg-[#FAF7F2] overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
              
              {/* Left Column: Stacked Wood Blocks + Crystal Clear Typography */}
              <div className="w-full lg:w-[46%] flex flex-col gap-3 z-10">

                {/* Full-width tagline row */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-brand-navy/70 uppercase">
                    Real People &nbsp;·&nbsp; Real Experiences &nbsp;·&nbsp; A Healthier Tomorrow
                  </span>
                </div>

                {/* Image + Text row – vertically centered */}
                <div className="flex items-center gap-5 sm:gap-7">

                  {/* Decorative Stacked Wood Blocks (Yoga · People · Positive Change) */}
                  <div className="shrink-0 w-36 sm:w-44 md:w-48 self-center">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#E8E1D5]/80">
                      <Image
                        src="/images/yoga-blocks-hd.jpg"
                        alt="Yoga People Positive Change"
                        fill
                        sizes="(max-width: 640px) 144px, 192px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Typography & Subhead */}
                  <div className="flex-1 flex flex-col items-start">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold tracking-tight text-brand-navy leading-[1.08] mb-2.5">
                      What Our <br />
                      <span className="text-brand-pink font-serif">Community Says</span>
                    </h1>

                    <h2 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 tracking-tight">
                      Real stories. Real people. Real impact.
                    </h2>

                    <p className="text-xs sm:text-sm text-brand-navy/75 max-w-md leading-relaxed mb-3.5">
                      From better health and calmer minds to brighter lives, hear from our amazing community about their Yoga Story.
                    </p>

                    {/* Lotus Flourish Ornament with Lines */}
                    <div className="flex items-center gap-2.5 text-[#3D7B54]">
                      <div className="h-[1.5px] w-12 sm:w-16 bg-[#6FA481]/50 rounded-full" />
                      {/* Stylized Lotus SVG */}
                      <svg viewBox="0 0 36 24" fill="none" className="w-6 h-5 text-[#3D7B54]">
                        <path
                          d="M18 2C16 7 13 12 8 15C13 15 16.5 12 18 2Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 2C20 7 23 12 28 15C23 15 19.5 12 18 2Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 6C17 11 15 16 11 19C15 19 17.5 16 18 6Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 6C19 11 21 16 25 19C21 19 18.5 16 18 6Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 18C12 19 18 21 24 21C30 21 33 18 33 18"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="h-[1.5px] w-12 sm:w-16 bg-[#6FA481]/50 rounded-full" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Kin & Kayo — shared MascotHero panel */}
              <div className="w-full lg:w-[54%] relative flex items-center justify-center lg:justify-end">
                <MascotHero type="testimonials" onActionClick={() => setReviewModalOpen(true)} />
              </div>

            </div>
          </div>
        </section>


        {/* 3. Google Rating Summary Bar */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="relative rounded-3xl bg-white border border-[#FAD2E1] px-5 sm:px-7 py-3.5 sm:py-4 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Left: Google 4.9/5 info */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5DEC7] shadow-sm flex items-center justify-center p-2 shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
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

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl sm:text-[26px] font-bold text-brand-navy leading-none">
                    4.9/5
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold text-brand-navy/80 mt-1">
                  on Google &nbsp;·&nbsp; <span className="text-brand-navy/60 font-normal">100+ Happy Members</span>
                </div>
              </div>
            </div>

            {/* Middle: 3 Badges with subtle vertical divider lines */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-xs font-semibold text-brand-navy/85">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="leading-snug">Real Reviews<br className="hidden sm:inline" /> from Real People</span>
              </div>

              <div className="hidden lg:block h-6 w-px bg-gray-200" />

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="leading-snug">Verified on<br className="hidden sm:inline" /> Google</span>
              </div>

              <div className="hidden lg:block h-6 w-px bg-gray-200" />

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF0F6] flex items-center justify-center text-[#E6007A] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="leading-snug">Trusted by Our<br className="hidden sm:inline" /> Growing Community</span>
              </div>
            </div>

            {/* Right: Read All Reviews Button */}
            <div className="flex flex-col items-center lg:items-end shrink-0">
              <button
                onClick={handleOpenGoogleBusiness}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink via-[#E11D74] to-[#D81B60] hover:from-[#D81B60] text-white px-5 sm:px-6 py-2 rounded-full text-xs font-semibold shadow-pinkPill hover:shadow-pinkHover hover:-translate-y-0.5 transition-all"
              >
                <span>Read All Reviews on Google</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </button>
              <span className="text-[10px] text-brand-navy/55 mt-1">
                Opens our official Google Business Profile
              </span>
            </div>
          </div>
        </section>

        {/* 4. Reviews Grid Section ("Here's What They Say") */}
        <section className="relative py-4 sm:py-6 bg-transparent">
          {/* Decorative Side Leaf Clusters matching screenshot */}
          <div className="hidden 2xl:block absolute -left-2 top-10 w-12 h-64 pointer-events-none opacity-85 select-none">
            <Image
              src="/images/side-leaves-left.png"
              alt="Decorative foliage"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="hidden 2xl:block absolute -right-2 top-10 w-14 h-64 pointer-events-none opacity-85 select-none">
            <Image
              src="/images/side-leaves-right.png"
              alt="Decorative foliage"
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header: Botanical Leaf Sprig + Heading + Botanical Leaf Sprig & Sort Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Left Botanical Sprig */}
                <div className="flex items-center gap-2">
                  <div className="h-[1.5px] w-8 sm:w-16 bg-[#6FA481]/50 rounded-full" />
                  <svg viewBox="0 0 36 24" fill="none" className="w-7 h-5 text-[#3D7B54]">
                    <path
                      d="M6 18C10 14 16 10 28 6C20 12 18 18 12 20C8 20 6 18 6 18Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M14 11C18 7 24 6 28 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 15C13 12 18 12 22 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                  Here&apos;s What They Say
                </h2>

                {/* Right Botanical Sprig */}
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 36 24" fill="none" className="w-7 h-5 text-[#3D7B54] scale-x-[-1]">
                    <path
                      d="M6 18C10 14 16 10 28 6C20 12 18 18 12 20C8 20 6 18 6 18Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M14 11C18 7 24 6 28 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 15C13 12 18 12 22 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="h-[1.5px] w-8 sm:w-16 bg-[#6FA481]/50 rounded-full" />
                </div>
              </div>

              {/* Sort Filter Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-1.5 bg-white border border-[#E5DEC7] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-brand-navy shadow-sm">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="appearance-none bg-transparent pr-5 pl-0.5 font-semibold text-brand-navy focus:outline-none cursor-pointer"
                  >
                    <option value="Latest First">Latest First</option>
                    <option value="Highest Rated">Highest Rated</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-brand-navy/60 pointer-events-none -ml-4" />
                </div>
              </div>
            </div>

            {/* Carousel Row with Side Arrows */}
            <div className="relative">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#E5DEC7] shadow-sm items-center justify-center text-brand-navy hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Review Cards Grid (5 Cards on Desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 lg:gap-4">
                {sortedReviews.slice(carouselIndex, carouselIndex + 5).concat(
                  sortedReviews.slice(0, Math.max(0, 5 - sortedReviews.slice(carouselIndex, carouselIndex + 5).length))
                ).slice(0, 5).map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl bg-white border border-[#EFE8DC] p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#FAD2E1] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Google G icon & 5 Stars */}
                      <div className="flex items-center gap-2 mb-3">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
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
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-[12px] sm:text-[13px] text-brand-navy/80 leading-relaxed italic mb-4 font-normal">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Avatar & Name & Date */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-[#F5EFE6]">
                      <div className="w-8 h-8 rounded-full bg-[#94A3B8]/30 text-[#475569] flex items-center justify-center font-bold text-xs shrink-0">
                        {review.initial}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-brand-navy truncate">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-brand-navy/50 block">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#E5DEC7] shadow-sm items-center justify-center text-brand-navy hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 5. Pre-Footer Banner ("Be A Part of Our Story") */}
        <PreFooterBanner
          type="testimonials"
          onActionClick={() => setReviewModalOpen(true)}
        />
      </main>

      {/* 6. Clean Footer matching the screenshot */}
      <Footer variant="minimal" />

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewSubmitted={handleNewReview}
      />
    </div>
  );
}

