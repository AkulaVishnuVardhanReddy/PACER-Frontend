import React, { useEffect, useState } from 'react';
import { PendingCasesAPICall } from '../API/RegistrarAPI';
import ShimmerEffect from './Shimmar';

const PendingCourtCases = () => {
  const [pendingCases, setPendingCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingCases = async () => {
      try {
        const { data } = await PendingCasesAPICall();  //Return Response.data
        if (Array.isArray(data)) setPendingCases(data);
        else console.error("Expected an array but received:", data);
      } catch (error) {
        console.error("Error fetching pending cases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingCases();
  }, []);

  if (loading) return <ShimmerEffect/>
  if (pendingCases.length === 0) return <div>No pending court cases available.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 mb-4 mt-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Pending Court Cases</h2>
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            {["CIN", "Start Date", "Defendant Name", "Crime Type", "Crime Location", "Lawyer", "Public Prosecutor", "Judge"].map(header => (
              <th key={header} className="p-4 border-b border-gray-300">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pendingCases.map((courtCase, index) => (
            <tr key={courtCase.cin} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              {["cin", "startDate", "defendentName", "crimeType", "crimeLocation", "lawyerName", "publicProsecutorName", "judgeName"].map(field => (
                <td key={field} className="p-4 border-b border-gray-300">{courtCase[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingCourtCases;
