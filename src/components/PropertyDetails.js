import React from "react";
import placeholderImage from "../assests/placeholder.jpeg";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details-card">
      <h1>Property Details</h1>
      <img src={placeholderImage} alt="property" />
      <h2 data-testid="property-name">Property Name</h2>
      <h4 data-testid="property-desc">Property Description</h4>
      <p data-testid="property-location">Location: </p>
      <p data-testid="property-price">Price: </p>
      <p data-testid="property-amenities">Amenities: </p>
      <p data-testid="property-rating">Rating: NA Stars</p>
      <p data-testid="property-disc-price">Discounted Price: $NA/night</p>

      <div className="cta-buttons">
        <button data-testid="apply-discount">Apply Discount Coupon</button>
        <button>Book Property</button>
      </div>

      <div disabled className="custom-modal">
        <div className="modal-content">
          <h4>Enter Coupon Code</h4>
          <input
            type="text"
            data-testid="modal-input"
            placeholder="Enter coupon code"
          />
          <button data-testid="modal-apply">Apply Coupon</button>
          <button className="danger">Close</button>
          <p data-testid="error" className="error-message">
            Error Message
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
