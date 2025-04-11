import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import LogisticsBanner from './components/LogisticsBanner';
import TrackingPage from './components/pages/TrackingPage';
import ShipmentTracking from './components/pages/ShipmentTracking';
import Location from './components/pages/Location';
import MaintenancePage from './components/pages/MaintenancePage'; // Add this import

function App() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isActive={isHeaderActive} />
              <Hero />
              <About />
              <Services />
              <Blog />
              <LogisticsBanner />
              <Footer />
            </>
          }
        />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/track/:consignmentNumber" element={<ShipmentTracking />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pickup-request" element={<MaintenancePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;