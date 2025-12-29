import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section className="overflow-hidden py-20">
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
                At Youtique, we believe jewelry is more than an accessory — it’s
                a reflection of individuality. Each bracelet is thoughtfully
                designed with attention to detail, combining timeless aesthetics
                with modern simplicity.
              </p>
              <p>
                Our collections are made to be worn effortlessly, whether it’s a
                casual day out or a special occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
