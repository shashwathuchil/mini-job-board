import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { format } from 'date-fns';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = parseInt(id || '0');
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return <div className="text-center py-12">Job not found</div>;
  }

  const formattedDate = format(new Date(job.postedDate), 'MMM d, yyyy');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
      <div className="flex items-center mb-6">
        <span className="text-xl text-gray-600 mr-4">{job.company}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {job.type}
        </span>
      </div>
      <p className="text-gray-500 mb-4">{job.location}</p>
      <p className="text-sm text-gray-400 mb-8">Posted on {formattedDate}</p>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Description</h2>
        <p className="text-gray-600">{job.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Requirements</h2>
        <ul className="space-y-2">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-gray-600">• {req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
