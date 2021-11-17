import { configureStore } from '@reduxjs/toolkit';
import launchesSlice from './launches-slice';
import companySlice from './company-slice';

const store = configureStore({
  reducer: { launches: launchesSlice.reducer, company: companySlice.reducer },
});

export default store;
