import React, { useState } from "react";

const FilterButton = ({
  setPriceOrder,
  setAmenitiesFilter,
  setRatingFilter,
  priceOrder,
  amenitiesFilter,
  ratingFilter,
  uniqueAmenities,
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

  return (
    <div className="filter">
      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div className="filters">
          {/* Price Sorting */}
          <div>
            <h4>Price</h4>
            <button
              className={priceOrder === "asc" ? "active" : ""}
              onClick={() => setPriceOrder("asc")}
            >
              Low to High
            </button>
            <button
              className={priceOrder === "desc" ? "active" : ""}
              onClick={() => setPriceOrder("desc")}
            >
              High to Low
            </button>
          </div>

          {/* Amenities Filter */}
          <div>
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

          {/* Rating Filter */}
          <div>
            <h4>Rating</h4>
            {["0-1", "1-2", "2-3", "3-4", "4-"].map((range, index) => (
              <label key={range}>
                <input
                  type="radio"
                  name="rating"
                  value={range}
                  checked={ratingFilter === range}
                  onChange={(e) => setRatingFilter(e.target.value)}
                />
                {index < 4 ? `${range.replace("-", " to ")} Stars` : "4+ Stars"}
              </label>
            ))}
          </div>

          <button onClick={onClear}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
