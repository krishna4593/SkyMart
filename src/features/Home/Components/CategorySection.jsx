import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  { id: 1, name: 'Electronics', count: '17 items', icon: '💻' },
  { id: 2, name: 'Clothing', count: '2 items', icon: '📦' },
  { id: 3, name: 'Furniture', count: '3 items', icon: '📦' },
  { id: 4, name: 'Home', count: '14 items', icon: '📦' },
  { id: 5, name: 'Sports', count: '8 items', icon: '📦' },
  { id: 6, name: 'Accessories', count: '6 items', icon: '📦' },
];

const CategorySection = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
        <a href="#" className="text-[#CFFF04] text-sm font-semibold flex items-center gap-1 hover:underline">
          View All <FiArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-3">{cat.icon}</span>
            <h3 className="text-black font-bold text-lg">{cat.name}</h3>
            <p className="text-gray-500 text-sm">{cat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;