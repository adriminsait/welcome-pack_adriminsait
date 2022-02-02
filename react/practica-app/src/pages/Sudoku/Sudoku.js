import React from 'react';
import { Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../../components/Header/Header'
import SudokuPanel from './SudokuPanel/SudokuPanel';
import sudokuStore from './app/sudokuStore';

import styles from './Sudoku.module.scss';

const Sudoku = () => {

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.home}>
      <Header message={'Sudoku'} />
      <React.StrictMode>
        <Provider store={sudokuStore}>
            <SudokuPanel />
        </Provider>
      </React.StrictMode>
    </div>
  );
};

export default Sudoku;