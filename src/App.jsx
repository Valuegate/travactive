import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <HeroSection />
          }
        />
        {/* Add other routes as needed */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;