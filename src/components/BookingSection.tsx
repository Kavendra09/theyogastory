"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Calendar,
  User,
  Send,
  AlertCircle,
  Heart,
} from "lucide-react";
import { STUDIO_INFO, PROGRAMS_DATA } from "@/lib/data";

interface BookingSectionProps {
  preselectedClass?: string;
}

export default function BookingSection({ preselectedClass }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredClass: preselectedClass || "Hatha & Vinyasa Yoga",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.preferredClass) errs.preferredClass = "Please choose a class or program.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredClass: "Hatha & Vinyasa Yoga",
        preferredDate: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="booking" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="organic-shape-1 w-96 h-96 top-0 right-0 bg-terracotta-200/25" />
      <div className="organic-shape-2 w-96 h-96 bottom-0 left-0 bg-sage-200/25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-terracotta-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserve Your Sanctuary Spot</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight mb-5">
            Begin Your Sacred Story Today
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Reserve your complimentary introductory consultation or trial class. Our facilitators will connect with you within 24 hours to confirm your mat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-cream-50 p-8 sm:p-10 rounded-3xl border border-earth-200 shadow-soft"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 mx-auto flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-charcoal-900 mb-3">
                  Reservation Received!
                </h3>
                <p className="text-sm sm:text-base text-charcoal-700 max-w-md mx-auto mb-8">
                  Namaste. We have received your booking inquiry. Our studio coordinator will reach out via WhatsApp & email to confirm your preferred session time.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-semibold px-6 py-3 rounded-full text-xs transition-all shadow-md"
                >
                  Book Another Session
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="booking-name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="e.g. Maya Sharma"
                        className={`w-full pl-10 pr-4 py-3 bg-cream-100/80 border rounded-xl text-sm text-charcoal-900 placeholder:text-charcoal-600 focus:outline-none focus:ring-2 focus:bg-cream-50 transition-all ${
                          errors.name
                            ? "border-red-400 focus:ring-red-400"
                            : "border-earth-200 focus:border-sage-500 focus:ring-sage-200"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="booking-email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="maya@example.com"
                        className={`w-full pl-10 pr-4 py-3 bg-cream-100/80 border rounded-xl text-sm text-charcoal-900 placeholder:text-charcoal-600 focus:outline-none focus:ring-2 focus:bg-cream-50 transition-all ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400"
                            : "border-earth-200 focus:border-sage-500 focus:ring-sage-200"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        id="booking-phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 bg-cream-100/80 border rounded-xl text-sm text-charcoal-900 placeholder:text-charcoal-600 focus:outline-none focus:ring-2 focus:bg-cream-50 transition-all ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-400"
                            : "border-earth-200 focus:border-sage-500 focus:ring-sage-200"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Preferred Class */}
                  <div>
                    <label
                      htmlFor="booking-class"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2"
                    >
                      Preferred Class / Program *
                    </label>
                    <div className="relative">
                      <select
                        id="booking-class"
                        value={formData.preferredClass}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredClass: e.target.value });
                          if (errors.preferredClass) setErrors({ ...errors, preferredClass: "" });
                        }}
                        className="w-full px-4 py-3 bg-cream-100/80 border border-earth-200 rounded-xl text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-500 transition-all"
                      >
                        {PROGRAMS_DATA.map((prog) => (
                          <option key={prog.id} value={prog.title}>
                            {prog.title}
                          </option>
                        ))}
                        <option value="Private Home Session">Private Home Session</option>
                        <option value="Corporate Wellness Inquiry">
                          Corporate Wellness Inquiry
                        </option>
                        <option value="Free Introductory Trial">
                          Free Introductory Trial Class
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message / Health Goals */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2"
                  >
                    Your Health Goals or Special Inquiries (Optional)
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about any previous injuries, flexibility goals, or preferred schedule..."
                    className="w-full px-4 py-3 bg-cream-100/80 border border-earth-200 rounded-xl text-sm text-charcoal-900 placeholder:text-charcoal-600 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-500 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="booking-submit-button"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-cream-50 font-semibold py-4 px-8 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Securing Your Slot...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Class Reservation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Studio Information & Direct WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Kin & Kayo Welcoming Note */}
            <div className="bg-gradient-to-r from-[#FFF5F9] to-[#FAF7F2] p-5 rounded-3xl border border-[#FAD2E1] shadow-sm flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white border border-[#FAD2E1] shrink-0 p-0.5 shadow-sm">
                <Image
                  src="/images/yoga-story-3d-logo.jpg"
                  alt="Kin & Kayo Mascot Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-script text-base font-bold text-brand-pink">Kin & Kayo say:</span>
                  <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink/30" />
                </div>
                <p className="text-xs text-brand-navy/80 leading-snug">
                  &ldquo;Don&apos;t worry if you&apos;ve never stepped on a yoga mat before. We can&apos;t wait to welcome you home!&rdquo;
                </p>
              </div>
            </div>

            {/* Studio Info Card */}
            <div className="bg-cream-50 p-8 rounded-3xl border border-earth-200 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6 pb-4 border-b border-earth-200">
                Studio & Sanctuary Hours
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-0.5">
                    Location
                  </h4>
                  <p className="text-sm text-charcoal-700 leading-snug">
                    {STUDIO_INFO.address}
                  </p>
                  <a
                    href={STUDIO_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-terracotta-600 hover:underline inline-block mt-1"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-1.5">
                    Practice Hours
                  </h4>
                  <div className="space-y-1.5 text-xs text-charcoal-700">
                    {STUDIO_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-earth-100 pb-1">
                        <span className="font-medium text-charcoal-800">{h.days}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center gap-3 text-xs font-medium text-charcoal-700 hover:text-terracotta-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sage-600" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-3 text-xs font-medium text-charcoal-700 hover:text-terracotta-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sage-600" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Chat Box */}
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-7 rounded-3xl text-cream-50 shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Immediate Assistance</span>
                </div>
                <h4 className="font-serif text-2xl font-bold mb-2">
                  Need a quick recommendation?
                </h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed mb-5">
                  Chat directly with our lead facilitator on WhatsApp to determine which yoga class or instructor best matches your current body condition.
                </p>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Namaste,%20I%20would%20like%20to%20know%20more%20about%20classes%20at%20The%20Yoga%20Story`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-cta-button"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-6 py-3.5 rounded-full text-xs transition-all shadow-md w-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 98450 12844)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
