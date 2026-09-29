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
import { CheckCircle2 } from "lucide-react";

interface ReviewCardProps {
  review: ReviewItem;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  const toneMap = TONE_MAP[review.avatarTone];

  return (
    <div
      className={cn(
        "rounded-panel bg-white/95 border border-border-light p-5 sm:p-6 shadow-card",
        "flex flex-col justify-between transition-all duration-300 hover:shadow-glass hover:border-tone-pink-border hover:-translate-y-1",
        className
      )}
    >
      <div>
        {/* Top: Google G Icon + Star Rating */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <GoogleLogo className="w-4 h-4" />
            </div>
            <Rating value={review.rating} size="sm" />
          </div>

          {/* Mobile badge: Verified Google Review */}
          <div className="flex sm:hidden items-center gap-1 text-micro font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            <CheckCircle2 size={11} className="text-emerald-600" />
            <span>Verified</span>
          </div>
        </div>

        {/* Quote */}
        <p className="font-heading italic text-sm sm:text-base text-ink/85 leading-relaxed mb-6 font-normal">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-border-light flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar initial circle */}
          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0 shadow-soft",
              toneMap.iconCircle
            )}
          >
            {review.initial}
          </div>

          <div className="min-w-0">
            <h4 className="font-heading font-bold text-navy text-sm truncate leading-snug">
              {review.name}
            </h4>
            <span className="text-2xs text-muted block sm:block leading-none mt-0.5">
              {review.date}
            </span>
          </div>
        </div>

        {/* Desktop Verified Badge */}
        <div className="hidden sm:flex items-center gap-1 text-2xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full shrink-0">
          <CheckCircle2 size={12} className="text-emerald-600" />
          <span>Verified Review</span>
        </div>
      </div>
    </div>
  );
}
