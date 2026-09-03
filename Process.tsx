import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealListItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(70%_50%_at_50%_20%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container-page relative flex flex-col gap-16">
        <SectionHeading
          tone="dark"
          eyebrow="Cómo trabajamos"
          title="Un proceso simple, de la conversación al lanzamiento"
          description="Seis pasos claros que ordenan cada proyecto, desde la primera llamada hasta el acompañamiento posterior."
        />

        <ol className="mx-auto flex w-full max-w-2xl flex-col">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <RevealListItem key={step.number} delay={index * 80} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-400/30 bg-white/5 text-sm font-bold text-brand-300 shadow-glow backdrop-blur-sm">
                    {step.number}
                  </span>
                  {!isLast && (
                    <span
                      className="my-1 w-px flex-1 bg-gradient-to-b from-brand-400/50 via-white/10 to-signal-400/30"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className={isLast ? "pb-0" : "pb-10"}>
                  <h3 className="pt-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </RevealListItem>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
