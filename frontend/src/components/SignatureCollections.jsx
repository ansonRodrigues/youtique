import SignatureCollectionCard from "./SignatureCollectionCard";
import { products } from "../data/products";

const SignatureCollections = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="font-serif text-3xl text-slate-900">
          Signature Collections
        </h2>
        <p className="mt-2 max-w-xl text-slate-600">
          Curated pieces that define the Youtique identity.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {products.map((elem) => (
          /* Added the key prop here */
          <SignatureCollectionCard key={elem.id} product={elem} />
        ))}
      </div>
    </section>
  );
};

export default SignatureCollections;
