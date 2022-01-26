import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

class SecureRoute extends React.Component {
  render() {
    const { hasUser, ...restProps } = this.props;

    return hasUser ? <Route {...restProps} /> : <Navigate to="/" />;
  }
}

SecureRoute.propTypes = {
  hasUser: PropTypes.bool.isRequired,
};

export default SecureRoute;