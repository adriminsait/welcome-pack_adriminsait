import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import{ selectBoardStyles, selectSolutionStyles } from '../../../slice/sudokuSlice';

import styles from './SudokuBoardSquare.module.scss'

const SudokuBoardCell = (data) => {
    const {start, type} = data.data;

    const [myBoard, setMyBoard] = useState([]);

    const board = useSelector(selectBoardStyles);
    const solution = useSelector(selectSolutionStyles);

    useEffect(() => {
        if(type === 'board'){
            setMyBoard(board);
        }else{
            setMyBoard(solution);
        }
    }, []);

    return (
        <div className={styles.square}>
            <div className={styles.square__row}>
                <div className={styles.square__row__cell}>{myBoard[start]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 1]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 2]}</div>
            </div>
            <div className={styles.square__row}>
                <div className={styles.square__row__cell}>{myBoard[start + 3]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 4]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 5]}</div>
            </div>
            <div className={styles.square__row}>
                <div className={styles.square__row__cell}>{myBoard[start + 6]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 7]}</div>
                <div className={styles.square__row__cell}>{myBoard[start + 8]}</div>
            </div>
            
        </div>
    );
}

export default SudokuBoardCell;