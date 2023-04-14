import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import searchResultReducer from './searchResult';

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchResult: searchResultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
