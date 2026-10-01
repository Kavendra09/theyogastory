"use client";
/**
 * ChatWidget.tsx
 *
 * Fixed bottom-right floating WhatsApp chat widget.
 * Matches HomeScreen.jpeg reference screenshot:
 *  - Overlapping Kin + Kayo mascot avatars with working crops
 *  - "Ready to begin?" speech bubble pill
 *  - WhatsApp action button with brand styling
 */
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/site";

/* WhatsApp SVG icon */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  const waUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMsg)}`;

  return (
    <div
      className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="WhatsApp chat widget"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-card"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className={cn(
              "card p-4 w-[250px] sm:w-[270px] shadow-glass border-primary/20",
              "flex flex-col gap-3 bg-white/95 backdrop-blur-md"
            )}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              {/* Overlapping avatars */}
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-soft z-10 bg-cream-100">
                  <Image
                    src="/images/kin-kayo-home-hero.jpg"
                    alt="Kin"
                    fill
                    sizes="40px"
                    className="object-cover object-[36%_38%]"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-soft -ml-3 bg-cream-100">
                  <Image
                    src="/images/kin-kayo-home-hero.jpg"
                    alt="Kayo"
                    fill
                    sizes="40px"
                    className="object-cover object-[64%_35%]"
                  />
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-primary-muted transition-colors"
                aria-label="Close chat widget"
              >
                <X size={13} />
              </button>
            </div>

            {/* Copy */}
            <div>
              <p className="font-heading font-bold text-ink text-sm leading-snug">
                Ready to begin your Yoga Story?
              </p>
              <p className="type-small mt-1 text-muted text-xs">
                Kin &amp; Kayo are here to help — chat with us on WhatsApp!
              </p>
            </div>

            {/* WA button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center gap-2",
                "min-h-[44px] h-11 rounded-pill px-4",
                "bg-[#25D366] text-white text-sm font-semibold",
                "hover:bg-[#1EBE5D] transition-colors shadow-soft",
                "focus-visible:outline-2 focus-visible:outline-whatsapp"
              )}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB trigger + Resting Mascot Teaser */}
      <div className="flex items-center gap-2">
        {/* Resting Mascot Teaser matching HomeScreen.jpeg */}
        {!open && (
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer hidden sm:flex items-center gap-2 group transition-all"
            aria-hidden="true"
          >
            {/* Kin & Kayo mini avatars */}
            <div className="flex flex-col -space-y-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-soft bg-cream-100 z-10 transition-transform group-hover:scale-105">
                <Image
                  src="/images/kin-kayo-home-hero.jpg"
                  alt="Kin"
                  fill
                  sizes="32px"
                  className="object-cover object-[36%_38%]"
                />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-soft bg-cream-100 transition-transform group-hover:scale-105">
                <Image
                  src="/images/kin-kayo-home-hero.jpg"
                  alt="Kayo"
                  fill
                  sizes="32px"
                  className="object-cover object-[64%_35%]"
                />
              </div>
            </div>

            {/* Speech bubble pill: "Ready to begin?" */}
            <div className="bg-white/95 backdrop-blur-sm border border-border-soft px-3 py-1.5 rounded-full shadow-soft group-hover:shadow-card transition-all">
              <span className="text-xs font-semibold text-ink whitespace-nowrap">
                Ready to begin?
              </span>
            </div>
          </div>
        )}

        {/* WhatsApp Circular FAB */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center",
            "bg-[#25D366] text-white shadow-pill",
            "transition-colors hover:bg-[#1EBE5D]",
            "focus-visible:outline-2 focus-visible:outline-whatsapp focus-visible:outline-offset-2"
          )}
          aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <WhatsAppIcon className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
