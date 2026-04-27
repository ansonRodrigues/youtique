import React from "react";
import { assets } from "../../assets/assets";
import Footer from "../../components/layout/Footer";

const About = () => {
  return (
    <>
      <section className="overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
            <div className="order-2 flex w-full justify-center lg:order-1 lg:w-1/2 lg:justify-start">
              <img
                src={assets.aboutUs}
                alt="About Youtique"
                className="h-auto w-full max-w-sm object-contain lg:max-w-md"
              />
            </div>

            <div className="order-1 flex w-full flex-col items-start space-y-4 lg:order-2 lg:w-1/2 lg:space-y-6">
              {/* Accent */}
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-8 bg-slate-400 lg:w-12" />
                <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase lg:text-sm">
                  Our Story
                </p>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
                Crafted with <br />
                <span className="text-slate-800 italic">Elegance</span>
              </h2>

              <div className="max-w-lg space-y-4 text-base leading-relaxed text-slate-700 opacity-80 lg:text-lg">
                <p>
                  At Youtique, we believe jewelry is more than an accessory —
                  it’s a reflection of individuality. Each bracelet is
                  thoughtfully designed with attention to detail, combining
                  timeless aesthetics with modern simplicity.
                </p>
                <p>
                  Our journey began with a simple idea: to create jewelry that
                  doesn't just sit in a box, but becomes a part of your daily
                  expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-12 font-serif text-3xl text-slate-900">
            What Sets Us Apart
          </h3>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                Quality Materials
              </h4>
              <p className="text-slate-600 opacity-90">
                We source only the finest sustainable metals and ethically
                obtained gemstones.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                Artisan Design
              </h4>
              <p className="text-slate-600 opacity-90">
                Every curve and clasp is sketched by hand and refined for
                ultimate comfort.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                Timeless Style
              </h4>
              <p className="text-slate-600 opacity-90">
                Our pieces are designed to transcend trends and be loved for
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-serif text-3xl text-slate-900 md:text-4xl">
            Experience the Youtique Touch
          </h2>

          <p className="mb-10 text-lg text-slate-600 italic">
            "Jewelry that speaks when you don't have to."
          </p>

          <button className="rounded-sm bg-slate-900 px-8 py-3 text-sm font-medium tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-slate-800">
            Shop the Collection
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
