import React from "react";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Link
      to={`/property-details/${property.id}`}
      className="block bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3
            data-testid="property-name"
            className="text-lg font-bold text-gray-800 truncate"
          >
            {property.name}
          </h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-gray-700 font-medium">{property.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={16} className="mr-2 text-green-700" />
          <span>{property.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-green-700 font-semibold">{property.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
