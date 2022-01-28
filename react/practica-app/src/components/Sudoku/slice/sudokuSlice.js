import { createSlice } from '@reduxjs/toolkit';

// Creamos el slice del contador:
// Le ponemos el nombre que tendrá nuestro reducer, en este caso counter.
// Definimos el estado inicial que tendrá cuando se inicie la aplicación.
// Definimos el comportamiento que tendrá cada reducer cuando ocurra y el nuevo estado que devolverán.
export const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState: {
    isStarted: null,  
    sudokuBoard: 1,
    value: 0,
  },
  reducers: {
    setBoard: (state, action) => {
      state.sudokuBoard = action.payload;
    },
    setIsStarted: (state, action) => {
        state.isStarted = action.payload;
      },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// El slice genera una acción para cada función creada en el reducer.
// Estas acciones se invocarán con lo que queramos que sea el "payload".
export const { setBoard, setIsStarted, decrement } = sudokuSlice.actions;

// Podemos crear selectores para recuperar facilmente elementos de nuestra store.
export const selectBoard = (state) => state.sudoku.board;
export const selectIsStarted = (state) => state.sudoku.isStarted;

// Exportamos por defecto el reducer, gracias a ello en el archivo store hacemos:
// import counterReducer from '../features/counter/counterSlice';
export default sudokuSlice.reducer;