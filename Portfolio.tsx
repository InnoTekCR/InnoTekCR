import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkGraphic } from "@/components/ui/NetworkGraphic";
import { portfolioItems } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos reales, ya en producción"
          description="Un vistazo a sitios que ya construimos para clientes de INNOTEK, y un espacio reservado para el que sigue."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} className="h-full">
              {item.kind === "project" ? (
                <article className="group card-surface flex h-full flex-col overflow-hidden transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <Badge tone="neutral" className="w-fit">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-ink-950">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2">
                      <Button
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="md"
                      >
                        Ver proyecto
                      </Button>
                    </div>
                  </div>
                </article>
              ) : (
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/25 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900 p-8 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-white/40 hover:shadow-glow">
                  <div
                    className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 opacity-50"
                    aria-hidden="true"
                  >
                    <NetworkGraphic className="h-full w-full" />
                  </div>

                  <div className="relative flex h-full flex-col gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-400">
                      {item.eyebrow}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                    <div className="mt-auto pt-4">
                      <Button href={item.ctaHref} variant="light" size="md">
                        {item.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
