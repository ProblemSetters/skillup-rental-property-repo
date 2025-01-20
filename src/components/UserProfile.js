import React from "react";
import { ArrowLeft } from "lucide-react";
import placeholder from "../assests/user-placeholder.png";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start">
        <button
          data-testid="home-btn"
          onClick={() => navigate("/")}
          className="flex border border-gray-300 rounded-md p-2 mb-4"
        >
          <ArrowLeft className="h-12 w-16 mr-1" />
          Back to Home
        </button>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-8">
            <img
              className="h-48 w-48 object-cover rounded-full mb-4"
              src={placeholder}
              alt={user.name}
            />
            <div className="text-center">
              <div
                data-testid="username"
                className="text-2xl font-bold text-green-700 mb-14"
              >
                {user.name}
              </div>
              <div data-testid="user-details" className="text-left">
                <p className="mt-2 text-gray-500">Email: {user.email}</p>
                <p className="mt-2 text-gray-500">DOB: {user.dob}</p>
                <p className="mt-2 text-gray-500">Address: {user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
