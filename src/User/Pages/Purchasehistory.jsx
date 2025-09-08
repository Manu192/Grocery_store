import React from 'react';
import Header from '../../Common/Components/Header';
import Footer from '../../Common/Components/Footer';

function Purchasehistory() {
  const user = JSON.parse(localStorage.getItem("user"));
  const orders = user?.orders || [];

  return (
    <>
      <Header />

      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">🧾 Purchase History</h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">You haven't purchased anything yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="py-3 px-4 text-left">Product</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Image</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-green-50 transition">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">{item.category}</td>
                    <td className="py-3 px-4">₹{item.price}</td>
                    <td className="py-3 px-4">
                      <img
                        src={item.img || item.image || "https://via.placeholder.com/50"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Purchasehistory;
