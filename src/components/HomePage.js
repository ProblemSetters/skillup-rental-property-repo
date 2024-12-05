import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import propertiesData from "../data.json";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceOrder, setPriceOrder] = useState("");

  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");

  const properties = propertiesData.properties;

  const [minPrice, maxPrice] = properties.reduce(
    ([min, max], property) => {
      const price = parseInt(
        property.price.replace("$", "").replace("/night", "")
      );
      return [Math.min(min, price), Math.max(max, price)];
    },
    [Infinity, -Infinity]
  );

  const [priceFilter, setPriceFilter] = useState([minPrice, maxPrice]);

  const uniqueAmenities = Array.from(
    new Set(properties.flatMap((property) => property.amenities))
  );

  let filteredProperties = properties.filter((property) => {
    const matchesAmenities = amenitiesFilter.length
      ? amenitiesFilter.every((amenity) => property.amenities.includes(amenity))
      : true;

    const matchesRating = ratingFilter
      ? (() => {
          const [min, max] = ratingFilter.split("-").map(Number);
          return property.rating >= min && (max ? property.rating < max : true);
        })()
      : true;

    const matchesPrice = (() => {
      const [min, max] = priceFilter;
      const price = parseInt(
        property.price.replace("$", "").replace("/night", "")
      );
      return price >= min && price <= max;
    })();

    const matchesSearch = property.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesAmenities && matchesRating && matchesSearch && matchesPrice;
  });

  if (priceOrder) {
    filteredProperties = filteredProperties.sort((a, b) => {
      const priceA = parseInt(a.price.replace("$", "").replace("/night", ""));
      const priceB = parseInt(b.price.replace("$", "").replace("/night", ""));
      return priceOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  const handleClearFilters = () => {
    setPriceOrder("");
    setAmenitiesFilter([]);
    setRatingFilter("");
    setPriceFilter([minPrice, maxPrice]);
  };

  return (
    <div className="home-page">
      <h2>Find Your Perfect Home Away From Home!</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterButton
        setPriceOrder={setPriceOrder}
        setAmenitiesFilter={setAmenitiesFilter}
        setRatingFilter={setRatingFilter}
        setPriceFilter={setPriceFilter}
        priceOrder={priceOrder}
        priceFilter={priceFilter}
        amenitiesFilter={amenitiesFilter}
        ratingFilter={ratingFilter}
        uniqueAmenities={uniqueAmenities}
        onClear={handleClearFilters}
      />
      <div className="property-cards">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <h3 data-testid="conditional-message">No rental property available</h3>
        )}
      </div>
    </div>
  );
};

export default HomePage;
