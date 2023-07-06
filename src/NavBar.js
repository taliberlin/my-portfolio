import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-brand" href="#">
            Tali Berlin
          </button>
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
            <div className="navbar-nav d-flex">
              <button className="nav-link" href="#">
                Home
              </button>
              <button className="nav-link" href="#about">
                About
              </button>
              <button className="nav-link" href="#projects">
                Projects
              </button>
              <button className="nav-link" href="#contact">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
