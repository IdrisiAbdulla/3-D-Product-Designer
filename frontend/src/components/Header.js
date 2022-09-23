import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
   
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{backgroundImage: " radial-gradient(circle at 5.6% 54.5%, #fbfbfb 0%, rgb(24 39 51) 83.6%)"}}>
          {/* Container wrapper */}
          <div className="container-fluid ">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://imgs.search.brave.com/v2OerUiHDH81gXrnRzSV1jAERVE5GglrNlry46cN1-g/rs:fit:903:941:1/g:ce/aHR0cHM6Ly9hd3Mx/LmRpc2NvdXJzZS1j/ZG4uY29tL3NrZXRj/aHVwL29yaWdpbmFs/LzNYL2YvMi9mMmU3/ZDZhMzA2YzlhMWUw/NjRjYTA5NGY5MTZl/ZThhNjNkNWQ1YTM3/LmpwZWc"
                  height={45}
                  alt="MDB Logo"
                  loading="lazy"
                
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
           

          </div>
        </nav>
      </>
  
  );
};

export default Header;
