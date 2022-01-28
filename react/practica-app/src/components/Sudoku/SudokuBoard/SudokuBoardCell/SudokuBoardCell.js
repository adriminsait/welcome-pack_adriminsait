import React, { useEffect, useState } from 'react';
import { useContext } from "react";

import { SudokuBoardContext } from "../SudokuBoard";

import styles from './SudokuBoardCell.module.scss'

const SudokuBoardCell = (params) => {
    const { sudokuBoard } = useContext(SudokuBoardContext);
    const { start, end } = params.params;
    const [cell, setCell] = useState([]);

    useEffect(() => {
        let splicedCell = [];
        for(let i = start; i <= end; i++){
            splicedCell.push(sudokuBoard[i]);
        }
        setCell(splicedCell);
        console.log(splicedCell);
    }, [])

    return (
        <div className={styles.board}>
           {/* {cell.map((elem, index) => (
              <button 
                  key={index}  
                  className={styles.alphabet__letter}
                //   onClick={(e) => sayLetter(elem)}
              >{elem}</button>
          ))}    */}
          
            
        </div>
    );
}

export default SudokuBoardCell;