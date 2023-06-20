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
      </footer>
    </div>
  );
}

export default App;
