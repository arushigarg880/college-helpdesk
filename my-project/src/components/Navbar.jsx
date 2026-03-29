import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header>
      <div className="container nav">
        <div className="logo">
          Chandigarh<span>University</span>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/contact">Contact</NavLink>

         
          <div className="bell-container">
            <div
              className="bell-icon"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              🔔
            </div>

            {showNotifications && (
              <div className="notification-popup">
                <div className="notification-content">
                  <p className="notif-title">CUCET 2026</p>
                  <p className="notif-text">
                    ₹200 Crore in Scholarships Await!
                  </p>
                  <p className="notif-link">APPLY NOW !</p>
                </div>

                
                <div className="popup-arrow"></div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;