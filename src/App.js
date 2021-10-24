import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Main />
      </div>
    </Router>
  );
};

export default App;
