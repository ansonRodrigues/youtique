import React from "react";
import { products } from "../data/products";
import ProductCardDummy from "./ProductCardDummy";

const SignatureCollections = () => {
  return (
    <div>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs tracking-[0.25em] text-[#C9A24D] uppercase">
              Explore
            </p>

            <h2 className="font-serif text-3xl text-[#3A2E2A] md:text-4xl">
              Signature Collections
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#3A2E2A] opacity-70">
              Thoughtfully curated pieces that reflect our love for art,
              craftsmanship, and timeless design.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((elem) => (
              <ProductCardDummy product={elem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignatureCollections;
