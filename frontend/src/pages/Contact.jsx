import React from "react";

const Contact = () => {
  return (
    <section className="relative px-6 py-24">
      {/* Heading */}
      <h1 className="text-center text-4xl font-semibold text-slate-900">
        Get in <span className="text-[#C9A24D]">Touch</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
        Have a question, collaboration idea, or just want to say hello? We’d
        love to hear from you.
      </p>

      {/* Card */}
      <div className="mx-auto mt-16 grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-md md:grid-cols-2">
        {/* Left – Info */}
        <div className="p-8 md:p-10">
          <h3 className="text-xl font-semibold text-slate-900">
            Contact Information
          </h3>

          <p className="mt-3 text-slate-600">
            Reach out through any of the following channels.
          </p>

          <ul className="mt-8 space-y-6 text-slate-700">
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A24D]/15 text-[#C9A24D]">
                📧
              </span>
              hello@yourdomain.com
            </li>

            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A24D]/15 text-[#C9A24D]">
                📞
              </span>
              +91 9XXXXXXXXX
            </li>

            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A24D]/15 text-[#C9A24D]">
                📍
              </span>
              Mumbai, India
            </li>
          </ul>
        </div>

        {/* Right – Form */}
        <div className="bg-slate-50/60 p-8 md:p-10">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:border-[#C9A24D] focus:ring-[#C9A24D]/30"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:border-[#C9A24D] focus:ring-[#C9A24D]/30"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:border-[#C9A24D] focus:ring-[#C9A24D]/30"
            />

            <button className="w-full rounded-lg bg-[#C9A24D] py-3 font-medium text-white shadow-[0_8px_30px_rgba(201,162,77,0.35)] transition hover:brightness-110">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
