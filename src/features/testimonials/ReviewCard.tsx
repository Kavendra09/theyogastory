/**
 * ReviewCard.tsx
 * src/features/testimonials/ReviewCard.tsx
 *
 * Review card component matching screenshot styling:
 *  - Google G 4-color icon
 *  - 5 gold stars
 *  - Quote in serif italic typography
 *  - Author initial circle with tone styling
 *  - Name and relative date (e.g. "2 weeks ago")
 *  - Mobile variant adds "Verified Google Review" badge and date on the right
 */
import { cn } from "@/lib/utils";
import { TONE_MAP } from "@/theme/tones";
import { Rating } from "@/components/ui/Rating";
import { GoogleLogo } from "./RatingSummaryBar";
import type { ReviewItem } from "@/data/testimonials";
import { CheckCircle2, MoreVertical } from "lucide-react";

interface ReviewCardProps {
  review: ReviewItem;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  const toneMap = TONE_MAP[review.avatarTone];

  return (
    <div
      className={cn(
        "rounded-panel bg-white/95 border border-border-light p-4 sm:p-5 lg:p-6 shadow-card",
        "flex flex-col justify-between transition-all duration-300 hover:shadow-glass hover:border-tone-pink-border hover:-translate-y-0.5",
        className
      )}
    >
      <div>
        {/* Top: Google G Icon + Star Rating + Date / More */}
        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <GoogleLogo className="w-4 h-4" />
            </div>
            <Rating value={review.rating} size="sm" />
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile relative date on top right */}
            <span className="sm:hidden text-2xs text-muted font-normal">
              {review.date}
            </span>
            <button
              type="button"
              aria-label="Options"
              className="text-navy/35 hover:text-navy transition-colors p-0.5"
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Quote */}
        <p className="font-sans not-italic text-[13.5px] sm:text-sm lg:text-[14px] text-navy/85 leading-relaxed mb-4 sm:mb-6 font-normal">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-3 sm:pt-4 border-t border-border-light flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          {/* Avatar initial circle */}
          <div
            className={cn(
              "w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs sm:text-sm shrink-0 shadow-soft",
              toneMap.iconCircle
            )}
          >
            {review.initial}
          </div>

          <div className="min-w-0">
            <h4 className="font-heading font-bold text-navy text-xs sm:text-sm truncate leading-snug">
              {review.name}
            </h4>
            {/* Desktop / tablet date below name */}
            <span className="hidden sm:block text-2xs text-muted leading-none mt-0.5">
              {review.date}
            </span>
          </div>
        </div>

        {/* Mobile: Verified Google Review Pill Badge */}
        <div className="flex sm:hidden items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 border border-emerald-300/60 px-2 py-0.5 rounded-full shrink-0">
          <CheckCircle2 size={12} className="text-emerald-600" />
          <span>Verified Google Review</span>
        </div>
      </div>
    </div>
  );
}
