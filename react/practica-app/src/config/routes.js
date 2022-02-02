import React from 'react';

import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import TicTacToe from '../pages/TicTacToe/TicTacToe';
import HangMan from '../pages/HangMan/HangMan';
import Sudoku from '../pages/Sudoku/Sudoku';
import NoPage from '../pages/NoPage/NoPage';

export const routes = [
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "/tictactoe", element: <TicTacToe />},
    { path: "/hangman", element: <HangMan />},
    { path: "/sudoku", element: <Sudoku />},
    { path: "/*", element: <NoPage />},
];
