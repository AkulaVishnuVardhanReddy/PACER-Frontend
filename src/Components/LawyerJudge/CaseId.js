import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CaseId = () => {
    const [caseId, setCaseId] = useState('');


    const handleSubmit =()=>{
        Navigate(`case-details`);
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Search By CaseId</h2>
            <form  className="flex flex-col space-y-4">
                <label className="font-medium text-gray-700">Case ID:</label>
                <input
                    type="text"
                    value={caseId}
                    onChange={(e) => setCaseId(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                />
                
                <button type="submit" onClick={handleSubmit} className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
                    Search
                </button>
            </form>
        </div>
    );
};

export default CaseId;
