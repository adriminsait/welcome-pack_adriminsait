import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from "./config/routes.js";

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;