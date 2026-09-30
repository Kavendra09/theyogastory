/**
 * CharacterProfileCard.tsx
 * src/components/sections/CharacterProfileCard.tsx
 *
 * Character profile card for Kin and Kayo on the /about page.
 * Features:
 *  - Character avatar inside a tone circle with decorative badge
 *  - Script name in Playfair / Caveat typography
 *  - Role ("The Little Yoga Explorer" / "The Little Mindfulness Mentor")
 *  - Warm narrative description
 *  - Handwritten script quote at bottom
 */
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TONE_MAP } from "@/theme/tones";
import { ScriptNote } from "@/components/ui/Atoms";
import type { CharacterProfile } from "@/data/about";

interface CharacterProfileCardProps {
  profile: CharacterProfile;
  className?: string;
}

export function CharacterProfileCard({ profile, className }: CharacterProfileCardProps) {
  const toneMap = TONE_MAP[profile.tone];

  return (
    <div
      className={cn(
        "relative rounded-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300",
        "bg-white/90 backdrop-blur-md border shadow-card hover:shadow-glass hover:-translate-y-1",
        profile.tone === "pink" ? "border-tone-pink-border" : "border-tone-blue-border",
        className
      )}
    >
      {/* Decorative top corner accent */}
      <div
        className={cn(
          "absolute -top-3 right-6 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm",
          toneMap.chip
        )}
      >
        {profile.badge}
      </div>

      <div>
        {/* Top: Avatar in Tone Circle + Name Lockup */}
        <div className="flex items-center gap-4 sm:gap-5 mb-5">
          {/* Avatar circle */}
          <div
            className={cn(
              "relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0",
              "p-1 border-2 shadow-soft ring-4 ring-white/80",
              profile.tone === "pink"
                ? "bg-tone-pink-bg border-tone-pink-border"
                : "bg-tone-blue-bg border-tone-blue-border"
            )}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-cream-50">
              <Image
                src={profile.avatarImage}
                alt={profile.name}
                fill
                sizes="96px"
                className={cn(
                  "object-cover",
                  profile.name === "Kin" ? "object-[36%_38%]" : "object-[64%_35%]"
                )}
              />
            </div>
          </div>

          {/* Name & Role */}
          <div className="flex flex-col">
            <h3 className="type-script text-3xl sm:text-4xl text-ink leading-tight">
              {profile.name}
            </h3>
            <p className={cn("text-xs sm:text-sm font-semibold tracking-wide", toneMap.fg)}>
              {profile.role}
            </p>
          </div>
        </div>

        {/* Description body */}
        <p className="type-body text-body text-sm sm:text-base leading-relaxed mb-6">
          {profile.description}
        </p>
      </div>

      {/* Script quote at bottom */}
      <div
        className={cn(
          "pt-4 border-t rounded-xl p-3 text-center sm:text-left",
          profile.tone === "pink" ? "bg-tone-pink-bg/50 border-tone-pink-border/60" : "bg-tone-blue-bg/50 border-tone-blue-border/60"
        )}
      >
        <ScriptNote
          rotate={profile.tone === "pink" ? -2 : 2}
          className={cn("text-base sm:text-lg font-medium", toneMap.fg)}
        >
          {profile.quote}
        </ScriptNote>
      </div>
    </div>
  );
}
