import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainSlice from '../features/main/mainSlice';
import axios from 'axios';

export const store = configureStore({
  reducer: {
    main:mainSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export const myAxios = axios.create({
  baseURL:"http://localhost:8080/"
})