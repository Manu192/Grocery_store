import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchProducts } from "../../Redux/Slice/Productslice";
import { addToCart } from "../../Redux/Slice/cartSlice";

function LandingPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Products loaded!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [products]);

  const categories = products.filter((item) => item.type === "category");
  const featured = products.filter((item) => item.type === "product" || !item.type);
 console.log(products)
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-green-800 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fresh Groceries Delivered to Your Doorstep 🥦🍎
        </h1>
        <p className="mt-4 text-lg">
          Save time & money – shop fresh, organic & daily essentials online.
        </p>
        <Link to={"/products"}>
          <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Category Cards */}
      <section className="py-10 px-4 bg-white">
        <h2 className="text-2xl font-bold mb-6">🧺 Shop by Category</h2>
        {loading ? (
          <p>Loading categories... 🌀</p>
        ) : error ? (
          <p>Error loading categories 😢</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                to={cat.path}
                key={cat.id}
                className="block text-center border rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <h3 className="p-2 font-semibold">{cat.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">⭐ Featured Products</h2>
        {loading ? (
          <p className="text-center">Loading products... 🌀</p>
        ) : error ? (
          <p className="text-center text-red-500">Error loading products 😢</p>
        ) : featured.length === 0 ? (
          <p className="text-center text-gray-500">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {featured.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                <img
                  src={product.img || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="mx-auto mb-4 h-32 object-contain"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Why Shop With Us */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">💚 Why Shop With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-green-50 shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh & Organic</h3>
            <p className="text-gray-600">We source directly from local farms and trusted suppliers.</p>
          </div>
          <div className="bg-green-50 shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your groceries delivered within hours, not days.</p>
          </div>
          <div className="bg-green-50 shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Motivational Experience</h3>
            <p className="text-gray-600">We celebrate every action with toasts, quotes & confetti 🎉</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-100 text-center">
        <blockquote className="text-xl italic text-green-800">
          “Every small step you take toward healthy living is a giant leap for your future self.”
        </blockquote>
        <p className="mt-2 text-gray-600">— FreshBasket Philosophy</p>
      </section>

      {/* Offers Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">🔥 Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">50% Off on Vegetables 🥬</h3>
            <p className="text-gray-600">Get fresh veggies at half price today only!</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Buy 1 Get 1 Free 🍌</h3>
            <p className="text-gray-600">Exclusive offer on selected fruits.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Free Delivery 🚚</h3>
            <p className="text-gray-600">On orders above ₹500 for this weekend.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
