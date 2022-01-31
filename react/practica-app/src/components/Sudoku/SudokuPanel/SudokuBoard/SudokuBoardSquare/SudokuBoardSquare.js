import React, { useEffect, useState, useContext } from 'react';
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
} from '../../../slice/sudokuSlice';

import styles from './SudokuBoardSquare.module.scss'

const SudokuBoardCell = (data) => {
    const {start, end, type} = data.data;

    const [myBoard, setMyBoard] = useState([]);

    const board = useSelector(selectBoardStyles);
    const solution = useSelector(selectSolutionStyles);

    const [squareStyle, setSquareStyle] = useState([]);

    useEffect(() => {
        if(type == 'board'){
            setMyBoard(board);
        }else{
            setMyBoard(solution);
        }
    }, []);

    // const createSquare = () => {
    //     const rows = [];

    //     for(let i = 0; i < breaks.length; i++){
    //         console.log(boardStyle[start + i]);
    //         rows[i] = boardStyle[start + 3*i] + boardStyle[start + 3*i + 1] + boardStyle[start + 3*i + 2];
    //     }

    //     setSquareStyle(rows);
    // }

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