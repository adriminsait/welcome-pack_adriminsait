import { configureStore } from '@reduxjs/toolkit';
import sudokuReducer from '../slice/sudokuSlice'

export default configureStore({
  reducer: {
    sudoku: sudokuReducer,
  },
});