export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  postedDate: string;
  description: string;
  requirements: string[];
}

export type JobType = 'Full-time' | 'Part-time' | 'Contract';
