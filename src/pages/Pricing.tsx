import React, { useState } from "react";

const PRICES = [
  "1 Bedroom — From $1,950",
  "2 Bedroom — From $2,450",
  "3 Bedroom — From $2,990",
  "4 Bedroom — From $3,990",
  "5 Bedroom & Larger — From $4,950",
];

const QUOTE_FACTORS = [
  "Property size and layout",
  "Vacant or occupied styling",
  "Campaign length",
  "Level of furnishing and detail",
];

export function Pricing() {
  const [showFactors, setShowFactors] = useState(true);

  return (
    <section className="px-6 md:px-10 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl mb-4 text-center">Pricing</h2>
      <p className="text-center text-sm mb-8 text-[#4b5f4b]">
        Every home is unique, and pricing reflects the level of presentation
        required.
      </p>

      <div className="mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => setShowFactors((prev) => !prev)}
          className="w-full flex justify-between items-center p-5 text-left"
        >
          <span className="font-medium">How quotes are prepared</span>
          <span className="text-xl">{showFactors ? "−" : "+"}</span>
        </button>
        {showFactors && (
          <ul className="px-5 pb-5 space-y-2 text-sm text-[#4b5f4b]">
            {QUOTE_FACTORS.map((factor) => (
              <li key={factor} className="flex items-start gap-2">
                <span className="text-[#6b8f71] mt-0.5">●</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-10">
        <h3 className="text-2xl mb-2 text-center">Opal HomeStaging Packages</h3>
        <p className="text-center text-sm mb-6 text-[#4b5f4b]">
          Includes up to 6 weeks of staging
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {PRICES.map((price) => (
            <div
              key={price}
              className="p-4 bg-white rounded-xl shadow-md transform transition hover:scale-[1.02]"
            >
              {price}
            </div>
          ))}
        </div>
        <p className="text-sm mt-4 text-[#4b5f4b]">*All prices exclude GST.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h4 className="text-xl mb-2">Extension Hire</h4>
          <p className="text-sm text-[#4b5f4b] leading-relaxed">
            If staging is required beyond 6 weeks, extension hire is available
            at a weekly rate. Pricing is provided on request.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h4 className="text-xl mb-2">Interior Styling Consultations</h4>
          <p className="text-sm text-[#4b5f4b] leading-relaxed">
            One-on-one consultations are available on request and tailored to
            your home or project.
          </p>
        </div>
      </div>
    </section>
  );
}
