import React from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { FaStar, FaBolt } from "react-icons/fa6";
import { NavLink } from "react-router";
import { productsData } from "../../../Services/products";
import { useNavigate } from "react-router";

const topRated = [...productsData]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

const newArrivals = productsData
  .filter((product) => product.isNew)
  .slice(0, 3);

const ProductItem = ({ product , onClick }) => (
  <div  onClick={onClick} className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl mb-3 last:mb-0">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-black font-semibold text-sm line-clamp-1">
          {product.title}
        </h3>

        <p className="text-[#a4cc02] font-bold text-lg">
          ${product.price}
        </p>
      </div>
    </div>

    <button className="w-10 h-10 rounded-xl border border-[#CFFF04] flex items-center justify-center text-[#a4cc02] hover:bg-[#f6ffcc] transition-colors">
      <FiShoppingBag size={18} />
    </button>
  </div>
);

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {/* Top Rated */}
      <div className="bg-white rounded-[2rem] p-6">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl font-bold text-black flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            Top Rated
          </h2>

          <NavLink
            to="/home/shop?sort=rating"
            className="text-[#a4cc02] text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            See all <FiArrowRight size={16} />
          </NavLink>
        </div>

        <div>
          {topRated.map((product) => (
            <ProductItem key={product.id} product={product}  onClick={() => navigate(`/home/shop/${product.id}`)}/>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="bg-white rounded-[2rem] p-6">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl font-bold text-black flex items-center gap-2">
            <FaBolt className="text-[#a4cc02]" />
            New Arrivals
          </h2>

          <NavLink
            to="/home/shop?feature=newest"
            className="text-[#a4cc02] text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            See all <FiArrowRight size={16} />
          </NavLink>
        </div>

        <div>
          {newArrivals.map((product) => (
            <ProductItem key={product.id} product={product}  onClick={() => navigate(`/home/shop/${product.id}`)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;