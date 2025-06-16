import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './store/features/jobs/jobsSlice';
import App from './App';

const renderWithStore = (ui, { preloadedState } = {}) => {
  const store = configureStore({
    reducer: { jobs: jobsReducer },
    preloadedState,
  });
  return render(<Provider store={store}>{ui}</Provider>);
};

test('renders Job Board header', () => {
  const preloadedState = {
    jobs: {
      list: [],
      status: 'idle',
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    },
  };
  renderWithStore(<App />, { preloadedState });
  expect(screen.getByRole('heading', { name: /Job Board/i })).toBeInTheDocument();
});

test('renders job list and job details modal on click', () => {
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'Acme Corp',
    location: 'Remote',
    description: 'Work on cool stuff',
    salary: '$100k',
  };
  const preloadedState = {
    jobs: {
      list: [job],
      status: 'succeeded',
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    },
  };
  renderWithStore(<App />, { preloadedState });
  // Job title rendered in job list
  expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
  // Simulate click on job
  screen.getByText(/Frontend Developer/i).click();
  // Modal with job details should show
  expect(screen.getByText(/Work on cool stuff/i)).toBeInTheDocument();
  // Close modal
  screen.getByRole('button', { name: /close/i }).click();
  // Modal should disappear
  expect(screen.queryByText(/Work on cool stuff/i)).not.toBeInTheDocument();
});

test('shows loading state', () => {
  const preloadedState = {
    jobs: {
      list: [],
      status: 'loading',
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    },
  };
  renderWithStore(<App />, { preloadedState });
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('shows empty state when no jobs', () => {
  const preloadedState = {
    jobs: {
      list: [],
      status: 'succeeded',
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    },
  };
  renderWithStore(<App />, { preloadedState });
  expect(screen.getByText(/no jobs found/i)).toBeInTheDocument();
});
