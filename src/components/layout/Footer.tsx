import { Logo } from "@/components/ui/Logo";
import { InstagramIcon, MailIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig, getMailtoLink, getWhatsappLink } from "@/lib/siteConfig";

export function Footer() {
  const whatsappLink = getWhatsappLink("Hola INNOTEK, quiero más información.");
  const mailtoLink = getMailtoLink("Consulta desde el sitio web");

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex max-w-xs flex-col gap-4">
            <a href="#inicio" className="w-fit">
              <Logo tone="light" />
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.shortTagline}
            </p>
          </div>

          <nav aria-label="Enlaces rápidos" className="flex flex-col gap-3 sm:items-end">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Enlaces rápidos
            </span>
            <ul className="flex flex-col gap-2 sm:items-end">
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-3 sm:items-end">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Escríbenos
            </span>
            <div className="flex gap-3">
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <WhatsappIcon className="h-4 w-4" />
                </a>
              ) : null}
              {mailtoLink ? (
                <a
                  href={mailtoLink}
                  aria-label="Enviar correo"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <MailIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-slate-400">
            © {siteConfig.legalYear} INNOTEK. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-400">Costa Rica</p>
        </div>
      </div>
    </footer>
  );
}
