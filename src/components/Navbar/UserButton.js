import React from "react";
import { User } from "lucide-react";
// import UserModal from "../Modals/UserModal";

const UserButton = () => {
  return (
    <div className="relative">
      <button
        data-testid="user-btn"
        className="bg-gray-200 rounded-full px-10 flex hover:bg-gray-300 transition"
      >
        <User className="text-gray-700" />
      </button>
      {/* <UserModal /> */}
    </div>
  );
};

export default UserButton;
