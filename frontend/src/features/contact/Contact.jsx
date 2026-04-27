import React from "react";
import { Mail, Phone } from "lucide-react";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <>
      <section className="overflow-hidden pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
            {/* Image */}
            <div className="order-2 flex w-full justify-center lg:order-1 lg:w-1/2 lg:justify-start">
              <div className="relative">
                <img
                  src={assets.contactUs || "/assets/contactUs.png"}
                  alt="Contact Youtique"
                  className="h-auto w-full max-w-sm object-contain lg:max-w-md"
                />

                {/* Accent frame */}
                <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 border-r-2 border-b-2 border-slate-300/40"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 flex w-full flex-col items-start space-y-6 lg:order-2 lg:w-1/2">
              {/* Heading */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-slate-400 lg:w-12"></span>
                  <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase lg:text-sm">
                    Contact Us
                  </p>
                </div>

                <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
                  Let’s <span className="italic">Connect</span>
                </h2>
              </div>

              <div className="w-full max-w-lg space-y-8">
                <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
                  Have a question or just want to say hello? We’d love to hear
                  from you.
                </p>

                {/* Contact info */}
                <ul className="space-y-5">
                  <li className="group flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center text-slate-500 transition-transform group-hover:scale-110 group-hover:text-slate-900">
                      <Mail strokeWidth={1.5} size={32} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Email Us
                      </p>
                      <p className="text-slate-900">hello@youtique.com</p>
                    </div>
                  </li>

                  <li className="group flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center text-slate-500 transition-transform group-hover:scale-110 group-hover:text-slate-900">
                      <Phone strokeWidth={1.5} size={32} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Call Us
                      </p>
                      <p className="text-slate-900">+91 98205 13604</p>
                    </div>
                  </li>
                </ul>

                {/* Form */}
                <form className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-slate-300 bg-transparent py-3 text-slate-700 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-slate-300 bg-transparent py-3 text-slate-700 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-slate-300 bg-transparent py-3 text-slate-700 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none sm:col-span-2"
                  />

                  <textarea
                    rows="3"
                    placeholder="How can we help?"
                    className="w-full border-b border-slate-300 bg-transparent py-3 text-slate-700 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none sm:col-span-2"
                  />

                  <button className="mt-4 w-full bg-slate-900 px-7 py-3 text-xs tracking-widest text-white uppercase transition-colors hover:bg-slate-800 sm:col-span-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
