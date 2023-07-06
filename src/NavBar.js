import React from "react";
import "./NavBar.css";

export default function NavBar() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="NavBar" id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-brand"
            onClick={() => scrollToSection("navbar")}
          >
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
              <button
                className="nav-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
