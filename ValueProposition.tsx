import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { valueProps } from "@/data/valueProps";

export function ValueProposition() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Por qué INNOTEK"
          title="Un socio digital que se involucra en cada proyecto"
          description="Sin métricas infladas ni promesas vacías: así es como trabajamos con cada cliente, desde la primera conversación."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 4) * 90} className="flex flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-ink-950">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
