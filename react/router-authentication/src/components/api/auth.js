const registerUrl = 'https://upgrade-auth.herokuapp.com/api/auth/register';

export const register = async (userData) => {
  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const jsonResponse = await response.json();

  // Si hay un error en la respuesta, devolveremos el error del servidor que tenemos en .message
  if (!response.ok) {
    throw new Error(jsonResponse.message);
  }

  // Si tenemos una respuesta adecuada, devolvemos el resultado que habrá en .data
  return jsonResponse.data;
};

const loginUrl = 'https://upgrade-auth.herokuapp.com/api/auth/login';

export const login = async (userData) => {
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const jsonResponse = await response.json();

  // Si hay un error en la respuesta, devolveremos el error del servidor que tenemos en .message
  if (!response.ok) {
    throw new Error(jsonResponse.message);
  }

  // Si tenemos una respuesta adecuada, devolvemos el resultado que habrá en .data
  return jsonResponse.data;

};

const checkSessionUrl = 'https://upgrade-auth.herokuapp.com/api/auth/check-session';

export const checkSession = async () => {
  const response = await fetch(checkSessionUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const jsonResponse = await response.json();

  // Si hay un error en la respuesta, devolveremos el error del servidor que tenemos en .message
  if (!response.ok) {
    throw new Error(jsonResponse.message);
  }

  // Si tenemos una respuesta adecuada, devolvemos el resultado que habrá en .data
  return jsonResponse.data;
};

const logoutUrl = 'https://upgrade-auth.herokuapp.com/api/auth/logout';

export const logout = async () => {
  const response = await fetch(logoutUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const jsonResponse = await response.json();

  // Si hay un error en la respuesta, devolveremos el error del servidor que tenemos en .message
  if (!response.ok) {
    throw new Error(jsonResponse.message);
  }

  // Si tenemos una respuesta adecuada, devolvemos el resultado que habrá en .data
  return jsonResponse.data;
};