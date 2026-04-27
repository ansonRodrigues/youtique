import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Left Text Content */}
          <div className="flex w-full flex-col items-start space-y-4 lg:w-1/2 lg:space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-8 bg-slate-400 lg:w-12"></span>
              <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase lg:text-sm">
                Handcrafted with Love
              </p>
            </div>

            <h1 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl lg:text-7xl">
              Wearable Art <br />
              <span className="text-slate-800 italic">For Your Soul</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-slate-700 opacity-80 lg:text-lg">
              Discover our exclusive collection of resin-infused bracelets and
              accessories, where nature’s beauty meets modern elegance.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <Link
                to="/collections"
                className="rounded-sm bg-slate-900 px-7 py-3 text-xs tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-slate-800"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="border-b border-slate-600 pb-1 text-xs tracking-widest text-slate-900 uppercase transition-all hover:border-slate-600 hover:text-slate-600"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            <div className="relative max-w-125 lg:max-w-full">
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />

              <div className="trace-border relative z-10 shadow-xl">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={assets.heroImg}
                    alt="Handcrafted resin-infused jewelry"
                    className="h-auto max-h-100 w-full object-cover lg:max-h-137.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
