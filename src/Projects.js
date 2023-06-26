import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <h3>Projects</h3>
      <div className="d-flex flex-column">
        <div className="p-1 text-center">
          <img
            src={require("./weather-app.png")}
            alt="Weather app"
            className="img-fluid"
            width={500}
          />
          <p>HTML, CSS, JavaScript, React.js</p>
          <p>
            Open app in{" "}
            <a
              href="https://meek-cannoli-bc5bd6.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              new window
            </a>
          </p>
        </div>
        <div className="p-1 text-center">
          <img
            src={require("./weather-app.png")}
            alt="Weather app"
            className="img-fluid"
            width={500}
          />
          <p>HTML, CSS, JavaScript, React.js</p>
          <p>
            Open app in{" "}
            <a href="https://meek-cannoli-bc5bd6.netlify.app/" target="_blank">
              new window
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
