import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import searchResultReducer from './searchResult';
import modalReducer from './modalSlice';
import formCardsReducer from './formCardsSlice';

const store = configureStore({
  reducer: {
    formCards: formCardsReducer,
    modal: modalReducer,
    search: searchReducer,
    searchResult: searchResultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
