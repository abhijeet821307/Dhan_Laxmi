import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MaintenancePage.css';

const MaintenancePage = () => {
  const navigate = useNavigate();

  return (
    <div>
     
      <nav className="navbar-track">
        <div className="logo-track">DHAN LAXMI LOGISTICS</div>
        <button className="home-button-track" onClick={() => navigate("/")}>Home</button>
      </nav>

      <div className="maintenance-container">
        <div className="maintenance-content">
          <div className="maintenance-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h1>Under Maintenance</h1>
          <p>We're currently working on improving our website. Please check back later.</p>
          <p>We apologize for any inconvenience and appreciate your patience.</p>
          <div className="maintenance-contact">
            <p>If you need immediate assistance, please contact us at:</p>
            <a href="mailto:support@example.com">support@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;