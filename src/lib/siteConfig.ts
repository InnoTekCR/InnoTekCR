/**
 * Configuración central del sitio.
 *
 * Datos de contacto oficiales de INNOTEK. Footer y la sección de
 * Contacto leen estos valores directamente — no hay enlaces de
 * WhatsApp, correo o Instagram hardcodeados en otro lugar del sitio.
 */

export const siteConfig = {
  name: "INNOTEK",
  legalYear: 2026,
  shortTagline: "Innovación, conexión y tecnología al alcance.",

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],

  contact: {
    // whatsappNumber: solo dígitos (código de país + número), usado para
    // construir el enlace wa.me. whatsappDisplay es lo que ve el usuario.
    whatsappNumber: "50672008349",
    whatsappDisplay: "+506 7200-8349",
    email: "innotekcr@gmail.com",
    instagramUser: "@innotek_cr",
    instagramUrl: "https://www.instagram.com/innotek_cr/",
    location: "Costa Rica",
  },
} as const;

/**
 * Construye un enlace de WhatsApp (wa.me) con un mensaje precargado.
 * Devuelve `null` mientras el número siga siendo un placeholder, para
 * evitar generar enlaces rotos antes de que se configure el dato real.
 */
export function getWhatsappLink(message?: string): string | null {
  const { whatsappNumber } = siteConfig.contact;
  if (!whatsappNumber || whatsappNumber.startsWith("REEMPLAZAR")) {
    return null;
  }
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function getMailtoLink(subject?: string): string | null {
  const { email } = siteConfig.contact;
  if (!email || email.startsWith("REEMPLAZAR")) {
    return null;
  }
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
