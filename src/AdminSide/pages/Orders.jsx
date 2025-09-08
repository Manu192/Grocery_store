import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    fetch(`http://localhost:4000/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Order Name</th>
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border">Order Status</th>
                <th className="px-4 py-2 border">Order Price</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-2 border text-gray-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={order.id || index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{order.name}</td>
                    <td className="px-4 py-2 border">{order.id}</td>
                    <td
                      className={`px-4 py-2 border font-medium ${
                        order.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status || "Pending"}
                    </td>
                    <td className="px-4 py-2 border">₹{order.price}</td>
                    <td className="px-4 py-2 border">
                      <button className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 transition">
                        Order details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
