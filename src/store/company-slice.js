import { createSlice } from '@reduxjs/toolkit';

const initialCompanyState = { companyData: {} };

const companySlice = createSlice({
  name: 'company',
  initialState: initialCompanyState,
  reducers: {
    setCompanyData(state, action) {
      state.companyData = { ...action.payload };
    },
  },
});

export const companyActions = companySlice.actions;
export default companySlice;
