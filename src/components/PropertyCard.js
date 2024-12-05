import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/property-details/${property.id}`} data-testid="view-details">View Details</Link>
    </div>
  );
};

export default PropertyCard;
