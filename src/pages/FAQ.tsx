import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "How much does home staging cost?",
    a: "Every home is different, but here are ballpark figures (excl. GST): 1 Bedroom from $1,950; 2 Bedroom from $2,450; 3 Bedroom from $2,990; 4 Bedroom from $3,990; 5 Bedroom & Larger from $4,950. Includes up to 6 weeks of staging.",
  },
  {
    q: "Do you work with budgets?",
    a: "Yes. We show you the full stage first, then scale back if needed using integrated or partial styling.",
  },
  {
    q: "What payment options are available?",
    a: "Stage now, pay later. Start with 20% upfront, balance payable within 30 days of installation.",
  },
  {
    q: "Can I live in my home once it is staged?",
    a: "Yes. This is called integrated styling. Our furniture is insured for fire and theft and designed for everyday living.",
  },
  {
    q: "Does staging really work?",
    a: "Yes. Styled homes photograph better, stand out online, and help buyers connect emotionally, leading to faster sales and stronger offers.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-10 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl mb-4 text-center">Frequently Asked Questions</h2>
      <p className="text-center text-sm mb-10 text-[#4b5f4b]">
        Clear answers. No surprises. Total peace of mind.
      </p>

      <div className="space-y-4">
        {FAQS.map((item, i) => (
          <div key={item.q} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-xl">{open === i ? "-" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-[#4b5f4b] leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-[#f1efe6] p-8 rounded-2xl">
        <h3 className="text-2xl mb-3">Still have questions?</h3>
        <p className="text-sm mb-6">
          Contact us today to book a free consultation and get expert advice.
        </p>
        <Link
          to="/connect"
          className="inline-block px-8 py-4 bg-[#6b8f71] text-white rounded-xl shadow-lg hover:-translate-y-1 transition"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
