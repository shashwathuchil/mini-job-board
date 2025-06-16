import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobDetail from './JobDetail';

describe('JobDetail', () => {
  const job = {
    title: 'Backend Developer',
    company: 'BetaTech',
    location: 'Remote',
    type: 'Full-Time',
    postedDate: '2023-06-01',
    description: 'Build APIs',
    requirements: ['Node.js', 'REST', 'MongoDB'],
    applicationUrl: 'https://apply.betatech.com',
  };

  it('renders job details with requirements and apply link', () => {
    render(<JobDetail job={job} onClose={jest.fn()} />);
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('BetaTech')).toBeInTheDocument();
    expect(screen.getByText(/Remote/)).toBeInTheDocument();
    expect(screen.getByText(/Full-Time/)).toBeInTheDocument();
    expect(screen.getByText('Build APIs')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('REST')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /apply now/i })).toHaveAttribute('href', job.applicationUrl);
    expect(screen.getByText(/Posted:/)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<JobDetail job={job} onClose={onClose} />);
    fireEvent.click(screen.getByRole('button', { name: /×/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it('renders nothing if job is not provided', () => {
    const { container } = render(<JobDetail job={null} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });
});
