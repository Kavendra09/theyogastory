/**
 * Atoms.tsx
 *
 * Small typography / decorative atoms:
 *   - Eyebrow       — uppercase tracking label in terracotta
 *   - ScriptNote    — Caveat handwritten text, optional ♡, optional rotate
 *   - LeafSprig     — inline SVG leaf decoration, mirrored prop
 *   - LotusIcon     — inline SVG lotus flower
 *   - WaveDivider   — full-width SVG wave, flip + tone props
 *
 * All server-renderable (no "use client").
 *
 * Usage:
 *   <Eyebrow>People · Practice · Purpose</Eyebrow>
 *   <ScriptNote rotate={-6} heart>More Breathe Belong</ScriptNote>
 *   <LeafSprig className="w-8" />
 *   <LeafSprig mirrored className="w-8" />
 *   <LotusIcon className="w-10 h-10 text-primary" />
 *   <WaveDivider tone="pink" flip />
 */
import { cn } from "@/lib/utils";
import type { Tone } from "@/theme/tones";

/* ── Eyebrow ─────────────────────────────────────────────────── */
interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("type-eyebrow", className)} aria-label="section label">
      {children}
    </p>
  );
}

/* ── ScriptNote ──────────────────────────────────────────────── */
interface ScriptNoteProps {
  children: React.ReactNode;
  rotate?: number;     // degrees e.g. -8 or 6
  heart?: boolean;     // append ♡
  className?: string;
}
export function ScriptNote({ children, rotate = 0, heart = false, className }: ScriptNoteProps) {
  return (
    <span
      className={cn("type-script inline-block leading-snug", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      aria-hidden="true"
    >
      {children}
      {heart && <span className="ml-1 text-primary">♡</span>}
    </span>
  );
}

/* ── LeafSprig ───────────────────────────────────────────────── */
interface LeafSprigProps {
  mirrored?: boolean;
  className?: string;
  color?: string;
}
export function LeafSprig({ mirrored = false, className, color = "var(--tone-green-fg)" }: LeafSprigProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      style={mirrored ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path
        d="M24 44 C24 44 24 20 24 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left leaf */}
      <path
        d="M24 28 C18 22 10 20 8 12 C16 12 22 18 24 28Z"
        fill={color}
        opacity="0.85"
      />
      {/* Right leaf */}
      <path
        d="M24 20 C30 14 38 12 40 4 C32 4 26 10 24 20Z"
        fill={color}
        opacity="0.65"
      />
      {/* Small top leaf */}
      <path
        d="M24 10 C20 6 16 4 14 2 C20 2 24 6 24 10Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}

/* ── LotusIcon ───────────────────────────────────────────────── */
interface LotusIconProps {
  className?: string;
  size?: number | string;
}
export function LotusIcon({ className, size }: LotusIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn("inline-block", className)}
      aria-hidden="true"
    >
      {/* Centre petal */}
      <path
        d="M32 52 C32 52 20 38 20 26 C20 18 26 12 32 12 C38 12 44 18 44 26 C44 38 32 52 32 52Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Left petal */}
      <path
        d="M20 40 C20 40 8 32 8 22 C8 16 14 12 20 14 C24 16 26 22 20 40Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Right petal */}
      <path
        d="M44 40 C44 40 56 32 56 22 C56 16 50 12 44 14 C40 16 38 22 44 40Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Far left petal */}
      <path
        d="M14 46 C14 46 4 40 4 30 C4 24 8 20 14 22 C18 24 18 32 14 46Z"
        fill="currentColor"
        opacity="0.35"
      />
      {/* Far right petal */}
      <path
        d="M50 46 C50 46 60 40 60 30 C60 24 56 20 50 22 C46 24 46 32 50 46Z"
        fill="currentColor"
        opacity="0.35"
      />
      {/* Stem */}
      <path
        d="M32 52 C32 52 28 58 26 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M32 52 C32 52 36 58 38 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ── WaveDivider ─────────────────────────────────────────────── */
const toneWaveColors: Record<Tone, string> = {
  pink:   "var(--tone-pink-panel)",
  green:  "var(--tone-green-panel)",
  blue:   "var(--tone-blue-panel)",
  yellow: "var(--tone-yellow-panel)",
  purple: "var(--tone-purple-panel)",
  orange: "var(--tone-orange-panel)",
};

interface WaveDividerProps {
  tone?: Tone;
  color?: string;
  flip?: boolean;
  className?: string;
}
export function WaveDivider({ tone, color, flip = false, className }: WaveDividerProps) {
  const fill = color ?? (tone ? toneWaveColors[tone] : "var(--color-cream-start)");
  return (
    <div
      className={cn("w-full overflow-hidden leading-[0]", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-20"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
