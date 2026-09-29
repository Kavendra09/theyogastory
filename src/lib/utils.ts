/**
 * src/lib/utils.ts
 *
 * Shared utility helpers used across all components.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — merge Tailwind class strings safely.
 * Handles conditional classes, arrays, and conflicting utilities.
 *
 * @example
 *   cn("px-4 py-2", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * formatPrice() — format Indian Rupee amounts as ₹X,XXX
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * clamp() — numeric clamp helper
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
