import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/Logo.png";
import { lawyerMenuItems, registrarMenuItems } from "./Services/AllServices";

const Sidebar = () => {
  const role = sessionStorage.getItem("role");
  const menuItems = role === "ROLE_REGISTRAR" ? registrarMenuItems : lawyerMenuItems;

  const NavItem = ({ icon, label, to }) => (
    <Link to={to}>
      <div className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 ease-in-out hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 cursor-pointer">
        <span className="text-gray-200 text-lg">{icon}</span>
        <span className="text-gray-100 font-medium">{label}</span>
      </div>
    </Link>
  );

  return (
    <div className={`bg-indigo-800 w-64 p-6 m-4 rounded-2xl shadow-lg flex flex-col text-white transform transition-transform md:translate-x-0`}>
      <div className="flex justify-center mb-3">
        <img src={Logo} alt="logo" className="h-28 w-28" />
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {menuItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
