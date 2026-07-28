import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import ProductBadge from './ProductBadge';
import useCart from '../../../Hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart,getCartItem, increaseQuantity, decreaseQuantity,}= useCart();
   const {id,title,category,price,rating,reviewCount,thumbnail } = product;
  const cartItem=getCartItem(id);

  // Simple star rendering logic for UI
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-[#c4ff00] text-xs" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#c4ff00] text-xs" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-neutral-500 text-xs" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#c4ff00]/5 flex flex-col h-full group">
      {/* Image Container */}
      <NavLink to={`/home/shop/${id}`} className="relative h-56 w-full bg-white overflow-hidden block">
        <div className="absolute top-3 left-3 z-10">
          <ProductBadge text={category} />
        </div>
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </NavLink>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-neutral-500 text-xs font-medium mb-1 uppercase tracking-wider">{category}</p>
        
        <NavLink to={`/home/shop/${id}`}>
          <h3 className="text-white font-semibold text-lg leading-tight mb-2 hover:text-[#c4ff00] transition-colors line-clamp-2">
            {title}
          </h3>
        </NavLink>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {renderStars()}
          </div>
          <span className="text-neutral-500 text-xs">({reviewCount})</span>
        </div>
        
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
          <span className="text-[#c4ff00] font-bold text-xl">${price.toFixed(2)}</span>
         {cartItem?(
           <div className="flex items-center gap-2 bg-[#c4ff00] text-black px-3 py-2 rounded-xl">
           <button onClick={() => decreaseQuantity(id)}> - </button>
             <span>{cartItem.quantity}</span>
           <button onClick={() => increaseQuantity(id)}> + </button>
           </div>
         ): (<button onClick={()=>addToCart(product)} className="flex items-center gap-2 bg-[#c4ff00] hover:bg-[#b0e600] text-black px-4 py-2 rounded-xl font-semibold transition-colors text-sm">
            <FiShoppingCart /> Add To Cart
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;