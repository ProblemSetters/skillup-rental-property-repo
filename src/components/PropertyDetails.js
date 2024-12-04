import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data.json";
import placeholderImage from "../assests/placeholder.jpeg";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === parseInt(id));
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplyCoupon = () => {
    const price = parseInt(
      property.price.replace("$", "").replace("/night", "")
    );
    let discount = 0;

    switch (coupon.toUpperCase()) {
      case "10OFF":
        discount = 0.1;
        break;
      case "20OFF":
        discount = 0.2;
        break;
      case "50OFF":
        discount = 0.3;
        break;
      default:
        setErrorMessage("Incorrect coupon");
        return;
    }

    setDiscountedPrice(price - price * discount);
    setErrorMessage("");
    setIsModalOpen(false);
  };

  return (
    <div className="property-details-card">
      <h1>Property Details</h1>
      <img src={placeholderImage} alt="property" />
      <h2>{property.name}</h2>
      <h4>{property.description}</h4>
      <p>Location: {property.location}</p>
      <p>Price: {property.price}</p>
      <p>Amenities: {property.amenities.join(", ")}</p>
      <p>Rating: {property.rating} Stars</p>
      {discountedPrice !== null && (
        <p>Discounted Price: ${discountedPrice}/night</p>
      )}

      <div className="cta-buttons">
        <button onClick={() => setIsModalOpen(true)}>
          Apply Discount Coupon
        </button>
        <button>Book Property</button>
      </div>

      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <h4>Enter Coupon Code</h4>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>
            <button className="danger" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
