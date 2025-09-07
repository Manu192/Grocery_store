import React, { useState } from "react";
import { useCart } from "../../Common/Context/CartContext";
import products from "../../data/products";
import categories from "../../data/categories";
import ProductDetailsModal from "../../Common/Components/ProductDetailsModal";

function ProductListingPage() {
  const { addToCart } = useCart();

  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🛒 All Grocery Items</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
        {/* Search Input (UI only) */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-l w-full"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700">
            Search
          </button>
        </div>

        {/* Category Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded mt-3 md:mt-0"
        >
          <option value="All">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedProduct(product)} // ✅ open modal
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded"
              />
              <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found.
          </p>
        )}
      </div>

      {/* ✅ Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  );
}

export default ProductListingPage;
