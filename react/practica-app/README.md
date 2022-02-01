Realizado por Adrián De Andrés

Esta práctica consta de 5 vistas principales:
- Login: Vista con un boton de login utilizado para la autenticación y protección de rutas mediante la librería auth0-react
- Home: En esta vista aparecen los enlaces que redirigen a cada juego
- TicTacToe: Juego del 3 en raya. He utilizado useReducer en la implementación. Consta del componente principal y un componente con el tablero del juego. Para enviar información entre componentes he utilizado Context y Provider
- Hangman: Juego del ahorcado. He utilizado useState en la implementación. Consta del componente principal y 3 componentes: panel de la pista y las letras ya dichas, contador de intentos restantes y botonera con todas las letras del abecedario. Para enviar información entre componentes he utilizado Context y Provider
- Sudoku: He utilizado Redux para persistir los datos. Consta de un archivo store, un archivo slice y un componente principal que es el Provider para los componentes hijos: El panel donde se ve toda la información, el tablero y un componente para cada cuadrado (3x3) del tablero.

El motivo de utilizar useReducer para TicTacToe y useState para Hangman no es ninguno en particular, ambos se podrían haber desarrollado de la misma forma, simplemente es el hecho de familiarizarme tanto con el useReducer como con el useState
Sin embargo, Sudoku si que tiene un motivo para utilizar Redux: al haber un componente con un hijo, y este hijo a la vez con otro hijo, consideré que sería la forma mas fácil de compartir información entre ellos

La práctica se arranca con npm start y se abre en el puerto 3000
