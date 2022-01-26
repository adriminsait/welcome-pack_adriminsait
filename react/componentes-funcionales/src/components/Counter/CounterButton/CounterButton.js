import React, { useContext } from 'react';

const CounterButton = ({ handleIncrement }) => (
    <button type="button" onClick={handleIncrement}>
      Sumar uno al contador
    </button>
  );
  
  export default CounterButton;