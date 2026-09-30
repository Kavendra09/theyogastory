"use client";
/**
 * SiteHeader.tsx
 *
 * Two variants driven by the `variant` prop:
 *
 *  "floating"  — translucent glass pill container centred in the page,
 *                sticky, blurs on scroll. Used on Home / About / Services.
 *                Desktop: logo | nav links (centered) | CTA pill.
 *
 *  "bar"       — solid white full-width bar, sticky, thin border-bottom.
 *                Used on Testimonials / Career / Contact.
 *                Desktop: logo wordmark | nav links | CTA pill.
 *
 * Active link = text-primary + 2px pink underline (via framer-motion layoutId).
 * Mobile: shows logo + CTA pill + hamburger → MobileMenu.
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BRAND, CTA_LABEL, CTA_HREF } from "@/data/site";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

export type HeaderVariant = "floating" | "bar";

interface SiteHeaderProps {
  variant?: HeaderVariant;
  /** Hide the text wordmark on desktop (Home hero hides it by design) */
  showWordmark?: boolean;
}

export function SiteHeader({ variant = "floating", showWordmark = true }: SiteHeaderProps) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const isHome = pathname === "/";
  const hideWordmarkOnDesktop = !showWordmark || (isHome && variant === "floating");

  /* ── Computed header container classes ─────────────────────────── */
  const headerClasses = cn(
    "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-none",
    variant === "floating"
      ? cn(
          scrolled
            ? "py-2 bg-white/95 backdrop-blur-xl shadow-soft"
            : "py-3 bg-white/80 backdrop-blur-md"
        )
      : cn(
          "bg-white shadow-soft",
          scrolled ? "py-2" : "py-3"
        )
  );

  return (
    <>
      <header className={headerClasses} role="banner">
        <Container>
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo + Wordmark ─────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-primary rounded-lg"
              aria-label={`${BRAND.name} – home`}
            >
              {/* Logo badge */}
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shrink-0 shadow-soft
                              ring-1 ring-white/60 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white/40">
                <Image
                  src={BRAND.logo}
                  alt=""
                  width={44}
                  height={44}
                  priority
                  className="object-contain w-11 h-11"
                />
              </div>

              {/* Text wordmark */}
              {showWordmark && (
                <div className={cn("flex flex-col", hideWordmarkOnDesktop && "lg:hidden")}>
                  <span className="font-heading text-xs sm:text-sm lg:text-md font-bold text-navy leading-none tracking-tight">
                    {BRAND.name.toUpperCase()}
                  </span>
                  <span className="font-heading italic text-[9px] sm:text-micro text-navy/60 tracking-wide mt-0.5 whitespace-nowrap">
                    {BRAND.tagline}
                  </span>
                </div>
              )}
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────── */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-0.5"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href, link.exact);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-primary",
                      active
                        ? "text-primary font-semibold"
                        : "text-navy/75 hover:text-primary"
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ─────────────────────────────────────── */}
            <Link
              href={CTA_HREF}
              id="header-cta"
              className="hidden lg:inline-flex btn-primary items-center gap-2 h-10 px-6 text-sm font-semibold shrink-0"
            >
              {CTA_LABEL}
              <ArrowRight size={15} />
            </Link>

            {/* ── Mobile: compact CTA + Hamburger ─────────────────── */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href={CTA_HREF}
                className="btn-primary inline-flex items-center gap-1.5 h-8 sm:h-9 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold whitespace-nowrap"
              >
                <span>Start Your Yoga Story</span>
                <ArrowRight size={13} className="shrink-0" />
              </Link>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all shrink-0",
                  "text-navy hover:text-primary hover:bg-primary-muted",
                  "focus-visible:outline-2 focus-visible:outline-primary"
                )}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={20} />
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile drawer (client, animated) */}
      <div id="mobile-menu">
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}
