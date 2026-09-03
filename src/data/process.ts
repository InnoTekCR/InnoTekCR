export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversemos",
    description: "Entendemos la necesidad y los objetivos del cliente.",
  },
  {
    number: "02",
    title: "Planificamos",
    description: "Definimos alcance, solución y estructura del proyecto.",
  },
  {
    number: "03",
    title: "Creamos",
    description: "Diseñamos y desarrollamos la solución a la medida.",
  },
  {
    number: "04",
    title: "Revisamos",
    description: "Probamos el resultado y realizamos los ajustes necesarios.",
  },
  {
    number: "05",
    title: "Lanzamos",
    description: "Implementamos la solución final en su entorno definitivo.",
  },
  {
    number: "06",
    title: "Acompañamos",
    description: "Ofrecemos soporte y seguimiento cuando el cliente lo necesita.",
  },
];
