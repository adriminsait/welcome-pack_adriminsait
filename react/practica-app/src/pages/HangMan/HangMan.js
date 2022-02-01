import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../../components/Header/Header'
import HangManCounter from './HangManCounter/HangManCounter'
import HangManPanel from './HangManPanel/HangManPanel'
import HangManAlphabet from './HangManAlphabet/HangManAlphabet'

import styles from './HangMan.module.scss';

export const HangManContext = React.createContext(null);
export const maxTrys = 5;

const gameWords = ['coche', 'botella', 'zapatilla']; //'abcdefghijklmnopqrstuvwxyz'

const HangMan = () => {
  const [saidLetters, setSaidLetters] = useState([]);
  const [successLetters, setSuccessLetters] = useState([]);
  const [word, setWord] = useState('');
  const [isStarted, setIsStarted] = useState(null);
  const [win, setWin] = useState(null);
  const [counter, setCounter] = useState(0);

  const {loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
      setIsStarted(false);
      setWin(false);
      setCounter(0);
  }, []);

  useEffect(() => {
    let ok = true;
    if(successLetters.length){
      for(let i = 0; i < word.length && ok; i++){
          if(!successLetters.includes(word[i])){
              ok = false;
          }
      }
      if(ok){
          setWin(true);
      }
    }
  }, [successLetters]);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const sayLetter = (letter) => {
      if(counter < maxTrys && !win){
        if(!saidLetters.includes(letter) && !successLetters.includes(letter)){
            if(word.includes(letter)){
                setSuccessLetters([...successLetters, letter])
            }else{
                setSaidLetters([...saidLetters, letter])
                setCounter(counter + 1);
            }
        }
      }
  }

  const startGame = () => {
    const max = gameWords.length;
    const min = 0;
    const num = Math.floor((Math.random() * (max - min) + min)); 

    setWord(gameWords[num]);
    setIsStarted(true);
    setSaidLetters([]);
    setSuccessLetters([]);
    setWin(false);
    setCounter(0);
  }

  const stopGame = () => {
    setIsStarted(false);
    setCounter(0);
  }

  return (
    <div className={styles.home}>
        <Header message={'Ahorcado'} />

        {!isStarted ? (
            <button 
                className={styles.button}
                onClick={startGame}
            >Empezar a jugar</button>
        ) : (
            <>
            <button 
                className={styles.button}
                onClick={stopGame}
            >Dejar de jugar</button>

            <HangManContext.Provider value={{counter, word, successLetters, saidLetters}}>
                <HangManCounter />
                <HangManPanel />
                <HangManAlphabet sayLetter={sayLetter}/>
            </HangManContext.Provider>
            </>
        )}  

        {win ? (
          <div className={styles.win}>
            ¡CONSEGUIDO!
          </div>
        ) : (<></>)}
        
        {!win && counter >= maxTrys ? (
          <div className={styles.lose}>
            No te quedan intentos...
          </div>
        ) : (<></>)}
    </div>
  );
};

export default HangMan;