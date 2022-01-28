import React from 'react';
import { useContext } from "react";

import { HangManContext, maxTrys } from "../HangMan";

import styles from './HangManCounter.module.scss'


const HangManCounter = () => {
    const { counter } = useContext(HangManContext);

    return (
        <div className={styles.turn}>
            Te quedan <strong>{maxTrys - counter}</strong> intentos
        </div>
    );
}

export default HangManCounter;