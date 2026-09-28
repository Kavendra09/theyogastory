"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterBanner from "@/components/PreFooterBanner";
import MascotHero from "@/components/MascotHero";
import MascotCompanion from "@/components/MascotCompanion";
import JobApplicationModal from "@/components/JobApplicationModal";
import { JOBS_DATA, JobOpeningItem } from "@/lib/data";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  FileText,
  Sparkles,
  Users,
  Heart,
  Flower2,
  Share2,
  TrendingUp,
  Award,
  UserCheck,
  Brush,
  ChevronDown,
} from "lucide-react";

export default function CareerPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeJob, setActiveJob] = useState<JobOpeningItem | null>(null);
  const [isPortfolioMode, setIsPortfolioMode] = useState(false);

  const filteredJobs = JOBS_DATA.filter((job) => {
    if (selectedLocation === "All Locations") return true;
    return job.location.includes(selectedLocation);
  });

  const handleApplyClick = (job: JobOpeningItem) => {
    setActiveJob(job);
    setIsPortfolioMode(false);
    setModalOpen(true);
  };

  const handleGeneralResume = () => {
    setActiveJob(null);
    setIsPortfolioMode(false);
    setModalOpen(true);
  };

  const handlePortfolioUpload = () => {
    setActiveJob(null);
    setIsPortfolioMode(true);
    setModalOpen(true);
  };

  // Helper for job icons
  const getJobIcon = (type: JobOpeningItem["iconType"]) => {
    switch (type) {
      case "social":
        return <Share2 className="w-5 h-5 text-[#E6007A]" />;
      case "marketing":
        return <TrendingUp className="w-5 h-5 text-[#2E7D32]" />;
      case "yoga":
        return <Flower2 className="w-5 h-5 text-[#7C3AED]" />;
      case "manager":
        return <Award className="w-5 h-5 text-[#D97706]" />;
      case "attendant":
        return <Brush className="w-5 h-5 text-[#0284C7]" />;
      default:
        return <Briefcase className="w-5 h-5 text-brand-pink" />;
    }
  };

  const getJobBadgeBg = (color: JobOpeningItem["tagColor"]) => {
    switch (color) {
      case "pink":
        return "bg-[#FFF0F6] border-[#FAD2E1]";
      case "green":
        return "bg-[#EDF7ED] border-[#B7EB8F]";
      case "purple":
        return "bg-[#F5F3FF] border-[#DDD6FE]";
      case "yellow":
        return "bg-[#FEF9C3] border-[#FDE047]";
      case "blue":
        return "bg-[#F0F9FF] border-[#BAE6FD]";
      default:
        return "bg-cream-100 border-cream-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col text-brand-navy">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Headline & Pillars */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <div className="mb-2">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-brand-navy/70 uppercase">
                    People &nbsp;·&nbsp; Practice &nbsp;·&nbsp; Purpose
                  </span>
                  <div className="text-[10px] tracking-[0.25em] text-brand-navy/50 uppercase mt-0.5">
                    A Brighter Tomorrow
                  </div>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-4">
                  Build Your <br />
                  <span className="text-brand-pink italic font-serif">Story With Us</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-navy/75 max-w-lg leading-relaxed mb-5">
                  Be a part of The Yoga Story — where people, purpose and wellness come together.
                </p>

                {/* 4 Value Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
                  {/* Meaningful Work */}
                  <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-[#EAE3D6] shadow-sm hover:border-[#B7EB8F] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32] mb-1.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-brand-navy/85">
                      Meaningful Work
                    </span>
                  </div>

                  {/* Supportive Team */}
                  <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-[#EAE3D6] shadow-sm hover:border-[#B7EB8F] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32] mb-1.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-brand-navy/85">
                      Supportive Team
                    </span>
                  </div>

                  {/* Healthier Lives */}
                  <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-[#EAE3D6] shadow-sm hover:border-[#FAD2E1] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0F6] flex items-center justify-center text-[#E6007A] mb-1.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-brand-navy/85">
                      Healthier Lives
                    </span>
                  </div>

                  {/* Positive Impact */}
                  <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-[#EAE3D6] shadow-sm hover:border-[#B7EB8F] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#EDF7ED] flex items-center justify-center text-[#2E7D32] mb-1.5">
                      <Flower2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-brand-navy/85">
                      Positive Impact
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Kin & Kayo — identical layout to home & testimonials */}
              <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
                <MascotHero type="career" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Current Openings Section */}
        <section className="py-12 bg-white/60 border-y border-[#EAE3D6]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Leaf Laurels and Location Filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <div className="text-center md:text-left flex-1">
                {/* Title with decorative leaf icons */}
                <div className="inline-flex items-center gap-2 mb-1">
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
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                    Current Openings
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
                <p className="text-xs sm:text-sm text-brand-navy/65">
                  Explore opportunities to grow, contribute and make a difference.
                </p>
              </div>

              {/* Location Filter Dropdown */}
              <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E5DEC7] px-3.5 py-2 rounded-xl text-xs font-semibold text-brand-navy shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-pink" />
                <span className="text-brand-navy/60 font-medium">Location</span>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="appearance-none bg-transparent pr-6 pl-1 font-semibold text-brand-navy focus:outline-none cursor-pointer"
                  >
                    <option value="All Locations">All Locations</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Dehradun">Dehradun</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-brand-navy/60 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 5 Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl bg-white border border-[#F0EAE1] hover:border-[#FAD2E1] p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${getJobBadgeBg(
                        job.tagColor
                      )}`}
                    >
                      {getJobIcon(job.iconType)}
                    </div>

                    {/* Role Title */}
                    <h3 className="font-serif text-base font-bold text-brand-navy leading-snug group-hover:text-brand-pink transition-colors mb-1">
                      {job.title}
                    </h3>
                    {job.subtitle && (
                      <p className="text-[11px] text-brand-navy/60 font-medium mb-3">
                        {job.subtitle}
                      </p>
                    )}

                    {/* Meta Info (Location, Type, Experience) */}
                    <div className="space-y-1.5 text-xs text-brand-navy/70 pt-2 pb-3 mb-3 border-y border-[#F3ECE1]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy/50 shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-brand-navy/50 shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-navy/50 shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-brand-navy/70 leading-relaxed line-clamp-4 mb-4">
                      {job.description}
                    </p>
                  </div>

                  {/* Apply Now Button */}
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] hover:to-[#AD1457] text-white py-2.5 px-4 rounded-full text-xs font-semibold shadow-pinkPill hover:shadow-pinkHover active:scale-95 transition-all duration-200 mt-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* If no jobs in filter */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border border-cream-300">
                <p className="text-sm text-brand-navy/70">
                  No active openings currently listed for {selectedLocation}.
                </p>
                <button
                  onClick={() => setSelectedLocation("All Locations")}
                  className="mt-3 text-xs font-bold text-brand-pink underline"
                >
                  View all locations
                </button>
              </div>
            )}

            {/* 4. Bottom Resume Submission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {/* Submit Your Resume Card */}
              <div className="rounded-2xl bg-gradient-to-r from-[#FFF5F9] to-[#FAF7F2] border border-[#FAD2E1] p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#FAD2E1] flex items-center justify-center text-brand-pink shadow-sm shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-navy">
                      Submit Your Resume
                    </h3>
                    <p className="text-xs text-brand-navy/70 mt-1 max-w-sm">
                      Don&apos;t see the right fit? Send us your resume and we&apos;ll keep it on file for future opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end shrink-0 w-full sm:w-auto">
                  <button
                    onClick={handleGeneralResume}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] text-white py-2.5 px-5 rounded-full text-xs font-semibold shadow-pinkPill transition-all"
                  >
                    <span>Upload Resume</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-brand-navy/50 mt-1.5 text-center sm:text-right">
                    Accepted formats: PDF, DOC, DOCX (Max 5 MB)
                  </span>
                </div>
              </div>

              {/* Yoga Teacher Portfolio Card */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F0FDF4] to-[#FAF7F2] border border-[#BBF7D0] p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#BBF7D0] flex items-center justify-center text-brand-green shadow-sm shrink-0">
                    <Flower2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-navy">
                      Yoga Teacher Portfolio
                    </h3>
                    <p className="text-xs text-brand-navy/70 mt-1 max-w-sm">
                      Are you a certified yoga teacher? Share your portfolio with us. Tell us about your experience, specializations and style.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end shrink-0 w-full sm:w-auto">
                  <button
                    onClick={handlePortfolioUpload}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] text-white py-2.5 px-5 rounded-full text-xs font-semibold shadow-pinkPill transition-all"
                  >
                    <span>Upload Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-brand-navy/50 mt-1.5 text-center sm:text-right">
                    Accepted formats: PDF, DOC, DOCX (Max 5 MB)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pre-Footer Banner */}
        <PreFooterBanner type="career" />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Application Modal */}
      <JobApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={activeJob ? `${activeJob.title} ${activeJob.subtitle || ""}`.trim() : "General Resume Submission"}
        location={activeJob?.location || "Gurgaon / Dehradun"}
        isPortfolioSubmission={isPortfolioMode}
      />
      {/* Kin & Kayo Mascot Companion */}
      <MascotCompanion />
    </div>
  );
}
