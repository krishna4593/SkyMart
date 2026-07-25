import React from 'react';

const CategoryFilter = () => {
  return (
    <div className="relative">
      <select 
        className="appearance-none bg-[#1a1a1a] border border-neutral-800 text-white py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors text-sm w-40 cursor-pointer"
        defaultValue=""
      >
        <option value="" disabled>All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
        <option value="home">Home</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default CategoryFilter;
