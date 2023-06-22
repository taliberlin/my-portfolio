import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <div className="d-flex justify-content-evenly">
        <div className="p-1">
          <img
            src={require("./weather-app.png")}
            alt="Weather app"
            className="img-fluid"
            width={300}
          />
          <p className="text-center">HTML, CSS, JavaScript, React.js</p>
          <p className="text-center">
            Open app in{" "}
            <a href="https://meek-cannoli-bc5bd6.netlify.app/">new window</a>
          </p>
        </div>
        <div className="p-1">
          <img
            src={require("./weather-app.png")}
            alt="Weather app"
            className="img-fluid"
            width={300}
          />
          <p className="text-center">HTML, CSS, JavaScript, React.js</p>
          <p className="text-center">
            Open app in{" "}
            <a href="https://meek-cannoli-bc5bd6.netlify.app/">new window</a>
          </p>
        </div>
        <div className="p-1">
          <img
            src={require("./weather-app.png")}
            alt="Weather app"
            className="img-fluid"
            width={300}
          />
          <p className="text-center">HTML, CSS, JavaScript, React.js</p>
          <p className="text-center">
            Open app in{" "}
            <a href="https://meek-cannoli-bc5bd6.netlify.app/">new window</a>
          </p>
        </div>
      </div>
    </div>
  );
}
