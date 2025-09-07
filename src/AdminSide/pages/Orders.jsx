import React from 'react';

function Orders() {
  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Order Name</th>
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border">Order Status</th>
                <th className="px-4 py-2 border" colSpan={2}>Order Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'Coconut', status: 'Pending' },
                { id: 2, name: 'Chicken', status: 'Completed' },
                { id: 3, name: 'Carrot', status: 'Pending' },
                { id: 4, name: 'Beef', status: 'Completed' },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{order.id}</td>
                  <td className="px-4 py-2 border">{order.name}</td>
                  <td className="px-4 py-2 border">123</td>
                  <td className={`px-4 py-2 border font-medium ${order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {order.status}
                  </td>
                  <td className="px-4 py-2 border">20₹</td>
                  <td className="px-4 py-2 border">
                    <button className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 transition">
                      Order details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
