/**
 * (floating)/layout.tsx
 *
 * Route-group layout for: Home (/), About (/about), Services (/services)
 * Header: floating glass pill variant, wordmark always shown.
 * Footer: minimal strip.
 *
 * Note: The Home page hides the wordmark text via CSS on lg+
 * (the logo badge alone is used) — this is handled via the
 * showWordmark={false} prop on the home page's override header,
 * but since Next.js layouts are shared, we use a client wrapper
 * on the home page itself if needed. For simplicity, we show the
 * wordmark everywhere and let the home PageHero overlap naturally.
 */
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function FloatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader variant="floating" showWordmark={true} />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <SiteFooter variant="minimal" />
    </div>
  );
}
