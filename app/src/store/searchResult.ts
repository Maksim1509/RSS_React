import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import route from '../route';
import { Result, Root } from '../types/types';
import { act } from 'react-dom/test-utils';

interface SearchResultState {
  result: Result[];
}

const initialState = {
  result: [],
} as SearchResultState;

export const fetchSearchResult = createAsyncThunk('searchResult/fetch', async (value: string) => {
  const response = await fetch(route(value));
  const data: Root = await response.json();
  return data.results;
});

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    // updateResult: (state, action: { payload: Result[] }) => {
    //   state.result = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.result = action.payload;
    });
  },
});

// export const { updateResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
