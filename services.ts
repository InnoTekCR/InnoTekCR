import type { ComponentType } from "react";
import { CodeIcon, LayersIcon, ToolsIcon, type IconProps } from "@/components/icons";

export interface ServiceGroup {
  id: string;
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
  examples: string[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "desarrollo-web",
    icon: CodeIcon,
    name: "Desarrollo Web",
    description:
      "Sitios construidos con código limpio y una experiencia clara, pensados para representar bien tu marca desde el primer clic.",
    examples: [
      "Landing pages",
      "Sitios web corporativos",
      "Páginas para emprendimientos",
      "Portafolios profesionales",
      "Rediseño y modernización de sitios existentes",
      "Sitios responsivos",
    ],
  },
  {
    id: "soluciones-digitales",
    icon: LayersIcon,
    name: "Soluciones Digitales",
    description:
      "Herramientas a la medida que ordenan procesos manuales y facilitan el trabajo diario de tu equipo.",
    examples: [
      "Digitalización de procesos básicos",
      "Formularios y herramientas digitales",
      "Soluciones web personalizadas",
      "Automatización básica de tareas",
      "Integraciones según las necesidades del cliente",
    ],
  },
  {
    id: "soporte-mantenimiento",
    icon: ToolsIcon,
    name: "Soporte y Mantenimiento",
    description:
      "Acompañamiento continuo para que tu sitio se mantenga actualizado, estable y funcionando como se espera.",
    examples: [
      "Actualización de sitios",
      "Corrección de errores",
      "Mantenimiento web",
      "Mejoras de rendimiento",
      "Cambios de contenido",
    ],
  },
];
