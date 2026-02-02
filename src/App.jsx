import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";
import PasswordReset from './Pages/PasswordReset';
import PasswordChangedSuccess from './Pages/PasswordChangedSuccess';
import Overview from "./Pages/Overview.jsx";
import Explore from "./Pages/Explore.jsx";
import TopPicks from "./Pages/TopPicks.jsx";
import "./index.css";

/* ===================== SHARED LAYOUT ===================== */
const Layout = ({ children, hideFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="flex-grow mt-6">
        {children}
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

/* ===================== MAIN APP COMPONENT ===================== */
const App = () => {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES WITH FOOTER */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* EXPLORE DASHBOARD - FOOTER REMOVED HERE */}
        <Route 
          path="/explore" 
          element={
            <Layout hideFooter={true}>
              <Explore />
            </Layout>
          } 
        />
        
        {/* AUTH & ONBOARDING ROUTES - FOOTER REMOVED */}
        <Route 
          path="/get-started" 
          element={
            <Layout hideFooter={true}>
              <GetStarted />
            </Layout>
          } 
        />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ResetPasswordPage />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-success" element={<PasswordChangedSuccess />} />
        
        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/top-picks" element={<TopPicks />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />
        
        {/* 404 CATCH-ALL */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<TopPicks />} />
      </Routes>
    </Router>
  );
};

export default App;

