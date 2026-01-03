import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-slate-900">Youtique</h3>

            <p className="text-sm leading-relaxed text-slate-600">
              Handcrafted resin art and bead bracelets designed to reflect your
              unique soul. Every piece tells a story of nature and elegance.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center text-slate-500 transition-all hover:text-slate-900"
              >
                <Instagram
                  strokeWidth={1.5}
                  size={35}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center text-slate-500 transition-all hover:text-slate-900"
              >
                <Twitter
                  strokeWidth={1.5}
                  size={35}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-widest text-slate-900 uppercase">
              Collections
            </h4>

            <ul className="space-y-4">
              {["Bead Bracelets", "Resin Art", "New Arrivals", "Gift Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/collections"
                      className="relative text-sm text-slate-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-full"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-widest text-slate-900 uppercase">
              Customer Care
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Our Story", to: "/about" },
                { label: "Shipping Policy", to: "/shipping" },
                { label: "Contact Us", to: "/contact" },
                { label: "FAQs", to: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="relative text-sm text-slate-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium tracking-widest text-slate-900 uppercase">
              Stay Connected
            </h4>

            <p className="text-sm text-slate-600">
              Join our mailing list for exclusive launches.
            </p>

            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="border-b border-slate-300 bg-transparent py-2 text-sm text-slate-700 transition-all focus:border-slate-900 focus:outline-none"
              />

              <button className="pt-2 text-left text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase transition-colors hover:text-slate-900">
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 md:flex-row">
          <p className="text-[10px] tracking-widest text-slate-500 uppercase">
            © {new Date().getFullYear()} Youtique Jewelry. All Rights Reserved.
          </p>

          <p className="text-[10px] tracking-widest text-slate-500 uppercase">
            Designed with Love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
