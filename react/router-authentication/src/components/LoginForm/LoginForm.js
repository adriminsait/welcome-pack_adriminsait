import React, { Component } from 'react';

import './LoginForm.css'
import { login } from '../api/auth';

class LoginForm extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
    error: null,
  };

  handleChangeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    // Necesitamos mantener la información previa en el formulario al tener una clave de profundidad.
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [inputName]: inputValue,
      },
    }));
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envíamos como argumento el estado actual del formulario
      const data = await login(this.state.form);
      console.log('Fulfilled!', data);
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
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

export default LoginForm;