import React, { useEffect, useReducer } from 'react';

import TicTacToeBoard from './TicTacToeBoard/TicTacToeBoard'

import styles from './TicTacToe.module.scss';

export const TicTacToeContext = React.createContext(null);

const initialState = {
  turn: '',
  isStarted: false,
  board: [
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
  ],
  winner: null,
  positionsBusy: [],
};

// Creamos action types en constantes para reutilizarlos
const RESET = 'RESET'
const SET_TURN = 'SET_TURN';
const SET_CELL = 'SET_CELL';
const SET_IS_STARTED = 'SET_IS_STARTED';
const SET_WINNER = 'SET_WINNER';

// El reducer siemrpe recibe state y action
const reducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {

    case SET_TURN:
      return { ...state, turn: payload};

    case SET_CELL:
        if(!state.positionsBusy.includes(payload)){
          var newBoard = state.board;
          newBoard[payload] = state.turn;
          state.positionsBusy.push(payload);
           
          return { ...state, board: newBoard};
        }

        else{
          console.log("casilla ocupada");
          //si la casilla esta ocupada avanza turno para que setCell avance otro turno 
          //es decir, avanza 2 turnos, osea se queda en el turno del que le tocaba
          var newTurn;
          console.log(state.turn);
          if(state.turn == 'O'){
            newTurn = 'X';
          }
          else if(state.turn == 'X'){
            newTurn = 'O';
          }
          return { ...state, turn: newTurn};
        }

    case SET_IS_STARTED:
      return { ...state, isStarted: payload };

    case RESET:
      const newboard = [
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ];
      return {turn: '', isStarted: true, board: newboard, winner: null, positionsX: [], positionsO: [], positionsBusy: []};

      case SET_WINNER:
        return { ...state, winner: payload, isStarted: false };

    default:
      return state;
  }
};

const TicTacToe = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { turn, isStarted, board, winner, positionsBusy} = state;

  //cuando hay una casilla nueva ocupada comprueba si hay ganador
  useEffect(() => {
      haveWinner();
  }, [state.positionsBusy.length]);

  const getNext = () => {
    var newTurn;
    if(state.turn == '' || state.turn == 'O'){
      newTurn = 'X';
    }
    else if(state.turn == 'X'){
      newTurn = 'O';
    }
    
    return newTurn;
  }

  const setCell = (coords) =>{
    dispatch({
        type: SET_CELL,
        payload: coords,
    });
    
    var newTurn = getNext();
    
    dispatch({
      type: SET_TURN,
      payload: newTurn,
    });
  }

  const haveWinner = () => {
    const posibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < posibilities.length; i++) {
      const [a, b, c] = posibilities[i];
      if (state.board[a] != '' && state.board[b] != '' && state.board[c] != '') {
        // console.log(`a:${state.board[a]} b:${state.board[b]} c:${state.board[c]} `)
        if(state.board[a] == state.board[b] && state.board[a] == state.board[c]){
          dispatch({
              type: SET_WINNER,
              payload: state.board[a],
            })
        }
      }
    }
    return null;
  }

  const startGame = () => {
    dispatch({
      type: RESET,
      payload: '',
    })

    dispatch({
        type: SET_TURN,
        payload: 'X',
    });
  }

  const stopGame = () => {
    dispatch({
      type: SET_IS_STARTED,
      payload: false,
    })
  }

  return (
    <div className={styles.home}>
        <div className={styles.title}>3 en raya</div>

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
            <TicTacToeContext.Provider value={{ state,  setCell }}>
                <TicTacToeBoard />
            </TicTacToeContext.Provider>
            </>
        )}  

        {winner ? (
          <div className={styles.winner}>
            HA GANADO EL JUGADOR <strong>{winner}</strong>
          </div>
        ) : (<></>)}
        {!winner && positionsBusy.length == 9 ? (
          <div className={styles.equals}>
            EMPATE <strong>{winner}</strong>
          </div>
        ) : (<></>)}
    </div>
  );
};

export default TicTacToe;
