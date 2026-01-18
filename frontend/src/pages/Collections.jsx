import { useState } from "react";
import { products } from "../data/products";
import ProductCardDummy from "../components/ProductCardDummy";

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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="relative pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="font-serif text-4xl text-slate-800">Collections</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
            A curated selection of handcrafted pieces designed to complement
            every moment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white/60 text-slate-600 ring-1 ring-black/5 backdrop-blur hover:bg-white/80"
                } `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCardDummy key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="mt-24 text-center text-slate-500">
            No pieces available in this collection.
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
