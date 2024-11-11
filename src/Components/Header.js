import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiChevronDown } from 'react-icons/fi';
import ProfileLogo from '../Assets/images/ProfileLogo.png';
import emblem from "../Assets/images/emblem.svg";
import { logoutService } from './Services/LogoutService';
import { addLoginHistoryAPICall } from './API/PublicAPICalls';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role")?.split("_")[1];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const callLogout = async (loginHistory) => {
    await addLoginHistoryAPICall(loginHistory);
  };
  
  const handleLogout = async () => {
    const loginHistory = logoutService();
    console.log(loginHistory);
    await callLogout(loginHistory);
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-1 border-b-2">
      <div className="flex">
        <div>
          <img src={emblem} alt="Emblem" className="h-12 m-3" />
        </div>
        <div className="m-3">
          <h2 className="text-md font-bold">न्याय विभाग</h2>
          <h1 className="text-md font-bold">JUDICIARY INFORMATION SYSTEM</h1>
        </div>
      </div>

      <div className="relative">
        <div 
          onClick={toggleDropdown} 
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="text-right">
            <span className="text-gray-800 font-semibold text-lg">
              {sessionStorage.getItem("FirstName")}
            </span>
            <span className="text-gray-500 text-xs block">{role}</span>
          </div>
          <img
            src={ProfileLogo}
            alt="User"
            className="rounded-full h-12 w-12 border-2 border-gray-300 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <FiChevronDown 
            className={`text-gray-600 transition-transform duration-300 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
            style={{ marginTop: '2px' }}
          />
        </div>

        {isDropdownOpen && (
          <div 
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-gray-200 transform scale-95 transition-all duration-200 ease-out z-20 hover:scale-100"
          >
            <div className="p-4 border-b border-gray-100 text-center bg-blue-50 rounded-t-xl">
              <img src={ProfileLogo} alt="User" className="rounded-full h-12 w-12 mx-auto mb-2 border-2 border-blue-300 shadow-md transition-transform duration-300 ease-in-out hover:scale-105" />
              <p className="text-gray-800 font-semibold">{sessionStorage.getItem("FirstName")}</p>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
            {[{ label: 'Home', icon: FiHome, onClick: () => { navigate(`/${role.toLowerCase()}`); setIsDropdownOpen(false); } },
              { label: 'Profile', icon: FiUser, onClick: () => { navigate(`/${role.toLowerCase()}/user-profile`); setIsDropdownOpen(false); } },
              { label: 'Logout', icon: FiLogOut, onClick: handleLogout }
            ].map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex items-center w-full px-4 py-3 space-x-2 text-left text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 ease-in-out rounded-xl"
              >
                <item.icon className="text-lg" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;