import React from "react";
import { useNavigate } from "react-router-dom";

const UserModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 top-full mt-8 -ml-4 bg-white rounded-md p-2 w-48 shadow-md border border-gray-300 z-50">
      <div onClick={(e) => e.stopPropagation()}>
        <div className="grid grid-cols-1 gap-2">
          <button
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
            onClick={() => {
              // Handle User Profile navigation
              onClose();
            }}
          >
            User Profile
          </button>
          <button
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
            onClick={() => {
              // Handle Login navigation
              onClose();
            }}
          >
            Login
          </button>
          <hr className="border-t-2" />
          <button
            data-testid="contact-us-btn"
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
            onClick={() => {
              navigate("/contact-us"); 
              onClose();
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
