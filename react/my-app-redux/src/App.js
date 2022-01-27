import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Counter } from './components/Counter';
import { Home } from './components/Home';

import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/counter" exact element={<Counter />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
