import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { productsData } from "../../../Services/products";

const useShop = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const categoryFromUrl = searchParams.get("category");
    const featureFromUrl = searchParams.get("feature");
    const sortFromUrl = searchParams.get("sort");

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedOption, setSelectedOption] = useState("all");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 850);

        return () => clearTimeout(timeout);
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

    const matchesSearch = (product) => {
        const search = debouncedSearch.toLowerCase();

        return (
            product.title.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
        );
    };

    const matchesCategory = (product) => {
        return (
            selectedCategory === "all" ||
            product.category.toLowerCase() ===
                selectedCategory.toLowerCase()
        );
    };

    const matchesFeature = (product) => {
        if (selectedOption === "all") return true;

        if (selectedOption === "featured") {
            return product.featured;
        }

        if (selectedOption === "newest") {
            return product.isNew;
        }

        return true;
    };

    const applySorting = (filteredProducts) => {
        if (selectedOption === "price-low") {
            return [...filteredProducts].sort(
                (a, b) => a.price - b.price
            );
        }

        if (selectedOption === "price-high") {
            return [...filteredProducts].sort(
                (a, b) => b.price - a.price
            );
        }

        if (selectedOption === "rating") {
            return [...filteredProducts].sort(
                (a, b) => b.rating - a.rating
            );
        }

        return filteredProducts;
    };

    const filteredProducts = productsData.filter(
        (product) =>
            matchesSearch(product) &&
            matchesCategory(product) &&
            matchesFeature(product)
    );

    const sortedProducts = applySorting(filteredProducts);

    const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === "all") {
        params.delete("category");
    } else {
        params.set("category", category);
    }

    setSelectedCategory(category);
    navigate(`/home/shop?${params.toString()}`);
};

    const handleOptionChange = (option) => {
    const params = new URLSearchParams(searchParams);

    params.delete("feature");
    params.delete("sort");

    if (option !== "all") {
        if (option === "featured" || option === "newest") {
            params.set("feature", option);
        } else {
            params.set("sort", option);
        }
    }

    setSelectedOption(option);
    navigate(`/home/shop?${params.toString()}`);
};

   const clearFilters = () => {
    setSearchTerm("");
    setDebouncedSearch("");
    setSelectedCategory("all");
    setSelectedOption("all");

    navigate("/home/shop");
};

    return {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        selectedOption,
        filteredProducts,
        sortedProducts,
        handleCategoryChange,
        handleOptionChange,
        clearFilters
    };
};

export default useShop;