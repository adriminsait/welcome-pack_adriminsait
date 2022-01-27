import React, { useEffect, useReducer } from 'react';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

// Creamos action types en constantes para reutilizarlos
const SET_USER = 'SET_USER';
const SET_ERROR = 'SET_ERROR';
const SET_IS_LOADING = 'SET_IS_LOADING';

// El reducer siemrpe recibe state y action
const reducer = (state, action) => {
  // La acción contendrá un type y el nuevo valor en payload
  const { type, payload } = action;
  
  // Dependiendo del action type, devolvemos un nuevo estado
  switch (type) {
    case SET_USER:
      return { ...state, user: payload, isLoading: false };
    case SET_ERROR:
      return { ...state, error: payload, isLoading: false };
    case SET_IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

const Home = () => {
  // useReducer devuelve un state y un dispatch, similar a useState
  const [state, dispatch] = useReducer(reducer, initialState);
  // El state nos permitirá destructurar los atributos que queramos
  const { user, error, isLoading } = state;
  

  useEffect(() => {
    // Para lanzar una acción y cambiar el estado, llamamos dispatch
    dispatch({
      type: SET_IS_LOADING,
      payload: false,
    });

    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((userData) => {
        // setUser(userData);
        console.log(userData.results[0]);
        dispatch({
          type: SET_USER,
          payload: userData.results[0],
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading data...</h2>
      ) : (
        <div>
          <h2>Data loaded!</h2>
          {user ? <h3>{user.name.first}</h3> : null}
          {error ? <h3>error</h3> : null}
        </div>
      )}
    </div>
  );
};

export default Home;