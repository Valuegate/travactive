import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import "./index.css";


const App = () => {
  return (
    <Router>
      {/* Navbar appears on all pages */}
       {/* <Navbar />  */}

      {/* Page content changes based on route */}
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
<Route path="/get-started" element={<GetStarted />} />

        </Routes>
      </div>
      {/* Footer appears on all pages */}
       <Footer /> 
    </Router>
    
  );
};

export default App;
