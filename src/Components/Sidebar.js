import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/images/Logo.png";
import {
  FaUserPlus,
  FaGavel,
  FaUserMinus,
  FaFolderOpen,
  FaCheckCircle,
  FaCalendarAlt,
  FaPlusSquare,
  FaClock,
} from "react-icons/fa";
import { FaSearch, FaIdBadge, FaBuilding, FaCalendarDay, FaBalanceScale, FaUserShield, FaUserTie, FaUniversity, FaUser  } from "react-icons/fa";
import { addLoginHistoryAPICall } from "./API/PublicAPICalls";
import { logoutService } from "./Services/LogoutService";



const Sidebar = () => {
  const role = sessionStorage.getItem("role");
  const NavItem = ({ icon, label, to, onClick }) => (
    <Link to={to} onClick={onClick}>
      <div className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 ease-in-out hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 cursor-pointer">
        <span className="text-gray-200 text-lg">{icon}</span>
        <span className="text-gray-100 font-medium">{label}</span>
      </div>
    </Link>
  );

  const registrarMenuItems = [
    { to: "add-account", icon: <FaUserPlus />, label: "Add Accounts" },
    { to: "remove-account", icon: <FaUserMinus />, label: "Remove Accounts" },
    { to: "create-court-case", icon: <FaPlusSquare />, label: "Add Case" },
    { to: "schedule-court-case", icon: <FaCalendarAlt />, label: "Schedule Case" },
    { to: "login-history", icon: <FaClock />, label: "Login History" },
    { to: "case-history", icon: <FaGavel />, label: "Case History" },
    { to: "pending-court-cases", icon: <FaFolderOpen />, label: "Pending Cases" },
    { to: "resolved-court-cases", icon: <FaCheckCircle />, label: "Resolved Cases" },
  ];

  const lawyerMenuItems = [
    { to: "case-id", icon: <FaIdBadge />, label: "Case ID" },
    { to: "court-name", icon: <FaBuilding />, label: "Court Name" },
    { to: "hearing-date", icon: <FaCalendarDay />, label: "Hearing Date" },
    { to: "keyword-search", icon: <FaSearch />, label: "Keyword Search" },
    { to: "case-type", icon: <FaBalanceScale />, label: "Case Type" },
    { to: "arresting-officer", icon: <FaUserShield />, label: "Arresting Officer" },
    { to: "lawyer-name", icon: <FaUserTie />, label: "Lawyer" },
    { to: "public-prosecutor", icon: <FaUniversity />, label: "Public Prosecutor" },
    { to: "accused-name", icon: <FaUser />, label: "Accused Name" },
    { to: "judge-name", icon: <FaGavel />, label: "Judge Name" },
  ];

  const menuItems = role === "ROLE_REGISTRAR" ? registrarMenuItems : lawyerMenuItems;

  return (
    <div className="bg-indigo-800 w-64 p-6 m-4 rounded-2xl shadow-lg flex flex-col text-white overflow-y-auto hide-scrollbar">
      <div className="flex justify-center mb-3">
        <img src={Logo} alt="logo" className="h-24 w-24" />
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
