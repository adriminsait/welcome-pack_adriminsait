import React, { useEffect, useState } from 'react';

import styles from './HangManAlphabet.module.scss'

const HangManAlphabet = ({sayLetter}) => {;
    const [alphabet, setAlphabet] = useState([]);

    useEffect(() => {
        let arr = [];
        for(let i = 97; i <= 122; i++){
            let letter = String.fromCharCode(i);
            arr.push(letter);
        }
        setAlphabet(arr);
    }, [])

    return (
        <div className={styles.alphabet}>
          {alphabet.map((elem) => (
              <button 
                  key={elem}  
                  className={styles.alphabet__letter}
                  onClick={(e) => sayLetter(elem)}
              >{elem.toUpperCase()}
              </button>
          ))}  
        </div>
    );
}

export default HangManAlphabet;