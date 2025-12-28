import React from "react";
import { assets } from "../assets/assets"; // Assuming you have social icons or a logo here
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#3A2E2A]">Youtique</h3>
            <p className="text-[#3A2E2A] opacity-70 text-sm leading-relaxed">
              Handcrafted resin art and bead bracelets designed to reflect your
              unique soul. Every piece tells a story of nature and elegance.
            </p>
            <div className="flex gap-4">
              {/* Replace with actual social icons from your assets */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#3A2E2A]/20 flex items-center justify-center text-[#3A2E2A] hover:bg-[#3A2E2A] hover:text-white transition-all"
              >
                <span className="text-xs">IG</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#3A2E2A]/20 flex items-center justify-center text-[#3A2E2A] hover:bg-[#3A2E2A] hover:text-white transition-all"
              >
                <span className="text-xs">FB</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium text-[#3A2E2A] uppercase tracking-widest text-xs mb-6">
              Collections
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 hover:text-[#C9A24D] transition-all"
                >
                  Bead Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 hover:text-[#C9A24D] transition-all"
                >
                  Resin Art
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 hover:text-[#C9A24D] transition-all"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 hover:text-[#C9A24D] transition-all"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-medium text-[#3A2E2A] uppercase tracking-widest text-xs mb-6">
              Customer Care
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 transition-all"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 transition-all"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-[#3A2E2A] opacity-70 hover:opacity-100 transition-all"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER / CALL TO ACTION */}
          <div className="space-y-6">
            <h4 className="font-medium text-[#3A2E2A] uppercase tracking-widest text-xs mb-2">
              Stay Connected
            </h4>
            <p className="text-sm text-[#3A2E2A] opacity-70">
              Join our mailing list for exclusive launches.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-b border-[#3A2E2A]/30 py-2 text-sm focus:outline-none focus:border-[#C9A24D] transition-all text-[#3A2E2A]"
              />
              <button className="text-left text-xs uppercase tracking-[0.2em] font-semibold text-[#3A2E2A] pt-2 hover:text-[#C9A24D] transition-all">
                Subscribe &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-[#3A2E2A]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-[#3A2E2A] opacity-50">
            &copy; {new Date().getFullYear()} Youtique Jewelry. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-[#3A2E2A] opacity-50">
              Designed with Love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
