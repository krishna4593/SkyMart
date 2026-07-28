import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const QuantitySelector = ({ quantity = 1, onIncrease, onDecrease }) => {
  const handleDecrease = () => {
      onDecrease();
  };

  const handleIncrease = () => {
    onIncrease();
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={handleDecrease}
        className="w-7 h-7 flex items-center justify-center rounded-md border border-border bg-card text-gray-300 hover:text-white hover:border-gray-500 transition-colors "
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
