import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slice/itemSlice';

const store = configureStore({
  reducer: {
    item: itemReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
