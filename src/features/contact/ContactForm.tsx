"use client";
/**
 * ContactForm.tsx
 * src/features/contact/ContactForm.tsx
 *
 * Contact form with react-hook-form + zod validation:
 *  - Full Name*
 *  - Email Address*
 *  - Phone Number
 *  - Subject* (select)
 *  - Your Message* (textarea)
 *  - "Send Message →" full-width pill button
 *  - Inline error feedback
 *  - Success state notification
 *  - Submits to /api/contact stub
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input, Select, Textarea } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { SUBJECT_OPTIONS } from "@/data/contact";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitSuccess(json.message ?? "Thank you for reaching out! We will contact you soon.");
        reset();
      } else {
        setSubmitError(json.message ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-panel bg-white/95 border border-tone-pink-border p-6 sm:p-8 md:p-10 shadow-card",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-tight">
          Send Us a Message
        </h3>
        <p className="text-muted text-xs sm:text-sm mt-1">
          Have a question or want to get started? Fill out the form and we will reach out shortly.
        </p>
      </div>

      {/* Success Banner */}
      {submitSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-start gap-3 shadow-soft">
          <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-sm">Message Sent Successfully!</h4>
            <p className="text-xs text-emerald-700 mt-0.5">{submitSuccess}</p>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {submitError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 flex items-start gap-3 shadow-soft">
          <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-sm">Submission Error</h4>
            <p className="text-xs text-red-700 mt-0.5">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5" noValidate>
        {/* Full Name */}
        <Input
          label="Full Name"
          required
          placeholder="e.g. Priya Sharma"
          error={errors.name?.message}
          {...register("name")}
        />

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            required
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        {/* Subject Select */}
        <Select
          label="Subject"
          required
          options={SUBJECT_OPTIONS}
          error={errors.subject?.message}
          {...register("subject")}
        />

        {/* Message */}
        <Textarea
          label="Your Message"
          required
          rows={4}
          placeholder="Tell us about your wellness goals, questions or requirements..."
          error={errors.message?.message}
          {...register("message")}
        />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full justify-center h-12 text-sm sm:text-base font-bold shadow-pill hover:scale-[1.01] transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin mr-2" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
