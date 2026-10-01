/**
 * MeetKinKayo.tsx
 * src/components/sections/MeetKinKayo.tsx
 *
 * Section 2 of /about page:
 *  - SectionHeading centered-with-leaves ("MEET KIN & KAYO")
 *  - CharacterProfileCard for Kin & Kayo
 *  - Handwritten paper note card: "Different personalities. Same beautiful journey."
 */
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { AccentText } from "@/components/ui/AccentText";
import { CharacterProfileCard } from "./CharacterProfileCard";
import { CHARACTERS, CHARACTERS_SECTION } from "@/data/about";

interface MeetKinKayoProps {
  className?: string;
}

export function MeetKinKayo({ className }: MeetKinKayoProps) {
  return (
    <section className={cn("py-12 md:py-20 relative bg-cream-50/50", className)} aria-labelledby="meet-kin-kayo-title">
      <Container size="lg">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 id="meet-kin-kayo-title" className="font-heading font-extrabold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <AccentText parts={CHARACTERS_SECTION.titleParts} />
          </h2>
        </div>

        {/* Character cards grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {CHARACTERS.map((profile) => (
            <CharacterProfileCard
              key={profile.name}
              profile={profile}
              className="h-full"
            />
          ))}

          {/* Centered / Overlapping handwritten kraft paper note on extra-wide screens */}
          <div
            className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div
              className="px-6 py-4 rounded-2xl shadow-card text-center border border-kraft-border bg-kraft-bg"
              style={{
                transform: "rotate(-3deg)",
                maxWidth: "240px",
              }}
            >
              <p className="type-script text-ink text-base lg:text-lg leading-snug font-medium whitespace-pre-line">
                {CHARACTERS_SECTION.paperNote}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile and tablet handwritten paper note */}
        <div className="xl:hidden mt-6 flex justify-center" aria-hidden="true">
          <div
            className="px-6 py-3.5 rounded-xl shadow-soft text-center border border-kraft-border bg-kraft-bg max-w-sm"
            style={{
              transform: "rotate(-2deg)",
            }}
          >
            <p className="type-script text-ink text-base leading-snug font-medium">
              {CHARACTERS_SECTION.paperNote}
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}
