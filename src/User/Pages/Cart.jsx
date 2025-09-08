import React from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../Redux/Slice/cartSlice";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = async () => {
    console.log("Checkout Items:", cartItems);
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please login first!",
        confirmButtonText: "OK",
      });
      return;
    }

    if (cartItems.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Your cart is empty!",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const updatedOrders = [...(user.orders || []), ...cartItems];

      const res = await fetch(`http://localhost:4000/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orders: updatedOrders }),
      });

      if (res.ok) {
        const updatedUser = { ...user, orders: updatedOrders };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        dispatch(clearCart());
        // ✅ Add to global orders[] in db.json
        for (const order of cartItems) {
          await fetch("http://localhost:4000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...order, userId: user.id }), // attach userId
          });
        }

        // ✅ SweetAlert Success Popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order placed successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to save order");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
      });
    }
  };

  return (
    <>
      <Header />
      <section className="py-12 max-w-4xl mx-auto px-4">
  <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

  {cartItems.length === 0 ? (
    <p className="text-gray-600 mb-6">Your cart is empty.</p>
  ) : (
    <div className="space-y-4 mb-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <img
              src={item?.img || item?.image || "https://via.placeholder.com/150"}
              alt={item?.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Check out
      </button>
    </div>
  )}

  {/* Purchase History Button */}
  <div className="flex justify-center mt-6">
    <Link to={"/purchasehistory"}><button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
      Purchase History
    </button></Link>
    
  </div>
</section>

      <Footer />
    </>
  );
}

export default Cart;
