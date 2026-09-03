import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en milisegundos, útil para escalonar elementos de una lista. */
  delay?: number;
}

/**
 * Envoltorio de revelado sutil al hacer scroll (fade + desplazamiento).
 * Implementado con IntersectionObserver + CSS, sin librerías externas
 * de animación, para mantener el sitio liviano.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? undefined : 0,
        animation: isInView ? `fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Misma animación que <Reveal>, pero renderizando un <li> en lugar de un
 * <div>, para usarse dentro de listas (<ol>/<ul>) sin romper la
 * semántica HTML.
 */
export function RevealListItem({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? undefined : 0,
        animation: isInView ? `fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </li>
  );
}
