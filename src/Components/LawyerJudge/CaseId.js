import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CaseId = () => {
    const [caseId, setCaseId] = useState('');
    const navigate = useNavigate();
    const role = sessionStorage.getItem("role")?.split("_")[1].toLowerCase();

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the form from reloading the page
        navigate(`/${role}/case-details/${caseId}`);  // Navigate to the case-details page
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Search By CaseId</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>  {/* Use onSubmit instead of onClick */}
                <label className="font-medium text-gray-700">Case ID:</label>
                <input
                    type="text"
                    value={caseId}
                    onChange={(e) => setCaseId(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                />
                
                <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
                    Search
                </button>
            </form>
        </div>
    );
};

export default CaseId;
