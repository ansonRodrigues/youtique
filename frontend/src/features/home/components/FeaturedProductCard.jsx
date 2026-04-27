import React from "react";

const FeaturedProductCard = ({ name, price, tag }) => {
  return (
    <div className="group relative">
      {/* Glass Card Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/40 bg-white/30 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        {/* Product Image Placeholder */}
        <div className="relative aspect-3/4 bg-slate-200/50">
          <div className="absolute top-3 left-3 z-10">
            <span className="rounded-full bg-white/80 px-2 py-1 text-[9px] font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
              {tag}
            </span>
          </div>
          <div className="h-full w-full bg-linear-to-tr from-slate-100 to-transparent opacity-60" />
        </div>

        {/* Info Overlay */}
        <div className="p-4">
          <h3 className="truncate font-serif text-base text-slate-800">
            {name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-light text-slate-500">{price}</p>
            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:bg-slate-900 hover:text-white">
              <span className="text-sm">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
