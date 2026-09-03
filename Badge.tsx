import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "brand" | "neutral" | "dark";
  className?: string;
}

export function Badge({ children, tone = "brand", className = "" }: BadgeProps) {
  const toneClasses =
    tone === "brand"
      ? "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200"
      : tone === "dark"
        ? "bg-white/5 text-slate-200 ring-1 ring-inset ring-white/10"
        : "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
