import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlice, changeTheme } from './darkMode';
import {
  servicesApi,
  useGetHistoryMutation,
  useGetDayByIdMutation,
} from './api/servicesApi';
import { authLogin, authLogout, authenticationSlice } from './authentication';
import { userApi, useLoginMutation } from './api/userApi';

export { changeTheme };
export { authLogin, authLogout };
export { useGetHistoryMutation, useGetDayByIdMutation };
export { useLoginMutation };

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    authentication: authenticationSlice.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(servicesApi.middleware)
      .concat(userApi.middleware),
});
