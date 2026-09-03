import type { ComponentType } from "react";
import {
  UsersIcon,
  SlidersIcon,
  ChatIcon,
  SparkleIcon,
  DeviceIcon,
  TargetIcon,
  LifeBuoyIcon,
  type IconProps,
} from "@/components/icons";

export interface ValueProp {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
  {
    icon: UsersIcon,
    title: "Atención personalizada",
    description:
      "Cada proyecto se conversa directamente con quien lo desarrolla, sin intermediarios ni respuestas genéricas.",
  },
  {
    icon: SlidersIcon,
    title: "Soluciones adaptadas",
    description:
      "No partimos de plantillas cerradas: la solución se ajusta a lo que tu proyecto realmente necesita.",
  },
  {
    icon: ChatIcon,
    title: "Comunicación clara",
    description:
      "Explicamos cada decisión técnica en términos entendibles, sin tecnicismos innecesarios.",
  },
  {
    icon: SparkleIcon,
    title: "Diseño moderno",
    description:
      "Interfaces cuidadas, ordenadas y actuales, alineadas con estándares visuales profesionales.",
  },
  {
    icon: DeviceIcon,
    title: "Desarrollo responsivo",
    description:
      "Cada sitio se construye y se prueba para verse y funcionar bien en móvil, tablet y escritorio.",
  },
  {
    icon: TargetIcon,
    title: "Enfoque práctico",
    description:
      "Priorizamos lo que aporta valor real al proyecto, evitando complejidad innecesaria.",
  },
  {
    icon: LifeBuoyIcon,
    title: "Acompañamiento durante el proyecto",
    description:
      "El trabajo no termina en la entrega: hay seguimiento para resolver dudas y ajustes posteriores.",
  },
];
