import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsStarted, setWin, setBoard, setCellBoard, setSolution, setFreeCells, setStyles,
    selectIsStarted, selectWin, selectBoard, selectSolution, selectFreeCells, selectStyles } from '../../slice/sudokuSlice';

import styles from './SudokuBoardCell.module.scss'

const SudokuBoardCell = (data) => {
    const {start, end} = data.data;

    const boardStyle = useSelector(selectStyles);
    const board = useSelector(selectBoard);

    const [breaks, setBreaks] = useState([]);
    const [squareStyle, setSquareStyle] = useState([]);

    useEffect(() => {
        //por ejemplo, primer cuadrado: 0-8. Breaks son el 2 y el 5 (cambios de fila)
        //por ejemplo, segundo cuadrado: 9-17 . Breaks son el 11 y el 14 (cambios de fila)
        setBreaks([start + 2, end - 3]);
        // createSquare();
    }, [])

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
                <div className={styles.square__row__cell}>{boardStyle[start]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 1]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 2]}</div>
            </div>
            <div className={styles.square__row}>
                <div className={styles.square__row__cell}>{boardStyle[start + 3]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 4]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 5]}</div>
            </div>
            <div className={styles.square__row}>
                <div className={styles.square__row__cell}>{boardStyle[start + 6]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 7]}</div>
                <div className={styles.square__row__cell}>{boardStyle[start + 8]}</div>
            </div>
            
        </div>
    );
}

export default SudokuBoardCell;