import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASEURL } from '../route';
import { LocationResponse, Result } from '../types/types';

interface ModalState {
  isShow: boolean;
  cardData: Result | null;
  isLoading: boolean;
  error: string;
}

const initialState = {
  isShow: false,
  cardData: null,
  isLoading: false,
  error: '',
} as ModalState;

export const fetchCardData = createAsyncThunk('modal/fetch', async (id: number) => {
  const response = await fetch(`${BASEURL}/${id}`);
  const data: Result = await response.json();
  const responseLocation = await fetch(data.location.url);
  const locationData: LocationResponse = await responseLocation.json();
  data.locationResponse = locationData;
  return data;
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isShow = true;
    },
    closeModal: (state) => {
      state.isShow = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cardData = action.payload;
    });
    builder.addCase(fetchCardData.pending, (state) => {
      state.isLoading = true;
      state.error = '';
      state.cardData = null;
    });
    builder.addCase(fetchCardData.rejected, (state, action) => {
      state.isLoading = false;
      state.cardData = null;

      if (action.error.message) {
        state.error = 'Что-то пошло не так';
      }
    });
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
