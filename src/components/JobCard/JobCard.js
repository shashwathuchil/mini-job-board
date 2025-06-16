import React from 'react';
import './JobCard.css';

const JobCard = ({ job, onClick }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="job-card" onClick={() => onClick(job)}>
      <h3 className="job-title">{job.title}</h3>
      <div className="job-company">{job.company}</div>
      <div className="job-details">
        <span className="job-location">{job.location}</span>
        <span className="job-type">{job.type}</span>
      </div>
      <div className="job-date">Posted: {formatDate(job.postedDate)}</div>
    </div>
  );
};

export default JobCard;
