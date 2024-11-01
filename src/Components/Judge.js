import React, { useState } from 'react';

const Judge = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
                    Select the Case By
                </h1>
                <div className="flex flex-col gap-4">
                    <button 
                        className={`py-3 px-6 rounded-lg transition-colors duration-300 ${
                            selectedOption === 'id' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="id"
                        onClick={handleOptionChange}
                    >
                        Case ID
                    </button>
                    <button 
                        className={`py-3 px-6 rounded-lg transition-colors duration-300 ${
                            selectedOption === 'date' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="date"
                        onClick={handleOptionChange}
                    >
                        Date
                    </button>
                    <button 
                        className={`py-3 px-6 rounded-lg transition-colors duration-300 ${
                            selectedOption === 'location' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="location"
                        onClick={handleOptionChange}
                    >
                        Location
                    </button>
                    <button 
                        className={`py-3 px-6 rounded-lg transition-colors duration-300 ${
                            selectedOption === 'officer' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="officer"
                        onClick={handleOptionChange}
                    >
                        Name of Officer
                    </button>
                </div>
                <div className="mt-8 bg-indigo-50 rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-indigo-700">Selected Option:</h2>
                    <p className="text-gray-700 mt-2">
                        {selectedOption ? `You have selected: ${selectedOption}` : 'None'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Judge;