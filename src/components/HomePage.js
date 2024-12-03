import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import propertiesData from "../data.json";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

  const properties = propertiesData.properties;

  const displayedProperties = filteredProperties
    .filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="home-page">
      <h3>Find Your Perfect Home Away From Home!</h3>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterButton setFilteredProperties={setFilteredProperties} properties={properties} />
      <div className="property-cards">
        {displayedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;