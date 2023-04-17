import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState = {
  value: '',
} as SearchState;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSerch: (state, action: { payload: string }) => {
      state.value = action.payload;
    },
  },
});

export const { changeSerch } = searchSlice.actions;
export default searchSlice.reducer;
