import { useState } from 'react';

import styles from './CounterApp.module.scss'

function CounterApp(value) {

    const[counter, setCounter] = useState(value.value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value.value)

    return (
        <div className={styles.main}>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <div className={styles.buttonpad}>
                <button onClick={ handleAdd }>+</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleSubtract }>-</button>
            </div>
        </div>
    );
}

export default CounterApp;
  