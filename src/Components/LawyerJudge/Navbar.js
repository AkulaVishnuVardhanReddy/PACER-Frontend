import React from 'react';
import ProfileLogo from '../../Assets/images/ProfileLogo.png';
import { FiSettings, FiHome, FiUser, FiLogOut, FiHelpCircle } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';
import Logo from '../../Assets/images/LawyerLogo.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 shadow-lg border-b border-gray-200 transition-all duration-300 ease-in-out">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-10 h-10 transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-110 shadow-lg"
                />
                <span className="font-mono text-xl font-semibold text-gray-800 tracking-wide hover:text-blue-600 transition duration-300">PACER</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 text-gray-700">
                {[
                    { label: 'Home', icon: FiHome },
                    { label: 'Profile', icon: FiUser },
                    { label: 'My Cases', icon: FaBalanceScale },
                    { label: 'Help', icon: FiHelpCircle },
                    { label: 'Logout', icon: FiLogOut },
                ].map((item, index) => (
                    <button
                        key={index}
                        className="flex items-center space-x-2 font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out group"
                    >
                        <item.icon className="text-xl transition-transform duration-300 transform group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-blue-600 shadow-md" />
                        <span className="relative font-semibold">
                            {item.label}
                            {/* Underline on Hover */}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </span>
                    </button>
                ))}
            </div>

            {/* Icons and Profile Section */}
            <div className="flex items-center space-x-4">
                {/* Profile Section */}
                <div className="flex items-center space-x-2 relative group">
                    <img
                        src={ProfileLogo}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-500 transition duration-300">Online</span>

                    {/* Dropdown on Hover */}
                    <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 z-20 transform scale-90 group-hover:scale-100">
                        <button className="w-full flex items-center space-x-2 text-left text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
                            <FiSettings className="text-lg" />
                            <span>Account Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 text-left text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out mt-2">
                            <FiLogOut className="text-lg" />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
