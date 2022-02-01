import React from 'react';

import SudokuBoardSquare from './SudokuBoardSquare/SudokuBoardSquare';

import styles from './SudokuBoard.module.scss'

const SudokuBoard = (type) => {

    return (
        <>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 0, type: type.type}}/>
            <SudokuBoardSquare data={{start: 9, type: type.type}}/>
            <SudokuBoardSquare data={{start: 18, type: type.type}}/>
        </div>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 27, type: type.type}}/>
            <SudokuBoardSquare data={{start: 36, type: type.type}}/>
            <SudokuBoardSquare data={{start: 45, type: type.type}}/>
        </div>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 54, type: type.type}}/>
            <SudokuBoardSquare data={{start: 63, type: type.type}}/>
            <SudokuBoardSquare data={{start: 72, type: type.type}}/>
        </div>
        </> 
    );
}

export default SudokuBoard;