import React from 'react';
import SearchBar from '../Components/SearchBar';
import CategoryFilter from '../Components/CategoryFilter';
import SortDropdown from '../Components/SortDropdown';
import ProductGrid from '../Components/ProductGrid';
import { productsData } from '../data/products';

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">All Products</h1>
          <p className="text-neutral-400 text-lg">
            {productsData.length} products found
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 p-4 bg-[#131313] border border-neutral-800 rounded-2xl">
          <SearchBar />
          <div className="flex gap-4">
            <CategoryFilter />
            <SortDropdown />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={productsData} />
      </div>
    </div>
  );
};

export default Shop;