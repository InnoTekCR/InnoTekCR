import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const Icon = ({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
  </Icon>
);

export const MenuIcon = (props: IconProps) => (
  <Icon {...props}>
    <path strokeLinecap="round" d="M4 7h16" />
    <path strokeLinecap="round" d="M4 12h16" />
    <path strokeLinecap="round" d="M4 17h16" />
  </Icon>
);

export const CloseIcon = (props: IconProps) => (
  <Icon {...props}>
    <path strokeLinecap="round" d="m6 6 12 12" />
    <path strokeLinecap="round" d="m18 6-12 12" />
  </Icon>
);

export const CheckIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 12 4 4L19 6"
    />
  </Icon>
);

export const MailIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 7 9 6 9-6"
    />
  </Icon>
);

export const WhatsappIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 19.5 5 21l.9-3.1A8.5 8.5 0 1 1 7.5 19.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9.5c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2.1 2.8 2.8l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.5.7-.5.3-1 .4-1.5.2-2.2-.6-4.1-1.9-5.5-3.5-1.1-1.2-1.8-2.7-2-4.1-.1-.4 0-.9.2-1.4Z"
    />
  </Icon>
);

export const InstagramIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

export const ChatIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11l-5 3v-3.2a2 2 0 0 1-3-1.8v-8a2 2 0 0 1 2-2Z"
    />
    <path strokeLinecap="round" d="M7 10h10" />
    <path strokeLinecap="round" d="M7 13h6" />
  </Icon>
);

export const SparkleIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"
    />
  </Icon>
);

export const TargetIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </Icon>
);

export const CodeIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 7-5 5 5 5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 7 5 5-5 5"
    />
    <path strokeLinecap="round" d="m14 4-4 16" />
  </Icon>
);

export const LayersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 3 9 5-9 5-9-5 9-5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 12 9 5 9-5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 16 9 5 9-5"
    />
  </Icon>
);

export const ToolsIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.2 2.2-2.3-.7-.7-2.3 2.2-2.2Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 15 5 5"
    />
  </Icon>
);

export const UsersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path strokeLinecap="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

export const SlidersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path strokeLinecap="round" d="M4 6h6" />
    <path strokeLinecap="round" d="M14 6h6" />
    <path strokeLinecap="round" d="M4 12h10" />
    <path strokeLinecap="round" d="M18 12h2" />
    <path strokeLinecap="round" d="M4 18h2" />
    <path strokeLinecap="round" d="M10 18h10" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="16" cy="12" r="2" />
    <circle cx="8" cy="18" r="2" />
  </Icon>
);

export const DeviceIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path strokeLinecap="round" d="M8 20h8" />
    <path strokeLinecap="round" d="M12 16v4" />
  </Icon>
);

export const LifeBuoyIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" d="m5.6 5.6 4.3 4.3" />
    <path strokeLinecap="round" d="m14.1 14.1 4.3 4.3" />
    <path strokeLinecap="round" d="m18.4 5.6-4.3 4.3" />
    <path strokeLinecap="round" d="m9.9 14.1-4.3 4.3" />
  </Icon>
);

