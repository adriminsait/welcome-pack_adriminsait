import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, setIsStarted, selectBoard, selectIsStarted } from '../slice/sudokuSlice';

import styles from './SudokuBoard.module.scss'

const SudokuBoard = () => {
    const [started, setStarted] = useState(true);
    const isStarted = useSelector(selectIsStarted);
    const sudokuBoard = useSelector(selectBoard);
    const dispatch = useDispatch();

    console.log(sudokuBoard);

    return (
        

        <button
            className={styles.button}
            onClick={() =>
            dispatch(setIsStarted(Boolean(started) || false))
            } >
            {isStarted}
        </button>
      

        // {/* {!isStarted ? (
        //     <button 
        //         className={styles.button}
        //         onClick={startGame}
        //     >Empezar a jugar</button>
        // ) : (
        //     <>
        //     <button 
        //         className={styles.button}
        //         onClick={stopGame}
        //     >Dejar de jugar</button>

            
        //     </>
        // )}  

        // {win ? (
        //   <div className={styles.win}>
        //     ¡CONSEGUIDO!
        //   </div>
        // ) : (<></>)} */}
        
        // {/* {!win ? (
        //   <div className={styles.lose}>
        //     No te quedan intentos...
        //   </div>
        // ) : (<></>)} */}
    );
}

export default SudokuBoard;