/**
 * SiteFooter.tsx
 *
 * Shared footer strip, server component.
 *
 * variant="minimal"  — single-row strip:
 *   [People · Practice · Purpose / A Brighter Tomorrow] [Socials] [More Breathe Belong ♡]
 *   Used on: Home, Services, Career.
 *
 * variant="full"  — two-row:
 *   Top: wordmark + nav links + Privacy/Terms
 *   Bottom: same strip as minimal
 *   Used on: Contact (tablet), Testimonials.
 *
 * All copy from site.ts.
 */
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BRAND, SOCIAL_LINKS, FOOTER_LEFT, FOOTER_RIGHT,
  FOOTER_LEGAL, COPYRIGHT, NAV_LINKS,
} from "@/data/site";
import { SocialIconRow } from "./SocialIcons";
import { Container } from "@/components/ui/Container";
import { LotusIcon } from "@/components/ui/Atoms";

export type FooterVariant = "minimal" | "full";

interface SiteFooterProps {
  variant?: FooterVariant;
  className?: string;
}

/* ── Shared bottom strip ────────────────────────────────────────── */
function FooterStrip() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <span className="type-eyebrow text-navy/70">{FOOTER_LEFT[0]}</span>
        <span className="text-2xs text-navy/50 font-medium mt-0.5">{FOOTER_LEFT[1]}</span>
      </div>

      {/* Center — socials */}
      <SocialIconRow links={SOCIAL_LINKS} size="sm" />

      {/* Right */}
      <div className="flex items-center gap-1.5">
        <span className="type-script text-navy/80 text-xl">{FOOTER_RIGHT}</span>
        <Heart className="w-3.5 h-3.5 text-primary fill-primary/20 stroke-[2.5]" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ── Full footer top area ───────────────────────────────────────── */
function FooterTop() {
  return (
    <div className="pb-8 mb-8 border-b border-border-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Brand lockup */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-soft
                          ring-1 ring-white/60 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white/40">
            <Image src={BRAND.logo} alt="" width={48} height={48} className="object-contain w-12 h-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-bold text-navy leading-none tracking-tight">
              {BRAND.name.toUpperCase()}
            </span>
            <span className="font-heading italic text-2xs text-navy/60 tracking-wide mt-0.5">
              {BRAND.tagline}
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-navy/65 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Legal */}
        <div className="flex items-center gap-4 shrink-0">
          {FOOTER_LEGAL.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-2xs text-navy/50 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────────── */
export function SiteFooter({ variant = "minimal", className }: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-cream-start border-t border-border-light relative overflow-hidden",
        variant === "full" ? "py-10" : "py-5",
        className
      )}
      role="contentinfo"
    >
      {/* Decorative leaf blobs */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 pointer-events-none -rotate-12" aria-hidden="true">
        <LotusIcon className="w-full h-full text-tone-green-fg" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none rotate-12 scale-x-[-1]" aria-hidden="true">
        <LotusIcon className="w-full h-full text-tone-green-fg" />
      </div>

      <Container className="relative z-10">
        {variant === "full" && <FooterTop />}
        <FooterStrip />

        {variant === "full" && (
          <p className="mt-6 text-center text-2xs text-navy/40">{COPYRIGHT}</p>
        )}
      </Container>
    </footer>
  );
}
