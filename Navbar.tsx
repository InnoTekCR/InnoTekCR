import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { siteConfig } from "@/lib/siteConfig";
import { useScrolled } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  // Evita el scroll del fondo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Cierra el menú móvil si la ventana pasa a tamaño de escritorio.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
        scrolled
          ? "bg-white/80 shadow-soft backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-page flex h-[72px] items-center justify-between"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          <Logo tone={scrolled || menuOpen ? "dark" : "light"} />
        </a>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? scrolled
                        ? "text-brand-600"
                        : "text-brand-300"
                      : scrolled
                        ? "text-slate-600 hover:text-ink-950"
                        : "text-slate-200 hover:text-white"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contacto" size="md" variant={scrolled ? "primary" : "light"}>
            Solicitar cotización
          </Button>
        </div>

        {/* Botón de menú móvil */}
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
            scrolled || menuOpen
              ? "text-ink-950 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white shadow-soft-lg transition-[max-height,opacity] duration-300 ease-premium lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-ink-950"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href="#contacto" className="w-full" onClick={() => setMenuOpen(false)}>
              Solicitar cotización
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
