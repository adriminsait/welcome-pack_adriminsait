import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sudokuReducer from '../slice/sudokuSlice'

export default configureStore({
  reducer: {
    sudoku: sudokuReducer,
  },
  //esto es para poder almacenar contenido no serializable (variables con codigo HTML) en redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});