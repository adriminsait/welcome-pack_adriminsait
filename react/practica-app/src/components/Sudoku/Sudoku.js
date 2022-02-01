import React from 'react';
import { Provider } from 'react-redux';

import SudokuPanel from './SudokuPanel/SudokuPanel';
import sudokuStore from './app/sudokuStore';

import styles from './Sudoku.module.scss';

const Sudoku = () => {

  return (
    <div className={styles.home}>
      <div className={styles.title}>Sudoku</div>
      <React.StrictMode>
        <Provider store={sudokuStore}>
            <SudokuPanel />
        </Provider>
      </React.StrictMode>
    </div>
  );
};

export default Sudoku;