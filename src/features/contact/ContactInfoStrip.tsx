/**
 * ContactInfoStrip.tsx
 * src/features/contact/ContactInfoStrip.tsx
 *
 * 4 columns with vertical dividers:
 *  1. Call / WhatsApp Us: 3 phone numbers
 *  2. Email Us: 2 official emails
 *  3. Our Timings: Weekday and Weekend schedules
 *  4. Follow Us: Social icons and @theyogastory handle
 *
 * Uses IconCircle + tone for each item.
 */
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconCircle } from "@/components/ui/IconCircle";
import { CONTACT_INFO_STRIP } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/site";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/layout/SocialIcons";

interface ContactInfoStripProps {
  className?: string;
}

export function ContactInfoStrip({ className }: ContactInfoStripProps) {
  const getSocialIcon = (id: string) => {
    switch (id) {
      case "ig":
        return <InstagramIcon className="w-3.5 h-3.5" />;
      case "fb":
        return <FacebookIcon className="w-3.5 h-3.5" />;
      case "yt":
        return <YoutubeIcon className="w-3.5 h-3.5" />;
      case "li":
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "rounded-panel bg-white/95 border border-tone-pink-border shadow-card overflow-hidden",
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-light",
        className
      )}
    >
      {CONTACT_INFO_STRIP.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={cn(
              "p-4 sm:p-5 lg:p-5.5 flex flex-row items-start text-left justify-start gap-3.5",
              // Second row border on tablet 2x2 grid
              idx >= 2 && "sm:border-t lg:border-t-0 border-border-light"
            )}
          >
            {/* Left: Icon Circle */}
            <IconCircle tone={item.tone} size="md" className="shrink-0 mt-0.5 shadow-soft">
              <Icon size={18} strokeWidth={2} />
            </IconCircle>

            {/* Right: Text content */}
            <div className="flex flex-col min-w-0">
              <h3 className="font-heading font-bold text-navy text-sm sm:text-base whitespace-nowrap">
                {item.title}
              </h3>

              {/* Lines / Links */}
              {item.lines && (
                <div className="flex flex-col gap-1 mt-1 text-xs sm:text-xs text-body">
                  {item.lines.map((line, i) => (
                    line.href ? (
                      <Link
                        key={i}
                        href={line.href}
                        className="font-medium hover:text-primary transition-colors inline-block whitespace-nowrap"
                      >
                        {line.text}
                      </Link>
                    ) : (
                      <span key={i} className="font-medium whitespace-nowrap">
                        {line.text}
                      </span>
                    )
                  ))}
                </div>
              )}

              {/* Social icons & handle */}
              {item.handle && (
                <div className="flex flex-col items-start gap-1.5 mt-1.5">
                  <div className="flex items-center gap-1.5">
                    {SOCIAL_LINKS.map((s) => (
                      <Link
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-cream-100 flex items-center justify-center text-navy hover:text-white hover:bg-primary transition-all duration-200 shadow-soft"
                        aria-label={s.label}
                      >
                        {getSocialIcon(s.id)}
                      </Link>
                    ))}
                  </div>

                  <span className="font-heading font-semibold text-navy/80 text-xs whitespace-nowrap mt-0.5">
                    {item.handle}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
