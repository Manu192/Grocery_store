import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useCart } from "../../Common/Context/CartContext";
import { Link } from "react-router-dom";

function LandingPage() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Fresh Apples", price: 120, img: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg" },
    { id: 2, name: "Organic Milk", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRiki8m18uLKyubnv2zExOU9l9EMXoYo4aOPDumNgFANF8NoOasQ-US0NJVVzP2yWII&usqp=CAU" },
    { id: 3, name: "Basmati Rice", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSzAmGRP-SR_9wK88yMgwCouappQEPjkzNrxK_ybB1CPv49cp0OQ4sfhiSV0CtKMTiuI&usqp=CAU" },
    { id: 4, name: "Potato Chips", price: 40, img: "https://images-cdn.ubuy.co.in/63512d75d9569241954a7fe9-lay-39-s-classic-potato-chips.jpg" },
  ];

  const categories = [
  { id: 1, name: "Fruits", image: "https://www.diagnosisdiet.com/assets/images/7/fruit-og-jcnp4h14m2mh5t9.jpg", path: "/category/fruits" },
  { id: 2, name: "Vegetables", image: "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg", path: "/category/vegetables" },
  { id: 3, name: "Snacks", image: "https://www.shutterstock.com/image-photo/colorful-mix-salty-snacks-beer-260nw-2593468017.jpg", path: "/category/snacks" },
  { id: 4, name: "Dairy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1I3o2E2WOQt-Y4TW8z_FM2ZP7O865nE3c0OkkKewmXGsDjmJtvskFumUXmxBapFsn5OU&usqp=CAU", path: "/category/dairy" },
];

  return (
    <>
// <<<<<<< Alkesh
      <Header/>
// =======
      <Header />

       {/* Categories */}
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
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

      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">⭐ Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={product.img} alt={product.name} className="mx-auto mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

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

      

// >>>>>>> master
      <Footer />
    </>
  );
}

export default LandingPage;
