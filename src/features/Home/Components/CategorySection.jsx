import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { NavLink, useNavigate } from "react-router";
import { productsData } from "../../../Services/products";
const categoryIcons = {
  electronics: "💻",
  clothing: "👕",
  furniture: "🪑",
  home: "🏠",
  sports: "⚽",
  accessories: "⌚",
};

const CategorySection = () => {
  const navigate = useNavigate();

const handleCategoryClick = (category) => {
 navigate(`/home/shop?category=${encodeURIComponent(category.toLowerCase())}`);
};

const categories = Object.entries(categoryIcons).map(([category, icon], index) => {
  const count = productsData.filter(
    (product) => product.category.toLowerCase() === category
  ).length;

  return {
    id: index + 1,
    name: category.charAt(0).toUpperCase() + category.slice(1),
    count,
    icon,
  };
});


  return (
    <div className="mt-12">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
        <NavLink to="/home/shop" className="text-[#CFFF04] text-sm font-semibold flex items-center gap-1 hover:underline">
          View All <FiArrowRight size={16} />
        </NavLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {categories.map((cat) => (
          <div key={cat.id}
           onClick={() => handleCategoryClick(cat.name)}
          className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-3">{cat.icon}</span>
            <h3 className="text-black font-bold text-lg">{cat.name}</h3>
            <p className="text-gray-500 text-sm"> {cat.count} {cat.count === 1 ? "item" : "items"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;