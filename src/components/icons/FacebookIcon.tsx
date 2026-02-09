import React from "react";

type Props = {
  className?: string;
};

export function FacebookIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.6c0-2.3 1.4-3.6 3.4-3.6.98 0 2 .18 2 .18v2.2h-1.12c-1.1 0-1.45.69-1.45 1.4V12h2.48l-.4 2.9h-2.08v7A10 10 0 0022 12z" />
    </svg>
  );
}
