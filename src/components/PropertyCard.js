import React from "react";
import placeholderImage from "../assests/placeholder.jpeg";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div>
        <img src={placeholderImage} alt="property" />
        <h3 data-testid="property-name">{property.name}</h3>
        <p>{property.description}</p>
        <p>Location: {property.location}</p>
        <p>Price: {property.price}</p>
      </div>
      <p data-testid="view-details">View Details</p>
    </div>
  );
};

export default PropertyCard;
