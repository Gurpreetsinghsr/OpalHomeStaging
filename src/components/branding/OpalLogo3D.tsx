import React from "react";
import { OpalLogo } from "./OpalLogo.tsx";

type OpalLogo3DProps = {
  className?: string;
  title?: string;
};

export function OpalLogo3D({
  className,
  title = "Opal HomeStaging 3D logo",
}: OpalLogo3DProps) {
  return (
    <div
      className={className}
      style={{
        perspective: "1300px",
      }}
    >
      <div
        className="relative"
        style={{
          transform: "rotateX(8deg) rotateY(-8deg)",
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 16px 24px rgba(20, 60, 40, 0.3))",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            transform: "translate3d(8px, 8px, -1px)",
            opacity: 0.38,
            mixBlendMode: "multiply",
          }}
        >
          <OpalLogo className="w-full h-auto text-[#113726]" title="" />
        </div>

        <OpalLogo className="relative w-full h-auto" title={title} />
      </div>
    </div>
  );
}
