import React from "react";
import { assets } from "../assets/assets"; // Assuming you have social icons or a logo here
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#3A2E2A]">Youtique</h3>
            <p className="text-sm leading-relaxed text-[#3A2E2A] opacity-70">
              Handcrafted resin art and bead bracelets designed to reflect your
              unique soul. Every piece tells a story of nature and elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center text-[#3A2E2A] transition-all hover:bg-[#3A2E2A] hover:text-white"
              >
                <span className="text-xs">
                  <img src={assets.iG} alt="IG" />
                </span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center text-[#3A2E2A] transition-all hover:bg-[#3A2E2A] hover:text-white"
              >
                <span className="text-xs">
                  <img src={assets.twitter} alt="X" />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-medium tracking-widest text-[#3A2E2A] uppercase">
              Collections
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:text-[#C9A24D] hover:opacity-100"
                >
                  Bead Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:text-[#C9A24D] hover:opacity-100"
                >
                  Resin Art
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:text-[#C9A24D] hover:opacity-100"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:text-[#C9A24D] hover:opacity-100"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-medium tracking-widest text-[#3A2E2A] uppercase">
              Customer Care
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:opacity-100"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:opacity-100"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:opacity-100"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-[#3A2E2A] opacity-70 transition-all hover:opacity-100"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="mb-2 text-xs font-medium tracking-widest text-[#3A2E2A] uppercase">
              Stay Connected
            </h4>
            <p className="text-sm text-[#3A2E2A] opacity-70">
              Join our mailing list for exclusive launches.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="border-b border-[#3A2E2A]/30 bg-transparent py-2 text-sm text-[#3A2E2A] transition-all focus:border-[#C9A24D] focus:outline-none"
              />
              <button className="pt-2 text-left text-xs font-semibold tracking-[0.2em] text-[#3A2E2A] uppercase transition-all hover:text-[#C9A24D]">
                Subscribe &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#3A2E2A]/10 pt-8 md:flex-row">
          <p className="text-[10px] tracking-widest text-[#3A2E2A] uppercase opacity-50">
            &copy; {new Date().getFullYear()} Youtique Jewelry. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[10px] tracking-widest text-[#3A2E2A] uppercase opacity-50">
              Designed with Love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
