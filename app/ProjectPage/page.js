import React from 'react';
import JobCard from '../compnents/job-card/JobCard';
import Logo from '../compnents/Logo/Logo';

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="experience h-screen">
        <h1 className="text-4xl my-7">Experience</h1>
        <div className="project__container space-y-6">
          <JobCard backgroundImage={'/images/mednet.png'} />
          <JobCard backgroundImage={'/images/mednet.png'} />
        </div>
        <div className="projects h-screen">
          <h1 className="text-4xl my-7">Projects</h1>
          <div className="project__container space-y-6">
            <JobCard backgroundImage={'/images/mednet.png'} />
            <JobCard backgroundImage={'/images/mednet.png'} />
          </div>
        </div>
      </div>
    </div>
  );
}
