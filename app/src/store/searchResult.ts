import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import route from '../route';
import { Result, Root } from '../types/types';

interface SearchResultState {
  result: Result[];
  isLoading: boolean;
  error: string;
  isInit: boolean;
}

const initialState = {
  result: [],
  isLoading: false,
  error: '',
  isInit: true,
} as SearchResultState;

export const fetchSearchResult = createAsyncThunk('searchResult/fetch', async (value: string) => {
  const response = await fetch(route(value));
  if (response.status === 404) throw new Error('404');
  const data: Root = await response.json();
  return data.results;
});

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      if (state.isInit) state.isInit = false;
      state.isLoading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchSearchResult.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchSearchResult.rejected, (state, action) => {
      state.isLoading = false;
      state.result = [];
      if (action.error.message) {
        state.error = action.error.message === '404' ? 'Ничего не найдено' : 'Что-то пошло не так';
      }
    });
  },
});

export default searchResultSlice.reducer;
