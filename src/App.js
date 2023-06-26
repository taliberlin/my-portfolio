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
      <div className="container-fluid">
        <header className="App-header">
          <NavBar />
        </header>
        <Home />
        <About />
        <Projects />
        <footer>
          <Contact />
          <div className="text-center coded-by">
            🤘🏼 This website was coded by Tali Berlin and is {""}
            <a
              href="https://github.com/taliberlin/my-portfolio"
              target="_blank"
              rel="noreferrer"
              title="View source-code on GitHub"
            >
              open-sourced
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
