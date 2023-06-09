import React from 'react';
import JobCard from '../compnents/JobCard/JobCard';
import Logo from '../compnents/Logo/Logo';
import jobData from '../compnents/JobCard/jobData';

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="experience h-screen">
        <h1 className="text-4xl my-7">Experience</h1>
        <div className="project__container space-y-6">
          {jobData.map((item, index) => (
            <JobCard job={item} key={index} />
          ))}
        </div>
        <div className="projects h-screen">
          <h1 className="text-4xl my-7">Projects</h1>
          <div className="project__container space-y-6">
            <span>Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
