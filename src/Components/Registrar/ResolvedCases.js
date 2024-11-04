import React, { useEffect, useState } from 'react';
import { ResolvedCasesAPICall } from '../API/RegistrarAPI';
import ShimmerEffect from './Shimmar';

const ResolvedCourtCases = () => {
  const [resolvedCases, setResolvedCases] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchResolvedCases = async () => {
      try {
        const cases = await ResolvedCasesAPICall();
        if (Array.isArray(cases.data)) setResolvedCases(cases.data);
        else console.error("Expected an array but received:", cases);
      } catch (error) {
        console.error("Error fetching resolved cases:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResolvedCases();
  }, []);

  if (loading) return <ShimmerEffect/>;
  if (resolvedCases.length === 0) return <div>No resolved court cases available.</div>;

  return (
    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Resolved Court Cases</h2>
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300">Start Date</th>
            <th className="p-4 border-b border-gray-300">CIN</th>
            <th className="p-4 border-b border-gray-300">Completion Date</th>
            <th className="p-4 border-b border-gray-300">Judge Name</th>
            <th className="p-4 border-b border-gray-300">Court Name</th>
          </tr>
        </thead>
        <tbody>
          {resolvedCases.map((courtCase, index) => (
            <tr key={courtCase.cin} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              <td className="p-4 border-b border-gray-300">{courtCase.startDate}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.cin}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.expectedCompletionDate}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.judgeName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.courtName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResolvedCourtCases;
