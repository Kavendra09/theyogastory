"use client";
/**
 * MobileMenu.tsx
 *
 * Slide-down mobile navigation drawer.
 * Receives isOpen + onClose from SiteHeader.
 * Links from NAV_LINKS; CTA button at bottom.
 */
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BRAND, CTA_LABEL, CTA_HREF, SOCIAL_LINKS } from "@/data/site";
import { SocialIconRow } from "./SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer — slides in from top */}
          <motion.div
            key="mobile-drawer"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className={cn(
              "fixed top-0 left-0 right-0 z-50 lg:hidden",
              "bg-white/98 backdrop-blur-xl shadow-glass",
              "border-b border-border-light"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border-light">
              <Link href="/" onClick={onClose} className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-soft flex items-center justify-center bg-white/40">
                  <Image
                    src={BRAND.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-navy leading-none">
                    {BRAND.name.toUpperCase()}
                  </span>
                  <span className="font-heading italic text-micro text-navy/60 mt-0.5">
                    {BRAND.tagline}
                  </span>
                </div>
              </Link>

              <button
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-primary-muted text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-4 py-4" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href, link.exact);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all",
                          "min-h-[44px]",          // 44px tap target
                          active
                            ? "bg-primary-muted text-primary font-semibold"
                            : "text-navy hover:bg-cream-start/60 hover:text-primary"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                        {active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA + Socials */}
            <div className="px-5 pb-6 pt-2 flex flex-col gap-4 border-t border-border-light">
              <Link
                href={CTA_HREF}
                onClick={onClose}
                className="btn-primary w-full flex items-center justify-center gap-2 h-12 text-sm font-semibold"
              >
                {CTA_LABEL}
                <ArrowRight size={16} />
              </Link>

              <div className="flex items-center justify-between">
                <span className="type-small">Follow us</span>
                <SocialIconRow links={SOCIAL_LINKS} size="sm" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
