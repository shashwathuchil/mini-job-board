import store from './index';
import jobsReducer, { setJobs } from './features/jobs/jobsSlice';

describe('Redux store', () => {
  it('should configure store with jobs reducer', () => {
    expect(store.getState()).toHaveProperty('jobs');
  });

  it('should update jobs state with setJobs action', () => {
    const jobs = [{ id: 1, title: 'Test Job' }];
    store.dispatch(setJobs(jobs));
    expect(store.getState().jobs.list).toEqual(jobs);
    expect(store.getState().jobs.status).toBe('succeeded');
  });

  it('should have correct initial state', () => {
    const state = store.getState().jobs;
    expect(state).toHaveProperty('list');
    expect(state).toHaveProperty('status');
    expect(state).toHaveProperty('error');
    expect(state).toHaveProperty('searchQuery');
    expect(state).toHaveProperty('currentPage');
    expect(state).toHaveProperty('itemsPerPage');
  });
});
