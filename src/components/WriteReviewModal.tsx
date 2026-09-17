"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, CheckCircle2, ExternalLink } from "lucide-react";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: (review: { name: string; rating: number; quote: string }) => void;
}

export default function WriteReviewModal({
  isOpen,
  onClose,
  onReviewSubmitted,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onReviewSubmitted) {
      onReviewSubmitted({
        name: name || "Verified Member",
        rating,
        quote: reviewText,
      });
    }
    setIsSuccess(true);
  };

  const handleOpenGoogle = () => {
    window.open("https://maps.google.com/?q=The+Yoga+Story+Studio", "_blank");
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setName("");
    setReviewText("");
    setRating(5);
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
            className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#FAD2E1] p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-cream-200 text-brand-navy/70 hover:text-brand-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center mx-auto mb-4 border border-brand-greenBorder">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">
                  Thank You for Your Review!
                </h3>
                <p className="text-xs text-brand-navy/70 max-w-xs mx-auto mb-6">
                  Your feedback brings immense joy to Kin, Kayo, and our whole studio team.
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleOpenGoogle}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-[#D81B60] text-white py-2.5 px-6 rounded-full text-xs font-semibold shadow-pinkPill transition-all"
                  >
                    <span>Post Also on Official Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={resetAndClose}
                    className="text-xs text-brand-navy/60 hover:text-brand-navy py-1.5 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#4285F4] font-bold text-xs shadow-sm border border-gray-100">
                    G
                  </span>
                  <span className="text-xs font-bold text-brand-navy/80 uppercase tracking-wider">
                    Google Review
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy">
                  Share Your Yoga Story
                </h3>
                <p className="text-xs text-brand-navy/65 mt-1 mb-5">
                  How has your practice transformed your mind, body, and breath?
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Star Picker */}
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-[#E5DEC7]">
                    <div className="flex items-center gap-2 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              (hoverRating || rating) >= star
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-brand-navy/70">
                      {rating === 5 ? "5.0 - Life Changing!" : `${rating}.0 Stars`}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-sm text-brand-navy focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy/80 mb-1">
                      Your Review *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your classes, instructors, or the peaceful atmosphere..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5DEC7] text-xs text-brand-navy focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-pink to-[#D81B60] hover:from-[#D81B60] hover:to-[#AD1457] text-white py-3 px-6 rounded-full text-sm font-semibold shadow-pinkPill hover:shadow-pinkHover transition-all mt-2"
                  >
                    Submit Review
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
