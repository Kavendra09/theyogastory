"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle2, FileText, ArrowRight, Loader2 } from "lucide-react";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
  location?: string;
  isPortfolioSubmission?: boolean;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle = "General Application",
  location = "Gurgaon / Dehradun",
  isPortfolioSubmission = false,
}: JobApplicationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [experience, setExperience] = useState("0-2 years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [note, setNote] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setSelectedFile(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setNote("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#FAD2E1] p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-cream-200 text-brand-navy/70 hover:text-brand-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center mx-auto mb-4 border border-brand-greenBorder">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">
                  Application Received!
                </h3>
                <p className="text-sm text-brand-navy/70 max-w-sm mx-auto mb-6">
                  Thank you, <span className="font-semibold text-brand-navy">{fullName || "Seeker"}</span>! Our hiring team will review your application for{" "}
                  <span className="font-semibold text-brand-pink">{jobTitle}</span> and get back to you soon.
                </p>
                <button
                  onClick={resetAndClose}
                  className="bg-brand-pink hover:bg-brand-pinkHover text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-pinkPill transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-pinkLight text-brand-pink text-xs font-semibold uppercase tracking-wider mb-2 border border-brand-pinkBorder">
                    {isPortfolioSubmission ? "Teacher Portfolio" : "Career Opportunity"}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy">
                    {isPortfolioSubmission ? "Submit Yoga Teacher Portfolio" : `Apply for ${jobTitle}`}
                  </h3>
                  <p className="text-xs text-brand-navy/65 mt-1">
                    Be a part of The Yoga Story family. We&apos;d love to know more about you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sen"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                        Preferred Location
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink"
                      >
                        <option value="Gurgaon">Gurgaon Centre</option>
                        <option value="Dehradun">Dehradun Sanctuary</option>
                        <option value="Either / Remote">Open to Both / Remote</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                        Relevant Experience
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink"
                      >
                        <option value="Fresher / < 1 year">Fresher / Under 1 year</option>
                        <option value="1 - 3 years">1 - 3 years</option>
                        <option value="3 - 5 years">3 - 5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      {isPortfolioSubmission ? "Instagram / Teaching Video / Portfolio Link" : "LinkedIn / Portfolio Link (Optional)"}
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink transition-all"
                    />
                  </div>

                  {/* Resume upload box */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      Upload Resume / Portfolio File (PDF, DOC, DOCX, Max 5MB) *
                    </label>
                    <div className="relative border-2 border-dashed border-[#FAD2E1] hover:border-brand-pink rounded-2xl p-4 text-center bg-white/70 hover:bg-brand-pinkLight/30 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required={!selectedFile}
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {selectedFile ? (
                        <div className="flex items-center justify-center gap-2 text-brand-pink text-xs font-semibold">
                          <FileText className="w-4 h-4" />
                          <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                          <span className="text-brand-navy/50">
                            ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-brand-navy/60">
                          <UploadCloud className="w-6 h-6 text-brand-pink mb-0.5" />
                          <p className="text-xs font-medium">
                            <span className="text-brand-pink font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-[10px] text-brand-navy/40">PDF, DOC, DOCX up to 5MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      Short Note / Introduction (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us a little bit about your passion for yoga and mindfulness..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-white border border-[#E5DEC7] text-xs text-brand-navy focus:outline-none focus:border-brand-pink transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] hover:to-[#AD1457] text-white py-3 px-6 rounded-full text-sm font-semibold shadow-pinkPill hover:shadow-pinkHover flex items-center justify-center gap-2 transition-all duration-200 mt-4 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
