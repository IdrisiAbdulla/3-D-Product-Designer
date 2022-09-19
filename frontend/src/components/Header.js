import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
   
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light b">
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
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height={15}
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
            {/* Right elements */}
            <div className="d-flex align-items-center">
              {loggedin ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => {
                    setLoggedin(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-link"
                  onClick={(e) => {
                    setLoggedin(true);
                  }}
                >
                  Login
                </button>
              )}
              </div>
          </div>
        </nav>
      </>
  
  );
};

export default Header;
