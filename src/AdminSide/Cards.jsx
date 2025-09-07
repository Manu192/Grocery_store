import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteproducts, updateproducts } from '../Services/allAPI';

function Cards({ productList, getproduct }) {
  const [editModal, setEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteProduct = async (id) => {
    try {
      await deleteproducts(id);
      getproduct();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const handleUpdateProduct = async () => {
    try {
      await updateproducts(selectedProduct.id, selectedProduct);
      setEditModal(false);
      getproduct();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      {productList && productList.length > 0 ? (
        productList.map((product) => (
          <div key={product.id} className="w-72 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4">
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              className="h-48 object-contain p-3 mx-auto"
            />
            <div className="text-green-900 space-y-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm font-medium">Price: ₹{product.price}</p>
              <p className="text-xs italic text-green-300">Category: {product.category}</p>
              <div className="flex justify-between gap-3 mt-2">
                <button
                  onClick={() => handleEditClick(product)}
                  className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-green-900 text-center col-span-full">No products found.</p>
      )}

      {/* Edit Modal */}
      {editModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative border border-green-100">
            <button
              onClick={() => setEditModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-green-600 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Edit Product</h2>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedProduct.name}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={selectedProduct.description}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={selectedProduct.category}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </form>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setEditModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateProduct}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
