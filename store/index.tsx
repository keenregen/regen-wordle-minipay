'use client';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@slices/userSlice';
import authenticationSlice from '@slices/authenticationSlice';
import gameModalSlice from '@slices/gameModalSlice';
import questSlice from '@slices/questSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    authentication: authenticationSlice,
    gameModalSlice: gameModalSlice,
    quest: questSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

