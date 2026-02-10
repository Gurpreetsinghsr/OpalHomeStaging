import React from "react";

type OpalLogoProps = {
  className?: string;
  title?: string;
};

export function OpalLogo({
  className,
  title = "Opal HomeStaging logo",
}: OpalLogoProps) {
  const decorative = title.trim().length === 0;

  return (
    <svg
      viewBox="0 0 680 210"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="opalGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d6a40" />
          <stop offset="100%" stopColor="#0f8a4b" />
        </linearGradient>
        <radialGradient id="opalPearl" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f4ecd7" />
          <stop offset="100%" stopColor="#ccb88c" />
        </radialGradient>
      </defs>

      <path
        d="M32 186V74L151 18L261 91"
        fill="none"
        stroke="url(#opalGreen)"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="152" cy="20" r="9" fill="url(#opalPearl)" stroke="#ccb88c" />

      <circle cx="151" cy="116" r="53" fill="none" stroke="url(#opalGreen)" strokeWidth="21" />
      <circle cx="151" cy="116" r="33" fill="url(#opalPearl)" />

      <text
        x="230"
        y="142"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="700"
        fontSize="126"
        letterSpacing="2"
        fill="url(#opalGreen)"
      >
        PAL
      </text>
      <text
        x="251"
        y="196"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="600"
        fontSize="68"
        letterSpacing="0.4"
        fill="#214b34"
      >
        HomeStaging
      </text>
      <line x1="30" y1="188" x2="664" y2="188" stroke="url(#opalGreen)" strokeWidth="8" />
      <line x1="30" y1="198" x2="664" y2="198" stroke="#ccb88c" strokeWidth="3" />
    </svg>
  );
}
