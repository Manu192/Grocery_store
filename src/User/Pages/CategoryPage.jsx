import { useParams } from "react-router-dom";

function CategoryPage() {
 const { categoryName } = useParams();
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoryProducts.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 text-center shadow">
            <img src={p.image} alt={p.name} className="w-32 h-32 object-cover mx-auto" />
            <h3 className="mt-2 font-semibold">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
