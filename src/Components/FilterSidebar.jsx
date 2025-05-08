import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiX, FiFilter, FiSliders } from 'react-icons/fi';

const FilterSidebar = ({ 
  categories, 
  filters, 
  setFilters,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  isDesktopFilterVisible,
  setIsDesktopFilterVisible
}) => {
  const [openSection, setOpenSection] = useState({
    category: true,
    price: true,
    rating: true
  });

  const toggleSection = (section) => {
    setOpenSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === category ? '' : category
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating === rating ? '' : rating
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      rating: ''
    });
  };

  // Close mobile filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileFilterOpen && !event.target.closest('.filter-sidebar')) {
        setIsMobileFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileFilterOpen]);

  return (
    <>
      <button 
        className="hidden md:flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mb-4 hover:bg-gray-50"
        onClick={() => setIsDesktopFilterVisible(!isDesktopFilterVisible)}
      >
        <FiSliders size={16} />
        <span>{isDesktopFilterVisible ? 'Hide Filters' : 'Show Filters'}</span>
      </button>

      <div className={`filter-sidebar bg-white p-4 shadow-md rounded-lg transition-all duration-300 ease-in-out
        ${isMobileFilterOpen ? 
          'fixed inset-0 z-50 overflow-y-auto translate-x-0' : 
          isDesktopFilterVisible ?
            'md:block md:translate-x-0 hidden -translate-x-full' :
            'hidden'
        }`}
      >
        {isMobileFilterOpen && (
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
            <h2 className="text-xl font-bold">Filters</h2>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <FiX size={24} />
            </button>
          </div>
        )}
        
        <div className="mb-6 border-b pb-4">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('category')}
          >
            <h3 className="font-semibold text-gray-800">Categories</h3>
            {openSection.category ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          
          {openSection.category && (
            <div className="mt-3 space-y-2">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`cat-${cat}`}
                    checked={filters.category === cat}
                    onChange={() => handleCategoryChange(cat)}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`cat-${cat}`} className="capitalize text-gray-700">
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      
        <div className="mb-6 border-b pb-4">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('price')}
          >
            <h3 className="font-semibold text-gray-800">Price Range</h3>
            {openSection.price ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          
          {openSection.price && (
            <div className="mt-3 space-y-3">
              <div>
                <label htmlFor="minPrice" className="block text-sm text-gray-600 mb-1">
                  Min Price ($)
                </label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handlePriceChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                  min="0"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-sm text-gray-600 mb-1">
                  Max Price ($)
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handlePriceChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1000"
                  min="0"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="mb-6 border-b pb-4">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('rating')}
          >
            <h3 className="font-semibold text-gray-800">Rating</h3>
            {openSection.rating ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          
          {openSection.rating && (
            <div className="mt-3 space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    checked={filters.rating === rating.toString()}
                    onChange={() => handleRatingChange(rating.toString())}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`rating-${rating}`} className="text-gray-700">
                    {rating}+ Stars
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-col space-y-3 sticky bottom-0 bg-white pt-3 pb-2">
          <button 
            onClick={clearAllFilters}
            className="w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Clear All
          </button>
          {(isMobileFilterOpen || !isDesktopFilterVisible) && (
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => {
                setIsMobileFilterOpen(false);
                if (!isDesktopFilterVisible) {
                  setIsDesktopFilterVisible(true);
                }
              }}
            >
              Apply Filters
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;