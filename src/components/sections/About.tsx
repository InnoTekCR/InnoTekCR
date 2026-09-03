import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ChatIcon, SparkleIcon, TargetIcon } from "@/components/icons";

const pillars = [
  {
    icon: ChatIcon,
    title: "Cercanía",
    description: "Trato directo y comunicación honesta en cada etapa del proyecto.",
  },
  {
    icon: SparkleIcon,
    title: "Calidad técnica",
    description: "Código organizado y buenas prácticas, pensados para durar en el tiempo.",
  },
  {
    icon: TargetIcon,
    title: "Crecimiento compartido",
    description: "El objetivo es que la solución acompañe el crecimiento real del negocio.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Sobre INNOTEK"
            title="Tecnología pensada para acompañar el crecimiento de tu proyecto"
          />

          <div className="flex flex-col gap-5 text-base leading-relaxed text-slate-600">
            <p>
              INNOTEK nace con un objetivo concreto: acercar soluciones
              tecnológicas profesionales a personas, emprendimientos y
              pequeñas empresas que buscan dar su siguiente paso digital, sin
              depender de procesos complicados ni de un lenguaje técnico
              difícil de entender.
            </p>
            <p>
              Cada proyecto se aborda con el mismo cuidado: primero
              entender la necesidad real detrás de la solicitud, y luego
              construir algo funcional, bien diseñado y fácil de mantener
              en el tiempo.
            </p>
            <p>
              Detrás de INNOTEK hay un compromiso claro con la calidad
              técnica, la comunicación honesta y el acompañamiento cercano
              en cada etapa — desde la primera conversación hasta el
              soporte posterior al lanzamiento.
            </p>
          </div>
        </div>

        <Reveal delay={100} className="flex flex-col gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="card-surface flex items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-soft-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-ink-950">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
