import React from "react";

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

export function Services() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
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
    </section>
  );
}
