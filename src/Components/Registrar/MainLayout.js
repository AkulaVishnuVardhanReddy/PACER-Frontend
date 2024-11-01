// MainLayout.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import AddAccount from './AddAccount';
import RemoveAccountForm from './RemoveAccount';
import CreateCourtCase from './AddCourtCase';
import ScheduleCourtCase from './ScheduleCase';
import PendingCourtCases from './PendingCases';
import ResolvedCourtCases from './ResolvedCases';

const MainLayout = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header className="fixed top-0 left-64 w-full z-10" /> {/* Fix Header */}
          <div className="flex-1 overflow-y-auto "> {/* Add margin for the fixed header */}
            <Routes>
              <Route path="/add-account" element={<AddAccount />} />
              <Route path="/remove-account" element={<RemoveAccountForm />} />
              <Route path="/create-court-case" element={<CreateCourtCase />} />
              <Route path="/schedule-court-case" element={<ScheduleCourtCase />} />
              <Route path="/pending-court-cases" element={<PendingCourtCases />} />
              <Route path="/resolved-court-cases" element={<ResolvedCourtCases />} />
              {/* You can set a default route if needed */}
              <Route path="/" element={<ResolvedCourtCases />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainLayout;
