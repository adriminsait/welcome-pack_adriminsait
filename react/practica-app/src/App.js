import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Counter } from './components/Counter/Counter';
import { Home } from './components/Home/Home';

import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tictactoe" exact element={<TicTacToe />} />
          <Route path="/counter" exact element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;