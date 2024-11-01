import React from 'react';

const FormerJudges = () => {
  // Sample data for former judges
  const judges = [
    {
      name: 'Justice John Doe',
      tenure: '2001 - 2015',
      description: 'Known for his strong stance on civil rights and judicial reform.',
    },
    {
      name: 'Justice Jane Smith',
      tenure: '2005 - 2020',
      description: 'Pioneered significant changes in family law and child welfare policies.',
    },
    {
      name: 'Justice Alan Brown',
      tenure: '1998 - 2010',
      description: 'A respected authority on constitutional law and international treaties.',
    },
  ];

  return (
    <div className="p-6 bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Former Judges
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Below are the profiles of esteemed former judges who have significantly contributed to the judiciary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">{judge.name}</h2>
              <p className="text-sm italic mb-4">{judge.tenure}</p>
              <p className="text-base">{judge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormerJudges;