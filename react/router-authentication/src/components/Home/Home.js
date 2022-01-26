import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>¡Bienvenid@ a nuestra webapp en React!</h1>

        <div>
          <Link to="/login">Quiero iniciar sesión</Link>
        </div>
        
        <div>
          <Link to="/register">Quiero registrarme</Link>
        </div>

        <div>
          <Link to="/secret">Ruta secreta</Link>
        </div>
      </div>
    );
  }
}