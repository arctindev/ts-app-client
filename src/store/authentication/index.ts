import { createSlice } from '@reduxjs/toolkit';

const InitialAuthState = 'Unauthenticated';
const AuthCode: any = `${process.env.REACT_APP_SECRET_NAME}`;

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: InitialAuthState,
  reducers: {
    authLogin() {
      return AuthCode;
    },
    authLogout() {
      return 'Unauthenticated';
    },
  },
});

export const { authLogin, authLogout } = authenticationSlice.actions;
