import { createSlice, configureStore } from '@reduxjs/toolkit';
import { serviceData } from './mockedData';

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

export const store = configureStore({
  reducer: {
    service: serviceSlice.reducer,
  },
});
