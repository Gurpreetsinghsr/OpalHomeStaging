import React, { useState } from "react";
import { Link } from "react-router-dom";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type FAQCategory = {
  title: string;
  faqs: FAQItem[];
};

const packagePricing = (
  <>
    <p className="mb-3">Every home is different, but here are ballpark figures (excl. GST):</p>
    <p className="font-medium mb-2">Opal HomeStaging Packages (includes up to 6 weeks of staging)</p>
    <ul className="space-y-1 mb-3">
      <li>• 1 Bedroom — From $1,950</li>
      <li>• 2 Bedroom — From $2,450</li>
      <li>• 3 Bedroom — From $2,990</li>
      <li>• 4 Bedroom — From $3,990</li>
      <li>• 5 Bedroom & Larger — From $4,950</li>
    </ul>
    <p className="mb-3">*All prices exclude GST.</p>
    <p>
      Extension hire is available at a weekly rate beyond 6 weeks. Pricing is
      provided on request.
    </p>
  </>
);

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "Pricing & Payment",
    faqs: [
      { q: "How much does home staging cost?", a: packagePricing },
      {
        q: "Do you work with budgets?",
        a: "Yes. We’ll show you the full stage first, then scale back if needed. Options include Integrated Styling (using some of your furniture) or Partial Styling (just the most important rooms).",
      },
      {
        q: "What payment options are available?",
        a: "Stage Now, Pay Later — begin with only 20% upfront, with the remaining balance payable within 30 days of installation. We’re happy to discuss flexible payment options.",
      },
      {
        q: "Are staging costs tax deductible?",
        a: "Yes, if the property is an investment. It’s usually treated as a marketing expense. Check with your accountant for advice specific to your situation.",
      },
    ],
  },
  {
    title: "Consultation & Planning",
    faqs: [
      {
        q: "What happens at the consultation?",
        a: "Sometimes one of our consult stylists will pop out for a visit, but an in-person consultation doesn’t always need to happen. The point is to gather the right information to provide an accurate quote and clear guidance.",
      },
      {
        q: "What’s included in the quote?",
        a: (
          <>
            <p className="mb-2">Your quote includes:</p>
            <ul className="space-y-1">
              <li>• Presentation objectives — what we’re aiming to achieve</li>
              <li>
                • Action checklist — furniture per room + instructions (what
                stays, what goes)
              </li>
              <li>• Pricing — with flexible payment options</li>
            </ul>
          </>
        ),
      },
      {
        q: "What staging options are available?",
        a: (
          <ul className="space-y-1">
            <li>• Full Stage — the home is empty, so we bring everything.</li>
            <li>
              • Integrated Stage — we keep some of your furniture and layer in
              ours.
            </li>
            <li>
              • Partial Stage — we target key rooms and may request a walkthrough
              video to plan around existing pieces.
            </li>
          </ul>
        ),
      },
      {
        q: "What’s the next step if I go ahead?",
        a: "Our team will contact you or your agent to confirm install timing and project logistics.",
      },
    ],
  },
  {
    title: "Living in a Staged Home",
    faqs: [
      {
        q: "Can I live in my home once it’s staged?",
        a: "Yes — this is called Integrated Styling. We blend your furniture with ours so you can keep living comfortably. Our furniture is insured for fire and theft. Accidental or pet damage is not covered, so we discuss this upfront.",
      },
      {
        q: "What if I have pets?",
        a: "Pets aren’t a dealbreaker, but some items like rugs and sofas can be vulnerable. We’ll talk through your situation honestly before install.",
      },
      {
        q: "What if I accidentally damage something?",
        a: "Please tell us as soon as possible. Depending on the damage, repair or replacement costs may be passed on.",
      },
    ],
  },
  {
    title: "Logistics",
    faqs: [
      {
        q: "What happens on install day?",
        a: (
          <>
            <p className="mb-2">
              Our stylists and logistics crew arrive with furniture and
              accessories.
            </p>
            <ul className="space-y-1 mb-2">
              <li>• Usually 1–2 stylists + 2–3 logistics team members</li>
              <li>• Trucks are on-site for around 45–75 minutes</li>
              <li>• Stylists stay another 3–4 hours for final setup</li>
            </ul>
            <p>
              For safety, we suggest clients head out during setup. You’ll
              receive an update and sneak-peek photos once complete.
            </p>
          </>
        ),
      },
      {
        q: "Do I need to be there?",
        a: "No. We suggest heading out during install, but you’re welcome to stay if you prefer.",
      },
      {
        q: "How long is the hire period?",
        a: "6 weeks total (4 weeks paid + 2 weeks free), covering valuation, building & pest, and final inspections.",
      },
      {
        q: "What if my house sells early?",
        a: "Great news — no refund applies because most costs relate to the styling service. Once the sale is unconditional, we arrange pickup.",
      },
      {
        q: "What if my house doesn’t sell within the hire period?",
        a: "You can extend your hire period at the rates listed in your terms and conditions.",
      },
      {
        q: "What happens at pack-up?",
        a: "Pack-up is similar to install: usually 1–2 stylists and 2–3 logistics team members, generally 45–60 minutes on-site, coordinated with you or your agent.",
      },
    ],
  },
  {
    title: "Results & Reassurance",
    faqs: [
      {
        q: "Does staging really work?",
        a: "Yes. Styled homes stand out online, photograph better, and help buyers imagine living there — often leading to faster sales and stronger offers.",
      },
      {
        q: "What if I don’t like the style?",
        a: "We won’t leave until we’re happy with the result — and that includes you. We style for broad buyer appeal, and we’ll collaborate with you and your agent if adjustments are needed.",
      },
      {
        q: "I got a cheaper quote elsewhere — why pick Opal?",
        a: (
          <>
            <p className="mb-2">Compare what’s actually included:</p>
            <ul className="space-y-1 mb-2">
              <li>• Amount and quality of furniture</li>
              <li>• Speed of turnaround</li>
              <li>• Flexibility if plans change</li>
            </ul>
            <p>
              Opal is mid-range on price with 24-hour quoting (Mon–Sun), quick
              install turnaround, direct warehouse access, and premium
              furnishings and accessories.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Practical Extras",
    faqs: [
      {
        q: "Should I clean before or after staging?",
        a: "Before. Staging is the final touch, so complete cleaning, repairs, and painting first.",
      },
      {
        q: "Where are you located?",
        a: "Located in Sydney, we proudly offer home staging and styling services throughout Sydney and the Newcastle region.",
      },
      {
        q: "What about my furniture — do you also do removals?",
        a: "We don’t move or store furniture directly, but we can recommend trusted removal and storage partners.",
      },
      {
        q: "How long before I sell should I contact you?",
        a: "We recommend contacting us 2–3 weeks before going to market. If timelines are shorter, we do our best to accommodate last-minute bookings.",
      },
      {
        q: "Do I need insurance?",
        a: "We have full insurance for all of our furniture for the duration of your hire period.",
      },
    ],
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].title);
  const [openItem, setOpenItem] = useState<string | null>(FAQ_CATEGORIES[0].faqs[0].q);

  const selectedCategory = FAQ_CATEGORIES.find(
    (category) => category.title === activeCategory
  );

  return (
    <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl mb-4 text-center">Frequently Asked Questions</h2>
      <p className="text-center text-sm mb-8 text-[#4b5f4b]">
        Home staging is not decoration — it’s a strategic marketing tool that
        builds emotional connection, clear presentation, and stronger sale
        outcomes.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category.title}
            onClick={() => {
              setActiveCategory(category.title);
              setOpenItem(category.faqs[0]?.q ?? null);
            }}
            className={`px-4 py-2 rounded-full border transition text-sm ${
              activeCategory === category.title
                ? "bg-[#6b8f71] text-white border-[#6b8f71]"
                : "bg-[#f7f5ef] border-[#cfd8c3] hover:border-[#6b8f71]"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {selectedCategory?.faqs.map((item) => (
          <div key={item.q} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => setOpenItem(openItem === item.q ? null : item.q)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-xl">{openItem === item.q ? "−" : "+"}</span>
            </button>
            {openItem === item.q && (
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
          We’ve got you covered — contact us today to book a free consultation
          and get all your questions answered.
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
