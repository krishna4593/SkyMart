import React from 'react';
import { Link, useParams } from 'react-router';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiTruck, FiShield, FiRotateCcw, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import ProductBadge from '../Components/ProductBadge';
import ProductGrid from '../Components/ProductGrid';
import { productsData } from '../data/products';

const ProductsDetail = () => {
  // Mock data fetching based on ID or just use first product as placeholder
  const product = productsData[0];
  const relatedProducts = productsData.slice(1, 5); // Just placeholder data

  const {
    title,
    category,
    price,
    rating,
    reviewCount,
    description,
    images
  } = product;

  // Simple star rendering logic
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-[#c4ff00] text-sm" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#c4ff00] text-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-neutral-500 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
          <Link to="/home" className="hover:text-white transition-colors">Home</Link>
          <FiChevronRight size={14} />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <FiChevronRight size={14} />
          <span className="text-neutral-500">{category}</span>
          <FiChevronRight size={14} />
          <span className="text-white truncate max-w-[200px]">{title}</span>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center">
              <img 
                src={images[0]} 
                alt={title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnails (Placeholder logic) */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div key={index} className="bg-white rounded-xl p-2 aspect-square flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#c4ff00] transition-colors">
                  <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-contain" />
                </div>
              ))}
              {/* Dummy thumbnails to show UI */}
              <div className="bg-white rounded-xl p-2 aspect-square flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#c4ff00] transition-colors">
                 <img src={images[0]} alt="Thumb" className="w-full h-full object-contain opacity-50" />
              </div>
              <div className="bg-white rounded-xl p-2 aspect-square flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#c4ff00] transition-colors">
                 <img src={images[0]} alt="Thumb" className="w-full h-full object-contain opacity-50" />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="mb-4">
                <ProductBadge text={category} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {renderStars()}
                </div>
                <span className="text-white font-medium">{rating}</span>
                <span className="text-neutral-400">({reviewCount} reviews)</span>
              </div>
              
              <div className="h-px bg-neutral-800 w-full mb-6"></div>
              
              <div className="text-5xl font-bold text-[#c4ff00] mb-6">
                ${price.toFixed(2)}
              </div>
              
              <div className="h-px bg-neutral-800 w-full mb-6"></div>

              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-10">
              {/* Quantity Selector UI */}
              <div className="flex items-center justify-between bg-[#1a1a1a] border border-neutral-800 rounded-xl px-4 py-4 w-32">
                <button className="text-neutral-400 hover:text-white transition-colors">
                  <FiMinus size={20} />
                </button>
                <span className="text-white font-semibold text-lg">1</span>
                <button className="text-neutral-400 hover:text-white transition-colors">
                  <FiPlus size={20} />
                </button>
              </div>

              <button className="flex-grow flex items-center justify-center gap-3 bg-[#c4ff00] hover:bg-[#b0e600] text-black py-4 px-8 rounded-xl font-bold text-lg transition-colors">
                <FiShoppingCart size={22} /> Add to Cart
              </button>
              
              <button className="p-4 bg-[#1a1a1a] border border-neutral-800 hover:border-neutral-600 rounded-xl text-neutral-400 hover:text-white transition-colors flex items-center justify-center">
                <FiHeart size={24} />
              </button>
            </div>

            {/* Delivery Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-neutral-800 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-[#131313]">
                <FiTruck className="text-[#c4ff00] mb-2" size={24} />
                <span className="text-white text-sm font-semibold">Free Delivery</span>
                <span className="text-neutral-500 text-xs">On orders $50+</span>
              </div>
              <div className="border border-neutral-800 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-[#131313]">
                <FiShield className="text-[#c4ff00] mb-2" size={24} />
                <span className="text-white text-sm font-semibold">Secure Pay</span>
                <span className="text-neutral-500 text-xs">256-bit SSL</span>
              </div>
              <div className="border border-neutral-800 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-[#131313]">
                <FiRotateCcw className="text-[#c4ff00] mb-2" size={24} />
                <span className="text-white text-sm font-semibold">Easy Returns</span>
                <span className="text-neutral-500 text-xs">30-day policy</span>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 border-t border-neutral-800 pt-16">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>

      </div>
    </div>
  );
};

export default ProductsDetail;