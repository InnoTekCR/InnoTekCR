import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NetworkGraphic } from "@/components/ui/NetworkGraphic";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden bg-ink-950 pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      {/* Fondo: grid tecnológico + degradado radial */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <Reveal className="flex flex-col items-start gap-7">
          <Badge tone="dark">Costa Rica · Soluciones digitales</Badge>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            De la necesidad de tu negocio a una{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-signal-400 bg-clip-text text-transparent">
              solución digital que funciona
            </span>
            .
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            En INNOTEK diseñamos y desarrollamos sitios web, herramientas
            digitales y soporte técnico para personas, emprendimientos y
            pequeñas empresas en Costa Rica, con procesos claros y
            comunicación directa en cada etapa.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto" variant="light" size="lg">
              Solicitar cotización
            </Button>
            <Button href="#servicios" variant="outlineLight" size="lg" icon={false}>
              Conocer servicios
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <NetworkGraphic className="w-full drop-shadow-[0_0_60px_rgba(53,102,247,0.25)]" />
        </Reveal>
      </div>
    </section>
  );
}
