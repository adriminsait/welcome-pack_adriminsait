import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { logout } from '../api/auth';

export default class Secret extends Component {
  handleOnClickLogout = async () => {
    await logout();
    this.props.handleLogout();
  };

  render() {
    return (
      <div>
        <h1>Esto es una ruta secreta</h1>
        <button onClick={this.handleOnClickLogout}>Cerrar sesión</button>
      </div>
    );
  }
}

Secret.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};