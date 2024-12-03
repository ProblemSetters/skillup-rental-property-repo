import React from "react";
import placeholderImage from "../assests/placeholder.jpeg";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={placeholderImage} alt="property" />
      <h3>{property.name}</h3>
      <p>{property.description}</p>
      <p>Location: {property.location}</p>
      <p>Price: {property.price}</p>
    </div>
  );
};

export default PropertyCard;