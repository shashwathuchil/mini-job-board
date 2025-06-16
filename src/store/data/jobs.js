const baseJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    postedDate: '2025-06-01',
    description: 'We are looking for a skilled Frontend Developer to join our dynamic team. The ideal candidate will have strong experience with React, JavaScript, and modern web technologies.',
    requirements: [
      'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
      '3+ years of experience with React.js',
      'Experience with popular React workflows (Redux)',
      'Familiarity with RESTful APIs',
      'Understanding of CSS pre-processors'
    ],
    applicationUrl: 'https://techcorp.com/apply/frontend-dev'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'Remote',
    type: 'Full-time',
    postedDate: '2025-06-05',
    description: 'DataSystems is seeking an experienced Backend Engineer to build scalable and maintainable server-side logic, databases, and APIs.',
    requirements: [
      '4+ years of backend development experience',
      'Proficiency in Node.js, Python, or Java',
      'Experience with database design and optimization',
      'Knowledge of cloud services (AWS, Azure, or GCP)',
      'Understanding of server-side templating languages'
    ],
    applicationUrl: 'https://datasystems.io/careers/backend'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'CreativeMinds',
    location: 'New York, NY',
    type: 'Part-time',
    postedDate: '2025-06-10',
    description: 'CreativeMinds is looking for a talented UX/UI Designer who can transform complex problems into intuitive digital experiences.',
    requirements: [
      'Portfolio demonstrating strong UI/UX skills',
      'Experience with design tools like Figma or Adobe XD',
      'Understanding of user-centered design principles',
      'Knowledge of HTML/CSS',
      'Ability to work collaboratively with developers'
    ],
    applicationUrl: 'https://creativeminds.design/jobs'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudNative',
    location: 'Seattle, WA',
    type: 'Contract',
    postedDate: '2025-06-08',
    description: 'CloudNative is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      'Experience with infrastructure-as-code tools like Terraform or CloudFormation',
      'Knowledge of container orchestration (Kubernetes, Docker Swarm)',
      'Familiarity with CI/CD pipelines',
      'Understanding of monitoring and logging systems',
      'Experience with one or more cloud providers (AWS, Azure, GCP)'
    ],
    applicationUrl: 'https://cloudnative.tech/join/devops'
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'TechCorp',
    location: 'Austin, TX',
    type: 'Full-time',
    postedDate: '2025-06-12',
    description: 'TechCorp is looking for a strategic Product Manager to drive the development and launch of innovative products.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile methodologies',
      'Excellent communication and leadership abilities',
      'Technical background preferred'
    ],
    applicationUrl: 'https://techcorp.com/apply/product-manager'
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'DataSystems',
    location: 'Remote',
    type: 'Part-time',
    postedDate: '2025-06-14',
    description: 'Join DataSystems as a Data Scientist to extract insights from complex datasets and develop machine learning models.',
    requirements: [
      'Advanced degree in Computer Science, Statistics, or related field',
      'Experience with data analysis and statistical modeling',
      'Proficiency in Python or R',
      'Knowledge of machine learning algorithms',
      'Experience with data visualization tools'
    ],
    applicationUrl: 'https://datasystems.io/careers/data-scientist'
  },
  {
    id: 7,
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Chicago, IL',
    type: 'Full-time',
    postedDate: '2025-06-07',
    description: 'AppWorks is seeking a talented Mobile Developer to join our team and help build next-generation mobile applications.',
    requirements: [
      'Strong experience with React Native or Flutter',
      'Knowledge of iOS and Android platforms',
      'Understanding of RESTful APIs and mobile architecture',
      'Experience with state management libraries',
      'Passion for building high-performance mobile UIs'
    ],
    applicationUrl: 'https://appworks.dev/jobs/mobile'
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'CloudNative',
    location: 'Remote',
    type: 'Contract',
    postedDate: '2025-06-09',
    description: 'CloudNative is looking for a detail-oriented QA Engineer to ensure the quality of our cloud services and applications.',
    requirements: [
      'Experience in software quality assurance',
      'Knowledge of testing methodologies',
      'Familiarity with automation testing tools',
      'Understanding of CI/CD practices',
      'Good communication skills'
    ],
    applicationUrl: 'https://cloudnative.tech/join/qa'
  }
];

// Automatically duplicate base jobs to reach 100 entries with unique ids & titles
const jobs = [...baseJobs];
for (let i = baseJobs.length + 1; i <= 100; i++) {
  const template = baseJobs[(i - 1) % baseJobs.length];
  jobs.push({
    ...template,
    id: i,
    title: `${template.title}`,
  });
}

export default jobs;
