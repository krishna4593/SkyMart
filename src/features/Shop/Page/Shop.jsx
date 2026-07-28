import SearchBar from '../Components/SearchBar';
import CategoryFilter from '../Components/CategoryFilter';
import SortDropdown from '../Components/SortDropdown';
import ProductGrid from '../Components/ProductGrid';
import useShop from '../Hook/useShop';

const Shop = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    selectedOption,
    filteredProducts,
    sortedProducts,
    handleCategoryChange,
    handleOptionChange,
    clearFilters
  } = useShop();

  const hasActiveFilters =
    searchTerm ||
    selectedCategory !== "all" ||
    selectedOption !== "all";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            All Products
          </h1>

          <p className="text-neutral-400 text-lg">
            {filteredProducts.length} products found
            {selectedCategory !== 'all' && (
              <>
                {' '}
                in{' '}
                <span className="text-lime-400 font-semibold capitalize">
                  {selectedCategory}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col gap-4 mb-10 p-4 bg-[#131313] border border-neutral-800 rounded-2xl">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row gap-4">
            <SearchBar
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />

            <div className="flex flex-wrap gap-4 items-center">
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
              />

              <SortDropdown
                selectedOption={selectedOption}
                setSelectedOption={handleOptionChange}
              />

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition whitespace-nowrap"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {selectedCategory !== 'all' && (
            <>
              <div className="h-px bg-neutral-700"></div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="flex items-center gap-2 bg-lime-400/10 text-lime-400 border border-lime-400/30 rounded-full px-3 py-1 text-sm font-medium hover:bg-lime-400/20 transition"
                >
                  <span className="capitalize">{selectedCategory}</span>
                  <span className="text-lg leading-none">&times;</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid products={sortedProducts} />
      </div>
    </div>
  );
};

export default Shop;