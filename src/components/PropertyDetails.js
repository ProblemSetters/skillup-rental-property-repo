import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data.json";
import { Star, MapPin, Tag } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((p) => p.id === parseInt(id));
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplyCoupon = () => {
    if (coupon.trim() === "") {
      setErrorMessage("Empty input field");
      return;
    }

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

  const handleBookProperty = () => {
    toast.success("Your property has been booked successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-96 object-cover"
        />

        <div className="p-8 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {property.name}
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star className="fill-yellow-500" size={20} />
              <span className="ml-1 font-semibold">
                {property.rating} Stars
              </span>
            </div>
            <div className="flex items-center text-green-700">
              <MapPin size={20} />
              <span className="ml-1">{property.location}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {property.description}
          </p>

          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {property.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="bg-green-50 text-green-900 p-2 rounded-lg text-sm"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between my-12">
            <div>
              <p
                data-testid="property-price"
                className="text-xl font-bold text-green-700"
              >
                {property.price}
              </p>
              {discountedPrice && (
                <p
                  data-testid="property-disc-price"
                  className="text-base text-green-600 mt-1"
                >
                  Discounted Price: ${discountedPrice}/night
                </p>
              )}
            </div>
            <div className="space-x-4">
              <button
                data-testid="apply-discount"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex px-9 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition"
              >
                <Tag size={18} className="mr-2" />
                Apply Discount
              </button>
              <button
                data-testid="book-property"
                onClick={handleBookProperty}
                className="px-9 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h4 className="text-xl font-semibold mb-4">Enter Coupon Code</h4>
            <input
              type="text"
              value={coupon}
              data-testid="modal-input"
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="w-full px-16 py-2 my-12 border rounded-lg mb-8 focus:ring-2 focus:ring-green-700 focus:border-transparent"
            />
            {errorMessage && (
              <p data-testid="modal-error" className="text-red-500 mb-12">
                {errorMessage}
              </p>
            )}
            <div className="flex space-x-4">
              <button
                data-testid="modal-apply"
                onClick={handleApplyCoupon}
                className="flex-1 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
              >
                Apply Coupon
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PropertyDetails;
