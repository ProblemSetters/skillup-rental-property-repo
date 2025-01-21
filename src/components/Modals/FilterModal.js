import React from "react";
import { XCircle, ChevronDown } from "lucide-react";

const FilterModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Filter Properties
          </h2>
          <button className="text-gray-600 hover:text-gray-900">
            <XCircle size={24} />
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Price Range</h4>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-2">
                Min Price
              </label>
              <input
                type="number"
                data-testid="price-input-min"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-700"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-2">
                Max Price
              </label>
              <input
                type="number"
                data-testid="price-input-max"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Rating</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              key="range"
              data-testid="rating-filter"
              className="py-2 px-4 rounded-md transition bg-gray-100 text-gray-700 hover:bg-gray-200"
              // ${
              // rating click
              //   ? "bg-green-700 text-white"
              //   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              // }
            >
              NA Stars
            </button>
          </div>
        </div>

        {/* Amenities Filter */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Amenities</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              key="amenity"
              data-testid="amenities-filter"
              className="py-2 px-4 rounded-md transition text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
              // ${
              // amenity click
              //   ? "bg-green-700 text-white"
              //   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              // }
            >
              Amenity
            </button>
          </div>
          <button
            data-testid="more-amenities-btn"
            className="mt-4 flex items-center mx-auto text-green-700 hover:text-green-900"
          >
            Show More Amenities
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-8">
          <button
            data-testid="clear-button"
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Clear Filters
          </button>
          <button
            data-testid="apply-button"
            className="flex-1 bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
