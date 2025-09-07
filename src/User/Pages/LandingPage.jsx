import React, { useState } from "react";
import { useCart } from "../../Common/Context/CartContext";
import { Link } from "react-router-dom";
import products from "../../data/products";
import categories from "../../data/categories";
import ProductDetailsModal from "../../Common/Components/ProductDetailsModal";

function LandingPage() {
  const { addToCart } = useCart();

  const featured = products.slice(0, 4);
  
    const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>

      <div className="p-6">

       {/* Categories */}
      <h2 className="text-2xl font-bold mt-10 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/category/${c.name.toLowerCase()}`}
            className="border rounded-lg p-6 text-center shadow hover:shadow-lg"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-100 h-40"
            />
            <h3 className="mt-3 font-semibold text-lg">{c.name}</h3>
          </Link>
        ))}
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl font-bold py-6 mb-6">🌟 Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 text-center shadow cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedProduct(p)} // open modal
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-40 h-32 object-cover mx-auto"
            />
            <h3 className="mt-2 font-semibold">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      

       <div className="mt-6 text-center">
        <Link
          to="/products"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          View All Products →
        </Link>
      </div>

      {/* Banner Section */}
      <section className="relative bg-green-800 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fresh Groceries Delivered to Your Doorstep 🥦🍎
        </h1>
        <p className="mt-4 text-lg">
          Save time & money – shop fresh, organic & daily essentials online.
        </p>
       <Link to={'/products'}> <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
          Shop Now
        </button></Link>
      </section>

      {/* Offers Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">🔥 Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">50% Off on Vegetables 🥬</h3>
            <p className="text-gray-600">Get fresh veggies at half price today only!</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Buy 1 Get 1 Free 🍌</h3>
            <p className="text-gray-600">Exclusive offer on selected fruits.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Free Delivery 🚚</h3>
            <p className="text-gray-600">On orders above ₹500 for this weekend.</p>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}

export default LandingPage;
