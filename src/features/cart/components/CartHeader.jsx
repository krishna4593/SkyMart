import React from 'react';
import { FiShoppingBag, FiX } from 'react-icons/fi';

const CartHeader = ({ itemCount = 0, onClose }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-3">
        <FiShoppingBag className="text-primary text-xl" />
        <h2 className="text-lg font-semibold text-white">Cart</h2>
        {itemCount > 0 && (
          <span className="bg-[#2A3300] text-primary text-xs px-2 py-0.5 rounded-full font-medium">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>
      <button 
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors p-1"
        aria-label="Close cart"
      >
        <FiX className="text-xl" />
      </button>
    </div>
  );
};

export default CartHeader;
