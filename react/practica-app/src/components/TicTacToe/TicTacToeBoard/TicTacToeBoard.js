import React, { useEffect } from 'react';
import { useContext } from "react";

import { TicTacToeContext } from "../TicTacToe";

import styles from './TicTacToeBoard.module.scss'


const TicTacToeBoard = () => {
    const { state, setCell } = useContext(TicTacToeContext);

    return (
        <div>
            <div className={styles.turn}>
                Es el turno de <strong>{state.turn}</strong>
            </div>
            <div className={styles.board}>
                
                <div className={styles.row}>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(0)}
                    >{state.board[0]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(1)}
                    >{state.board[1]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(2)}
                    >{state.board[2]}</button>
                </div>

                <div className={styles.row}>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(3)}
                    >{state.board[3]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(4)}
                    >{state.board[4]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(5)}
                    >{state.board[5]}</button>
                </div>

                <div className={styles.row}>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(6)}
                    >{state.board[6]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(7)}
                    >{state.board[7]}</button>
                    <button 
                        className={styles.button}
                        onClick={(e) => setCell(8)}
                    >{state.board[8]}</button>
                </div>
                
            </div>
        </div>
    );
}

export default TicTacToeBoard;