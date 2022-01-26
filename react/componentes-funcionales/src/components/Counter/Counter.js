import React, { useEffect, useState} from 'react'

import CounterTitle from './CounterTitle/CounterTitle';
import CounterButton from './CounterButton/CounterButton';

export const CounterContext = React.createContext(null);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // Cuando el contador cambia, se lanza el efecto
  useEffect(() => {
    if (counter % 2 === 0) {
      console.log('El contador es par');
    } else {
      console.log('El contador es impar');
    }
  }, [counter]);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <CounterContext.Provider value={counter}>
        <CounterTitle />
        <CounterButton handleIncrement={handleIncrement} />
      </CounterContext.Provider>
    </div>
  );
};

export default Counter;