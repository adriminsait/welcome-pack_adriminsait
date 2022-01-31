import React from 'react';
import { Provider } from 'react-redux';
import sudokuStore from './app/sudokuStore';

import styles from './Sudoku.module.scss';
import SudokuBoard from './SudokuBoard/SudokuBoard';


const Sudoku = () => {

//   useEffect(() => {
//     setIsStarted(false);
//     setWin(false);
//   }, []);

//   const setCell = (position) => {
//       console.log(position);
//   }

//   const startGame = () => {
//     const board = sudoku.makepuzzle()
//     for(let i = 0; i < board.length; i++){
//         if(board[i] === null){
//             board[i] = '';
//         }
//     }
//     setSudokuBoard(board);
//     setWin(false);
//     setIsStarted(true);
//     setSudokuSolution(sudoku.solvepuzzle(sudokuBoard));
//   }

//   const stopGame = () => {
//     setIsStarted(false);
//   }

  return (
    <div className={styles.home}>
      <div className={styles.title}>Sudoku</div>
      <React.StrictMode>
        <Provider store={sudokuStore}>
            <SudokuBoard />
        </Provider>
      </React.StrictMode>
    </div>
  );
};

export default Sudoku;