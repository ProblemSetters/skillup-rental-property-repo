import React from "react";

const UserModal = () => {
  return (
    <div className="absolute right-0 top-full mt-8 -ml-4 bg-white rounded-md p-2 w-48 shadow-md border border-gray-300 z-50">
      <div>
        <div className="grid grid-cols-1 gap-2">
          <button
            data-testid="user-profile-btn"
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
          >
            User Profile
          </button>
          <button
            data-testid="logout-btn"
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
          <button
            data-testid="login-btn"
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
          >
            Login
          </button>
          <hr className="border-t-2" />
          <button
            data-testid="contact-us-btn"
            className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
