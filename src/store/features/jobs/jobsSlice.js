import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobsData from '../../data/jobs';

// Async thunk to simulate fetching jobs (replace URL with real endpoint if available)
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  // Simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobsData), 600);
  });
});

const initialState = {
  list: [], // will be populated after fetch
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // Synchronous reducers
    setJobs: (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    addJob: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setJobs, addJob } = jobsSlice.actions;

// Selector
export const selectAllJobs = (state) => state.jobs.list;
export const selectJobsStatus = (state) => state.jobs.status;

export default jobsSlice.reducer;
