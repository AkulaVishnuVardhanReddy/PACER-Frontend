import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiChevronDown } from 'react-icons/fi';
import ProfileLogo from '../Assets/images/ProfileLogo.png';
import emblem from "../Assets/images/emblem.svg";
import { logoutService } from './Services/LogoutService';
import { addLoginHistoryAPICall, GetPhotoAPICall } from './API/PublicAPICalls';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role")?.split("_")[1];
  const [imageUrl, setImageUrl] = useState(null);
  const FirstName = sessionStorage.getItem("FirstName");
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchPhoto = async () => {
      if (username) {
        try {
          const { data } = await GetPhotoAPICall(username);
          setImageUrl(URL.createObjectURL(data));
        } catch (error) {
          console.error("Error fetching user photo:", error);
        }
      }
    };
    fetchPhoto();
  }, [username]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await addLoginHistoryAPICall(logoutService());
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-1 border-b-2">
      <div className="flex items-center">
        <img src={emblem} alt="Emblem" className="h-12 m-3" />
        <div className="m-3 text-md font-bold">
          <h2>न्याय विभाग</h2>
          <h1>JUDICIARY INFORMATION SYSTEM</h1>
        </div>
      </div>
      <div ref={dropdownRef} className="relative cursor-pointer">
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">
          <div className="text-right">
            <span className="text-gray-800 font-semibold text-lg">{FirstName}</span>
            <span className="text-gray-500 text-xs block">{role}</span>
          </div>
          <img src={imageUrl || ProfileLogo} alt="User" className="rounded-full h-12 w-12 border-2 border-gray-300 shadow-sm hover:scale-105" />
          <FiChevronDown className={`text-gray-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
            <div className="p-4 border-b border-gray-100 text-center bg-blue-50 rounded-t-xl">
              <img src={imageUrl || ProfileLogo} alt="User" className="rounded-full h-12 w-12 mx-auto mb-2 border-2 border-blue-300" />
              <p className="text-gray-800 font-semibold">{FirstName}</p>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
            {[
              { label: 'Home', icon: FiHome, onClick: () => navigate(`/${role.toLowerCase()}`) },
              { label: 'Profile', icon: FiUser, onClick: () => navigate(`/${role.toLowerCase()}/user-profile`) },
              { label: 'Logout', icon: FiLogOut, onClick: handleLogout }
            ].map((item, idx) => (
              <button key={idx} onClick={() => { item.onClick(); setIsDropdownOpen(false); }} className="flex items-center w-full px-4 py-3 space-x-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600">
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
