import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


import Footer from "./Components/Footer.jsx";
import DashboardLayout from "./Components/DashboardLayout.jsx";
import TravDashboardLayout from "./Components/TravDashboardLayout.jsx";

// Public pages
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import Register from "./Pages/StudentDashboard/Register.jsx";
import Login from "./Pages/StudentDashboard/Login.jsx";
import TravLogin from "../src/Pages/TravlerDashboard/LoginPage.jsx";
import TravRegister from "../src/Pages/TravlerDashboard/TravRegister.jsx";

// Student Dashboard
import Overview from "./Pages/StudentDashboard/Overview.jsx";
import Explore from "./Pages/StudentDashboard/Explore.jsx";
import Saved from "./Pages/StudentDashboard/Saved.jsx";
import AskTravact from "./Pages/StudentDashboard/AskTravact.jsx";
import Settings from "./Pages/StudentDashboard/Settings.jsx";

// Traveler Dashboard (Lazy Loaded 🚀)
import TravOverview from "../src/Pages/TravlerDashboard/Overview.jsx";
import TravSettings from "../src/Pages/TravlerDashboard/TravSettings.jsx";

const TravExplore = lazy(() =>
  import("../src/Pages/TravlerDashboard/TravExplore.jsx")
);
const TravAsk = lazy(() =>
  import("../src/Pages/TravlerDashboard/TravAsk.jsx")
);
const TopPicks = lazy(() =>
  import("../src/Pages/TravlerDashboard/TopPicks.jsx")
);

import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/get-started" ||
    location.pathname === "/register" ||
    location.pathname === "/signup" ||
    location.pathname === "/TravLogin" ||
    location.pathname === "/login";

  return (
    <>
      <div className="mt-6">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    < >
      <Routes>
        {/* Public pages */}
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

        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/TravLogin" element={<TravLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TravRegister" element={<TravRegister />} />

        {/* Student Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="explore" element={<Explore />} />
          <Route path="saved" element={<Saved />} />
          <Route path="ask" element={<AskTravact />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Traveler Dashboard 🚀 */}
        <Route path="/traveler-dashboard" element={<TravDashboardLayout />}>
          <Route index element={<TravOverview />} />
          <Route path="Travoverview" element={<TravOverview />} />
          <Route path="TravSettings" element={<TravSettings />} />

          <Route
            path="TravExplore"
            element={
              <Suspense fallback={<div className="p-6">Loading Explore...</div>}>
                <TravExplore />
              </Suspense>
            }
          />

          <Route
            path="TravAsk"
            element={
              <Suspense fallback={<div className="p-6">Loading Ask...</div>}>
                <TravAsk />
              </Suspense>
            }
          />

          <Route
            path="TopPicks"
            element={
              <Suspense fallback={<div className="p-6">Loading Top Picks...</div>}>
                <TopPicks />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="light"
/>
</>
    
  );
};

export default App;
