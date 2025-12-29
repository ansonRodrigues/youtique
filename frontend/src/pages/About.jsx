import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

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
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-8 bg-[#3A2E2A] lg:w-12"></span>
                <p className="text-xs font-medium tracking-[0.2em] text-[#C9A24D] uppercase lg:text-sm">
                  Our Story
                </p>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-[#3A2E2A] md:text-5xl">
                Crafted with <br />
                <span className="italic">Elegance</span>
              </h2>

              <div className="max-w-lg space-y-4 text-base leading-relaxed text-[#3A2E2A] opacity-80 lg:text-lg">
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
      {/* --- Values Section --- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-12 font-serif text-3xl text-[#3A2E2A]">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium tracking-widest text-[#C9A24D] uppercase">
                Quality Materials
              </h4>
              <p className="text-[#3A2E2A] opacity-70">
                We source only the finest sustainable metals and ethically
                obtained gemstones.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium tracking-widest text-[#C9A24D] uppercase">
                Artisan Design
              </h4>
              <p className="text-[#3A2E2A] opacity-70">
                Every curve and clasp is sketched by hand and refined for
                ultimate comfort.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium tracking-widest text-[#C9A24D] uppercase">
                Timeless Style
              </h4>
              <p className="text-[#3A2E2A] opacity-70">
                Our pieces are designed to transcend trends and be loved for
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Mission Statement / CTA --- */}
      <section className="bg-[#3A2E2A] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl">
            Experience the Youtique Touch
          </h2>
          <p className="mb-10 text-lg font-light italic opacity-80">
            "Jewelry that speaks when you don't have to."
          </p>
          <button className="bg-[#C9A24D] px-8 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors duration-300 hover:bg-[#b08b3a]">
            Shop the Collection
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
