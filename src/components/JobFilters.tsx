import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCompanyFilter, setTypeFilter, clearFilters, setSearchQuery } from '../store/jobSlice';
import type { JobType } from '../types/job';

const JobFilters = () => {
  const dispatch = useAppDispatch();
  const companyFilter = useAppSelector((state: any) => state.jobs.companyFilter);
  const typeFilter = useAppSelector((state: any) => state.jobs.typeFilter);
  const [searchQuery, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClearFilters = () => {
    setSearch('');
    dispatch(clearFilters());
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ankr-primary focus:border-ankr-primary"
          placeholder="Search jobs..."
        />
      </div>

      <div className="flex-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={companyFilter}
          onChange={(e) => dispatch(setCompanyFilter(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ankr-primary focus:border-ankr-primary"
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
          onChange={(e) => dispatch(setTypeFilter(e.target.value as JobType))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ankr-primary focus:border-ankr-primary"
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
