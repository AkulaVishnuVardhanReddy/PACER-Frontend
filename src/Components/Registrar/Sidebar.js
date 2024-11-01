// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from "../../Assets/images/Logo.png";
import { FaUserPlus, FaSignOutAlt, FaUserMinus, FaFolderOpen, FaCheckCircle, FaCalendarAlt, FaPlusSquare } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-indigo-800 w-64 p-6 m-4 rounded-2xl shadow-lg flex flex-col text-white">
      <div className="flex justify-center mb-2">
        <img src={Logo} alt="logo" className="h-24 w-24" />
      </div>
      <div>
        <NavItem to="/add-account" icon={<FaUserPlus />} label="Add Accounts" />
        <NavItem to="/remove-account" icon={<FaUserMinus />} label="Remove Accounts" />
        <NavItem to="/create-court-case" icon={<FaPlusSquare />} label="Add Case" />
        <NavItem to="/schedule-court-case" icon={<FaCalendarAlt />} label="Schedule Case" />
        <NavItem to="/pending-court-cases" icon={<FaFolderOpen />} label="Pending Cases" />
        <NavItem to="/resolved-court-cases" icon={<FaCheckCircle />} label="Resolved Cases" />
        <NavItem to="/logout" icon={<FaSignOutAlt />} label="Log Out" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, to }) => (
  <Link to={to}> {/* Use Link to wrap the NavItem for routing */}
    <div className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 ease-in-out hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 cursor-pointer">
      <span className="text-gray-200 text-lg">{icon}</span>
      <span className="text-gray-100 font-medium">{label}</span>
    </div>
  </Link>
);

export default Sidebar;
