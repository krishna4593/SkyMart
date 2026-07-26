import React from 'react';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { FaStar, FaBolt } from 'react-icons/fa6';

const topRated = [
  { id: 1, price: '$349.99', img: '💻' },
  { id: 2, price: '$49.99', img: '⌨️' },
  { id: 3, price: '$149.99', img: '🔊' },
];

const newArrivals = [
  { id: 1, price: '$24.99', img: '👕' },
  { id: 2, price: '$199.99', img: '🪑' },
  { id: 3, price: '$34.99', img: '🥤' },
];

const ProductItem = ({ price, img }) => (
  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl mb-3 last:mb-0">
    <div className="flex items-center gap-4">
      <div className="w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
        {img}
      </div>
      <span className="text-[#a4cc02] font-bold text-lg">{price}</span>
    </div>
    <button className="w-10 h-10 rounded-xl border border-[#CFFF04] flex items-center justify-center text-[#a4cc02] hover:bg-[#f6ffcc] transition-colors">
      <FiShoppingBag size={18} />
    </button>
  </div>
);

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {/* Top Rated */}
      <div className="bg-white rounded-[2rem] p-6">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl font-bold text-black flex items-center gap-2">
            <FaStar className="text-yellow-500" /> Top Rated
          </h2>
          <a href="#" className="text-[#a4cc02] text-sm font-semibold flex items-center gap-1 hover:underline">
            See all <FiArrowRight size={16} />
          </a>
        </div>
        <div>
          {topRated.map((item) => (
            <ProductItem key={item.id} price={item.price} img={item.img} />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="bg-white rounded-[2rem] p-6">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl font-bold text-black flex items-center gap-2">
            <FaBolt className="text-[#a4cc02]" /> New Arrivals
          </h2>
          <a href="#" className="text-[#a4cc02] text-sm font-semibold flex items-center gap-1 hover:underline">
            See all <FiArrowRight size={16} />
          </a>
        </div>
        <div>
          {newArrivals.map((item) => (
            <ProductItem key={item.id} price={item.price} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;