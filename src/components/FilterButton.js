import React, { useState } from "react";
import "./FilterButton.css";

const FilterButton = ({
  setPriceOrder,
  setAmenitiesFilter,
  setRatingFilter,
  setPriceFilter,
  priceOrder,
  amenitiesFilter,
  ratingFilter,
  uniqueAmenities,
  priceFilter,
  onClear,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const handleAmenityChange = (amenity) => {
    if (amenitiesFilter.includes(amenity)) {
      setAmenitiesFilter(amenitiesFilter.filter((a) => a !== amenity));
    } else {
      setAmenitiesFilter([...amenitiesFilter, amenity]);
    }
  };

  const isAscSortSelected = priceOrder === "asc";

  return (
    <div className="filter">
      <button onClick={() => setPriceOrder(isAscSortSelected ? "desc" : "asc")}>
        {isAscSortSelected ? "Sort High to Low" : "Sort Low to High"}
      </button>
      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div>
          <div className="filters">
            {/* Price Filter */}
            <div className="price-filter">
              <h4>Price</h4>
              <label>
                Min Price:
                <input
                  type="number"
                  min="1"
                  max={priceFilter[1]}
                  value={priceFilter[0]}
                  onChange={(e) => {
                    setPriceFilter([Number(e.target.value), priceFilter[1]]);
                  }}
                />
              </label>
              <label>
                Max Price:
                <input
                  type="number"
                  min={priceFilter[0]}
                  max="1000"
                  value={priceFilter[1]}
                  onChange={(e) => {
                    setPriceFilter([priceFilter[0], Number(e.target.value)]);
                  }}
                />
              </label>
            </div>
            {/* Rating Filter */}
            <div className="rating-filter">
              <h4>Rating</h4>
              {["0-1", "1-2", "2-3", "3-4", "4-"].map((range, index) => (
                <label key={range} className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    value={range}
                    checked={ratingFilter === range}
                    onChange={(e) => setRatingFilter(e.target.value)}
                  />
                  {index < 4
                    ? `${range.replace("-", " to ")} Stars`
                    : "4+ Stars"}
                </label>
              ))}
            </div>

            {/* Amenities Filter */}
            <div className="amenitites-filter">
              <h4>Amenities</h4>
              {uniqueAmenities.map((amenity) => (
                <label key={amenity}>
                  <input
                    type="checkbox"
                    checked={amenitiesFilter.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
          <button onClick={onClear}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
