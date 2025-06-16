import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Job, JobType } from '../types/job';

const initialState = {
  jobs: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2025-06-15',
      description: 'Lead development of new features and maintain existing codebase.',
      requirements: [
        '5+ years of experience',
        'Expert in TypeScript',
        'Experience with React',
      ],
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'Remote',
      type: 'Part-time',
      postedDate: '2025-06-14',
      description: 'Develop and maintain responsive web applications.',
      requirements: [
        '3+ years of experience',
        'Proficient in React',
        'CSS/HTML expertise',
      ],
    },
    // Add more mock jobs as needed
  ] as Job[],
  filteredJobs: [] as Job[],
  companyFilter: '' as string,
  typeFilter: 'Full-time' as JobType,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setCompanyFilter: (state, action: PayloadAction<string>) => {
      state.companyFilter = action.payload;
      state.filteredJobs = state.jobs.filter(job =>
        job.company.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setTypeFilter: (state, action: PayloadAction<JobType>) => {
      state.typeFilter = action.payload;
      state.filteredJobs = state.jobs.filter(job =>
        job.type === action.payload
      );
    },
    clearFilters: (state) => {
      state.companyFilter = '';
      state.typeFilter = 'Full-time'; // Reset to a valid JobType
      state.filteredJobs = [...state.jobs];
    },
  },
});

export const { setCompanyFilter, setTypeFilter, clearFilters } = jobSlice.actions;
export default jobSlice.reducer;
