import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobCard from './JobCard';

describe('JobCard', () => {
  const job = {
    id: 1,
    title: 'QA Engineer',
    company: 'TestCorp',
    location: 'Hybrid',
    type: 'Contract',
    postedDate: '2023-06-15',
  };

  it('renders all job fields and formatted date', () => {
    render(<JobCard job={job} onClick={() => {}} />);
    expect(screen.getByText('QA Engineer')).toBeInTheDocument();
    expect(screen.getByText('TestCorp')).toBeInTheDocument();
    expect(screen.getByText('Hybrid')).toBeInTheDocument();
    expect(screen.getByText('Contract')).toBeInTheDocument();
    expect(screen.getByText(/Posted:/)).toHaveTextContent('Posted: Jun 15, 2023');
  });

  it('calls onClick with job when clicked', () => {
    const handleClick = jest.fn();
    render(<JobCard job={job} onClick={handleClick} />);
    fireEvent.click(screen.getByText('QA Engineer'));
    expect(handleClick).toHaveBeenCalledWith(job);
  });
});
