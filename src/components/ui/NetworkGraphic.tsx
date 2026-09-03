interface NetworkGraphicProps {
  className?: string;
}

/**
 * Gráfico abstracto de nodos y conexiones, inspirado en el isotipo de
 * INNOTEK. Decorativo (aria-hidden): la información relevante ya está
 * disponible como texto en la sección donde se usa.
 */
export function NetworkGraphic({ className = "" }: NetworkGraphicProps) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="ntk-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8dff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="ntk-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3566f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3566f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="280" cy="280" r="240" fill="url(#ntk-glow)" />

      {/* Anillo orbital sutil */}
      <circle
        cx="280"
        cy="280"
        r="200"
        stroke="#5b8dff"
        strokeOpacity="0.14"
        strokeWidth="1"
        strokeDasharray="2 10"
      />

      {/* Conexiones principales (núcleo hexagonal, eco del isotipo) */}
      <g stroke="url(#ntk-line)" strokeWidth="1.5" strokeLinecap="round">
        <line x1="280" y1="120" x2="150" y2="210" />
        <line x1="280" y1="120" x2="410" y2="210" />
        <line x1="150" y1="210" x2="150" y2="350" />
        <line x1="410" y1="210" x2="410" y2="350" />
        <line x1="150" y1="350" x2="280" y2="440" />
        <line x1="410" y1="350" x2="280" y2="440" />
        <line x1="150" y1="210" x2="410" y2="210" />
        <line x1="150" y1="350" x2="410" y2="350" />
        <line x1="280" y1="120" x2="280" y2="60" strokeDasharray="3 7" />
        <line x1="150" y1="210" x2="70" y2="170" strokeDasharray="3 7" />
        <line x1="410" y1="210" x2="490" y2="170" strokeDasharray="3 7" />
        <line x1="150" y1="350" x2="70" y2="390" strokeDasharray="3 7" />
        <line x1="410" y1="350" x2="490" y2="390" strokeDasharray="3 7" />
        <line x1="280" y1="440" x2="280" y2="500" strokeDasharray="3 7" />
      </g>

      {/* Nodos principales */}
      <g className="animate-pulse-soft">
        <circle cx="280" cy="120" r="9" fill="#2dd4bf" />
        <circle cx="280" cy="440" r="9" fill="#2dd4bf" />
      </g>
      <circle cx="150" cy="210" r="7" fill="#5b8dff" />
      <circle cx="410" cy="210" r="7" fill="#5b8dff" />
      <circle cx="150" cy="350" r="7" fill="#5b8dff" />
      <circle cx="410" cy="350" r="7" fill="#5b8dff" />

      {/* Nodos satélite (profundidad) */}
      <g className="animate-float" style={{ animationDelay: "-1.5s" }}>
        <circle cx="70" cy="170" r="4" fill="#8bb3ff" />
        <circle cx="490" cy="390" r="4" fill="#8bb3ff" />
      </g>
      <g className="animate-float" style={{ animationDelay: "-3.5s" }}>
        <circle cx="490" cy="170" r="3.5" fill="#5eead4" />
        <circle cx="70" cy="390" r="3.5" fill="#5eead4" />
      </g>
      <g className="animate-float">
        <circle cx="280" cy="60" r="3" fill="#8bb3ff" />
        <circle cx="280" cy="500" r="3" fill="#5eead4" />
      </g>
    </svg>
  );
}
