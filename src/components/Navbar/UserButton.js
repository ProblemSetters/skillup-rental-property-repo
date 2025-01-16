import React, { useState } from "react";
import { User } from "lucide-react";
import UserModal from "../Modals/UserModal";

const UserButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <button
        data-testid="user-btn"
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="bg-gray-200 rounded-full px-10 flex hover:bg-gray-300 transition"
      >
        <User className="text-gray-700" />
      </button>
      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UserButton;
