import React from 'react';

const ResolvedCourtCases = () => {
  // Hardcoded resolved court cases
  const resolvedCases = [
    {
      cin: 1,
      startDate: '2023-01-15',
      judgmentDate: '2023-03-01',
      judgeName: 'Judge Wilson',
      judgmentSummary: 'The defendant is found guilty and sentenced to 2 years in prison.'
    },
    {
      cin: 2,
      startDate: '2023-02-20',
      judgmentDate: '2023-04-15',
      judgeName: 'Judge Adams',
      judgmentSummary: 'The defendant is acquitted due to lack of evidence.'
    },
    {
      cin: 3,
      startDate: '2023-03-10',
      judgmentDate: '2023-05-30',
      judgeName: 'Judge Roberts',
      judgmentSummary: 'The defendant is sentenced to community service and probation.'
    }
  ];

  return (
    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Resolved Court Cases</h2>
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300">Start Date</th>
            <th className="p-4 border-b border-gray-300">CIN</th>
            <th className="p-4 border-b border-gray-300">Judgment Date</th>
            <th className="p-4 border-b border-gray-300">Judge Name</th>
            <th className="p-4 border-b border-gray-300">Judgment Summary</th>
          </tr>
        </thead>
        <tbody>
          {resolvedCases.map((courtCase, index) => (
            <tr key={courtCase.cin} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              <td className="p-4 border-b border-gray-300">{courtCase.startDate}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.cin}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.judgmentDate}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.judgeName}</td>
              <td className="p-4 border-b border-gray-300">{courtCase.judgmentSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResolvedCourtCases;
