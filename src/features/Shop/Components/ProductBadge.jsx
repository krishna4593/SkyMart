import React from 'react';

const ProductBadge = ({ text }) => {
  return (
    <span className="px-3 py-1 bg-neutral-600/80 text-white text-xs font-semibold rounded-full uppercase tracking-wider backdrop-blur-sm">
      {text}
    </span>
  );
};

export default ProductBadge;
