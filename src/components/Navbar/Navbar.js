import React from "react";
import { Heart } from "lucide-react";
import logo from "../../assests/logo.png";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import FilterButton from "./FilterButton";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  likedProperties,
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
  user,
  setUser
}) => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <img
          src={logo}
          alt="property"
          className="h-3 w-3 rounded object-cover"
        />
        <h1 className="text-xl font-bold text-gray-800 w-1/4 pl-1.5">
          Rental Property
        </h1>
        <div className="w-1/2 px-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="w-1/4 mx-3 flex justify-start items-center space-x-4">
          <FilterButton
            amenitiesFilter={amenitiesFilter}
            setAmenitiesFilter={setAmenitiesFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            uniqueAmenities={uniqueAmenities}
            onClear={onClear}
            onApply={onApply}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <div data-testid="like-count" className="flex items-center">
            <Heart size={24} className="text-red-500 mx-1.5" />
            <span>{likedProperties.length}</span>
          </div>
          <div className="flex-grow"></div>
          <UserButton user={user} setUser={setUser}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;