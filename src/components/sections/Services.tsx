import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/icons";
import { serviceGroups } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones digitales para hacer crecer tus ideas"
          description="Tres frentes de trabajo pensados para acompañar a un proyecto desde su primera versión hasta su mantenimiento continuo."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 100}>
                <article className="group card-surface flex h-full flex-col gap-6 p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-ink-950">{service.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-2.5 border-t border-slate-100 pt-6">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
