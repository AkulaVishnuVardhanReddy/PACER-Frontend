import React, { useEffect, useState } from 'react';
import { PendingCasesAPICall } from '../API/RegistrarAPI';

const PendingCourtCases = () => {
  const [pendingCases, setPendingCases] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPendingCases = async () => {
      try {
        const cases = await PendingCasesAPICall(); // Fetch the pending cases
        if (Array.isArray(cases.data)) {
          setPendingCases(cases.data); // Update state with fetched data
        } else {
          console.error("Expected an array but received:", cases);
        }
      } catch (error) {
        console.error("Error fetching pending cases:", error); // Handle error
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchPendingCases(); // Call the fetch function
  }, []); // Empty dependency array for on mount

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  if (pendingCases.length === 0) {
    return <div>No pending court cases available.</div>; // Handle no cases found
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Pending Court Cases</h2>
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300">CIN</th>
            <th className="p-4 border-b border-gray-300">Start Date</th>
            <th className="p-4 border-b border-gray-300">Defendant Name</th>
            <th className="p-4 border-b border-gray-300">Address</th>
            <th className="p-4 border-b border-gray-300">Crime Type</th>
            <th className="p-4 border-b border-gray-300">Crime Location</th>
            <th className="p-4 border-b border-gray-300">Lawyer</th>
            <th className="p-4 border-b border-gray-300">Public Prosecutor</th>
            <th className="p-4 border-b border-gray-300">Judge</th>
          </tr>
        </thead>
        <tbody>
          {pendingCases.map((courtCase, index) => (
            <tr key={courtCase.cin} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              <td className="p-4 border-b border-gray-300">{courtCase.cin}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.startDate}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.defendentName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.defendentAddress}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.crimeType}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.crimeLocation}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.lawyerName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.publicProsecutorName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.judgeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingCourtCases;
