import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import FilterModal from "../Modals/FilterModal";

const FilterButton = ({
  amenitiesFilter,
  setAmenitiesFilter,
  ratingFilter,
  setRatingFilter,
  priceFilter,
  setPriceFilter,
  uniqueAmenities,
  onClear,
  onApply,
  minPrice,
  maxPrice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = () => {
    onApply();
    setIsModalOpen(false);
  };

  const handleClear = () => {
    onClear();
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        data-testid="filter-button"
        className="bg-gray-100 mx-8 hover:bg-gray-200 p-2 rounded-lg transition"
        onClick={() => setIsModalOpen(true)}
      >
        <SlidersHorizontal size={24} className="text-gray-700 mx-1.5" />
        Filters
      </button>
      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          amenitiesFilter={amenitiesFilter}
          setAmenitiesFilter={setAmenitiesFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          uniqueAmenities={uniqueAmenities}
          onClear={handleClear}
          onApply={handleApply}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      )}
    </div>
  );
};

export default FilterButton;