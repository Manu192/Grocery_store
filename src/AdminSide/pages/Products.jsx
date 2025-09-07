import React, { useEffect, useState } from 'react';
import Cards from '../Cards';
import { addproducts, getproducts } from '../../Services/allAPI';
import Swal from 'sweetalert2';

function Products() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
  const [productList, setProductList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    try {
      const response = await getproducts();
      const productsOnly = (response.data || []).filter(item => item.type === "product");
      setProductList(productsOnly);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleaddproducts = async () => {
    if (!formData.name || !formData.price || !formData.category) return;

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const payload = {
          ...formData,
          image: reader.result,
          type: "product"
        };
        await addproducts(payload);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Product added!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          name: '',
          description: '',
          price: '',
          category: '',
          image: ''
        });
        handleClose();
        getproduct();
      };

      if (formData.image) {
        reader.readAsDataURL(formData.image);
      } else {
        const payload = {
          ...formData,
          type: "product"
        };
        await addproducts(payload);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Product added!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          name: '',
          description: '',
          price: '',
          category: '',
          image: ''
        });
        handleClose();
        getproduct();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="w-full px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-700 tracking-wide">Manage Products</h1>
          <button
            onClick={handleShow}
            className="bg-gradient-to-r from-green-600 via-teal-500 to-lime-400 text-white px-5 py-2 rounded-md shadow hover:scale-105 transition-transform font-semibold"
          >
            + Add New Product
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Cards productList={productList} getproduct={getproduct} />
        </div>
      </div>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative border border-green-100">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-green-600 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Add New Product</h2>

            <form>
              <fieldset className="border border-gray-200 p-4 rounded-md">
                <legend className="px-2 text-sm font-medium text-green-600">Product Details</legend>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Organic Apples"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Your Product description here..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="E.g. 120"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="E.g. Fruits, Snacks"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                  <input
                    type="file"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
                  />
                </div>
              </fieldset>
            </form>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleaddproducts}
                className="px-4 py-2 bg-gradient-to-r from-green-600 via-teal-500 to-lime-400 text-white rounded shadow hover:scale-105 transition-transform font-semibold"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
