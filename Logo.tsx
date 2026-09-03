interface LogoProps {
  className?: string;
  /** "dark" = texto oscuro (fondos claros), "light" = texto blanco (fondos oscuros). */
  tone?: "dark" | "light";
}

/**
 * Isotipo + logotipo de INNOTEK. El isotipo (nodos conectados) resume la
 * identidad de marca — tecnología y conexión — y sirve como base visual
 * para el resto del sitio (gráficos, favicon, iconografía).
 *
 * Nota: esto es una interpretación tipográfica de la marca para el sitio.
 * Si existe un archivo de logo oficial (SVG/AI), se recomienda sustituir
 * este componente por el isotipo real.
 */
export function Logo({ className = "", tone = "dark" }: LogoProps) {
  const textColor = tone === "light" ? "text-white" : "text-ink-950";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#050914" />
        <g stroke="#5b8dff" strokeWidth="1.4" strokeLinecap="round">
          <line x1="16" y1="8" x2="10" y2="13" />
          <line x1="16" y1="8" x2="22" y2="13" />
          <line x1="10" y1="13" x2="10" y2="20" />
          <line x1="22" y1="13" x2="22" y2="20" />
          <line x1="10" y1="20" x2="16" y2="25" />
          <line x1="22" y1="20" x2="16" y2="25" />
          <line x1="10" y1="13" x2="22" y2="13" />
        </g>
        <circle cx="16" cy="8" r="2.4" fill="#2dd4bf" />
        <circle cx="16" cy="25" r="2.4" fill="#2dd4bf" />
        <circle cx="10" cy="13" r="2" fill="#8bb3ff" />
        <circle cx="22" cy="13" r="2" fill="#8bb3ff" />
        <circle cx="10" cy="20" r="2" fill="#8bb3ff" />
        <circle cx="22" cy="20" r="2" fill="#8bb3ff" />
      </svg>
      <span className={`text-lg font-bold tracking-tight ${textColor}`}>
        INNOTEK
      </span>
    </span>
  );
}
