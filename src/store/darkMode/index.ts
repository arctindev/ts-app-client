import { createSlice } from '@reduxjs/toolkit';

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
if (localStorage.getItem('darkMode')) {
  if (localStorage.getItem('darkMode') === 'dark') {
    darkModeInitialState = true;
  } else {
    darkModeInitialState = false;
  }
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: darkModeInitialState,
  reducers: {
    changeTheme(state) {
      if (!state) {
        localStorage.setItem('darkMode', 'dark');
      } else {
        localStorage.setItem('darkMode', 'light');
      }
      return !state;
    },
  },
});

export const { changeTheme } = darkModeSlice.actions;
