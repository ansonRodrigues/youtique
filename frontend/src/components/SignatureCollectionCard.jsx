import { Link } from "react-router-dom";

const SignatureCollectionCard = ({ product }) => {
  return (
    <Link
      to={`/collections/${product.id}`}
      className="group relative overflow-hidden rounded-3xl bg-white/60 shadow-[0_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)]"
    >
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />

      <div className="absolute bottom-0 p-6">
        <h3 className="font-serif text-2xl text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-white/80">{product.desc}</p>
        <span className="mt-3 inline-block text-sm font-medium text-white/90">
          Explore →
        </span>
      </div>
    </Link>
  );
};

export default SignatureCollectionCard;
