import React, { useEffect } from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slice/Productslice";
import { addToCart } from "../../Redux/Slice/cartSlice";

function ProductListingPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const groceryItems = products.filter((item) => item.type === "product");

  return (
    <div className="p-6">
      <Header />
      <h2 className="text-3xl font-bold mb-6">🛒 All Grocery Items</h2>

      {loading ? (
        <p className="text-center">Loading products... 🌀</p>
      ) : error ? (
        <p className="text-center text-red-500">Error loading products 😢</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {groceryItems.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-32 h-32 object-cover rounded"
              />
              <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-sm text-green-600">{product.category}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductListingPage;
