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
