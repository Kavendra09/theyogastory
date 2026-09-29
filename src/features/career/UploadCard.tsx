"use client";
/**
 * UploadCard.tsx
 * src/features/career/UploadCard.tsx
 *
 * Upload card component with hidden file input & client validation:
 *  - tone: Tone styling
 *  - icon: LucideIcon
 *  - title: string (e.g. "Submit Your Resume" or "Yoga Teacher Portfolio")
 *  - text: string
 *  - buttonLabel: string (e.g. "Upload Resume →")
 *  - acceptedNote: "Accepted formats: PDF, DOC, DOCX (Max 5 MB)"
 *  - Hidden input[type=file] with format (.pdf, .doc, .docx) & size (<= 5MB) validation
 *  - Displays selected file confirmation or error alert
 */
import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TONE_MAP, type Tone } from "@/theme/tones";
import { IconCircle } from "@/components/ui/IconCircle";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, FileUp, X } from "lucide-react";

interface UploadCardProps {
  tone: Tone;
  icon: LucideIcon;
  title: string;
  text: string;
  buttonLabel?: string;
  acceptedNote?: string;
  className?: string;
}

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export function UploadCard({
  tone,
  icon: Icon,
  title,
  text,
  buttonLabel = "Upload Resume →",
  acceptedNote = "Accepted formats: PDF, DOC, DOCX (Max 5 MB)",
  className,
}: UploadCardProps) {
  const toneMap = TONE_MAP[tone];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleButtonClick = () => {
    setErrorMsg(null);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate extension
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_EXTENSIONS.includes(ext)) {
      setErrorMsg("Invalid file format. Please upload a PDF, DOC, or DOCX file.");
      setSelectedFile(null);
      setUploadSuccess(false);
      return;
    }

    // Validate size (max 5 MB)
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMsg("File size exceeds 5 MB. Please upload a smaller file.");
      setSelectedFile(null);
      setUploadSuccess(false);
      return;
    }

    setErrorMsg(null);
    setSelectedFile(file);
    setUploadSuccess(true);
  };

  const clearFile = () => {
    setSelectedFile(null);
    setErrorMsg(null);
    setUploadSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div
      className={cn(
        "rounded-panel p-6 sm:p-8 flex flex-col justify-between gap-5 transition-all duration-300",
        "border shadow-card hover:shadow-glass",
        toneMap.panel,
        toneMap.border,
        className
      )}
    >
      <div>
        {/* Header Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <IconCircle tone={tone} size="md" className="shrink-0 shadow-soft">
            <Icon size={20} strokeWidth={2} />
          </IconCircle>

          <div>
            <h3 className="font-heading font-bold text-navy text-xl sm:text-2xl leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="type-body text-body text-sm sm:text-base leading-relaxed mb-4">
          {text}
        </p>

        {/* Selected File Feedback */}
        {selectedFile && (
          <div className="my-3 p-3 rounded-xl bg-white/90 border border-emerald-300 shadow-soft flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 min-w-0">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span className="truncate">{selectedFile.name}</span>
              <span className="text-micro text-muted shrink-0">
                ({(selectedFile.size / (1024 * 1024)).toFixed(1)} MB)
              </span>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="p-1 rounded-full text-muted hover:text-ink hover:bg-black/5"
              aria-label="Remove selected file"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Error Feedback */}
        {errorMsg && (
          <div className="my-3 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
            <AlertCircle size={16} className="text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Footer: Hidden File Input + Button + Accepted Note */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          aria-label={title}
        />

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={handleButtonClick}
            className="w-full sm:w-auto font-semibold gap-2 shadow-pill"
          >
            <FileUp size={16} />
            <span>{uploadSuccess ? "Change File" : buttonLabel}</span>
          </Button>

          {uploadSuccess && (
            <span className="text-xs font-bold text-emerald-700">
              Ready to submit!
            </span>
          )}
        </div>

        <p className="text-2xs text-muted/80 mt-2.5">
          {acceptedNote}
        </p>
      </div>
    </div>
  );
}
