import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="w-full pl-10 pr-4 py-20 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-700"
        type="text"
        data-testid="search-bar"
        placeholder="Search destinations, properties..."
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
