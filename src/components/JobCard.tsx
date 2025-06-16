import React from 'react';
import type { Job } from '../types/job';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formattedDate = format(new Date(job.postedDate), 'MMM d, yyyy');

  return (
    <Link to={`/job/${job.id}`} className="block p-6 bg-white rounded-lg shadow hover:bg-gray-50">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-4">{job.company}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {job.type}
        </span>
      </div>
      <p className="text-gray-500 mb-2">{job.location}</p>
      <p className="text-sm text-gray-400">Posted on {formattedDate}</p>
    </Link>
  );
};

export default JobCard;
