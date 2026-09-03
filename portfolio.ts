export interface PortfolioProject {
  kind: "project";
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Ruta local dentro de /public (ver carpeta /public/projects). */
  image: string;
  imageAlt: string;
  /** Sitio real del proyecto — se abre en una pestaña nueva. */
  url: string;
}

export interface PortfolioCta {
  kind: "cta";
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Ancla dentro de la misma página (ej. "#contacto"). */
  ctaHref: string;
}

export type PortfolioEntry = PortfolioProject | PortfolioCta;

/**
 * Portafolio de INNOTEK.
 *
 * Los dos primeros son proyectos reales entregados a clientes; las
 * capturas viven en /public/projects y NO dependen de que los sitios
 * originales sigan disponibles para mostrarse. El tercer elemento no es
 * un proyecto: es una tarjeta de llamado a la acción que invita al
 * siguiente cliente a ocupar ese espacio.
 */
export const portfolioItems: PortfolioEntry[] = [
  {
    kind: "project",
    id: "kremsi",
    category: "Desarrollo Web",
    title: "Kremsi — Sitio Web Corporativo",
    description:
      "Sitio web desarrollado para Kremsi, marca costarricense de yogurt griego artesanal, enfocado en presentar su identidad, productos y puntos de venta mediante una experiencia visual moderna y responsiva.",
    tags: ["Sitio corporativo", "Responsive", "Catálogo digital", "Multidioma"],
    image: "/projects/kremsi-web.png",
    imageAlt: "Captura del sitio web de Kremsi, marca de yogurt griego artesanal",
    url: "https://kremsicr.com/",
  },
  {
    kind: "project",
    id: "san-lorenzo",
    category: "Desarrollo Web",
    title: "San Lorenzo School — Sitio Web Institucional",
    description:
      "Sitio web institucional desarrollado para San Lorenzo School, diseñado para comunicar su propuesta educativa, oferta académica y proceso de admisión mediante una experiencia moderna, clara y accesible.",
    tags: ["Sitio institucional", "Responsive", "Multidioma", "Formularios"],
    image: "/projects/san-lorenzo-web.png",
    imageAlt: "Captura del sitio web institucional de San Lorenzo School",
    url: "https://sanlorenzo-cr.com/",
  },
  {
    kind: "cta",
    id: "next-project",
    eyebrow: "El próximo puede ser el tuyo",
    title: "Tu proyecto empieza aquí.",
    description:
      "Convertimos tu idea en una experiencia digital diseñada para crecer con vos.",
    ctaLabel: "Hablemos de tu proyecto",
    ctaHref: "#contacto",
  },
];
