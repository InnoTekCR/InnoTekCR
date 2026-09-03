import { useId, useState, type FormEvent, type ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, WhatsappIcon } from "@/components/icons";
import { getMailtoLink, getWhatsappLink, siteConfig } from "@/lib/siteConfig";

const projectTypes = [
  "Landing page",
  "Sitio web corporativo",
  "Rediseño de sitio existente",
  "Solución digital personalizada",
  "Soporte y mantenimiento",
  "Otro",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: projectTypes[0],
  budget: "",
  message: "",
};

type SubmitStatus = "idle" | "ready" | "unavailable";

export function Contact() {
  const formId = useId();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const whatsappLink = getWhatsappLink("Hola INNOTEK, quiero cotizar un proyecto.");

  function handleChange<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Nombre: ${form.name}`,
      form.company && `Empresa: ${form.company}`,
      `Correo: ${form.email}`,
      `WhatsApp / teléfono: ${form.phone}`,
      `Tipo de proyecto: ${form.projectType}`,
      form.budget && `Presupuesto aproximado: ${form.budget}`,
      "",
      "Mensaje:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = getMailtoLink(`Nueva consulta de ${form.name || "un visitante del sitio"}`);

    if (!mailto) {
      // El correo de contacto todavía es un placeholder (ver src/lib/siteConfig.ts).
      setStatus("unavailable");
      return;
    }

    window.location.href = `${mailto}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="left"
            eyebrow="Contacto"
            title="Contanos sobre tu proyecto"
            description="Completá el formulario o escribinos directamente. Respondemos personalmente cada consulta."
          />

          <div className="flex flex-col gap-4">
            {whatsappLink ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-500/10 text-signal-500">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-950">WhatsApp</span>
                  <span className="block text-sm text-slate-500">{siteConfig.contact.whatsappDisplay}</span>
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 p-4 text-slate-400">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span className="text-sm">
                  WhatsApp — pendiente de configurar
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <MailIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink-950">Correo</span>
                <span className="block text-sm text-slate-500">
                  {siteConfig.contact.email.startsWith("REEMPLAZAR")
                    ? "Pendiente de configurar"
                    : siteConfig.contact.email}
                </span>
              </span>
            </div>
          </div>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="card-surface flex flex-col gap-5 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Nombre" htmlFor={`${formId}-name`} required>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={inputClasses}
                  placeholder="Tu nombre completo"
                />
              </Field>

              <Field label="Empresa" htmlFor={`${formId}-company`}>
                <input
                  id={`${formId}-company`}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={inputClasses}
                  placeholder="Opcional"
                />
              </Field>

              <Field label="Correo" htmlFor={`${formId}-email`} required>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClasses}
                  placeholder="tu@correo.com"
                />
              </Field>

              <Field label="WhatsApp / teléfono" htmlFor={`${formId}-phone`} required>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClasses}
                  placeholder="+506 0000 0000"
                />
              </Field>

              <Field label="Tipo de proyecto" htmlFor={`${formId}-projectType`} required>
                <select
                  id={`${formId}-projectType`}
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={(e) => handleChange("projectType", e.target.value)}
                  className={inputClasses}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Presupuesto aproximado" htmlFor={`${formId}-budget`}>
                <input
                  id={`${formId}-budget`}
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className={inputClasses}
                  placeholder="Opcional"
                />
              </Field>
            </div>

            <Field label="Mensaje" htmlFor={`${formId}-message`} required>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputClasses} resize-none`}
                placeholder="Contanos brevemente qué necesitás."
              />
            </Field>

            <Button type="submit" size="lg" className="mt-2 w-full sm:w-fit">
              Enviar consulta
            </Button>

            <p role="status" aria-live="polite" className="text-sm text-slate-500">
              {status === "ready" &&
                "Se abrió tu programa de correo con la consulta lista para enviar."}
              {status === "unavailable" &&
                "El correo de contacto todavía no está configurado. Escribinos por WhatsApp mientras tanto."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink-950 placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

function Field({ label, htmlFor, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-950">
        {label}
        {required && <span className="ml-0.5 text-brand-600"> *</span>}
      </label>
      {children}
    </div>
  );
}
