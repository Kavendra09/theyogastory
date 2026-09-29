/**
 * (bar)/layout.tsx
 *
 * Route-group layout for: Testimonials (/testimonials), Career (/career), Contact (/contact)
 * Header: bar variant — solid white full-width, no blur
 * Footer: full variant — includes top nav + wordmark + legal + strip + copyright
 */
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader variant="bar" showWordmark={true} />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <SiteFooter variant="full" />
    </div>
  );
}
