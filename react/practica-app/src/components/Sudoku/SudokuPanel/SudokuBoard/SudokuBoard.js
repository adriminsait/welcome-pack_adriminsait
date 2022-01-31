import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import{ setIsStarted, 
        setWin, 
        setLose, 
        setBoard, 
        setCellBoard, 
        setSolution, 
        setBoardStyles, 
        setSolutionStyles,
        setSeeSolution,

        selectIsStarted, 
        selectWin, 
        selectLose, 
        selectBoard, 
        selectSolution, 
        selectBoardStyles,
        selectSolutionStyles,
        selectSeeSolution 
} from '../../slice/sudokuSlice';
import SudokuBoardSquare from './SudokuBoardSquare/SudokuBoardSquare';

import styles from './SudokuBoard.module.scss'

var sudoku = require('sudoku');

const SudokuBoard = (type) => {

    return (
        <>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 0, end: 8, type: type.type}}/>
            <SudokuBoardSquare data={{start: 9, end: 17, type: type.type}}/>
            <SudokuBoardSquare data={{start: 18, end: 26, type: type.type}}/>
        </div>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 27, end: 35, type: type.type}}/>
            <SudokuBoardSquare data={{start: 36, end: 44, type: type.type}}/>
            <SudokuBoardSquare data={{start: 45, end: 53, type: type.type}}/>
        </div>
        <div className={styles.board__row}>
            <SudokuBoardSquare data={{start: 54, end: 62, type: type.type}}/>
            <SudokuBoardSquare data={{start: 63, end: 71, type: type.type}}/>
            <SudokuBoardSquare data={{start: 72, end: 80, type: type.type}}/>
        </div>
        </> 
    );
}

export default SudokuBoard;