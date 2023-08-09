import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <div className="mt-3">
        <h3>Projects</h3>
        <div>
          <div className="d-sm-flex justify-content-center">
            <div className="p-1 img-description">
              <img
                src={require("./weather-app.png")}
                alt="Weather App"
                className="img-fluid"
                width={400}
              />
              <p>Bootstrap, JavaScript, React, AJAX</p>
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
              <p className="view-project">
                <a
                  href="https://github.com/taliberlin/weather-app-two"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source-code:
                </a>{" "}
                Weather App
              </p>
            </div>
            <div className="dictionary p-1 img-description">
              <img
                src={require("./dictionary.png")}
                alt="Dictionary"
                className="img-fluid"
                width={217}
              />
              <p>Bootstrap, JavaScript, React, AJAX</p>
              <p className="view-project">
                View app in{" "}
                <a
                  href="https://loquacious-lamington-bcab0d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  new window
                </a>
              </p>
              <p className="view-project">
                <a
                  href="https://github.com/taliberlin/dictionary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source-code:
                </a>{" "}
                Dictionary
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
