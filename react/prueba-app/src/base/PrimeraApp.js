import React from 'react';

import styles from './CounterApp.module.scss'

function CounterApp(saludo) {

    return (
        <div className={styles.main}>
            <h1>{saludo.saludo}</h1>
        </div>
    );
}

export default CounterApp;
  