import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Nav from "./components/Nav";
import "./styles/App.scss";
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
