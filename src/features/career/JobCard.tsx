/**
 * JobCard.tsx
 * src/features/career/JobCard.tsx
 *
 * Career opening card matching screenshot:
 *  - Tone icon circle with role icon
 *  - Title & subtitle
 *  - Metadata row with icons: Location (MapPin), Job Type (Briefcase), Experience (Clock)
 *  - Role description
 *  - "Apply Now →" button
 */
import { cn } from "@/lib/utils";
import { TONE_MAP } from "@/theme/tones";
import { IconCircle } from "@/components/ui/IconCircle";
import { Button } from "@/components/ui/Button";
import type { JobOpening } from "@/data/career";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: JobOpening;
  onApply?: (job: JobOpening) => void;
  className?: string;
}

export function JobCard({ job, onApply, className }: JobCardProps) {
  const toneMap = TONE_MAP[job.tone];
  const Icon = job.icon;

  return (
    <div
      className={cn(
        "rounded-panel bg-white/95 border p-4 sm:p-5 lg:p-4.5 shadow-card flex flex-col justify-between transition-all duration-300",
        "hover:shadow-glass hover:-translate-y-1",
        toneMap.border,
        className
      )}
    >
      <div>
        {/* Top: Icon Circle & Title */}
        <div className="flex items-start gap-3 mb-3">
          <IconCircle tone={job.tone} size="sm" className="shrink-0 mt-0.5 shadow-soft">
            <Icon size={16} strokeWidth={2} />
          </IconCircle>

          <div className="min-w-0">
            <h3 className="font-heading font-bold text-navy text-sm sm:text-base leading-tight">
              {job.title}
            </h3>
            {job.subtitle && (
              <span className="text-2xs font-medium text-muted block mt-0.5">
                {job.subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Metadata Chips: Location, Type, Experience */}
        <div className="flex flex-col gap-1.5 py-2.5 border-y border-border-light/70 my-3 text-2xs font-semibold text-navy/75">
          <div className="flex items-center gap-1.5 bg-cream-50/80 px-2 py-0.5 rounded border border-border-light/50">
            <MapPin size={11} className="text-primary shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-cream-50/80 px-2 py-0.5 rounded border border-border-light/50">
            <Briefcase size={11} className="text-muted shrink-0" />
            <span className="truncate">{job.type}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-cream-50/80 px-2 py-0.5 rounded border border-border-light/50">
            <Clock size={11} className="text-terracotta shrink-0" />
            <span className="truncate">{job.experience}</span>
          </div>
        </div>

        {/* Description */}
        <p className="type-body text-body text-xs leading-relaxed mb-4 line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Footer: Apply Button */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onApply?.(job)}
          className="w-full font-semibold text-xs shadow-soft hover:shadow-card transition-all group"
        >
          <span>Apply Now</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
