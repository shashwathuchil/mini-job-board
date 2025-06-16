import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../../store/features/jobs/jobsSlice';

const renderWithStore = (ui) => {
  const store = configureStore({ reducer: { jobs: jobsReducer } });
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('SearchBar', () => {
  it('renders input and allows typing', () => {
    renderWithStore(<SearchBar />);
    const input = screen.getByPlaceholderText(/search job titles/i);
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input.value).toBe('React');
  });

  it('dispatches setSearchQuery on input change', () => {
    const { store } = renderWithStore(<SearchBar />);
    const input = screen.getByPlaceholderText(/search job titles/i);
    fireEvent.change(input, { target: { value: 'Redux' } });
    // Check state updated in store
    expect(store.getState().jobs.searchQuery).toBe('Redux');
  });

  it('shows and works clear button', () => {
    renderWithStore(<SearchBar />);
    const input = screen.getByPlaceholderText(/search job titles/i);
    fireEvent.change(input, { target: { value: 'Node' } });
    const clearBtn = screen.getByRole('button', { name: /clear search/i });
    expect(clearBtn).toBeInTheDocument();
    fireEvent.click(clearBtn);
    expect(input.value).toBe('');
  });

  it('does not show clear button when input is empty', () => {
    renderWithStore(<SearchBar />);
    expect(screen.queryByRole('button', { name: /clear search/i })).not.toBeInTheDocument();
  });
});
