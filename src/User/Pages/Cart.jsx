import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header />
      <section className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
              >
                <div>
                  <img src={item?.img} alt={item?.name} />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Cart;
