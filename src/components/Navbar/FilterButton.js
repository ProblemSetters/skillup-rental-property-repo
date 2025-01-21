import React from "react";
import { SlidersHorizontal } from "lucide-react";
// import FilterModal from "../Modals/FilterModal";

const FilterButton = () => {
  return (
    <div>
      <button
        data-testid="filter-button"
        className="bg-gray-100 mx-8 hover:bg-gray-200 p-2 rounded-lg transition"
      >
        <SlidersHorizontal size={24} className="text-gray-700 mx-1.5" />
        Filters
      </button>
      {/* <FilterModal /> */}
    </div>
  );
};

export default FilterButton;
