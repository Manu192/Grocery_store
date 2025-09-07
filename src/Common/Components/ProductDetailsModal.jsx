import React from "react";
import { useCart } from "../Context/CartContext";

function ProductDetailsModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null; // don't render if no product is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
        >
          ✖
        </button>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />

          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">Category: {product.category}</p>
            <p className="text-green-600 font-semibold text-xl mt-3">
              ₹{product.price}
            </p>
            <p className="text-gray-700 mt-4">
              {product.description ||
                "Fresh and high-quality grocery product delivered to your doorstep."}
            </p>

            <button
              onClick={() => {
                addToCart(product);
                onClose(); // close modal after adding
              }}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
