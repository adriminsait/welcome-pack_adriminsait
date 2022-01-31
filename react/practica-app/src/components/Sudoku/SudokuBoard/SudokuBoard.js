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
} from '../slice/sudokuSlice';
import SudokuBoardCell from './SudokuBoardCell/SudokuBoardCell';

import styles from './SudokuBoard.module.scss'

var sudoku = require('sudoku');

const SudokuBoard = () => {
    const isStarted = useSelector(selectIsStarted);
    const win = useSelector(selectWin);
    const lose = useSelector(selectLose);
    const board = useSelector(selectBoard);
    const solution = useSelector(selectSolution);
    const boardStyle = useSelector(selectBoardStyles);
    const solutionStyles = useSelector(selectSolutionStyles);
    const seeSolution = useSelector(selectSeeSolution);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsStarted(false));
        dispatch(setWin(false));
        dispatch(setLose(false));
        dispatch(setSeeSolution(false));
        dispatch(setSolution([]));
        dispatch(setBoard([]));
        dispatch(setBoardStyles([]));
    }, []);

    const setCell = (e) => {
        const index = e.target.name;
        const value = e.target.value;
        dispatch(setCellBoard({index, value}));
    }

    const createStyle = (myBoard, type) => {
        const styles = [];

        for(let i = 0; i < myBoard.length; i++){
            if(myBoard[i] === null){
                myBoard[i] = '';
                styles.push(<input type="text" name={i} value={board[i]} onChange={setCell} key={i} 
                    style={{border: 0, padding: "30%", width: "30%", margin: "0 0 0 0", fontSize: "calc(5px + 0.7vh + 0.7vw)"}}></input>);
            }
            else{
                styles.push(<p style={{padding: 0, width: "30%", margin: "0 0 0 0", padding:"20% 0 0 0", fontWeight: "bold", color: "rgb(90, 63, 146)"}}>{myBoard[i]}</p>);
            }
        }

        if(type == 'board'){
            dispatch(setBoard(myBoard));
            dispatch(setBoardStyles(styles));
        }
        else if(type == 'solution'){
            dispatch(setSolution(myBoard));
            dispatch(setSolutionStyles(styles));
        }
    }

    const startGame = () => {
        const genBoard = sudoku.makepuzzle();
        const genSolution = sudoku.solvepuzzle(genBoard);

        createStyle(genBoard, 'board');
        createStyle(genSolution, 'solution');

        dispatch(setIsStarted(true));
        dispatch(setWin(false));
        dispatch(setLose(false));
        dispatch(setSeeSolution(false));
    }

    const stopGame = () => {
        dispatch(setIsStarted(false));
        dispatch(setWin(false));
        dispatch(setLose(false));
        dispatch(setSeeSolution(false));
        dispatch(setSolution([]));
        dispatch(setBoard([]));
        dispatch(setBoardStyles([]));
    }

    const finishGame = (e) => {
        e.preventDefault();

        var ok = true;
        for(let i = 0; i < board.length && ok ; i++){
            //si hay una celda sin rellenar o no coincide con la de la solucion has perdido
            if(board[i] == '' || parseInt(board[i]) != solution[i]){ 
                dispatch(setLose(true));
                ok = false;
                console.log(i);
            }
        }

        dispatch(setWin(ok));
        console.log(board);
        console.log(solution);
    }

    const keepTrying = () => {
        dispatch(setLose(false));
    }

    const seeSol = () => {
        dispatch(setSeeSolution(true));
    }

    return (
      <div className={styles.main}>
        {!isStarted ? (
            <button className={styles.button} onClick={startGame}>
                Empezar a jugar
            </button>
        ) : (
            <>
            <div className={styles.info}>Rellena los huecos vacios con números del 0 al 9. <br></br>
                Cuando termines, puedes comprobar tu solución.
            </div>

            {win ? (
                <div className={styles.win}>
                    ¡CONSEGUIDO!
                </div>
            ) : (<></>)}
        
            {lose ? (
                <div className={styles.lose}>
                    Respuesta incorrecta <br></br>
                    ¿Qué prefieres?
                    <button className={styles.lose__button} onClick={keepTrying}>
                        Seguir intentando
                    </button>
                    <button className={styles.lose__button} onClick={seeSol}>
                        Ver solución
                    </button>
                </div>
            ) : (<></>)}

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
                <button type="submit" className={styles.board__finish}>
                    Comprobar
                </button>
            </form>

            {seeSolution ? (
                <></>
            ) : (<></>)}

            <button className={styles.button} onClick={stopGame}>
                Dejar de jugar
            </button>
            
            </>
        )}  

        

      </div>
    );
}

export default SudokuBoard;