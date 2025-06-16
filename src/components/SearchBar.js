import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/features/jobs/jobsSlice';

const SearchBar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search job titles…"
      value={text}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
