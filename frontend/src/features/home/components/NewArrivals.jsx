import React from "react";
import FeaturedProductCard from "./FeaturedProductCard"; // Make sure this path points to your new file

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Silk Slip Dress", price: "$120", tag: "New" },
    { id: 2, name: "Cashmere Wrap", price: "$85", tag: "Limited" },
    { id: 3, name: "Gold Link Belt", price: "$45", tag: "New" },
    { id: 4, name: "Silver Link Belt", price: "$45", tag: "New" }, // Fixed duplicate ID
  ];

  return (
    <section className="relative px-6 py-5">
      <div className="mx-auto max-w-7xl">
        {/* Header Container */}
        <div className="relative mb-12 flex flex-col items-center md:block">
          <div className="w-full text-center">
            <span className="text-sm font-medium tracking-[0.3em] text-slate-500 uppercase">
              The Fresh Edit
            </span>
            <h2 className="mt-2 font-serif text-4xl text-slate-900 md:text-5xl">
              New Arrivals
            </h2>
          </div>

          <button className="mt-6 border-b border-slate-600 pb-1 text-sm font-medium transition-all hover:border-slate-400 hover:text-slate-400 md:absolute md:right-0 md:bottom-2 md:mt-0">
            View All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <FeaturedProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              tag={product.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
