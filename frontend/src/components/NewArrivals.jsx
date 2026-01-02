import React from "react";

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Silk Slip Dress", price: "$120", tag: "New" },
    { id: 2, name: "Cashmere Wrap", price: "$85", tag: "Limited" },
    { id: 3, name: "Gold Link Belt", price: "$45", tag: "New" },
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header with that Youtique Serif Style */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium tracking-[0.3em] text-slate-500 uppercase">
              The Fresh Edit
            </span>
            <h2 className="mt-2 font-serif text-4xl text-slate-900 md:text-5xl">
              New Arrivals
            </h2>
          </div>
          <button className="border-b border-slate-900 pb-1 text-sm font-medium transition-all hover:border-sky-600 hover:text-sky-600">
            View All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Glass Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Product Image Placeholder */}
                <div className="relative aspect-3/4 bg-slate-200/50">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
                      {product.tag}
                    </span>
                  </div>
                  {/* Image would go here */}
                  <div className="h-full w-full bg-linear-to-tr from-slate-100 to-transparent opacity-60" />
                </div>

                {/* Info Overlay */}
                <div className="p-6">
                  <h3 className="font-serif text-lg text-slate-800">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-light text-slate-500">{product.price}</p>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:bg-slate-900 hover:text-white">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
