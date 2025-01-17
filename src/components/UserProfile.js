import React from "react";
import placeholder from "../assests/user-placeholder.png";

const UserProfile = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-8">
            <img
              className="h-48 w-48 object-cover rounded-full mb-4"
              src={placeholder}
              alt={user.name}
            />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-14">
                {user.name}
              </div>
              <div className="text-left">
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