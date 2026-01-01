import { Link } from "react-router-dom";

const ProductCardDummy = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image container */}
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg text-[#3A2E2A]">{product.name}</h3>

        <p className="mt-2 text-sm text-[#3A2E2A]/70">{product.description}</p>

        <p className="mt-3 text-sm font-medium text-[#3A2E2A]">
          ₹{product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCardDummy;
