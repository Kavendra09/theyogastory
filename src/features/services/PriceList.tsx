/**
 * PriceList.tsx
 * src/features/services/PriceList.tsx
 *
 * CheckItem + price rows list component.
 * Used on Home Yoga & Online Yoga panels.
 */
import { cn } from "@/lib/utils";
import type { Tone } from "@/theme/tones";
import { CheckItem } from "@/components/ui/Rating";

export interface PriceListItem {
  name: string;
  price?: string;
  period?: string;
  checked?: boolean;
}

interface PriceListProps {
  items: PriceListItem[] | string[];
  tone?: Extract<Tone, "green" | "pink" | "blue" | "purple">;
  className?: string;
}

export function PriceList({ items, tone = "green", className }: PriceListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)} role="list">
      {items.map((item, i) => {
        const isString = typeof item === "string";
        const name = isString ? item : item.name;
        const price = !isString ? item.price : undefined;
        const period = !isString ? item.period : undefined;

        return (
          <li
            key={i}
            className="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-card bg-white/70 border border-black/5 shadow-soft transition-all hover:bg-white"
          >
            <CheckItem tone={tone} className="gap-2.5 font-medium text-ink text-sm sm:text-base">
              {name}
            </CheckItem>

            {price && (
              <div className="text-right shrink-0">
                <span className="font-heading font-bold text-ink text-sm sm:text-base">
                  {price}
                </span>
                {period && (
                  <span className="text-2xs text-muted block font-normal leading-none mt-0.5">
                    {period}
                  </span>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
