import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './features/jobs/jobsSlice';

// Central Redux store configuration
const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
