import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const QuantitySelector = ({ quantity = 1, onUpdate }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdate(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdate(quantity + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="w-7 h-7 flex items-center justify-center rounded-md border border-border bg-card text-gray-300 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <FiMinus className="text-sm" />
      </button>
      
      <span className="text-sm font-medium w-4 text-center select-none text-white">
        {quantity}
      </span>
      
      <button 
        onClick={handleIncrease}
        className="w-7 h-7 flex items-center justify-center rounded-md border border-border bg-card text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
        aria-label="Increase quantity"
      >
        <FiPlus className="text-sm" />
      </button>
    </div>
  );
};

export default QuantitySelector;
