import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Components/LoginForm';
import Judge from './Components/Judge';
import Register from './Components/Registrar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import AboutUs from './Components/AboutUs';
import JudiciaryInfo from './Components/JudiciaryInfo';
import ChiefJustice from './Components/ChiefJustice';
import FormerJudges from './Components/FormerJudges';

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
          
          <Route path="judge" element={<Judge />} />
          <Route path="registrar" element={<Register />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="judiciaryinfo" element={<JudiciaryInfo />} />
          <Route path="chiefjustice" element={<ChiefJustice />} />
          <Route path="formerjudges" element={<FormerJudges />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
