import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/* Navbar (optional) */}
      {/* <Navbar /> */}

      <div className="mt-6">{children}</div>

      {/* Hide footer on Get Started page */}
      {location.pathname !== "/get-started" && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/reset-success" element={<PasswordChangedSuccess />} />
        <Route path="/forgot-password" element={<ResetPasswordPage />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
