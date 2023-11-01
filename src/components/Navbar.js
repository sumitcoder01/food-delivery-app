import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand me-5" to="/">
          <span className="fw-bold fst-italic fs-3">FoodieDash</span>
        </NavLink>
        <NavLink className="nav-link" aria-current="page" to="/">
              Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/login">
              <button className="btn btn-outline-light px-3">Login</button>
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              <button className="btn btn-outline-light px-3">Signup</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

