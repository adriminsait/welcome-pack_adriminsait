import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../../components/Header/Header'

import styles from './Login.module.scss';

export const Login = () => {

  const {loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    <div className={styles.home}>
        <Header message={'Por favor, inicia sesión'} />

        {!isAuthenticated ? (
          <button 
          className={styles.login}
            onClick={() => loginWithRedirect()}
          >Login
          </button>
        ) : (
          <>
          <Navigate to="/home" />
          </>
        )}
    </div>
  );
};