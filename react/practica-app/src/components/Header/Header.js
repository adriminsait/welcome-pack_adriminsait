import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

import styles from './Header.module.scss';

const Home = (message) => {

  const {loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className={styles.home}>
        <div className={styles.title}>{message.message}</div>
        {isAuthenticated ? (
            <button 
                className={styles.logout}
                onClick={() => logout({returnTo: window.location.origin})}
            >Logout
            </button>
        ) : (
            <></>
        )}
        
    </div>
  );
};

export default Home;