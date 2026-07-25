import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl flex-grow">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="text-neutral-500" size={18} />
      </div>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors placeholder:text-neutral-500 text-sm"
      />
    </div>
  );
};

export default SearchBar;
