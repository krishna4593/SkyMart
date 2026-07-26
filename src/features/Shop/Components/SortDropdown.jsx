import React from 'react';

const SortDropdown = ({selectedOption,setSelectedOption}) => {
  return (
    <div className="relative">
      <select 
        className="appearance-none bg-[#1a1a1a] border border-neutral-800 text-white py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors text-sm w-40 cursor-pointer"
        value={selectedOption}
        onChange={(e)=>setSelectedOption(e.target.value)}
      >
        <option value="all">All</option>
        <option value="featured">Featured</option>
        <option value="newest">Newest Arrivals</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default SortDropdown;
