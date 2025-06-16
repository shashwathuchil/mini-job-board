import reducer, {
  setJobs,
  addJob,
  setSearchQuery,
  incrementPage,
  resetPage,
  selectAllJobs,
  selectJobsStatus,
  selectSearchQuery,
  selectCurrentPage,
  selectItemsPerPage,
  fetchJobs
} from './jobsSlice';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 5,
};

describe('jobsSlice reducers', () => {
  it('should handle setJobs', () => {
    const jobs = [{ id: 1, title: 'Test' }];
    const nextState = reducer(initialState, setJobs(jobs));
    expect(nextState.list).toEqual(jobs);
    expect(nextState.status).toBe('succeeded');
    expect(nextState.error).toBeNull();
  });

  it('should handle addJob', () => {
    const prevState = { ...initialState, list: [{ id: 1 }] };
    const job = { id: 2 };
    const nextState = reducer(prevState, addJob(job));
    expect(nextState.list).toHaveLength(2);
    expect(nextState.list[1]).toEqual(job);
  });

  it('should handle setSearchQuery and reset page', () => {
    const prevState = { ...initialState, currentPage: 3 };
    const nextState = reducer(prevState, setSearchQuery('dev'));
    expect(nextState.searchQuery).toBe('dev');
    expect(nextState.currentPage).toBe(1);
  });

  it('should handle incrementPage', () => {
    const prevState = { ...initialState, currentPage: 2 };
    const nextState = reducer(prevState, incrementPage());
    expect(nextState.currentPage).toBe(3);
  });

  it('should handle resetPage', () => {
    const prevState = { ...initialState, currentPage: 5 };
    const nextState = reducer(prevState, resetPage());
    expect(nextState.currentPage).toBe(1);
  });
});

describe('jobsSlice selectors', () => {
  const state = {
    jobs: {
      ...initialState,
      list: [{ id: 1 }],
      status: 'succeeded',
      searchQuery: 'abc',
      currentPage: 2,
      itemsPerPage: 10,
    },
  };
  it('selectAllJobs', () => {
    expect(selectAllJobs(state)).toEqual([{ id: 1 }]);
  });
  it('selectJobsStatus', () => {
    expect(selectJobsStatus(state)).toBe('succeeded');
  });
  it('selectSearchQuery', () => {
    expect(selectSearchQuery(state)).toBe('abc');
  });
  it('selectCurrentPage', () => {
    expect(selectCurrentPage(state)).toBe(2);
  });
  it('selectItemsPerPage', () => {
    expect(selectItemsPerPage(state)).toBe(10);
  });
});

describe('jobsSlice async thunk', () => {
  it('should handle fetchJobs.pending', () => {
    const action = { type: fetchJobs.pending.type };
    const state = reducer(initialState, action);
    expect(state.status).toBe('loading');
  });
  it('should handle fetchJobs.fulfilled', () => {
    const jobs = [{ id: 1, title: 'Async' }];
    const action = { type: fetchJobs.fulfilled.type, payload: jobs };
    const state = reducer(initialState, action);
    expect(state.status).toBe('succeeded');
    expect(state.list).toEqual(jobs);
  });
  it('should handle fetchJobs.rejected', () => {
    const action = { type: fetchJobs.rejected.type, error: { message: 'fail' } };
    const state = reducer(initialState, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('fail');
  });
});
