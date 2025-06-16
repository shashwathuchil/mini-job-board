import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setCompanyFilter, setTypeFilter, clearFilters } from '../store/jobSlice';

const JobFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { companyFilter, typeFilter } = useSelector((state: RootState) => state.jobs);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompanyFilter(e.target.value));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTypeFilter(e.target.value as 'Full-time' | 'Part-time' | 'Contract'));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={companyFilter}
          onChange={handleCompanyChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Filter by company..."
        />
      </div>

      <div className="flex-1">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
          Job Type
        </label>
        <select
          id="type"
          value={typeFilter || ''}
          onChange={handleTypeChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <button
        onClick={handleClearFilters}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default JobFilters;
