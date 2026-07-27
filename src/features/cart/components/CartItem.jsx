import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import QuantitySelector from './QuantitySelector';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  if (!item) return null;

  return (
    <div className="flex gap-4 p-3 border border-border rounded-2xl bg-card">
      {/* Product Image */}
      <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
        {item.image ? (
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-sm font-medium text-white line-clamp-2 leading-snug">
            {item.title}
          </h3>
          <div className="mt-1">
            <span className="text-primary font-semibold">${item.price?.toFixed(2) || '0.00'}</span>
            <span className="text-xs text-gray-500 ml-2">${item.price?.toFixed(2) || '0.00'} each</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2">
          <QuantitySelector 
            quantity={item.quantity} 
            onUpdate={(newQuantity) => onUpdateQuantity?.(item.id, newQuantity)} 
          />
          <button 
            onClick={() => onRemoveItem?.(item.id)}
            className="text-[#ff4d4d] hover:text-red-400 transition-colors p-1"
            aria-label="Remove item"
          >
            <FiTrash2 className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
