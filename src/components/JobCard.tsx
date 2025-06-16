import React from 'react';
import type { Job } from '../types/job';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setPage } from '../store/jobSlice';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formattedDate = format(new Date(job.postedDate), 'MMM d, yyyy');
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.jobs);

  return (
    <div className="space-y-4">
      <Link to={`/job/${job.id}`} className="block p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-4">{job.company}</span>
          <span className="bg-ankr-secondary/20 text-ankr-secondary text-sm font-medium px-2.5 py-0.5 rounded">
            {job.type}
          </span>
        </div>
        <p className="text-gray-500 mb-2">{job.location}</p>
        <p className="text-sm text-gray-400">Posted on {formattedDate}</p>
      </Link>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => currentPage > 1 && dispatch(setPage(currentPage - 1))}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => currentPage < totalPages && dispatch(setPage(currentPage + 1))}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
