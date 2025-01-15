import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import FilterModal from "./Modals/FilterModal";
import propertiesData from "../data.json";
import Navbar from "./Navbar/Navbar";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [likedProperties, setLikedProperties] = useState([]);

  const [tempAmenitiesFilter, setTempAmenitiesFilter] = useState([]);
  const [tempRatingFilter, setTempRatingFilter] = useState("");
  const [tempPriceFilter, setTempPriceFilter] = useState([90, 400]);

  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([90, 400]);

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

  const handleApplyFilters = () => {
    setAmenitiesFilter(tempAmenitiesFilter);
    setRatingFilter(tempRatingFilter);
    setPriceFilter(tempPriceFilter);
    setIsFilterModalOpen(false);
  };

  const handleClearFilters = () => {
    setTempAmenitiesFilter([]);
    setTempRatingFilter("");
    setTempPriceFilter([90, 400]);

    setAmenitiesFilter([]);
    setRatingFilter("");
    setPriceFilter([90, 400]);
    setIsFilterModalOpen(false);
  };

  const handleCloseModal = () => {
    setTempAmenitiesFilter(amenitiesFilter);
    setTempRatingFilter(ratingFilter);
    setTempPriceFilter(priceFilter);
    setIsFilterModalOpen(false);
  };

  const toggleLikeProperty = (propertyId) => {
    setLikedProperties((prevLikedProperties) =>
      prevLikedProperties.includes(propertyId)
        ? prevLikedProperties.filter((id) => id !== propertyId)
        : [...prevLikedProperties, propertyId]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        likedProperties={likedProperties}
        amenitiesFilter={tempAmenitiesFilter}
        setAmenitiesFilter={setTempAmenitiesFilter}
        ratingFilter={tempRatingFilter}
        setRatingFilter={setTempRatingFilter}
        priceFilter={tempPriceFilter}
        setPriceFilter={setTempPriceFilter}
        uniqueAmenities={uniqueAmenities}
        onClear={handleClearFilters}
        onApply={handleApplyFilters}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      <main className="max-w-6xl mx-auto mt-20 px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-4 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isLiked={likedProperties.includes(property.id)}
                toggleLike={() => toggleLikeProperty(property.id)}
              />
            ))
          ) : (
            <div className="col-span-4 text-center py-12">
              <p
                data-testid="conditional-message"
                className="text-xl text-gray-600"
              >
                No rental properties found
              </p>
            </div>
          )}
        </div>
      </main>

      {isFilterModalOpen && (
        <FilterModal
          onClose={handleCloseModal}
          amenitiesFilter={tempAmenitiesFilter}
          setAmenitiesFilter={setTempAmenitiesFilter}
          ratingFilter={tempRatingFilter}
          setRatingFilter={setTempRatingFilter}
          priceFilter={tempPriceFilter}
          setPriceFilter={setTempPriceFilter}
          uniqueAmenities={uniqueAmenities}
          onClear={handleClearFilters}
          onApply={handleApplyFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      )}
    </div>
  );
};

export default HomePage;
