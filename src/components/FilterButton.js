import React from "react";
import "./FilterButton.css";

const FilterButton = () => {
  return (
    <div disabled className="filter">
      <button data-testid="price-button">
        Price: Low to High {/* Price: High to Low */}
      </button>
      <button data-testid="filter-button">
        Show Filters {/* Hide Filters */}
      </button>

      <div className="filters-container">
        <div disabled className="filters">
          {/* Price Filter */}
          <div className="price-filter">
            <h4>Price</h4>
            <label>
              Min Price:
              <input type="number" data-testid="price-input-min" />
            </label>
            <label>
              Max Price:
              <input type="number" data-testid="price-input-max" />
            </label>
          </div>
          {/* Rating Filter */}
          <div className="rating-filter">
            <h4>Rating</h4>
            <label className="rating-label">
              <input type="radio" data-testid="rating-filter" />1 to 2 Stars
            </label>
          </div>

          {/* Amenities Filter */}
          <div className="amenitites-filter">
            <h4>Amenities</h4>
            <label>
              <input type="checkbox" data-testid="amenities-filter" />
              Amenities
            </label>
          </div>
        </div>
        <button data-testid="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default FilterButton;
