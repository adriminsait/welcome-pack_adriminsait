import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../../components/Header/Header'

import styles from './Home.module.scss';

export const Home = () => {

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.home}>
      <Header message={'¿Echamos una partidilla?'} />

      <Link to="/tictactoe" className={styles.button}>3 en raya</Link>
      <Link to="/hangman" className={styles.button}>Ahorcado</Link>
      <Link to="/sudoku" className={styles.button}>Sudoku</Link>
    </div>
  );
};