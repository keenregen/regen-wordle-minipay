'use client';
import { createSlice } from '@reduxjs/toolkit';
import { set } from 'lodash';

const initialState = {
  isModalOpen: false,
  modalContent: '',
  modalTitle: 'Attention!',
  letters: 'five',
  subject: 'environmental',
};

const gameModalSlice = createSlice({
  name: 'gameModal',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.isModalOpen = true;
      state.modalTitle = action.payload;
      state.modalContent = action.payload;
    },
    setModalClose: (state) => {
      state.isModalOpen = false;
      state.modalContent = '';
    },
    setLetters: (state, action) => {
      state.letters = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
  },
});

export const { setModalOpen, setModalClose, setLetters, setSubject } = gameModalSlice.actions;
export const selectIsModalOpen = (state: any) => state.gameModal.isModalOpen;
export const selectModalContent = (state: any) => state.gameModal.modalContent;
export const selectLetters = (state: any) => state.gameModal.letters;
export const selectSubject = (state: any) => state.gameModal.subject;

export default gameModalSlice.reducer;
