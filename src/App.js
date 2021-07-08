import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./Styles/App.css";

// COMPONENTS

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
