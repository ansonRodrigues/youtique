import React from "react";

const ProcessSpotlight = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white/40 p-8 ring-1 ring-black/5 backdrop-blur-sm md:p-16">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            {/* Image side with a "stacked" effect */}
            <div className="relative w-full md:w-1/2">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590736962236-41305df6205e?auto=format&fit=crop&q=80&w=800"
                  alt="Resin pouring process"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative element to match your background blurs */}
              <div className="absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-full bg-indigo-200/50 blur-2xl" />
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-xs font-medium tracking-[0.3em] text-slate-400 uppercase">
                The Process
              </p>
              <h2 className="font-serif text-3xl leading-tight text-[#3A2E2A] md:text-5xl">
                Hand-poured with <br />
                <span className="italic">extraordinary</span> care.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Every Youtique piece starts as a vision. We use high-clarity
                resin and hand-picked botanicals to ensure that no two charms or
                bracelets are ever exactly the same.
              </p>
              <button className="mt-8 border-b-2 border-[#3A2E2A] pb-1 text-sm font-bold tracking-widest text-[#3A2E2A] transition-all hover:opacity-60">
                LEARN OUR STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSpotlight;
