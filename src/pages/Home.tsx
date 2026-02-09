import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-10 py-16 space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl mb-6 leading-tight">
            Helping Sydney & Newcastle properties achieve faster sales and
            stronger prices
          </h2>
          <p className="text-sm leading-relaxed text-[#4b5f4b]">
            Home staging brings your property to life, builds emotional
            connection, and supports faster sales at stronger prices.
          </p>
          <button
            onClick={() => navigate("/connect")}
            className="mt-8 px-8 py-4 bg-[#6b8f71] text-white rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Book a Free Consultation
          </button>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-hidden whitespace-nowrap">
          {[...images, ...images].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt="Home staging"
              className="h-56 w-80 object-cover rounded-xl flex-shrink-0 shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
