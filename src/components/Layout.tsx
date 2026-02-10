import React from "react";
import { Link } from "react-router-dom";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics.ts";
import { openWhatsAppPhone } from "../utils/whatsapp.ts";
import { FacebookIcon } from "./icons/FacebookIcon.tsx";
import { InstagramIcon } from "./icons/InstagramIcon.tsx";
import { WhatsAppIcon } from "./icons/WhatsAppIcon.tsx";
import { WhatsAppButton } from "./WhatsAppButton.tsx";
import { OpalLogo } from "./branding/OpalLogo.tsx";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  useGoogleAnalytics();
  const phone = "+61 434 321 556";

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f3e2f] font-serif flex flex-col">
      <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 border-b border-[#cfd8c3]">
        <Link to="/" aria-label="Opal HomeStaging home" className="block w-[220px] md:w-[280px]">
          <OpalLogo className="w-full h-auto" />
        </Link>
        <nav className="space-x-6 text-sm mt-4 md:mt-0">
          <Link to="/" className="hover:text-[#6b8f71]">
            Home
          </Link>
          <Link to="/services" className="hover:text-[#6b8f71]">
            Services
          </Link>
          <Link to="/pricing" className="hover:text-[#6b8f71]">
            Pricing
          </Link>
          <Link to="/gallery" className="hover:text-[#6b8f71]">
            Gallery
          </Link>
          <Link to="/faq" className="hover:text-[#6b8f71]">
            FAQ
          </Link>
          <Link to="/connect" className="hover:text-[#6b8f71]">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#2f3e2f] text-[#f7f5ef] px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-lg mb-2">Opal HomeStaging</h4>
            <p>
              Helping Sydney & Newcastle properties achieve faster sales and
              stronger prices.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-2">Contact</h4>
            <p>Location: Sydney & Newcastle</p>
            <p>Phone: +61 434 321 556</p>
            <p>Email: Opal.homestyling@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2 items-center">
              <a
                href="https://www.instagram.com/opal.homestaging"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opal Instagram"
                className="p-2 bg-[#f7f5ef] rounded-full text-[#2f3e2f]"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/OpalHomeStaging"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opal Facebook"
                className="p-2 bg-[#f7f5ef] rounded-full text-[#2f3e2f]"
              >
                <FacebookIcon />
              </a>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsAppPhone(
                    phone,
                    "Hello Opal HomeStaging - I'd like to enquire."
                  );
                }}
                aria-label="Chat on WhatsApp"
                className="p-2 bg-[#f7f5ef] rounded-full text-[#2f3e2f]"
              >
                <WhatsAppIcon />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
