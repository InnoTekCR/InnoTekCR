import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = tone === "dark" ? "text-signal-400" : "text-brand-600";
  const titleColor = tone === "dark" ? "text-white" : "text-ink-950";
  const descColor = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>}
    </Reveal>
  );
}
