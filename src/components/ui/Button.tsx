import type { MouseEventHandler, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outlineLight";
type Size = "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  /** Muestra la flecha de acción al final del botón. */
  icon?: boolean;
  children: ReactNode;
  className?: string;
  /** Si se define, el botón se renderiza como enlace (<a>). */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-950 text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-slate-300 bg-white text-ink-950 hover:border-brand-400 hover:text-brand-700 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-950 hover:bg-slate-100 active:bg-slate-200",
  // Variantes pensadas para usarse sobre fondos oscuros (Hero, CTA final).
  light:
    "bg-white text-ink-950 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0",
  outlineLight:
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  icon = true,
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
