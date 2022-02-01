import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import TicTacToe from '../pages/TicTacToe/TicTacToe';
import HangMan from '../pages/HangMan/HangMan';
import Sudoku from '../pages/Sudoku/Sudoku';
import NoPage from '../pages/NoPage/NoPage';

/*
    QUEDA:
    - Diferenciar las rutas publicas y privadas
    - Proteger las rutas publicas desde app directamente y no una por una en sus componentes
    - Pretty code
*/

const routes = [
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "/tictactoe", element: <TicTacToe />},
    { path: "/hangman", element: <HangMan />},
    { path: "/sudoku", element: <Sudoku />},
    { path: "/*", element: <NoPage />},
];

export default routes;