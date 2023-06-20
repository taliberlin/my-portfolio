import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <img
        src={require("./profilePic.png")}
        width="200"
        alt="Tali Berlin smiling"
        className="img-fluid rounded-circle"
      />
      <h1>Hello! I'm Tali Berlin</h1>
      <h2>Front-end web developer based in Vancouver, BC</h2>
    </div>
  );
}
