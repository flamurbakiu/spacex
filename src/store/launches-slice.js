import { createSlice } from '@reduxjs/toolkit';

const initialLaunchesState = { launchesData: [], loading: true, error: '' };

const launchesSlice = createSlice({
  name: 'launches',
  initialState: initialLaunchesState,
  reducers: {
    setLaunchesData(state, action) {
      state.launchesData = [...action.payload];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const launchesActions = launchesSlice.actions;
export default launchesSlice;
