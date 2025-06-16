import React, { useState } from 'react';
import './App.css';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import { useSelector } from 'react-redux';
import { selectAllJobs } from './store/features/jobs/jobsSlice';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Get jobs from Redux store
  const jobsData = useSelector(selectAllJobs);

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
      </header>
      <main className="App-main">
        <JobList jobs={jobsData} onJobClick={handleJobClick} />
      </main>
      {selectedJob && (
        <JobDetail job={selectedJob} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
