import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className="h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main big card */}
                    <div className="bg-white p-6 rounded-lg shadow-md h-64">
                        {/* Placeholder for main content */}
                    </div>

                    {/* Small cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md h-40"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md h-40"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md h-40"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md h-40"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
