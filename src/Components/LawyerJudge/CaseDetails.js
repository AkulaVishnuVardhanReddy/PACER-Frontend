import React from 'react';

const CaseDetails = () => {
  const caseData = {
    cin: 123456789,
    defendentName: "John Doe",
    defendentAddress: "123 Main St, Springfield",
    crimeType: "Theft",
    crimeDate: "2023-04-15",
    crimeLocation: "Downtown Springfield",
    arrestingOfficerName: "Officer Jane Smith",
    arrestDate: "2023-04-16",
    judgeName: "Judge Rebecca Wright",
    publicProsecutorName: "Samuel L. Briggs",
    lawyerName: "Martha Black",
    courtName: "Springfield District Court",
    startDate: "2023-04-20",
    expectedCompletionDate: "2023-10-15",
    status: "Ongoing",
    hearings: [
      {
        id: 1,
        hearingDate: "2023-05-10",
        adjournmentReason: "Further evidence required",
        proceedingSummary: "Initial hearing completed",
        nextHearingDate: "2023-06-15"
      },
      {
        id: 2,
        hearingDate: "2023-06-15",
        adjournmentReason: "Witness unavailability",
        proceedingSummary: "Witness testimony postponed",
        nextHearingDate: "2023-07-20"
      },
    ]
  };

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
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hearings</h3>
      {caseData.hearings.map((hearing) => (
        <div key={hearing.id} className="mb-6 p-5 bg-gray-100 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Hearing {hearing.id}</h4>
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
                <td className="px-4 py-2 text-gray-700">{hearing.proceedingSummary || 'N/A'}</td>
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
