import { createSlice } from '@reduxjs/toolkit';

// Creamos el slice del contador:
// Le ponemos el nombre que tendrá nuestro reducer, en este caso counter.
// Definimos el estado inicial que tendrá cuando se inicie la aplicación.
// Definimos el comportamiento que tendrá cada reducer cuando ocurra y el nuevo estado que devolverán.
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Con Redux Toolkit podemos MUTAR el state, esto se debe a que usa por
      // debajo una librería llamada IMMER que evita que se mute el contenido
      // realmente, creando una copia por nosotros.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // Usamos el "payload" recibido para sumarlo al valor que había antes
      state.value += action.payload;
    },
  },
});

// El slice genera una acción para cada función creada en el reducer.
// Estas acciones se invocarán con lo que queramos que sea el "payload".
// Ahora estamos destructurando también "incrementByAmount"
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Podemos crear selectores para recuperar facilmente elementos de nuestra store.
export const selectCount = (state) => state.counter.value;

// Exportamos por defecto el reducer, gracias a ello en el archivo store hacemos:
// import counterReducer from '../features/counter/counterSlice';
export default counterSlice.reducer;