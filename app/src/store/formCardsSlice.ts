import { createSlice } from '@reduxjs/toolkit';
import { FormData } from '../types/types';

interface FormCardsState {
  cards: FormData[];
}

const initialState = {
  cards: [],
} as FormCardsState;

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addFormCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;
export default formCardsSlice.reducer;
