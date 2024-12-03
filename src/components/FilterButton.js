import React from "react";

const FilterButton = () => {
  const handleFilter = () => {
    // Implement filter functionality here
    alert("Filter button clicked!");
  };

  return <button onClick={handleFilter}>Filter</button>;
};

export default FilterButton;