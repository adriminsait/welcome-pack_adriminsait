import { createSlice } from '@reduxjs/toolkit';

export const sudokuSlice = createSlice({
  name: 'sudoku',

  initialState: {
    isStarted: null,  
    win: null,
    board: [],
    solution: [],
    freeCells: null,
    styles: [],
  },

  reducers: {
    setIsStarted: (state, action) => {
      state.isStarted = action.payload;
    },
    setWin: (state, action) => {
      state.win = action.payload
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setCellBoard: (state, action) => {
      const { index, value } = action.payload;
      state.board[index] = value;
    },
    setSolution: (state, action) => {
      state.solution = action.payload;
    },
    setFreeCells: (state, action) => {
      state.solution = action.payload;
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    }
  },
});

export const { setIsStarted, setWin, setBoard, setCellBoard, setSolution, setFreeCells, setStyles } = sudokuSlice.actions;

export const selectIsStarted = (state) => state.sudoku.isStarted;
export const selectWin = (state) => state.sudoku.win;
export const selectBoard = (state) => state.sudoku.board;
export const selectSolution = (state) => state.sudoku.solution;
export const selectFreeCells = (state) => state.sudoku.freeCells;
export const selectStyles = (state) => state.sudoku.styles;

export default sudokuSlice.reducer;