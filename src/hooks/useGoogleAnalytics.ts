import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // replace with your real GA ID

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function useGoogleAnalytics(): void {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }, []);
}
