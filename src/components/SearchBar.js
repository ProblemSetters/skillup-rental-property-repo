import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <input
      className="search-bar"
      type="text"
      data-testid="search-bar"
      placeholder="Search properties..."
    />
  );
};

export default SearchBar;
