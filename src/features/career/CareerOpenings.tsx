"use client";
/**
 * CareerOpenings.tsx
 * src/features/career/CareerOpenings.tsx
 *
 * Section with location filter, responsive job grid, and 2 upload cards:
 *  - LocationFilter: "All Locations / Gurgaon / Dehradun"
 *  - Job cards grid: desktop 3-col or 2-col, tablet 2-col, mobile 1-col
 *  - Two UploadCards side by side:
 *     1. "Submit Your Resume" (pink)
 *     2. "Yoga Teacher Portfolio" (green)
 */
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { JobCard } from "./JobCard";
import { LocationFilter } from "./LocationFilter";
import { UploadCard } from "./UploadCard";
import { JOBS_LIST, UPLOAD_CARDS_DATA, type JobOpening } from "@/data/career";
import { FileText, Sparkles, Send } from "lucide-react";

interface CareerOpeningsProps {
  className?: string;
}

export function CareerOpenings({ className }: CareerOpeningsProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [appliedJob, setAppliedJob] = useState<JobOpening | null>(null);

  const filteredJobs = useMemo(() => {
    if (selectedLocation === "All Locations") return JOBS_LIST;
    return JOBS_LIST.filter((job) => job.location.includes(selectedLocation));
  }, [selectedLocation]);

  const handleApply = (job: JobOpening) => {
    setAppliedJob(job);
    // Simple mailto fallback with pre-filled subject
    window.location.href = `mailto:careers@theyogastory.co.in?subject=Application for ${encodeURIComponent(
      job.title
    )} (${job.location})`;
  };

  return (
    <div id="roles" className={cn("flex flex-col gap-10 sm:gap-14", className)}>
      {/* ── Top Bar: Location select on the right of Current Openings ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border-light">
        <div>
          <span className="type-eyebrow text-terracotta text-micro tracking-widest block uppercase mb-1">
            JOIN OUR TEAM
          </span>
          <h2 id="openings-heading" className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
            Current Openings
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Explore opportunities to create real impact with The Yoga Story
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="text-xs font-semibold text-navy/70 hidden sm:inline">Location:</span>
          <LocationFilter
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
        </div>
      </div>

      {/* ── 5 Job Cards in ONE row on desktop ─────────────────────── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4"
        role="list"
        aria-label="Job openings"
      >
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={handleApply}
            className="h-full"
          />
        ))}
      </div>

      {/* ── Two Upload Cards Side by Side ─────────────────────────── */}
      <div className="pt-6 sm:pt-8 border-t border-border-light">
        <div className="mb-6 text-center sm:text-left">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
            Can&apos;t find the right role?
          </h3>
          <p className="text-muted text-sm sm:text-base mt-1">
            We are constantly growing. Send us your profile and let us know how you would like to contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <UploadCard
            tone={UPLOAD_CARDS_DATA[0].tone}
            icon={FileText}
            title={UPLOAD_CARDS_DATA[0].title}
            text={UPLOAD_CARDS_DATA[0].text}
            buttonLabel={UPLOAD_CARDS_DATA[0].buttonLabel}
            acceptedNote={UPLOAD_CARDS_DATA[0].acceptedNote}
          />

          <UploadCard
            tone={UPLOAD_CARDS_DATA[1].tone}
            icon={Sparkles}
            title={UPLOAD_CARDS_DATA[1].title}
            text={UPLOAD_CARDS_DATA[1].text}
            buttonLabel={UPLOAD_CARDS_DATA[1].buttonLabel}
            acceptedNote={UPLOAD_CARDS_DATA[1].acceptedNote}
          />
        </div>
      </div>
    </div>
  );
}
