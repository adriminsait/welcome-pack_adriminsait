import React from 'react'
import { Provider  } from 'react-redux'
import { store } from './store/store'


export const GamesApp = () => {
    return (
        <Provider store={store}>
            <h1>Hola</h1>
        </Provider>
    )
}
