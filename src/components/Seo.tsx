import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoMeta = {
  title: string;
  description: string;
};

const defaultMeta: SeoMeta = {
  title: "Opal HomeStaging | Home Staging in Sydney & Newcastle",
  description:
    "Professional home staging in Sydney and Newcastle to help properties sell faster and at stronger prices.",
};

const routeMeta: Record<string, SeoMeta> = {
  "/": defaultMeta,
  "/services": {
    title: "Home Staging Services | Opal HomeStaging",
    description:
      "Explore Opal HomeStaging services for occupied homes, vacant styling, and pre-sale presentation in Sydney and Newcastle.",
  },
  "/pricing": {
    title: "Home Staging Pricing | Opal HomeStaging",
    description:
      "Review transparent pricing options for home styling and staging packages with Opal HomeStaging.",
  },
  "/gallery": {
    title: "Before & After Gallery | Opal HomeStaging",
    description:
      "Browse staged property transformations and interior styling highlights from Opal HomeStaging.",
  },
  "/faq": {
    title: "Home Staging FAQ | Opal HomeStaging",
    description:
      "Get answers to common questions about home staging timelines, process, and results.",
  },
  "/connect": {
    title: "Contact Opal HomeStaging",
    description:
      "Book a free consultation with Opal HomeStaging for Sydney and Newcastle properties.",
  },
};

export function Seo() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || defaultMeta;
    document.title = meta.title;

    const descriptionEl = document.querySelector('meta[name="description"]');
    if (descriptionEl) {
      descriptionEl.setAttribute("content", meta.description);
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute(
        "href",
        `https://opalhomestaging.com${location.pathname}`
      );
    }
  }, [location.pathname]);

  return null;
}
