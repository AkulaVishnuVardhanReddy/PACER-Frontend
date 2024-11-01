// Card.js
import React from 'react';

const Card = ({ title, value, previousValue, change, icon }) => {
  return (
    <div className="bg-purple-100 rounded-lg p-4 text-center">
      <div className="text-sm font-semibold text-gray-600">{title}</div>
      <div className="text-2xl font-bold text-purple-800">{value}</div>
      <div className="text-sm text-gray-500">Previous: {previousValue}</div>
      <div className={`text-sm font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? `+${change}%` : `${change}%`}
      </div>
    </div>
  );
};

export default Card;
