/**
 * SocialIcons.tsx
 *
 * Inline SVG icons for Instagram, Facebook, YouTube, LinkedIn.
 * Server-renderable — no "use client" needed.
 * Used by SiteHeader, SiteFooter.
 */
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/data/site";

interface SvgProps { className?: string }

export function InstagramIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={cn("w-4 h-4", className)} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={cn("w-4 h-4", className)} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={cn("w-4 h-4", className)} aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export function LinkedinIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={cn("w-4 h-4", className)} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const iconMap = {
  instagram: InstagramIcon,
  facebook:  FacebookIcon,
  youtube:   YoutubeIcon,
  linkedin:  LinkedinIcon,
} as const;

/* ── SocialIconLink — one linked icon ───────────────────────────── */
interface SocialIconLinkProps {
  social: SocialLink;
  size?: "sm" | "md";
  className?: string;
}
export function SocialIconLink({ social, size = "md", className }: SocialIconLinkProps) {
  const Icon = iconMap[social.icon];
  const sizeClasses = size === "sm"
    ? "w-8 h-8 [&>svg]:w-3.5 [&>svg]:h-3.5"
    : "w-9 h-9 [&>svg]:w-4 [&>svg]:h-4";

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "bg-white border border-border-light",
        "text-navy/70 hover:text-primary hover:border-primary",
        "hover:scale-105 transition-all duration-200",
        "shadow-soft focus-visible:outline-2 focus-visible:outline-primary",
        sizeClasses,
        className
      )}
    >
      <Icon />
    </a>
  );
}

/* ── SocialIconRow — full row ────────────────────────────────────── */
interface SocialIconRowProps {
  links: SocialLink[];
  size?: "sm" | "md";
  className?: string;
}
export function SocialIconRow({ links, size = "md", className }: SocialIconRowProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((s) => (
        <SocialIconLink key={s.id} social={s} size={size} />
      ))}
    </div>
  );
}
