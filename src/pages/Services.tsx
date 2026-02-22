import React, { useState } from "react";

const SERVICES = [
  {
    title: "Vacant Home Staging",
    desc: "Complete furniture and styling to showcase space, flow, and lifestyle.",
  },
  {
    title: "Occupied Home Styling",
    desc: "Enhancing your existing furniture with professional styling.",
  },
  {
    title: "Interior Styling Consultations",
    desc: "Clear, practical advice to prepare your home for sale.",
  },
];

const WHO_WE_SERVE = [
  {
    audience: "Vendors & Homeowners",
    intro:
      "We style homes to attract buyers, build confidence, and support stronger sale prices.",
    points: [
      "Modern styling that elevates value",
      "Buyer-approved, timeless looks",
      "Smart packages with no unnecessary extras",
      "A smooth, stress-free selling experience",
    ],
    outro: "Great styling isn’t about cost — it’s about results.",
  },
  {
    audience: "Real Estate Agents",
    intro:
      "Strategic styling that strengthens campaigns and supports faster sales.",
    points: [
      "Polished, market-ready presentation",
      "Fast, reliable turnaround",
      "Homes that photograph beautifully and impress buyers.",
    ],
    outro: "Simple goal. Stronger marketing. Better results.",
  },
  {
    audience: "Property Developers",
    intro:
      "Display-ready homes that clearly communicate layout, lifestyle, and potential.",
    points: [],
    outro: "Reliable. Cost-effective. Results-driven.",
  },
];

export function Services() {
  const [selectedAudience, setSelectedAudience] = useState(WHO_WE_SERVE[0]);

  return (
    <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto space-y-14">
      <div>
        <h2 className="text-3xl mb-10 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-2xl shadow-md transform transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-sm text-[#4b5f4b]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-6 md:p-10">
        <h3 className="text-2xl text-center mb-3">Who We Serve</h3>
        <p className="text-sm text-center text-[#4b5f4b] mb-8">
          Choose your profile to see how we tailor every staging project.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {WHO_WE_SERVE.map((group) => (
            <button
              key={group.audience}
              onClick={() => setSelectedAudience(group)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedAudience.audience === group.audience
                  ? "bg-[#6b8f71] text-white border-[#6b8f71]"
                  : "bg-[#f7f5ef] border-[#cfd8c3] hover:border-[#6b8f71]"
              }`}
            >
              {group.audience}
            </button>
          ))}
        </div>

        <div className="bg-[#f7f5ef] rounded-2xl p-6 md:p-8">
          <h4 className="text-xl mb-3">{selectedAudience.audience}</h4>
          <p className="text-sm text-[#4b5f4b] leading-relaxed mb-5">
            {selectedAudience.intro}
          </p>
          {selectedAudience.points.length > 0 && (
            <ul className="space-y-2 mb-5">
              {selectedAudience.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <span className="text-[#6b8f71] mt-0.5">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm italic text-[#2f3e2f]">{selectedAudience.outro}</p>
        </div>
      </div>
    </section>
  );
}
