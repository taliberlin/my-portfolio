import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home" id="home">
      <div className="row">
        <div className="col-sm-8 intro">
          <h1>Hey, I'm Tali Berlin!</h1>
          <h2>Junior front-end web developer based in Vancouver, BC</h2>
        </div>
        <div className="col-sm-4">
          <img
            src={require("./profilePic.png")}
            width="350"
            alt="Tali Berlin smiling"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
}
