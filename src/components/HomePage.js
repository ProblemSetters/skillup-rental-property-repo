import React from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import propertiesData from "../data.json";
import "./HomePage.css";

const HomePage = () => {

  return (
    <div className="home-page">
      <h2>Find Your Perfect Home Away From Home!</h2>
      <SearchBar/>
      <FilterButton/>
      <div className="property-cards">
        {propertiesData.properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        <h3 disabled className="message" data-testid="conditional-message">No rental property available</h3>
      </div>
    </div>
  );
};

export default HomePage;
