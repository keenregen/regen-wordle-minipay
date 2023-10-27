'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGameFinished: true,
  remainingTime: 0,
};

const questSlice = createSlice({
  name: 'questSlice',
  initialState,
  reducers: {
    setGameFinished: (state) => {
      state.isGameFinished = true;
    },

    setGameContinue: (state) => {
      state.isGameFinished = false;
    },

    setRemainingTime: (state, action) => {
      state.remainingTime = action.payload;
    },
  },
});

export const { setGameFinished, setGameContinue, setRemainingTime } =
  questSlice.actions;
export const selectIsGameFinished = (state: any) =>
  state.questSlice.isGameFinished;
export const selectRemainingTime = (state: any) =>
  state.questSlice.remainingTime;

export default questSlice.reducer;
