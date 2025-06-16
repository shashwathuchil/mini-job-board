import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Job, JobType } from '../types/job';

const initialState = {
  currentPage: 1,
  jobs: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'New York, NY',
      type: 'Full-time' as JobType,
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
      type: 'Part-time' as JobType,
      postedDate: '2025-06-14',
      description: 'Develop and maintain responsive web applications.',
      requirements: [
        '3+ years of experience',
        'Proficient in React',
      ],
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Insight Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time' as JobType,
      postedDate: '2025-06-13',
      description: 'Drive data-driven insights and build predictive models.',
      requirements: [
        '3+ years of experience in data science',
        'Strong Python & SQL skills',
        'Experience with machine learning frameworks',
      ],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudOps',
      location: 'Austin, TX',
      type: 'Contract' as JobType,
      postedDate: '2025-06-12',
      description: 'Maintain CI/CD pipelines and cloud infrastructure.',
      requirements: [
        'Experience with AWS & Docker',
        'Infrastructure as Code (Terraform)',
      ],
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      company: 'Creative Minds',
      location: 'Remote',
      type: 'Part-time' as JobType,
      postedDate: '2025-06-11',
      description: 'Design intuitive user experiences and interfaces.',
      requirements: [
        'Portfolio demonstrating design systems',
        'Figma / Sketch expertise',
      ],
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'InnovateX',
      location: 'Boston, MA',
      type: 'Full-time' as JobType,
      postedDate: '2025-06-10',
      description: 'Lead cross-functional teams to deliver product milestones.',
      requirements: [
        'Strong communication skills',
        'Experience in Agile methodologies',
      ],
    },
    {
      id: 7,
      title: 'Mobile Developer',
      company: 'AppWorks',
      location: 'Seattle, WA',
      type: 'Full-time' as JobType,
      postedDate: '2025-06-09',
      description: 'Build and maintain React Native applications.',
      requirements: [
        '2+ years developing mobile apps',
        'Knowledge of React Native or Flutter',
      ],
    },
    {
      id: 8,
      title: 'Technical Writer',
      company: 'DocuPro',
      location: 'Remote',
      type: 'Contract' as JobType,
      postedDate: '2025-06-08',
      description: 'Create clear documentation for APIs and user guides.',
      requirements: [
        'Excellent written communication',
        'Experience with Markdown & docs-as-code',
      ],
    }
  ] as Job[],
  filteredJobs: [] as Job[],
  companyFilter: '',
  typeFilter: '' as JobType,
  searchQuery: '',
  itemsPerPage: 10,
  totalItems: 0,
  totalPages: 0,
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
      state.typeFilter = '' as JobType;
      state.searchQuery = '';
      state.filteredJobs = [...state.jobs];
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.searchQuery = action.payload;
      state.filteredJobs = state.jobs.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
});

export const { 
  setCompanyFilter, 
  setTypeFilter, 
  clearFilters, 
  setSearchQuery, 
  setPage 
} = jobSlice.actions;
export default jobSlice.reducer;
