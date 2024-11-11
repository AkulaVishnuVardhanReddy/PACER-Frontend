// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/Logo.png";
import { lawyerMenuItems, registrarMenuItems } from "./Services/AllServices";

const Sidebar = ({ isVisible }) => {
  const role = sessionStorage.getItem("role");
  const NavItem = ({ icon, label, to, onClick }) => (
    <Link to={to} onClick={onClick}>
      <div className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 ease-in-out hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 cursor-pointer">
        <span className="text-gray-200 text-lg">{icon}</span>
        <span className="text-gray-100 font-medium">{label}</span>
      </div>
    </Link>
  );

  const menuItems = role === "ROLE_REGISTRAR" ? registrarMenuItems : lawyerMenuItems;

  return (
    <div className={`bg-indigo-800 w-64 p-6 m-4 rounded-2xl shadow-lg flex flex-col text-white overflow-y-auto hide-scrollbar transform transition-transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex justify-center mb-3">
        <img src={Logo} alt="logo" className="h-28 w-28" />
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {menuItems.map(({ to, icon, label, onClick }) => (
          <NavItem key={to} to={to} icon={icon} label={label} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
