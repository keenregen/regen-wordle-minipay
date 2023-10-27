'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetcherWithNoCache } from '@src/utils/fetcher';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (id: string) => {
    try {
      const response = await fetcherWithNoCache(
        `https://regenwise.xyz/api/users/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null, isLoading: false, error: null },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as any;
      });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
