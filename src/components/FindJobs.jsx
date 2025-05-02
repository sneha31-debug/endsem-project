import React, { useState } from 'react';
import './FindJobs.css';

const jobs = [
  {
    title: 'Product Designer',
    company: 'Dropbox',
    location: 'Remote - US',
    type: 'Full Time',
    tags: ['Design', 'UX'],
    description: 'Create user-centered designs at Dropbox that impact millions.',
  },
  {
    title: 'Frontend Developer',
    company: 'Shopify',
    location: 'Toronto, Canada',
    type: 'Remote',
    tags: ['React', 'JavaScript'],
    description: 'Join our team to build modern e-commerce solutions.',
  },
  {
    title: 'Marketing Lead',
    company: 'Notion',
    location: 'San Francisco, CA',
    type: 'Full Time',
    tags: ['Marketing', 'SEO'],
    description: 'Drive growth and brand awareness for Notion.',
  },
  {
    title: 'Data Analyst',
    company: 'Airbnb',
    location: 'Berlin, Germany',
    type: 'Contract',
    tags: ['Data', 'SQL'],
    description: 'Help make data-driven decisions across teams.',
  },
];

const FindJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState({});

  const handleApply = (index) => {
    setAppliedJobs((prev) => ({
      ...prev,
      [index]: true,
    }));
    alert('Applied Successfully!');
  };

  return (
    <div className="find-jobs-container">
      <h1 className="find-jobs-title">Available Jobs</h1>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.title}</h2>
              <span className="job-type">{job.type}</span>
            </div>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description}</p>
            <div className="job-tags">
              {job.tags.map((tag, i) => (
                <span key={i} className="job-tag">{tag}</span>
              ))}
            </div>

            <button
              className={`apply-button ${appliedJobs[index] ? 'applied' : ''}`}
              onClick={() => handleApply(index)}
              disabled={appliedJobs[index]}
            >
              {appliedJobs[index] ? 'Applied' : 'Apply Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;


