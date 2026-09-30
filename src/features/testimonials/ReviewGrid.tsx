"use client";
/**
 * ReviewGrid.tsx
 * src/features/testimonials/ReviewGrid.tsx
 *
 * Displays reviews with filter integration:
 *  - Tablet & Desktop: 3 columns grid
 *  - Mobile: Carousel with left/right navigation arrows and pagination dots
 *  - Fully functional client-side filtering & sorting
 */
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { ReviewCard } from "./ReviewCard";
import { ReviewFilters } from "./ReviewFilters";
import { REVIEWS_DATA, type FilterKey, type ReviewItem } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface ReviewGridProps {
  className?: string;
}

export function ReviewGrid({ className }: ReviewGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter & Sort Logic
  const filteredReviews = useMemo(() => {
    let list: ReviewItem[] = [...REVIEWS_DATA];

    switch (activeFilter) {
      case "5star":
        list = list.filter((r) => r.rating === 5);
        break;
      case "4star":
        list = list.filter((r) => r.rating === 4);
        break;
      case "recent":
        list.sort((a, b) => a.daysAgo - b.daysAgo);
        break;
      case "helpful":
        list.sort((a, b) => b.helpfulCount - a.helpfulCount);
        break;
      case "all":
      default:
        // Default order
        break;
    }

    return list;
  }, [activeFilter]);

  const TOTAL_MOBILE_PAGES = 5;
  const REVIEWS_PER_PAGE = 3;

  const currentMobileReviews = useMemo(() => {
    if (filteredReviews.length === 0) return [];
    const startIndex = (carouselIndex * REVIEWS_PER_PAGE) % filteredReviews.length;
    const items: ReviewItem[] = [];
    for (let i = 0; i < REVIEWS_PER_PAGE; i++) {
      items.push(filteredReviews[(startIndex + i) % filteredReviews.length]);
    }
    return items;
  }, [filteredReviews, carouselIndex]);

  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? TOTAL_MOBILE_PAGES - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCarouselIndex((prev) =>
      prev >= TOTAL_MOBILE_PAGES - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={cn("flex flex-col gap-6 sm:gap-8", className)}>
      {/* ── Filter Bar ────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <ReviewFilters
          activeFilter={activeFilter}
          onFilterChange={(key) => {
            setActiveFilter(key);
            setCarouselIndex(0);
          }}
        />
      </div>

      {/* ── Empty State for 4 Stars if none ───────────────────────── */}
      {filteredReviews.length === 0 && (
        <div className="text-center py-12 px-4 rounded-panel bg-white/60 border border-border-light">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 mx-auto flex items-center justify-center mb-3">
            <Star size={24} className="fill-amber-400" />
          </div>
          <h3 className="font-heading text-lg font-bold text-navy">
            100% 5-Star Reviews
          </h3>
          <p className="text-muted text-sm mt-1 max-w-md mx-auto">
            All our current Google reviews have been rated 5 out of 5 stars by our wonderful community!
          </p>
          <button
            onClick={() => setActiveFilter("all")}
            className="mt-4 text-xs font-semibold text-primary underline"
          >
            View all 5-star reviews
          </button>
        </div>
      )}

      {/* ── Desktop & Tablet: 3 Columns Grid ──────────────────────── */}
      {filteredReviews.length > 0 && (
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {/* ── Mobile: 3-Cards Carousel with Outer Side Arrows & Dots ── */}
      {filteredReviews.length > 0 && (
        <div className="block sm:hidden relative px-4">
          {/* Outer Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous reviews"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-border-light shadow-card flex items-center justify-center text-navy hover:text-primary active:scale-95 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Outer Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next reviews"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-border-light shadow-card flex items-center justify-center text-navy hover:text-primary active:scale-95 transition-all"
          >
            <ChevronRight size={18} />
          </button>

          {/* 3 Stacked Cards for the active page */}
          <div className="space-y-3.5 transition-all duration-300">
            {currentMobileReviews.map((review, idx) => (
              <ReviewCard
                key={`${review.id}-${carouselIndex}-${idx}`}
                review={review}
              />
            ))}
          </div>

          {/* 5 Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-5" aria-hidden="true">
            {Array.from({ length: TOTAL_MOBILE_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === carouselIndex
                    ? "bg-primary scale-125"
                    : "bg-navy/20 hover:bg-navy/40"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
