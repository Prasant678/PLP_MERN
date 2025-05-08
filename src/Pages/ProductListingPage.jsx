import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';
import FilterSidebar from '../Components/FilterSidebar';
import { FiFilter } from 'react-icons/fi';

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isDesktopFilterVisible, setIsDesktopFilterVisible] = useState(true);
    const [sortOption, setSortOption] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        rating: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productsResponse = await axios.get('https://fakestoreapi.com/products');
                const categoriesResponse = await axios.get('https://fakestoreapi.com/products/categories');

                setProducts(productsResponse.data);
                setCategories(categoriesResponse.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.minPrice && product.price < parseFloat(filters.minPrice)) return false;
        if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) return false;
        if (filters.rating && Math.floor(product.rating.rate) < parseInt(filters.rating)) return false;
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price_asc') return a.price - b.price;
        if (sortOption === 'price_desc') return b.price - a.price;
        if (sortOption === 'rating') return b.rating.rate - a.rating.rate;
        return 0;
    });

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center py-8 text-red-500">
            Error: {error}
            <button
                onClick={() => window.location.reload()}
                className="mt-2 block text-blue-600 hover:text-blue-800"
            >
                Try Again
            </button>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">DISCOVER OUR PRODUCTS</h1>
                <p className="text-gray-600 lg:mx-52 md:mx-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur consequatur error minima in, quidem enim sit recusandae quae earum voluptatibus quasi, commodi exercitationem perspiciatis aperiam</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className={`${isDesktopFilterVisible ? 'md:w-64 flex-shrink-0' : 'SHOW FILTERS'}`}>
                    <FilterSidebar
                        categories={categories}
                        filters={filters}
                        setFilters={setFilters}
                        isMobileFilterOpen={isMobileFilterOpen}
                        setIsMobileFilterOpen={setIsMobileFilterOpen}
                        isDesktopFilterVisible={isDesktopFilterVisible}
                        setIsDesktopFilterVisible={setIsDesktopFilterVisible}
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        {isDesktopFilterVisible && (
                            <button
                                className="pl-4 md:hidden flex items-center gap-3 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileFilterOpen(true)}
                            >
                                <FiFilter size={24} />
                                <span className='text-xl'>Filters</span>
                            </button>
                        )}
                        <div className="flex items-center gap-4">

                            <div className="flex items-center lg:pl-180">
                                <label htmlFor="sort" className="mr-4 text-sm text-gray-600"></label>
                                <select
                                    id="sort"
                                    value={sortOption}
                                    onChange={handleSortChange}
                                    className="p-2 outline-none text-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">RECOMMANED</option>
                                    <option value="Newest">NEWEST FIRST</option>
                                    <option value="rating">POPULAR</option>
                                    <option value="price_desc">PRICE: HIGH TO LOW</option>
                                    <option value="price_asc">PRICE: LOW TO HIGH</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 pb-4 pl-2">
                        {filters.category ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Products` : 'All Products'}
                        <p className="text-gray-600 text-sm">{filteredProducts.length} products available</p>
                    </h2>

                    {sortedProducts.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                            <p className="text-gray-500 mb-4">No products match your filters.</p>
                            <button
                                className="text-blue-600 hover:text-blue-800 font-medium"
                                onClick={() => {
                                    setFilters({
                                        category: '',
                                        minPrice: '',
                                        maxPrice: '',
                                        rating: ''
                                    });
                                    setIsDesktopFilterVisible(true);
                                }}
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sortedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;