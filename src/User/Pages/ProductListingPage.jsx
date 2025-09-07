import React from "react";
import { useCart } from "../../Common/Context/CartContext";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const products = [
  // Fruits
  { id: 1, name: "Apple", price: 120, image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg", category: "Fruits" },
    { id: 2, name: "Banana", price: 60, image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg" },
  { id: 3, name: "Orange", price: 100, image: "https://tiimg.tistatic.com/fp/1/007/247/natural-fresh-orange-fruits-additional-benefit-to-health-pure-healthy-finest-quality-orange-color-891.jpg", category: "Fruits" },

  // Vegetables
    { id: 3, name: "Tomato", price: 40, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
    { id: 4, name: "Potato", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpbPLwAclKIwbuvzDs_AkuKr1kRRADP0WFg&s" },
  { id: 6, name: "Onion", price: 80, image: "/images/onion.jpg", category: "Vegetables" },

  // Dairy
    { id: 6, name: "Milk", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRiki8m18uLKyubnv2zExOU9l9EMXoYo4aOPDumNgFANF8NoOasQ-US0NJVVzP2yWII&usqp=CAU" },
  { id: 8, name: "Cheese", price: 200, image: "/images/cheese.jpg", category: "Dairy" },
  { id: 9, name: "Butter", price: 150, image: "/images/butter.jpg", category: "Dairy" },

  // Snacks
    { id: 5, name: "Potato Chips", price: 40, image: "https://images-cdn.ubuy.co.in/63512d75d9569241954a7fe9-lay-39-s-classic-potato-chips.jpg" },
  { id: 11, name: "Biscuits", price: 30, image: "/images/biscuits.jpg", category: "Snacks" },
  { id: 12, name: "Chocolate", price: 90, image: "/images/chocolate.jpg", category: "Snacks" },
];

function ProductListingPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
        <Header/>
      <h2 className="text-3xl font-bold mb-6">🛒 All Grocery Items</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded"
            />

            {/* Product Details */}
            <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-sm text-green-600">{product.category}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default ProductListingPage;
