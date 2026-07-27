import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CategoryFilter from '../Components/CategoryFilter';
import SortDropdown from '../Components/SortDropdown';
import ProductGrid from '../Components/ProductGrid';
import { productsData } from '../../../Services/products';
import { useNavigate, useSearchParams } from "react-router";

const Shop = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const featureFromUrl = searchParams.get("feature");
  const sortFromUrl = searchParams.get("sort");

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const[selectedOption, setSelectedOption]=useState("all");

  const matchesSearch = (product) => {
    const search = debouncedSearch.toLowerCase();
    return (
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  };

  const matchesCategory = (product) => {
    return (
      selectedCategory === 'all' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

const matchesFeature=(product)=>{
  if(selectedOption==="all"){
    return true;
  }  

  if(selectedOption==="featured"){
    return product.featured;
  }  

  if(selectedOption==="newest"){
    return product.isNew;
  }  
  return true;
}
  
const applySorting=(filteredProducts)=>{
  if(selectedOption==="price-low"){
 return [...filteredProducts].sort((a,b)=>a.price-b.price);
  }
  if(selectedOption==="price-high"){
 return [...filteredProducts].sort((a,b)=>b.price-a.price);
  }
  if(selectedOption==="rating"){
    return [...filteredProducts].sort((a,b)=>b.rating-a.rating);
  }
  return filteredProducts;
}

  const filteredProducts = productsData.filter(
    (product) => matchesSearch(product) && matchesCategory(product) && matchesFeature(product)
  );

  const sortedProducts = applySorting(filteredProducts);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 850);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);

 useEffect(() => {
  setSelectedCategory(categoryFromUrl || "all");
  if (featureFromUrl) {
    setSelectedOption(featureFromUrl);
  } else if (sortFromUrl) {
    setSelectedOption(sortFromUrl);
  } else {
    setSelectedOption("all");
  }
}, [categoryFromUrl, featureFromUrl, sortFromUrl]);

const handleCategoryChange = (category) => {
  setSelectedCategory(category);

  if (category === "all") {
    navigate("/home/shop");
  } else {
    navigate(`/home/shop?category=${encodeURIComponent(category)}`);
  }
};

const handleOptionChange = (option) => {
  setSelectedOption(option);

  if (option === "all") {
    navigate("/home/shop");
  } else if (option === "featured" || option === "newest") {
    navigate(`/home/shop?feature=${option}`);
  } else {
    navigate(`/home/shop?sort=${option}`);
  }
};

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

            <div className="flex gap-4">
              <CategoryFilter
                 selectedCategory={selectedCategory}
                 setSelectedCategory={handleCategoryChange}
              />

              <SortDropdown selectedOption={selectedOption} setSelectedOption={handleOptionChange}/>
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