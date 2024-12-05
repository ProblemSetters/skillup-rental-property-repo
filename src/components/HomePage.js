import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import propertiesData from "../data.json";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProperties = propertiesData.properties;

  const displayedProperties = filteredProperties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2>Find Your Perfect Home Away From Home!</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterButton />
      <div className="property-cards">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <h3 data-testid="conditional-message">
            No rental property available
          </h3>
        )}
      </div>
    </div>
  );
};

export default HomePage;
