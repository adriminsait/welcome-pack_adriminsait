import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

export const Home = () => {

  return (
    <div className={styles.home}>
        <div className={styles.title}>¿Echamos una partidilla?</div>
        <Link to="/tictactoe" className={styles.button}>3 en raya</Link>
        <Link to="/hangman" className={styles.button}>Ahorcado</Link>
        <Link to="/sudoku" className={styles.button}>Sudoku</Link>
    </div>
  );
};