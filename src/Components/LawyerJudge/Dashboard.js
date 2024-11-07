import React, { useState } from 'react';
import Navbar from './Navbar';
import AccusedNamepng from "../../Assets/images/AccusedName.png";
import ArrestingOfficerpng from "../../Assets/images/ArrestingOfficer.png";
import CaseIdpng from "../../Assets/images/CaseId.png";
import CaseTypepng from "../../Assets/images/CaseType.png";
import CourtNamepng from "../../Assets/images/CourtName.png";
import HearingDatepng from "../../Assets/images/HearingDate.png";
import JudgeNamepng from "../../Assets/images/JudgeName.png";
import PoliceStationpng from "../../Assets/images/PoliceStation.png";
import LawyerNamepng from "../../Assets/images/LawyerName.png";

const Dashboard = ({ role }) => {
    const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

    const initialItems = [
        { src: LawyerNamepng, caption: 'Access Previous Case', description: 'View past cases to prepare arguments (fees apply)', onClick: () => setShowAdditionalOptions(true) },
        { src: HearingDatepng, caption: 'Upcoming Hearings', description: 'Stay informed about scheduled hearings.' },
        { src: CaseIdpng, caption: 'Keyword Search', description: 'Search case history by keyword.' },
    ];

    const additionalItems = [
        { src: CaseTypepng, caption: 'Pending Cases', description: 'List all pending cases by date and defendant details.' },
        { src: CourtNamepng, caption: 'Judgment Summaries', description: 'View summaries of past judgments for reference.' },
        { src: JudgeNamepng, caption: 'Presiding Judges', description: 'Access judge details for each case.' },
        { src: PoliceStationpng, caption: 'Crime Locations', description: 'View location details associated with each case.' },
    ];

    return (
        <div className="h-screen bg-gray-50">
            <Navbar />
            <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                    Welcome to the {role === 'judge' ? "Judge's" : "Lawyer's"} Dashboard
                </h2>
                <div className="flex flex-wrap gap-8 justify-center">
                    {initialItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={item.onClick}  // Assign onClick if it exists
                            className="bg-white p-6 rounded-lg shadow-lg w-60 h-72 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-300 cursor-pointer"
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="w-full h-36 object-contain rounded-md transition duration-300 transform hover:scale-110"
                            />
                            <p className="text-center font-semibold mt-4 text-blue-800 text-lg">
                                {item.caption}
                            </p>
                            <p className="text-center mt-2 text-gray-600 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {showAdditionalOptions && ( // Render additional items only if showAdditionalOptions is true
                    <div className="flex flex-wrap gap-8 justify-center mt-8">
                        {additionalItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg w-60 h-72 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-300 cursor-pointer"
                            >
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="w-full h-36 object-contain rounded-md transition duration-300 transform hover:scale-110"
                                />
                                <p className="text-center font-semibold mt-4 text-blue-800 text-lg">
                                    {item.caption}
                                </p>
                                <p className="text-center mt-2 text-gray-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
