import { useParams } from "react-router-dom";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const allProducts = {
  fruits: [
    { id: 1, name: "Apple", price: 120, image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg" },
    { id: 2, name: "Banana", price: 60, image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg" },
  ],
  vegetables: [
    { id: 3, name: "Tomato", price: 40, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
    { id: 4, name: "Potato", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpbPLwAclKIwbuvzDs_AkuKr1kRRADP0WFg&s" },
  ],
  snacks: [
    { id: 5, name: "Potato Chips", price: 40, image: "https://images-cdn.ubuy.co.in/63512d75d9569241954a7fe9-lay-39-s-classic-potato-chips.jpg" },
  ],
  dairy: [
    { id: 6, name: "Milk", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRiki8m18uLKyubnv2zExOU9l9EMXoYo4aOPDumNgFANF8NoOasQ-US0NJVVzP2yWII&usqp=CAU" },
  ],
};

function CategoryPage() {
  const { categoryName } = useParams();
  const products = allProducts[categoryName] || [];

  return (
    <div className="p-6">
        <Header/>
      <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg shadow hover:shadow-lg p-4 text-center"
          >
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold mt-2">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default CategoryPage;
