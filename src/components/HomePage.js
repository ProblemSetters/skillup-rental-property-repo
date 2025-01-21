import React from "react";
import PropertyCard from "./PropertyCard";
import propertiesData from "../data/properties.json";
import Navbar from "./Navbar/Navbar";
// import FilterModal from "./Modals/FilterModal";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto mt-20 px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-4 gap-6">
          {propertiesData.properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
          <div className="col-span-4 text-center py-12">
            {/* <p
              data-testid="conditional-message"
              className="text-xl text-gray-600"
            >
              No rental properties found
            </p> */}
          </div>
        </div>
      </main>

      {/* <FilterModal/> */}
    </div>
  );
};

export default HomePage;
