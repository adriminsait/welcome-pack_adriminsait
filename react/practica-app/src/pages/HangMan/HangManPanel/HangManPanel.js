import React, { useEffect, useState } from 'react';
import { useContext } from "react";

import { HangManContext } from "../HangMan";

import styles from './HangManPanel.module.scss'

const HangManPanel = () => {
    const { word, successLetters, saidLetters } = useContext(HangManContext);
    const [unknown, setUnknown] = useState('');

    useEffect(() => {
        let str = '';
        for(let i = 0; i < word.length; i++){
            if(successLetters.includes(word[i])){
                str += `${word[i]} `;
            }
            else{
                str += '_ ';
            }
        }
        setUnknown(str);
    }, [])

    useEffect(() => {
        let str = '';
        for(let i = 0; i < word.length; i++){
            if(successLetters.includes(word[i])){
                str += `${word[i]} `;
            }
            else{
                str += '_ ';
            }
        }
        setUnknown(str);
    }, [successLetters])

    return (
        <>
        <div className={styles.clue}>
            Pista: <strong className={styles.unknown}>{unknown}</strong>
        </div>
        <div className={styles.list}>
            Letras erróneas:
            <ul className={styles.list__letters}>{saidLetters.map((elem) => (
                <li
                    key={elem}  
                    className={styles.list__letters__letter}
                >{elem.toUpperCase()}</li>
            ))}</ul>
        </div>
        <div className={styles.list}>
            Letras acercatadas:
            <ul className={styles.list__letters}>{successLetters.map((elem) => (
                <li
                    key={elem}  
                    className={styles.list__letters__letter}
                >{elem.toUpperCase()}</li>
            ))}</ul>
        </div>
        </>

    );
}

export default HangManPanel;