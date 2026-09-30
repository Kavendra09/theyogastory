/**
 * RatingSummaryBar.tsx
 * src/features/testimonials/RatingSummaryBar.tsx
 *
 * Google rating summary bar component:
 *  - Google 4-color logo
 *  - "4.9/5" score + 5-star Rating display
 *  - "on Google · 100+ Happy Members"
 *  - 3 trust badges (Real Reviews from Real People, Verified on Google, Trusted by Our Growing Community)
 *  - CTA button "Read All Reviews on Google" + subnote "Opens our official Google Business Profile"
 */
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Rating } from "@/components/ui/Rating";
import { Users, ShieldCheck, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { RATING_SUMMARY } from "@/data/testimonials";

interface RatingSummaryBarProps {
  className?: string;
}

export function GoogleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google logo">
      <path
        fill="var(--color-google-blue)"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="var(--color-google-green)"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
      />
      <path
        fill="var(--color-google-yellow)"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
      />
      <path
        fill="var(--color-google-red)"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
      />
    </svg>
  );
}

export function RatingSummaryBar({ className }: RatingSummaryBarProps) {
  return (
    <div
      className={cn(
        "relative rounded-panel bg-white/95 border border-tone-pink-border p-4 sm:p-5 lg:p-6 shadow-card",
        "flex flex-col lg:flex-row lg:flex-nowrap items-stretch lg:items-center justify-between gap-4 lg:gap-6",
        className
      )}
    >
      {/* ── Left: Google Score Lockup ─────────────────────────────── */}
      <div className="flex items-center gap-3.5 shrink-0">
        <div className="w-11 h-11 rounded-2xl bg-white border border-kraft-border shadow-soft flex items-center justify-center p-2 shrink-0">
          <GoogleLogo className="w-6 h-6" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-navy leading-none">
              {RATING_SUMMARY.score}
            </span>
            <Rating value={RATING_SUMMARY.ratingValue} size="sm" />
          </div>
          <div className="text-xs font-semibold text-navy/80 mt-1 whitespace-nowrap">
            {RATING_SUMMARY.source} &nbsp;·&nbsp;{" "}
            <span className="text-navy/60 font-normal">{RATING_SUMMARY.countText}</span>
          </div>
        </div>
      </div>

      {/* ── Middle: 3 Trust Badges (Grid on mobile, row on tablet/desktop) ──── */}
      <div className="grid grid-cols-3 lg:flex lg:flex-nowrap items-center justify-center gap-2 sm:gap-4 lg:gap-6 text-2xs sm:text-xs font-semibold text-navy/85 shrink-0 py-2.5 lg:py-0 border-y lg:border-y-0 border-border-light/60">
        {/* Trust Item 1: Real Reviews */}
        <div className="flex flex-col lg:flex-row items-center gap-1.5 sm:gap-2 text-center lg:text-left">
          <div className="w-7 h-7 rounded-full bg-tone-green-bg flex items-center justify-center text-tone-green-fg shrink-0 shadow-soft">
            <Users size={14} />
          </div>
          <span className="leading-tight">
            Real Reviews <br className="lg:hidden" />from Real People
          </span>
        </div>

        <div className="hidden lg:block h-6 w-px bg-border-light shrink-0" aria-hidden="true" />

        {/* Trust Item 2: Verified on Google */}
        <div className="flex flex-col lg:flex-row items-center gap-1.5 sm:gap-2 text-center lg:text-left">
          <div className="w-7 h-7 rounded-full bg-tone-green-bg flex items-center justify-center text-tone-green-fg shrink-0 shadow-soft">
            <ShieldCheck size={14} />
          </div>
          <span className="leading-tight">
            Verified on <br className="lg:hidden" />Google
          </span>
        </div>

        <div className="hidden lg:block h-6 w-px bg-border-light shrink-0" aria-hidden="true" />

        {/* Trust Item 3: Trusted by Growing Community */}
        <div className="flex flex-col lg:flex-row items-center gap-1.5 sm:gap-2 text-center lg:text-left">
          <div className="w-7 h-7 rounded-full bg-tone-pink-bg flex items-center justify-center text-tone-pink-fg shrink-0 shadow-soft">
            <Heart size={14} />
          </div>
          <span className="leading-tight">
            Trusted by Our <br className="lg:hidden" />Growing Community
          </span>
        </div>
      </div>

      {/* ── Right: Read All Reviews Button ───────────────────────── */}
      <div className="flex flex-col items-center lg:items-end shrink-0 w-full lg:w-auto">
        <Link
          href={RATING_SUMMARY.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full lg:w-auto inline-flex items-center justify-center gap-2 min-h-[42px] h-10 px-5 text-xs sm:text-sm font-semibold shadow-pill hover:scale-105 transition-all whitespace-nowrap"
        >
          <span>{RATING_SUMMARY.buttonLabel}</span>
          <ArrowRight size={14} />
          <ExternalLink size={12} className="opacity-80" />
        </Link>
        <span className="text-micro text-navy/55 mt-1.5 text-center lg:text-right whitespace-nowrap">
          {RATING_SUMMARY.buttonSubnote}
        </span>
      </div>
    </div>
  );
}
