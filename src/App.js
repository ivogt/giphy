import React from "react";
import Routes, { routesConfig } from "./routes";
import Nav from "./components/Nav";
import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
