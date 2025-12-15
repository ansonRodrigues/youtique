import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={assets.aboutUs}
            alt="About Youtique"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

        <div>
          <span className="text-l tracking-widest text-gray-500 uppercase border-b border-gray-300 pb-1">
            About Us
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-gray-900">
            Crafted with <span className="font-normal">Elegance</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
            At Youtique, we believe jewelry is more than an accessory — it’s a
            reflection of individuality. Each bracelet is thoughtfully designed
            with attention to detail, combining timeless aesthetics with modern
            simplicity.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            Our collections are made to be worn effortlessly, whether it’s a
            casual day out or a special occasion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
