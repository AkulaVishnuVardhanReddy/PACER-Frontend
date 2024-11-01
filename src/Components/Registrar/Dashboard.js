// Dashboard.js
import React from 'react';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="p-6 flex-1">
      <div className="grid grid-cols-3 gap-4">
        <Card title="Monthly Revenue" value="$3,500" previousValue="$1,700" change={2.4} />
        <Card title="Monthly Sales" value="$6,750" previousValue="$3,100" change={1.4} />
        <Card title="Total Profit" value="$10,900" previousValue="$8,900" change={-4.3} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Total Sales & Cost</h2>
        {/* Here you can add a graph component if needed */}
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <p className="text-3xl font-semibold">$956.82k</p>
          <p className="text-green-500">+5.4% increase in last 60 days</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
