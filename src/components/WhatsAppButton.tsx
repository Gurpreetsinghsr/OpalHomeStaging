import React from "react";
import { openWhatsAppPhone } from "../utils/whatsapp.ts";
import { WhatsAppIcon } from "./icons/WhatsAppIcon.tsx";

export function WhatsAppButton() {
  const phone = "+61 434 321 556";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openWhatsAppPhone(
      phone,
      "Hello Opal HomeStaging - I'd like to enquire about staging."
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-xl transform transition hover:-translate-y-1 hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </button>
  );
}
