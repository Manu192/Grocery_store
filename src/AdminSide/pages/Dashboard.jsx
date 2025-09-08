import React, { useEffect, useState } from 'react';
import { FaUsers, FaShoppingBasket, FaClipboardList } from 'react-icons/fa';

export default function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.length);
      })
      .catch((err) => console.error("Error fetching users:", err));

      fetch("http://localhost:4000/products")
      .then((res)=>res.json())
      .then((data)=>{
        setTotalProducts(data.length);
      })
      .catch((err)=>console.log("Error fetching products:", err));

      fetch("http://localhost:4000/orders")
      .then((res)=>res.json())
      .then((data)=>{
        setTotalOrders(data.length);
      })
      .catch((err)=>console.log("Error fetching orders:", err));

  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-green-600 via-teal-500 to-lime-400 text-white p-6 rounded-xl shadow-md text-center font-semibold mb-6">
        “Every product you manage, every order you fulfill—you're building trust. Keep leading with impact.” 🚀
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <FaUsers className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-green-700">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <FaShoppingBasket className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Products Listed</h3>
            <p className="text-2xl font-bold text-green-700">{totalProducts}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <FaClipboardList className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Orders Processed</h3>
            <p className="text-2xl font-bold text-green-700">{totalOrders}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500 italic">
        "Excellence in management is not an act, but a habit." - Aristotle
      </div>
    </div>
  );
}
