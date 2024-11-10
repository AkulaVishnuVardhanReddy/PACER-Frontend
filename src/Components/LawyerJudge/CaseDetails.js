import React, { useEffect, useState } from 'react';
import { CaseDetailsAPICall, HearingsAPICall } from '../API/LawyerAPI';
import Shimmar from '../Shimmar'
import { useParams } from 'react-router-dom';

const CaseDetails = () => {
  const [caseData,setCaseData]=useState([]);
  const [hearings,setHearings]=useState([]);
  const [loading,setLoading] = useState(true);
  const { caseId } = useParams();

  useEffect(() => {
    const fetchCaseDetails = async () => {
        const { data } = await CaseDetailsAPICall(caseId);  //Return Response.data
        setCaseData(data);
        console.log(data);
        setLoading(false);
    };
    fetchCaseDetails();
  }, [caseId]);

  useEffect(() => {
    const fetchHearingDetails = async () => {
        const { data } = await HearingsAPICall(caseId);
        setHearings(data);
        setLoading(false);
    };
    fetchHearingDetails();
  }, [caseId]);

  if(loading) return <Shimmar/>

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Case Details</h2>
      
      {/* Case Status Badge */}
      <div className="text-center mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseData.status)}`}>
          {caseData.status}
        </span>
      </div>

      {/* Case details table */}
      <table className="w-full table-auto border-collapse mb-8">
        <tbody>
          {Object.entries(caseData).map(([key, value]) => {
            if (key !== 'hearings') {
              return (
                <tr key={key} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-600 capitalize">
                    {formatHeading(key)}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{value || 'N/A'}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/* Hearings Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Hearings</h3>
      {hearings.map((hearing) => (
        <div key={hearing.id} className="mb-6 p-5 bg-gray-100 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <table className="w-full table-auto border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-medium text-gray-600">Hearing Date</td>
                <td className="px-4 py-2 text-gray-700">{hearing.hearingDate || 'N/A'}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-medium text-gray-600">Adjournment Reason</td>
                <td className="px-4 py-2 text-gray-700">{hearing.adjournmentReason || 'N/A'}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 font-medium text-gray-600">Proceeding Summary</td>
                <td className="px-4 py-2 text-gray-700">{hearing.procedingSummary || 'N/A'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-600">Next Hearing Date</td>
                <td className="px-4 py-2 text-gray-700">{hearing.nextHearingDate || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// Helper function to format camelCase keys
const formatHeading = (text) => {
  return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

// Function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "Ongoing":
      return "bg-yellow-200 text-yellow-800";
    case "Completed":
      return "bg-green-200 text-green-800";
    case "Pending":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export default CaseDetails;
