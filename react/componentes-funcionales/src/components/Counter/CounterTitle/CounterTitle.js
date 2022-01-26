import React, { useContext } from 'react';

// Importamos UserContext del componente que lo haya declarado
import { CounterContext } from '../Counter';

const CounterTitle = () => {
    const counter = useContext(CounterContext);
  
    return <h3>El contador vale: {counter}</h3>;
  };
  
  export default CounterTitle;