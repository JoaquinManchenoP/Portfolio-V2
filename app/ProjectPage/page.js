import React from 'react';
import JobCard from '../compnents/job-card/JobCard';
import Logo from '../../app/components/logo';

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-[700px] p-4 bg-purple-300">
      <Logo />
      <div className="h-screen">
        <h1 className="text-2xl font-bold mb-4">Projects & Experience</h1>
        <div className="project__container space-y-4">
          <JobCard backgroundImage={'/images/mednet.png'} />
          <JobCard backgroundImage={'/images/mednet.png'} />
        </div>
      </div>
    </div>
  );
}
