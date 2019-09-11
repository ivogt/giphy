import React from 'react';
import Routes, { routesConfig } from './routes';
import Nav from './components/Nav';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
