import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Importamos la acción del nuevo "slice" que hemos creado para los usuarios
import { authenticateUser } from '../features/userSlice';

export const Home = () => {
  const dispatch = useDispatch();
  // Estado local de formulario de "autenticación"
  const [userForm, setUserForm] = useState({ email: '', value: '' });
  const { username, email } = userForm;

  // Cambiamos el estado local del formulario de Home con los datos del <form>
  function handleChangeInput(ev) {
    const { name, value } = ev.target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  }

  // Esta función hará "submit" del formulario. Enviaremos el "userForm" completo porque sigue
  // la estructura { username, email } que está esperando el reducer como "payload"
  function handleSubmit(ev) {
    ev.preventDefault()
    dispatch(authenticateUser(userForm));
  }

  return (
    <div>
      <h1>Welcome to Upgrade Hub!</h1>

      <h3>Necesitas introducir tus datos para continuar</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </label>

        <button type="submit">Darme de alta</button>
      </form>

      <Link to="/counter">Go to counter</Link>
    </div>
  );
};