import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/images/Logo.png";
import {
  FaUserPlus,
  FaSignOutAlt,
  FaGavel,
  FaUserMinus,
  FaFolderOpen,
  FaCheckCircle,
  FaCalendarAlt,
  FaPlusSquare,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const NavItem = ({ icon, label, to, onClick }) => (
    <Link to={to} onClick={onClick}>
      <div className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 ease-in-out hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 cursor-pointer">
        <span className="text-gray-200 text-lg">{icon}</span>
        <span className="text-gray-100 font-medium">{label}</span>
      </div>
    </Link>
  );

  const menuItems = [
    { to: "add-account", icon: <FaUserPlus />, label: "Add Accounts" },
    { to: "remove-account", icon: <FaUserMinus />, label: "Remove Accounts" },
    { to: "create-court-case", icon: <FaPlusSquare />, label: "Add Case" },
    {
      to: "schedule-court-case",
      icon: <FaCalendarAlt />,
      label: "Schedule Case",
    },
    { to: "login-history", icon: <FaClock />, label: "Login History" },
    { to: "case-history", icon: <FaGavel />, label: "Case History" },
    {
      to: "pending-court-cases",
      icon: <FaFolderOpen />,
      label: "Pending Cases",
    },
    {
      to: "resolved-court-cases",
      icon: <FaCheckCircle />,
      label: "Resolved Cases",
    },
    {
      to: "/",
      icon: <FaSignOutAlt />,
      label: "Log Out",
      onClick: () => handleLogout(),
    },
  ];

  return (
    <div className="bg-indigo-800 w-64 p-6 m-4 rounded-2xl shadow-lg flex flex-col text-white overflow-y-auto hide-scrollbar">
      <div className="flex justify-center mb-3">
        <img src={Logo} alt="logo" className="h-24 w-24" />
      </div>
      {menuItems.map(({ to, icon, label, onClick }) => (
        <NavItem key={to} to={to} icon={icon} label={label} onClick={onClick} />
      ))}
    </div>
  );
};

export default Sidebar;
