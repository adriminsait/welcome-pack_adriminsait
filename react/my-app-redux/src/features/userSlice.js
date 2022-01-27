import { createSlice } from '@reduxjs/toolkit';

// Slice with reducers
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    isAuthenticated: false,
  },
  reducers: {
    authenticateUser: (state, action) => {
      const { username, email } = action.payload;

      state.username = username;
      state.email = email;

      // Si hemos añadido username y un email, el usuario estará "autenticado"
      if (username && email) {
        state.isAuthenticated = true;
      }
    },
  },
});

// Actions
export const { authenticateUser } = userSlice.actions;

// Selectors
export const selectUsername = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;