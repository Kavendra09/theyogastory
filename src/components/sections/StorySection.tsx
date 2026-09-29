/**
 * StorySection.tsx
 * src/components/sections/StorySection.tsx
 *
 * "More Than Yoga. It's a Journey Together." section on the Home page.
 *
 * Structure:
 *   SectionHeading (centered-with-leaves)
 *   ├─ eyebrow "THE YOGA STORY"
 *   ├─ titleParts with accent
 *   Two-paragraph body text (centered, max-w-3xl)
 *   FeatureCardRow — responsive grid of 5 FeatureCards
 *
 * Server component — no interactivity needed.
 *
 * Usage:
 *   <StorySection />
 */
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Container } from "@/components/ui/Container";
import { STORY_SECTION, FEATURE_CARDS } from "@/data/home";

interface StorySectionProps {
  className?: string;
}

export function StorySection({ className }: StorySectionProps) {
  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 relative overflow-hidden", className)}
      aria-labelledby="story-heading"
    >
      {/* Soft background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(214,51,108,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col gap-10 md:gap-12">

        {/* Heading */}
        <SectionHeading
          id="story-heading"
          variant="centered-with-leaves"
          eyebrow={STORY_SECTION.eyebrow}
          titleParts={STORY_SECTION.titleParts}
        />

        {/* Body paragraphs */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          {STORY_SECTION.body.map((para, i) => (
            <p key={i} className="type-body text-body leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Feature card row — 2 cols mobile, 3 cols md, 5 cols xl */}
        <div
          className={cn(
            "grid gap-4",
            "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
          )}
          role="list"
          aria-label="Why choose The Yoga Story"
        >
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} role="listitem">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                tone={card.tone}
                className="h-full"
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
