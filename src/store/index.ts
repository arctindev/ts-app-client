import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlice, changeTheme } from './darkMode';
import {
  servicesApi,
  useGetHistoryQuery,
  useGetDayByIdMutation,
} from './api/servicesApi';
import { authLogin, authLogout, authenticationSlice } from './authentication';

export { changeTheme };
export { authLogin, authLogout };
export { useGetHistoryQuery, useGetDayByIdMutation };

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    authentication: authenticationSlice.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
});
