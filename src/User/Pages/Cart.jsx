import React from "react";
import { useCart } from "../../Common/Context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  // ✅ Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border rounded-lg shadow p-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity || 1}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div className="border-t pt-4 mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
