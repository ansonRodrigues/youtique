import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <section className="overflow-hidden pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
            <div className="order-2 flex w-full justify-center lg:order-1 lg:w-1/2 lg:justify-start">
              <div className="relative">
                <img
                  src={assets.contactUs || "/assets/contactUs.png"}
                  alt="Contact Youtique"
                  className="h-auto w-full max-w-sm object-contain lg:max-w-md"
                />
                <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 border-r-2 border-b-2 border-[#C9A24D]/30"></div>
              </div>
            </div>

            <div className="order-1 flex w-full flex-col items-start space-y-6 lg:order-2 lg:w-1/2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-8 bg-[#3A2E2A] lg:w-12"></span>
                  <p className="text-xs font-medium tracking-[0.2em] text-[#C9A24D] uppercase lg:text-sm">
                    Contact Us
                  </p>
                </div>
                <h2 className="font-serif text-4xl leading-tight text-[#3A2E2A] md:text-5xl">
                  Let’s <span className="italic">Connect</span>
                </h2>
              </div>

              <div className="w-full max-w-lg space-y-8">
                <p className="text-base leading-relaxed text-[#3A2E2A] opacity-80 lg:text-lg">
                  Have a question or just want to say hello? We’d love to hear
                  from you.
                </p>

                <ul className="space-y-5">
                  <li className="group flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center text-[#C9A24D] transition-transform group-hover:scale-110">
                      <span className="text-lg">
                        <img src={assets.email} alt="✉" />
                      </span>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#C9A24D] uppercase">
                        Email Us
                      </p>
                      <p className="text-[#3A2E2A]">hello@youtique.com</p>
                    </div>
                  </li>
                  <li className="group flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center text-[#C9A24D] transition-transform group-hover:scale-110">
                      <span className="text-lg">
                        <img src={assets.phone} alt="✆" />
                      </span>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#C9A24D] uppercase">
                        Call Us
                      </p>
                      <p className="text-[#3A2E2A]">+91 98205 13604</p>
                    </div>
                  </li>
                </ul>

                <form className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-[#3A2E2A]/20 bg-transparent py-3 text-[#3A2E2A] placeholder-[#3A2E2A]/40 transition outline-none focus:border-[#C9A24D]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-[#3A2E2A]/20 bg-transparent py-3 text-[#3A2E2A] placeholder-[#3A2E2A]/40 transition outline-none focus:border-[#C9A24D]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-[#3A2E2A]/20 bg-transparent py-3 text-[#3A2E2A] placeholder-[#3A2E2A]/40 transition outline-none focus:border-[#C9A24D] sm:col-span-2"
                  />
                  <textarea
                    rows="3"
                    placeholder="How can we help?"
                    className="w-full border-b border-[#3A2E2A]/20 bg-transparent py-3 text-[#3A2E2A] placeholder-[#3A2E2A]/40 transition outline-none focus:border-[#C9A24D] sm:col-span-2"
                  />
                  <button className="mt-4 w-full rounded-sm bg-[#3A2E2A] px-7 py-3 text-xs tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-[#C9A24D] sm:col-span-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
