import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { format } from 'date-fns';
import type { Job } from '../types/job';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = parseInt(id || '0');
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundJob = jobs.find((j) => j.id === jobId);
    if (foundJob) {
      setJob(foundJob);
    }
    setIsLoading(false);
  }, [jobs, jobId]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Job not found</p>
      </div>
    );
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
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="mb-2">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <a 
          href="#" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply for this position
        </a>
      </div>
    </div>
  );
};

export default JobDetails;
