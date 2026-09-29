"use client";
/**
 * FormFields.tsx
 *
 * Accessible form primitives — all hooked into react-hook-form via register().
 * Each field shows: label (with required asterisk), control, error message.
 *
 * Exports: Field (wrapper), Input, Select, Textarea
 *
 * Usage (with react-hook-form):
 *   const { register, formState: { errors } } = useForm<FormData>();
 *
 *   <Input
 *     label="Full Name"
 *     required
 *     placeholder="Your name"
 *     error={errors.name?.message}
 *     {...register("name")}
 *   />
 *
 *   <Select
 *     label="Subject"
 *     required
 *     error={errors.subject?.message}
 *     options={[{ value: "general", label: "General Enquiry" }]}
 *     {...register("subject")}
 *   />
 *
 *   <Textarea
 *     label="Your Message"
 *     required
 *     rows={4}
 *     error={errors.message?.message}
 *     {...register("message")}
 *   />
 */
import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

/* ── Shared base classes ─────────────────────────────────────── */
const controlBase = [
  "w-full bg-white text-ink placeholder:text-muted",
  "border border-border-soft rounded-[10px]",
  "px-4 text-sm font-[var(--font-body)]",
  "transition-all duration-200",
  "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
  "disabled:opacity-50 disabled:cursor-not-allowed",
].join(" ");

const errorClass = "border-red-400 focus:border-red-500 focus:ring-red-200";

/* ── Field wrapper ───────────────────────────────────────────── */
interface FieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}
export function Field({ label, required, error, htmlFor, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-xs font-semibold text-ink tracking-wide"
        >
          {label}
          {required && <span className="text-primary ml-0.5">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-500 leading-snug">
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Input ───────────────────────────────────────────────────── */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, className, id, placeholder, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <Field label={label} required={required} error={error} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          required={required}
          placeholder={placeholder ?? (label ? `${label}${required ? " *" : ""}` : undefined)}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(controlBase, "h-12", error && errorClass, className)}
          {...props}
        />
      </Field>
    );
  }
);
Input.displayName = "Input";

/* ── Select ──────────────────────────────────────────────────── */
interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, required, options, placeholder, className, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <Field label={label} required={required} error={error} htmlFor={selectId}>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={!!error}
            className={cn(
              controlBase,
              "h-12 pr-10 appearance-none cursor-pointer",
              error && errorClass,
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Field>
    );
  }
);
Select.displayName = "Select";

/* ── Textarea ────────────────────────────────────────────────── */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, required, className, id, placeholder, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <Field label={label} required={required} error={error} htmlFor={textareaId}>
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          placeholder={placeholder ?? (label ? `${label}${required ? " *" : ""}` : undefined)}
          aria-invalid={!!error}
          className={cn(controlBase, "py-3 resize-none min-h-[110px]", error && errorClass, className)}
          {...props}
        />
      </Field>
    );
  }
);
Textarea.displayName = "Textarea";
