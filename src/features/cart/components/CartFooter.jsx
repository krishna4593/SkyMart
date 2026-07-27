import React from 'react';

const CartFooter = ({ total = 0, onCheckout, onClearCart }) => {
  return (
    <div className="p-5 border-t border-border mt-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-400">Total</span>
        <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
      </div>
      
      <button 
        onClick={onCheckout}
        className="w-full py-3.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
      >
        Checkout 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="mt-4 text-center">
        <button 
          onClick={onClearCart}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
