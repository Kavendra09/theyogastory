"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterBanner from "@/components/PreFooterBanner";
import MascotHero from "@/components/MascotHero";
import WriteReviewModal from "@/components/WriteReviewModal";
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
  Flower2,
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
      avatarBg: "bg-pink-200 text-pink-800",
    };
    setReviewsList([created, ...reviewsList]);
  };

  const handleOpenGoogleBusiness = () => {
    window.open("https://maps.google.com/?q=The+Yoga+Story+Studio", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col text-brand-navy">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section className="relative pt-8 pb-14 sm:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="mb-3">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-brand-navy/70 uppercase">
                    Real People &nbsp;·&nbsp; Real Experiences &nbsp;·&nbsp; A Healthier Tomorrow
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-3">
                  What Our <br />
                  <span className="text-brand-pink italic font-serif">Community Says</span>
                </h1>

                <h2 className="text-base sm:text-lg font-bold text-brand-navy mb-2">
                  Real stories. Real people. Real impact.
                </h2>

                <p className="text-sm sm:text-base text-brand-navy/75 max-w-lg leading-relaxed mb-6">
                  From better health and calmer minds to brighter lives, hear from our amazing community about their Yoga Story.
                </p>

                {/* Decorative Lotus Flourish */}
                <div className="flex items-center gap-2 text-brand-green/80">
                  <Flower2 className="w-6 h-6 stroke-[1.5]" />
                  <div className="h-px w-24 bg-[#EAE3D6]" />
                </div>
              </div>

              {/* Right Column: Kin & Kayo Mascots */}
              <div className="lg:col-span-6">
                <MascotHero type="testimonials" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Google Rating Summary Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative rounded-3xl bg-white border border-[#FAD2E1] p-5 sm:p-7 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Google 4.9/5 info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5DEC7] shadow-sm flex items-center justify-center p-2.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full">
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
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy">
                    4.9/5
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold text-brand-navy/80 mt-0.5">
                  on Google &nbsp;·&nbsp; <span className="text-brand-navy/60 font-normal">100+ Happy Members</span>
                </div>
              </div>
            </div>

            {/* Middle: Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold text-brand-navy/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32]">
                  <Users className="w-4 h-4" />
                </div>
                <span>Real Reviews from Real People</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Verified on Google</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FFF0F6] flex items-center justify-center text-[#E6007A]">
                  <Heart className="w-4 h-4" />
                </div>
                <span>Trusted by Our Growing Community</span>
              </div>
            </div>

            {/* Right: Read all reviews button */}
            <div className="flex flex-col items-center sm:items-end shrink-0">
              <button
                onClick={handleOpenGoogleBusiness}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-pinkPill transition-all"
              >
                <span>Read All Reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-brand-navy/50 mt-1">
                Opens our official Google Business Profile
              </span>
            </div>
          </div>
        </section>

        {/* 4. Reviews Grid Section ("Here's What They Say") */}
        <section className="py-12 bg-white/60 border-t border-[#EAE3D6]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with leafy laurels & Sort filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-green">
                  <path
                    d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h2 className="font-serif text-3xl font-bold text-brand-navy tracking-tight">
                  Here&apos;s What They Say
                </h2>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-green scale-x-[-1]">
                  <path
                    d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Sort Filter Dropdown */}
              <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E5DEC7] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-brand-navy shadow-sm">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none bg-transparent pr-6 pl-1 font-semibold text-brand-navy focus:outline-none cursor-pointer"
                >
                  <option value="Latest First">Latest First</option>
                  <option value="Highest Rated">Highest Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-brand-navy/60 pointer-events-none -ml-4" />
              </div>
            </div>

            {/* Carousel with side arrows */}
            <div className="relative">
              {/* Left arrow button */}
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E5DEC7] shadow-md items-center justify-center text-brand-navy hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Review Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                {sortedReviews.slice(0, 5).map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl bg-white border border-[#F0EAE1] p-5 shadow-sm hover:shadow-md hover:border-[#FAD2E1] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Google G icon & 5 Stars */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#4285F4] font-bold text-xs shadow-sm border border-gray-100">
                          G
                        </span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-xs text-brand-navy/75 leading-relaxed italic mb-5">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Initial Avatar & Name */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-[#F5EFE6]">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${review.avatarBg}`}
                      >
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

              {/* Right arrow button */}
              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E5DEC7] shadow-md items-center justify-center text-brand-navy hover:text-brand-pink hover:border-brand-pink hover:scale-105 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
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

      {/* 6. Footer */}
      <Footer />

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewSubmitted={handleNewReview}
      />
    </div>
  );
}
