import React from 'react';
import { LuBox } from 'react-icons/lu';
import { useNavigate } from 'react-router';

const EmptyCart = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-6">
      <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center border border-border mb-6">
        <LuBox className="text-3xl text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-white mb-1">Cart is empty</h3>
      <p className="text-sm text-gray-400 mb-8">Go shop something cool!</p>
      
      <button 
        onClick={()=>{navigate("/home/shop"); onClose()}}
        className="px-6 py-2.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors"
      >
        Browse Products
      </button>
    </div>
  );
};

export default EmptyCart;
