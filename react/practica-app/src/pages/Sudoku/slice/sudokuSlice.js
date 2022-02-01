import { createSlice } from '@reduxjs/toolkit';

export const sudokuSlice = createSlice({
  name: 'sudoku',

  initialState: {
    isStarted: null,  
    win: null,
    lose: null,
    board: [],
    solution: [],
    boardStyles: [],
    solutionStyles: [],
    seeSolution: null,
  },

  reducers: {
    setIsStarted: (state, action) => {
      state.isStarted = action.payload;
    },
    setWin: (state, action) => {
      state.win = action.payload;
    },
    setLose: (state, action) => {
      state.lose = action.payload;
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
    setBoardStyles: (state, action) => {
      state.boardStyles = action.payload;
    },
    setSolutionStyles: (state, action) => {
      state.solutionStyles = action.payload;
    },
    setSeeSolution: (state, action) => {
      state.seeSolution = action.payload;
    }
  },
});

export const { setIsStarted, setWin, setLose, setBoard, setCellBoard, setSolution, 
  setBoardStyles, setSolutionStyles, setSeeSolution } = sudokuSlice.actions;

export const selectIsStarted = (state) => state.sudoku.isStarted;
export const selectWin = (state) => state.sudoku.win;
export const selectLose = (state) => state.sudoku.lose;
export const selectBoard = (state) => state.sudoku.board;
export const selectSolution = (state) => state.sudoku.solution;
export const selectBoardStyles = (state) => state.sudoku.boardStyles;
export const selectSolutionStyles = (state) => state.sudoku.solutionStyles;
export const selectSeeSolution = (state) => state.sudoku.seeSolution;

export default sudokuSlice.reducer;