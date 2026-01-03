import React, { useState } from "react";
import ProductCardDummy from "../components/ProductCardDummy";
import { products } from "../data/products";

const categories = [
  "All",
  "Anklets",
  "Bracelets",
  "Chains",
  "Phone Charms",
  "Resin Art",
  "Earrings",
];

const Collections = () => {
  // products }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-900">
      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">
            Curated Treasures
          </span>
          <h1 className="mt-4 font-serif text-5xl text-slate-900 md:text-6xl">
            The Collection
          </h1>
          <p className="mx-auto mt-4 max-w-md text-slate-500">
            Handcrafted pieces designed to bring a touch of magic to your
            everyday style.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white/50 text-slate-600 ring-1 ring-black/5 backdrop-blur-sm hover:bg-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCardDummy key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400">
              No pieces found in this category yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Collections;
