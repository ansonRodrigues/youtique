import React from "react";

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Silk Slip Dress", price: "$120", tag: "New" },
    { id: 2, name: "Cashmere Wrap", price: "$85", tag: "Limited" },
    { id: 3, name: "Gold Link Belt", price: "$45", tag: "New" },
    { id: 3, name: "Gold Link Belt", price: "$45", tag: "New" },
  ];

  return (
    <section className="relative px-6 py-5">
      <div className="mx-auto max-w-7xl">
        {/* Header Container */}
        <div className="relative mb-12 flex flex-col items-center md:block">
          {/* Title Section: Always Centered */}
          <div className="w-full text-center">
            <span className="text-sm font-medium tracking-[0.3em] text-slate-500 uppercase">
              The Fresh Edit
            </span>
            <h2 className="mt-2 font-serif text-4xl text-slate-900 md:text-5xl">
              New Arrivals
            </h2>
          </div>

          {/* Button: Centered on Mobile (mt-6), Pinned Right on Desktop (absolute) */}
          <button className="mt-6 border-b border-slate-600 pb-1 text-sm font-medium transition-all hover:border-slate-400 hover:text-slate-400 md:absolute md:right-0 md:bottom-2 md:mt-0">
            View All
          </button>
        </div>

        {/* Product Grid - Updated for Smaller Cards */}
        {/* Changed from grid-cols-1/md:grid-cols-3 -> grid-cols-2/md:grid-cols-4 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Glass Card Container */}
              <div className="relative overflow-hidden rounded-xl border border-white/40 bg-white/30 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Product Image Placeholder */}
                <div className="relative aspect-3/4 bg-slate-200/50">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full bg-white/80 px-2 py-1 text-[9px] font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
                      {product.tag}
                    </span>
                  </div>
                  <div className="h-full w-full bg-linear-to-tr from-slate-100 to-transparent opacity-60" />
                </div>

                {/* Info Overlay - Reduced padding to p-4 to fit smaller card */}
                <div className="p-4">
                  <h3 className="truncate font-serif text-base text-slate-800">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-light text-slate-500">
                      {product.price}
                    </p>
                    {/* Smaller button size */}
                    <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:bg-slate-900 hover:text-white">
                      <span className="text-sm">+</span>
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
