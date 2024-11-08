import React, { useState } from 'react';
import { ArrestingOfficerAPICall } from '../API/LawyerAPI';

const ArrestingOfficer = () => {
  const [details, setDetails] = useState([]);
  const [empty,setEmpty] = useState(false);
  const [arrestingOfficer,setArrestingOfficer] =useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const history = await ArrestingOfficerAPICall(arrestingOfficer);
    if (Array.isArray(history.data)) setDetails(history.data);
    if (history.data.length === 0) setEmpty(true);
    else setEmpty(false);;
  };

  

  return (
    <>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Search By Officer</h2>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="font-medium text-gray-700">Arresting Officer Name:</label>
            <input
                type="text"
                value={arrestingOfficer}
                onChange={(e) => setArrestingOfficer(e.target.value)}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200"
                required
            />
            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
                Search
            </button>
        </form>
    </div>

    {empty && (
  <h1 className="text-md text-center font-bold text-red-500 p-6">
    Cases not found!
  </h1>
)}


    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg max-w-3xl">
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300">CIN</th>
            <th className="p-4 border-b border-gray-300">Type</th>
            <th className="p-4 border-b border-gray-300">Court Name</th>
            <th className="p-4 border-b border-gray-300">Judge</th>
            <th className="p-4 border-b border-gray-300">Lawyer</th>
          </tr>
        </thead>
        <tbody>
          {details.map((history, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              <td className="p-4 border-b border-gray-300">{history.cin}</td>
              <td className="p-4 border-b border-gray-300">{history.crimeType} </td>
              <td className="p-4 border-b border-gray-300">{history.courtName}</td>
              <td className="p-4 border-b border-gray-300">{history.judgeName}</td>
              <td className="p-4 border-b border-gray-300">{history.lawyerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ArrestingOfficer;