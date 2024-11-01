// Header.js
import React from 'react';

const Header = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    description: "Project Manager",
    photoUrl: "https://via.placeholder.com/40", // Replace with actual user photo URL
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 font-mono">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex flex-col items-end">
          <span className="text-gray-800 font-semibold text-lg">{user.name}</span>
          <span className="text-gray-500 text-sm">{user.description}</span>
        </div>
        <img
          src={user.photoUrl}
          alt="User"
          className="rounded-full h-12 w-12 border-2 border-gray-300 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Header;
