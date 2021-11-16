import { configureStore } from '@reduxjs/toolkit';
import launchesSlice from './launches-slice';

const store = configureStore({
  reducer: launchesSlice.reducer,
});

export default store;
