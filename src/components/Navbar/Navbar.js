import React from "react";
import { Heart } from "lucide-react";
import logo from "../../assests/logo.png";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import FilterButton from "./FilterButton";

const Navbar = () => {
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
          <SearchBar />
        </div>
        <div className="w-1/4 mx-3 flex justify-start items-center space-x-4">
          <FilterButton />
          <div data-testid="like-count" className="flex items-center">
            <Heart size={24} className="text-red-500 mx-1.5" />
            <span>0</span>
          </div>
          <div className="flex-grow"></div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
