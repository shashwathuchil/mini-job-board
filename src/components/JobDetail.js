import React from 'react';
import './JobDetail.css';

const JobDetail = ({ job, onClose }) => {
  if (!job) return null;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="job-detail-overlay">
      <div className="job-detail-modal">
        <div className="job-detail-header">
          <h2>{job.title}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="job-detail-company">
          <strong>{job.company}</strong> • {job.location} • {job.type}
        </div>
        
        <div className="job-detail-posted">
          Posted: {formatDate(job.postedDate)}
        </div>
        
        <div className="job-detail-section">
          <h3>Description</h3>
          <p>{job.description}</p>
        </div>
        
        <div className="job-detail-section">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="job-detail-actions">
          <a 
            href={job.applicationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apply-button"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
