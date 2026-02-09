import React from "react";

const PRICES = [
  "1 Bedroom - From $1,950",
  "2 Bedroom - From $2,450",
  "3 Bedroom - From $2,990",
  "4 Bedroom - From $3,990",
  "5 Bedroom & Larger - From $4,950",
];

export function Pricing() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl mb-6">Pricing</h2>
      <p className="text-sm mb-8">Includes up to 6 weeks of staging. Prices exclude GST.</p>
      <div className="space-y-4">
        {PRICES.map((price) => (
          <div
            key={price}
            className="p-4 bg-white rounded-xl shadow-md transform transition hover:scale-105"
          >
            {price}
          </div>
        ))}
      </div>
    </section>
  );
}
