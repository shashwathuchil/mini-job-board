import jobs from './jobs';

describe('jobs data', () => {
  it('should export an array of 100 jobs', () => {
    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs).toHaveLength(100);
  });

  it('each job should have required fields', () => {
    for (const job of jobs) {
      expect(job).toHaveProperty('id');
      expect(job).toHaveProperty('title');
      expect(job).toHaveProperty('company');
      expect(job).toHaveProperty('location');
      expect(job).toHaveProperty('type');
      expect(job).toHaveProperty('postedDate');
      expect(job).toHaveProperty('description');
      expect(job).toHaveProperty('requirements');
      expect(Array.isArray(job.requirements)).toBe(true);
      expect(job).toHaveProperty('applicationUrl');
    }
  });

  it('each job id should be unique', () => {
    const ids = jobs.map(j => j.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(jobs.length);
  });

  it('each job title should be a non-empty string', () => {
    for (const job of jobs) {
      expect(typeof job.title).toBe('string');
      expect(job.title.length).toBeGreaterThan(0);
    }
  });
});
