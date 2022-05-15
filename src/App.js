import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { contracts } from './components/contracts';
import { Game } from './components/game';

function App() {
  contracts();
  return (
    <div className="App">
      <Navbar />
      <Game />
    </div>
  );
}

export default App;
