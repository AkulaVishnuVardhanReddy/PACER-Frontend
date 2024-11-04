// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Components/LoginForm';
import Judge from './Components/Judge';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import AboutUs from './Components/AboutUs';
import JudiciaryInfo from './Components/JudiciaryInfo';
import ChiefJustice from './Components/ChiefJustice';
import FormerJudges from './Components/FormerJudges';
import MainLayout from './Components/Registrar/MainLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import AddAccount from './Components/Registrar/AddAccount';
import RemoveAccountForm from './Components/Registrar/RemoveAccount';
import CreateCourtCase from './Components/Registrar/AddCourtCase';
import ScheduleCourtCase from './Components/Registrar/ScheduleCase';
import PendingCourtCases from './Components/Registrar/PendingCases';
import ResolvedCourtCases from './Components/Registrar/ResolvedCases';
import LoginHistory from './Components/Registrar/LoginHistory';
import CaseAccessHistory from './Components/Registrar/CaseAccessHistory';


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="login" element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="judiciaryinfo" element={<JudiciaryInfo />} />
          <Route path="chiefjustice" element={<ChiefJustice />} />
          <Route path="formerjudges" element={<FormerJudges />} />
        </Route> 


        <Route path="registrar/*" element={<ProtectedRoute component={MainLayout} requiredRole="ROLE_REGISTRAR"/>}>
          <Route path="add-account" element={<AddAccount />} />
          <Route path="remove-account" element={<RemoveAccountForm />} />
          <Route path="create-court-case" element={<CreateCourtCase />} />
          <Route path="schedule-court-case" element={<ScheduleCourtCase />} />
          <Route path="pending-court-cases" element={<PendingCourtCases />} />
          <Route path="resolved-court-cases" element={<ResolvedCourtCases />} />
          <Route path="login-history" element={<LoginHistory />} />
          <Route path="case-history" element={<CaseAccessHistory />} />
          <Route index element={<AddAccount />} /> 
        </Route>


        <Route path="judge/*" element={<ProtectedRoute component={MainLayout} requiredRole="ROLE_JUDGE"/>}>
          <Route index element={<Judge />} /> 
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
