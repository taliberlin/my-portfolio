import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Home />
      <About />
      <Projects />
      <footer>
        <Contact />
        <div className="text-center">
          🤘🏼 This website was coded by Tali Berlin and is {""}
          <a
            href="https://github.com/taliberlin/my-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
