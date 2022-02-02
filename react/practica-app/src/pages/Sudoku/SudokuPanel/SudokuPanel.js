import React, { useEffect } from 'react';
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
        selectSeeSolution 
} from '../slice/sudokuSlice';
import SudokuBoard from './SudokuBoard/SudokuBoard';

import styles from './SudokuPanel.module.scss'

var sudoku = require('sudoku');

const SudokuPanel = () => {
    const isStarted = useSelector(selectIsStarted);
    const win = useSelector(selectWin);
    const lose = useSelector(selectLose);
    const board = useSelector(selectBoard);
    const solution = useSelector(selectSolution);
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
                styles.push(<p style={{width: "30%", margin: "0 0 0 0", padding:"20% 0 0 0", fontWeight: "bold", color: "rgb(90, 63, 146)"}}>
                    {myBoard[i]}</p>);
            }
        }

        if(type === 'board'){
            dispatch(setBoard(myBoard));
            dispatch(setBoardStyles(styles));
        }
        else if(type === 'solution'){
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
            if(board[i] === ''){ 
                dispatch(setLose(true));
                ok = false;
            }
            else if(parseInt(board[i]) !== solution[i]){
                dispatch(setLose(true));
                ok = false;
            }
        }
        dispatch(setWin(ok));
        console.log(solution);
    }

    const keepTrying = () => {
        dispatch(setLose(false));
    }

    const seeSol = () => {
        dispatch(setSeeSolution(true));
        dispatch(setLose(false));
    }

    return (
      <div className={styles.main}>
        {!isStarted ? (
            <button className={styles.button} onClick={startGame}>
                Empezar a jugar
            </button>
        ) : (
            <>
            <div className={styles.info}>
                Rellena los huecos vacios con números del 0 al 9. <br></br>
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

            {seeSolution ? (
                <>
                <div className={styles.info}>
                    <strong>Solución:</strong>
                </div>
                <SudokuBoard type={"solution"}/>
                </>
            ) : (
                <form className={styles.board} onSubmit={finishGame}>
                    <SudokuBoard type={"board"}/>
                    <button type="submit" className={styles.board__finish} disabled={lose || win}>
                        Comprobar
                    </button>
                </form>
            )}

            <button className={styles.button} onClick={stopGame}>
                Dejar de jugar
            </button>
            
            </>
        )}  

      </div>
    );
}

export default SudokuPanel;