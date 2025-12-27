import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative max-w-md w-full">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F5D5C0] rounded-full blur-3xl opacity-60"></div>

              <img
                src={assets.aboutUs}
                alt="About Youtique"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <span className="w-8 lg:w-12 h-[1.5px] bg-[#3A2E2A]"></span>
              <p className="font-medium text-[#C9A24D] tracking-[0.2em] uppercase text-xs lg:text-sm">
                Our Story
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#3A2E2A] leading-tight">
              Crafted with <br />
              <span className="italic">Elegance</span>
            </h2>

            <div className="space-y-4 text-[#3A2E2A] opacity-80 text-base lg:text-lg leading-relaxed max-w-lg">
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
    </section>
  );
};

export default About;
