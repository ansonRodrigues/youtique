import { Link } from "react-router-dom";

const ProductCardDummy = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl bg-white/75 shadow-[0_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)]"
    >
      {/* Image */}
      <div className="flex aspect-square items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Soft divider */}
      <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg text-slate-800">{product.name}</h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <p className="mt-3 text-sm font-medium text-slate-900">
          ₹{product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCardDummy;
