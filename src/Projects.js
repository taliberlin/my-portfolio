import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <div className="row mt-3">
        <div className="col-3">
          <h3>Projects</h3>
        </div>
        <div className="col-9">
          <div className="d-flex flex-column">
            <div className="p-1 img-description">
              <img
                src={require("./weather-app.png")}
                alt="Weather app"
                className="img-fluid"
                width={500}
              />
              <p>HTML, CSS, JavaScript, React.js</p>
              <p className="view-project">
                View app in{" "}
                <a
                  href="https://meek-cannoli-bc5bd6.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  new window
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
