import React, { Component } from 'react';

import './RegisterForm.css'

import { register } from '../api/auth';

class RegisterForm extends Component {
  state = {
    form: {  
        username: '',
        email: '',
        password: '',
    },
    error: null,
  };

  handleChangeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    this.setState((prevState) => ({ 
        form: {
            ...prevState.form,
            [inputName]: inputValue,
        }
    }));
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envíamos como argumento el estado actual del formulario
      const data = await register(this.state.form);
      // Por ahora dejaremos un log y más tarde añadiremos más lógica
      console.log('¡Registro completado!', data);
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="username">
          <p>Nombre de usuario</p>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChangeInput}
          />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeInput}
          />
        </label>

        <label htmlFor="password">
          <p>Contraseña</p>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangeInput}
          />

          <p>
            Al menos 8 carácteres, mayúsculas, minúsculas y números. Sin
            carácteres especiales.
          </p>
        </label>

        {this.state.error ? (
          <p style={{ color: 'red' }}>{this.state.error}</p>
        ) : null}

        <button type="submit">Registrar mi cuenta</button>
        
      </form>
    );
  }
}

export default RegisterForm;