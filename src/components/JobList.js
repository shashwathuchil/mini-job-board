import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, selectJobsStatus } from '../store/features/jobs/jobsSlice';
import JobCard from './JobCard';
import './JobList.css';

const JobList = ({ jobs, onJobClick }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectJobsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs());
    }
  }, [status, dispatch]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    company: '',
    type: ''
  });
  
  // Get unique companies for the dropdown
  const companies = [...new Set(jobs.map(job => job.company))];
  
  // Get unique job types for the dropdown
  const jobTypes = [...new Set(jobs.map(job => job.type))];
  
  useEffect(() => {
    // Filter jobs based on selected filters
    let result = [...jobs];
    
    if (filters.company) {
      result = result.filter(job => job.company === filters.company);
    }
    
    if (filters.type) {
      result = result.filter(job => job.type === filters.type);
    }
    
    setFilteredJobs(result);
  }, [filters, jobs]);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      company: '',
      type: ''
    });
  };
  
  if (status === 'loading') {
    return <div className="job-list-container"><p>Loading jobs…</p></div>;
  }

  if (status === 'failed') {
    return <div className="job-list-container"><p>Failed to load jobs.</p></div>;
  }

  return (
    <div className="job-list-container">
      <div className="filters">
        <h2>Filter Jobs</h2>
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="company">Company</label>
            <select 
              name="company" 
              id="company" 
              value={filters.company} 
              onChange={handleFilterChange}
            >
              <option value="">All Companies</option>
              {companies.map(company => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="type">Job Type</label>
            <select 
              name="type" 
              id="type" 
              value={filters.type} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <button className="clear-filters" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      
      <div className="jobs-container">
        <h2>Available Positions ({filteredJobs.length})</h2>
        {filteredJobs.length === 0 ? (
          <div className="no-jobs">No jobs found matching your filters.</div>
        ) : (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} onClick={onJobClick} />
          ))
        )}
      </div>
    </div>
  );
};

export default JobList;
