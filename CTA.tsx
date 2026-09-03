import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkGraphic } from "@/components/ui/NetworkGraphic";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div
        className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 translate-x-1/3 opacity-40 sm:opacity-60"
        aria-hidden="true"
      >
        <NetworkGraphic className="h-full w-full" />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/95 to-ink-950/60"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Tenés una idea? Conversemos.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Contanos qué necesita tu proyecto y te ayudamos a encontrar la
            solución digital adecuada, sin compromiso.
          </p>
          <Button href="#contacto" variant="light" size="lg">
            Contanos sobre tu proyecto
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
