import React from 'react';

const PendingCourtCases = () => {
  // Hardcoded pending court cases
  const pendingCases = [
    {
      cin: 1,
      startDate: '2024-01-15',
      defendantName: 'John Doe',
      defendantAddress: '123 Elm Street',
      crimeType: 'Theft',
      crimeLocation: 'Downtown Mall',
      lawyerName: 'Jane Smith',
      publicProsecutorName: 'Tom Brown',
      judgeName: 'Judge Wilson'
    },
    {
      cin: 2,
      startDate: '2024-02-20',
      defendantName: 'Alice Johnson',
      defendantAddress: '456 Maple Avenue',
      crimeType: 'Assault',
      crimeLocation: 'Main Street',
      lawyerName: 'Sarah Davis',
      publicProsecutorName: 'Mike Johnson',
      judgeName: 'Judge Adams'
    },
    {
      cin: 3,
      startDate: '2024-03-10',
      defendantName: 'Michael Smith',
      defendantAddress: '789 Oak Road',
      crimeType: 'Fraud',
      crimeLocation: 'City Bank',
      lawyerName: 'Chris Lee',
      publicProsecutorName: 'Emily White',
      judgeName: 'Judge Roberts'
    }
  ];

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
              <td className="p-4 border-b border-gray-300">{courtCase.defendantName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.defendantAddress}</td>
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
