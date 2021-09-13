import { createSlice, configureStore } from '@reduxjs/toolkit';
import { serviceData } from './mockedData';

let darkModeInitialState: boolean = false;

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
  darkModeInitialState = true;
  console.log('User prefers a dark interface');
} else {
  console.log('User prefers a light interface');
}

const initialServiceState = serviceData;

const serviceSlice = createSlice({
  name: 'service',
  initialState: initialServiceState,
  reducers: {
    addService(state, action) {
      state.push({
        id: 6,
        ...action.payload,
      });
    },
    removeService(state, action) {
      return state.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { addService, removeService } = serviceSlice.actions;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: darkModeInitialState,
  reducers: {
    changeTheme(state) {
      return !state;
    },
  },
});

export const { changeTheme } = darkModeSlice.actions;

export const store = configureStore({
  reducer: {
    service: serviceSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});
