import { useParams } from "react-router-dom";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";
import { useSelector } from "react-redux";

function CategoryPage() {
  const { categoryName } = useParams();
  const { products, loading, error } = useSelector((state) => state.products);

  const filteredProducts = products.filter(
    (item) => item.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-6">
      <Header />
      <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName}</h2>

      {loading ? (
        <p className="text-center">Loading {categoryName}... 🌀</p>
      ) : error ? (
        <p className="text-center text-red-500">Error loading products 😢</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg shadow hover:shadow-lg p-4 text-center"
            >
              <img
                src={p.image || "https://via.placeholder.com/150"}
                alt={p.name}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p className="text-gray-600">₹{p.price}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CategoryPage;
