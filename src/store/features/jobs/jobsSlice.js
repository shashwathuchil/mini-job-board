import { createSlice } from '@reduxjs/toolkit';
import jobsData from '../../data/jobs';

const initialState = {
  list: jobsData,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.list = action.payload;
    },
    addJob: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setJobs, addJob } = jobsSlice.actions;

// Selector
export const selectAllJobs = (state) => state.jobs.list;

export default jobsSlice.reducer;
