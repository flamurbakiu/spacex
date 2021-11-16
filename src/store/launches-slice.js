import { createSlice } from '@reduxjs/toolkit';

const initialLaunchesState = { data: [], loading: true, error: '' };

const launchesSlice = createSlice({
  name: 'launches',
  initialState: initialLaunchesState,
  reducers: {
    setData(state, action) {
      state.data = [...state.data, ...action.payload];
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
