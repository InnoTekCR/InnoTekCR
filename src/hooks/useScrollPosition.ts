import { useEffect, useState } from "react";

/**
 * Devuelve `true` en cuanto el usuario hace scroll más allá de `offset`.
 * Se usa para transformar sutilmente el navbar (sticky) al hacer scroll.
 */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
