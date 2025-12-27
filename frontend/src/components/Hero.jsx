import React from "react";

import { assets } from "../assets/assets";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 lg:w-12 h-[1.5px] bg-[#3A2E2A]"></span>

              <p className="font-medium text-[#C9A24D] tracking-[0.2em] uppercase text-xs lg:text-sm">
                Handcrafted with Love
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#3A2E2A] leading-tight">
              Wearable Art <br />
              <span className="italic">For Your Soul</span>
            </h1>

            <p className="text-[#3A2E2A] text-base lg:text-lg max-w-md opacity-80 leading-relaxed">
              Discover our exclusive collection of resin-infused bracelets and
              accessories, where nature’s beauty meets modern elegance.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <Link
                to="/collections"
                className="px-7 py-3 bg-[#3A2E2A] text-white hover:bg-[#C9A24D] transition-all duration-300 rounded-sm shadow-md text-xs uppercase tracking-widest"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="text-[#3A2E2A] border-b border-[#3A2E2A] pb-1 text-xs uppercase tracking-widest hover:text-[#C9A24D] hover:border-[#C9A24D] transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-125 lg:max-w-full">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F5D5C0] rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border-8 border-white/40">
                <img
                  src={assets.heroImg}
                  alt="Resin Art"
                  className="w-full h-auto max-h-100 lg:max-h-137.5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
