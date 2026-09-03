import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/**
 * Set de iconos propio de INNOTEK: trazo uniforme (1.75px, extremos
 * redondeados), sin dependencias externas. Mantiene una identidad
 * visual coherente en toda la interfaz.
 */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 7 3.5 12l5 5" />
      <path d="M15.5 7l5 5-5 5" />
      <path d="M13 4.5 11 19.5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.6 4L4 16.4 7.6 20l5.9-5.9a3.5 3.5 0 0 0 4-4.6l-2.6 2.6-2.4-2.4Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3.5 20c0-3.3 2.5-6 5.9-6 2 0 3.7 1 4.8 2.5" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M15.2 12.6c2.7.2 4.8 2.5 4.8 5.4" />
    </svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
      <circle cx="14" cy="7" r="2.25" />
      <circle cx="8" cy="17" r="2.25" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v11H9.5L5 20.5v-4H4Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.6 3 2.3 4.7 5.3 5.3-3 .6-4.7 2.3-5.3 5.3-.6-3-2.3-4.7-5.3-5.3 3-.6 4.7-2.3 5.3-5.3Z" />
      <path d="M18.5 15.5c.3 1.4 1.1 2.2 2.5 2.5-1.4.3-2.2 1.1-2.5 2.5-.3-1.4-1.1-2.2-2.5-2.5 1.4-.3 2.2-1.1 2.5-2.5Z" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="13" height="9" rx="1.5" />
      <path d="M8 20h5" />
      <path d="M10.5 13.5V20" />
      <rect x="17.5" y="8.5" width="3.2" height="9" rx="1" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LifeBuoyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m6.3 6.3 3.3 3.3M17.7 6.3l-3.3 3.3M6.3 17.7l3.3-3.3M17.7 17.7l-3.3-3.3" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 2C6.5 2 2 6.477 2 11.976c0 1.98.58 3.828 1.583 5.383L2 22l4.766-1.545a10.1 10.1 0 0 0 5.254 1.47h.005c5.52 0 10.02-4.478 10.02-9.976C22.045 6.477 17.545 2 12.02 2Zm0 18.24h-.004a8.2 8.2 0 0 1-4.187-1.148l-.3-.178-3.11 1.007 1.021-3.02-.196-.31a8.19 8.19 0 0 1-1.258-4.36c0-4.535 3.696-8.223 8.238-8.223 2.202 0 4.27.858 5.827 2.417a8.16 8.16 0 0 1 2.412 5.815c0 4.536-3.696 8.224-8.243 8.224Z"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-5.6-6.5-10.7A6.5 6.5 0 0 1 12 3.8a6.5 6.5 0 0 1 6.5 6.5C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.2" />
    </svg>
  );
}
