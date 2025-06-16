import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobList from './JobList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../../store/features/jobs/jobsSlice';

const renderWithStore = (ui, { preloadedState } = {}) => {
  const store = configureStore({ reducer: { jobs: jobsReducer }, preloadedState });
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('JobList', () => {
  const jobs = [
    { id: 1, title: 'Frontend', company: 'A', type: 'Full-Time', description: 'desc', requirements: [], location: 'Remote' },
    { id: 2, title: 'Backend', company: 'B', type: 'Part-Time', description: 'desc', requirements: [], location: 'Remote' },
  ];
  const baseState = {
    jobs: {
      list: jobs,
      status: 'succeeded',
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    },
  };

  it('shows loading', () => {
    renderWithStore(<JobList jobs={[]} />, {
      preloadedState: { ...baseState, jobs: { ...baseState.jobs, status: 'loading' } },
    });
    expect(screen.getByText(/loading jobs/i)).toBeInTheDocument();
  });

  it('shows error', () => {
    renderWithStore(<JobList jobs={[]} />, {
      preloadedState: { ...baseState, jobs: { ...baseState.jobs, status: 'failed' } },
    });
    expect(screen.getByText(/failed to load jobs/i)).toBeInTheDocument();
  });

  it('renders jobs and handles click', () => {
    const onJobClick = jest.fn();
    renderWithStore(<JobList jobs={jobs} onJobClick={onJobClick} />, { preloadedState: baseState });
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Frontend/));
    expect(onJobClick).toHaveBeenCalled();
  });

  it('filters by company', () => {
    renderWithStore(<JobList jobs={jobs} />, { preloadedState: baseState });
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'A' } });
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    expect(screen.queryByText(/Backend/)).not.toBeInTheDocument();
  });

  it('filters by type', () => {
    renderWithStore(<JobList jobs={jobs} />, { preloadedState: baseState });
    fireEvent.change(screen.getByLabelText(/job type/i), { target: { value: 'Part-Time' } });
    expect(screen.getByText(/Backend/)).toBeInTheDocument();
    expect(screen.queryByText(/Frontend/)).not.toBeInTheDocument();
  });

  it('filters by search query', () => {
    renderWithStore(<JobList jobs={jobs} />, {
      preloadedState: { ...baseState, jobs: { ...baseState.jobs, searchQuery: 'Back' } },
    });
    expect(screen.getByText(/Backend/)).toBeInTheDocument();
    expect(screen.queryByText(/Frontend/)).not.toBeInTheDocument();
  });

  it('shows empty state when no jobs', () => {
    renderWithStore(<JobList jobs={[]} />, { preloadedState: baseState });
    expect(screen.getByText(/no jobs found/i)).toBeInTheDocument();
  });

  it('clears filters', () => {
    renderWithStore(<JobList jobs={jobs} />, { preloadedState: baseState });
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'A' } });
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/clear filters/i));
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    expect(screen.getByText(/Backend/)).toBeInTheDocument();
  });
});
