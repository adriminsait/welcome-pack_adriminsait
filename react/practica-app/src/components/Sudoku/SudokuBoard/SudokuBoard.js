import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsStarted, setWin, setBoard, setCellBoard, setSolution, setFreeCells, setStyles,
    selectIsStarted, selectWin, selectBoard, selectSolution, selectFreeCells, selectStyles } from '../slice/sudokuSlice';
import SudokuBoardCell from './SudokuBoardCell/SudokuBoardCell';

import styles from './SudokuBoard.module.scss'

var sudoku = require('sudoku');

const SudokuBoard = () => {
    const isStarted = useSelector(selectIsStarted);
    const win = useSelector(selectWin);
    const board = useSelector(selectBoard);
    const solution = useSelector(selectSolution);
    const freeCells = useSelector(selectFreeCells);
    const boardStyle = useSelector(selectStyles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsStarted(false));
        dispatch(setWin(false));
        dispatch(setSolution([]));
        dispatch(setBoard([]));
        dispatch(setFreeCells(null));
        dispatch(setStyles([]));
    }, []);

    const setCell = (e) => {
        const index = e.target.name;
        const value = e.target.value;
        dispatch(setCellBoard({index, value}));
    }

    const startGame = () => {
        const genBoard = sudoku.makepuzzle();
        const genSolution = sudoku.solvepuzzle(genBoard);
        const styles = [];
        let count = 0;
        for(let i = 0; i < genBoard.length; i++){
            if(genBoard[i] === null){
                genBoard[i] = '';
                count++;
                styles.push(<input type="text" name={i} value={board[i]} onChange={setCell} 
                    key={i} className="pepe" style={{border: 0, padding: "30%", width: "30%", margin: "0 0 0 0", fontSize: "calc(5px + 0.7vh + 0.7vw)"}}></input>);
            }
            else{
                styles.push(<p style={{padding: 0, width: "30%", margin: "0 0 0 0", padding:"20% 0 0 0", fontWeight: "bold", color: "rgb(90, 63, 146)"}}>{genBoard[i]}</p>);
            }
        }

        dispatch(setIsStarted(true));
        dispatch(setWin(false));
        dispatch(setSolution(genSolution));
        dispatch(setBoard(genBoard));
        dispatch(setFreeCells(count));
        dispatch(setStyles(styles));

    }

    const stopGame = () => {
        dispatch(setIsStarted(false));
        dispatch(setWin(false));
        dispatch(setSolution([]));
        dispatch(setBoard([]));
        dispatch(setFreeCells(null));
        dispatch(setStyles([]));
    }

    const finishGame = (e) => {
        e.preventDefault();
        console.log(board);
    }

    return (
      <div className={styles.main}>
        {!isStarted ? (
            <button 
                className={styles.button}
                onClick={startGame}
            >Empezar a jugar</button>
        ) : (
            <>
            <div className={styles.info}>Rellena los huecos vacios. <br></br>
                Cuando termines, puedes comprobar tu solución o rendirte y ver cual era la solución
            </div>
            <form className={styles.board} onSubmit={finishGame}>
                <div className={styles.board__row}>
                    <SudokuBoardCell data={{start: 0, end: 8}}/>
                    <SudokuBoardCell data={{start: 9, end: 17}}/>
                    <SudokuBoardCell data={{start: 18, end: 26}}/>
                </div>
                <div className={styles.board__row}>
                    <SudokuBoardCell data={{start: 27, end: 35}}/>
                    <SudokuBoardCell data={{start: 36, end: 44}}/>
                    <SudokuBoardCell data={{start: 45, end: 53}}/>
                </div>
                <div className={styles.board__row}>
                    <SudokuBoardCell data={{start: 54, end: 62}}/>
                    <SudokuBoardCell data={{start: 63, end: 71}}/>
                    <SudokuBoardCell data={{start: 72, end: 80}}/>
                </div>
                <div className={styles.board__buttonpad}>
                    <button type="submit" className={styles.board__butonpad__finish}>Comprobar</button>
                </div>
            </form>

            <button 
                className={styles.button}
                onClick={stopGame}
            >Dejar de jugar</button>

            
            </>
        )}  

        {win ? (
          <div className={styles.win}>
            ¡CONSEGUIDO!
          </div>
        ) : (<></>)}
        
        {!win && freeCells == 0 ? (
          <div className={styles.lose}>
            No te quedan intentos...
          </div>
        ) : (<></>)}

      </div>
    );
}

export default SudokuBoard;