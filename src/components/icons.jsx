// Íconos SVG inline (trazos basados en Lucide, licencia ISC). Sin librerías externas.

function Stroke({ className, children, width = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.352.617 4.56 1.697 6.473L2.667 29.333l7.04-1.846a13.26 13.26 0 0 0 6.297 1.6h.006c7.363 0 13.333-5.97 13.333-13.334 0-3.562-1.388-6.912-3.907-9.43a13.246 13.246 0 0 0-9.432-3.656Zm0 24.4a11.02 11.02 0 0 1-5.614-1.535l-.403-.24-4.18 1.096 1.117-4.075-.264-.418a11.01 11.01 0 0 1-1.69-5.895c0-6.11 4.973-11.083 11.086-11.083 2.962 0 5.747 1.154 7.84 3.25a11.015 11.015 0 0 1 3.244 7.836c0 6.112-4.973 11.064-11.136 11.064Zm6.077-8.287c-.333-.167-1.97-.973-2.276-1.083-.306-.11-.528-.167-.75.167-.222.333-.86 1.083-1.055 1.305-.194.222-.389.25-.722.084-.333-.167-1.405-.518-2.676-1.65-.989-.883-1.657-1.973-1.852-2.306-.194-.333-.02-.513.146-.68.15-.15.333-.389.5-.584.167-.194.222-.333.333-.555.111-.223.056-.417-.028-.584-.083-.167-.75-1.806-1.028-2.473-.27-.65-.545-.562-.75-.572l-.639-.011c-.222 0-.583.083-.889.417-.305.333-1.166 1.14-1.166 2.778 0 1.638 1.194 3.222 1.361 3.444.167.222 2.351 3.59 5.695 5.034.796.344 1.417.549 1.901.703.799.254 1.526.218 2.101.132.641-.096 1.97-.805 2.248-1.583.278-.778.278-1.445.194-1.584-.083-.138-.305-.222-.639-.389Z" />
    </svg>
  );
}

export function StarIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
    </svg>
  );
}

export function GoogleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.29-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

export function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <Stroke className={className} width={2}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Stroke>
  );
}

export function CloseIcon({ className = 'w-6 h-6' }) {
  return (
    <Stroke className={className} width={2}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Stroke>
  );
}

export function ArrowRightIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className} width={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function ArrowsHorizontalIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className} width={2.2}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
    </Stroke>
  );
}

export function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </Stroke>
  );
}

export function ClockIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Stroke>
  );
}

export function PinIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </Stroke>
  );
}

export function ReceiptIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <path d="M5 3v18l2-1.2L9 21l2-1.2 2 1.2 2-1.2 2 1.2 2-1.2V3l-2 1.2L15 3l-2 1.2L11 3 9 4.2 7 3 5 4.2" />
      <path d="M9 9h6M9 13h6" />
    </Stroke>
  );
}

export function ShieldCheckIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Stroke>
  );
}

export function BellIcon({ className = 'w-5 h-5' }) {
  return (
    <Stroke className={className}>
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </Stroke>
  );
}

export function WrenchIcon({ className = 'w-6 h-6' }) {
  return (
    <Stroke className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Stroke>
  );
}

export function CogIcon({ className = 'w-6 h-6' }) {
  return (
    <Stroke className={className}>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2M12 22v-2M17 20.66l-1-1.73M11 10.27 7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2M20.66 7l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73M11 13.73l-4 6.93" />
    </Stroke>
  );
}

export function SparklesIcon({ className = 'w-6 h-6' }) {
  return (
    <Stroke className={className}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </Stroke>
  );
}

export const SERVICE_ICONS = {
  wrench: WrenchIcon,
  engine: CogIcon,
  drop: SparklesIcon,
};
