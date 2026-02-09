import { isMobileDevice } from "./device.ts";

export function openWhatsAppPhone(phone: string, prefilledText = ""): void {
  const phoneDigits = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(prefilledText);

  const webUrl = `https://wa.me/${phoneDigits}?text=${encodedText}`;

  if (isMobileDevice()) {
    const appUrl = `whatsapp://send?phone=${phoneDigits}&text=${encodedText}`;
    window.location.href = appUrl;

    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 600);
  } else {
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
}
