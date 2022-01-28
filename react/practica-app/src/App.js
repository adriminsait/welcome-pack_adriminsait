import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';

import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';
import HangMan from './components/HangMan/HangMan';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tictactoe" exact element={<TicTacToe />} />
          <Route path="/hangman" exact element={<HangMan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;