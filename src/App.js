import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './store/features/jobs/jobsSlice';
import './App.css';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import { useSelector } from 'react-redux';
import { selectAllJobs, selectJobsStatus } from './store/features/jobs/jobsSlice';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  // Get jobs from Redux store
  const jobsData = useSelector(selectAllJobs);
  const jobsStatus = useSelector(selectJobsStatus);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Board</h1>
        <p>Find your next career opportunity</p>
        <input
          type="text"
          className="search-input"
          placeholder="Search job titles…"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            dispatch(setSearchQuery(e.target.value));
          }}
        />
      </header>
      <main className="App-main">
        
        <JobList jobs={jobsData} status={jobsStatus} onJobClick={handleJobClick} />
      </main>
      {selectedJob && (
        <JobDetail job={selectedJob} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
