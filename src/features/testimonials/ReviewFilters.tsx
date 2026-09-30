"use client";
/**
 * ReviewFilters.tsx
 * src/features/testimonials/ReviewFilters.tsx
 *
 * Client-side filter bar using FilterChip:
 *  - All Reviews (100+)
 *  - 5 Stars
 *  - 4 Stars
 *  - Recent
 *  - Most Helpful
 */
import { cn } from "@/lib/utils";
import { FilterChip } from "@/components/ui/Chip";
import { FILTER_OPTIONS, type FilterKey } from "@/data/testimonials";
import { Star, Clock, ThumbsUp, Sparkles } from "lucide-react";

interface ReviewFiltersProps {
  activeFilter: FilterKey;
  onFilterChange: (key: FilterKey) => void;
  className?: string;
}

export function ReviewFilters({
  activeFilter,
  onFilterChange,
  className,
}: ReviewFiltersProps) {
  const getIcon = (key: FilterKey) => {
    switch (key) {
      case "all":
        return null;
      case "5star":
        return <Star size={13} className="fill-amber-400 text-amber-400" />;
      case "4star":
        return <Star size={13} className="fill-amber-400 text-amber-400" />;
      case "recent":
        return <Clock size={13} />;
      case "helpful":
        return <ThumbsUp size={13} />;
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none",
        className
      )}
      role="tablist"
      aria-label="Filter reviews"
    >
      {FILTER_OPTIONS.map((opt) => {
        const isActive = activeFilter === opt.key;
        return (
          <FilterChip
            key={opt.key}
            active={isActive}
            icon={getIcon(opt.key)}
            onClick={() => onFilterChange(opt.key)}
            className="shrink-0 text-xs sm:text-sm font-semibold"
          >
            {opt.label}
          </FilterChip>
        );
      })}
    </div>
  );
}
