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
import MainLayout from './Components/MainLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import AddAccount from './Components/Registrar/AddAccount';
import RemoveAccountForm from './Components/Registrar/RemoveAccount';
import CreateCourtCase from './Components/Registrar/AddCourtCase';
import ScheduleCourtCase from './Components/Registrar/ScheduleCase';
import PendingCourtCases from './Components/Registrar/PendingCases';
import ResolvedCourtCases from './Components/Registrar/ResolvedCases';
import LoginHistory from './Components/Registrar/LoginHistory';
import CaseAccessHistory from './Components/Registrar/CaseAccessHistory';
import CaseId from './Components/LawyerJudge/CaseId';
import CourtName from './Components/LawyerJudge/CourtName';
import ArrestingOfficer from './Components/LawyerJudge/ArrestingOfficer';
import AccusedName from './Components/LawyerJudge/AccusedName';
import CaseType from './Components/LawyerJudge/CaseType';
import HearingDate from './Components/LawyerJudge/HearingDate';
import JudgeName from './Components/LawyerJudge/JudgeName';
import KeywordSearch from './Components/LawyerJudge/KeywordSearch';
import LawyerName from './Components/LawyerJudge/LawyerName';
import PublicProsecutor from './Components/LawyerJudge/PublicProsecutor';
import CaseDetails from './Components/LawyerJudge/CaseDetails';
import UserProfile from './Components/UserProfile';
import Payment from './Components/LawyerJudge/Payment';


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
          <Route path="user-profile" element={<UserProfile />} />
          <Route index element={<AddAccount />} /> 
        </Route>


        <Route path="judge/*" element={<ProtectedRoute component={MainLayout} requiredRole="ROLE_JUDGE"/>}>
          <Route path="case-id" element={<CaseId />} />
          <Route path="court-name" element={<CourtName />} />
          <Route path="arresting-officer" element={<ArrestingOfficer />} />
          <Route path="accused-name" element={<AccusedName />} />
          <Route path="case-type" element={<CaseType />} />
          <Route path="court-name" element={<CourtName />} />
          <Route path="hearing-date" element={<HearingDate />} />
          <Route path="judge-name" element={<JudgeName />} />
          <Route path="keyword-search" element={<KeywordSearch />} />
          <Route path="lawyer-name" element={<LawyerName />} />
          <Route path="public-prosecutor" element={<PublicProsecutor />} />
          <Route path="case-details/:caseId" element={<CaseDetails />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route index element={<Judge />} /> 
        </Route>
        
        <Route path="lawyer/*" element={<ProtectedRoute component={MainLayout} requiredRole="ROLE_LAWYER"/>}>
          <Route path="case-id" element={<CaseId />} />
          <Route path="court-name" element={<CourtName />} />
          <Route path="arresting-officer" element={<ArrestingOfficer />} />
          <Route path="accused-name" element={<AccusedName />} />
          <Route path="case-type" element={<CaseType />} />
          <Route path="court-name" element={<CourtName />} />
          <Route path="hearing-date" element={<HearingDate />} />
          <Route path="judge-name" element={<JudgeName />} />
          <Route path="keyword-search" element={<KeywordSearch />} />
          <Route path="lawyer-name" element={<LawyerName />} />
          <Route path="public-prosecutor" element={<PublicProsecutor />} />
          <Route path="case-details/:caseId" element={<CaseDetails />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="payments/:cin" element={<Payment />} />
          <Route index element={<UserProfile />} />  
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
