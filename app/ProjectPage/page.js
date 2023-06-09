import React from 'react';
import JobCard from '../compnents/JobCard/JobCard';
import Logo from '../compnents/Logo/Logo';

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="experience h-screen">
        <h1 className="text-4xl my-7">Experience</h1>
        <div className="project__container space-y-6">
          <JobCard
            job={'mednet'}
            jobTitle={'Mednet Solutions'}
            jobDescription={
              'Mednet is a company located in Minnessota that builds a software used for conducting clinical trials. I work modernizing the UI and backend of the aplication. Migrated multiple components from tpl to react.js and re-disigned and implemented various pages of the application while constantly building new features.'
            }
            image={'/images/mednet.png'}
            website={'https://www.mednetsolutions.com/'}
            demo={false}
          />
          <JobCard
            job={'Dubow'}
            jobTitle={'Dubow Textile'}
            jobDescription={
              "Dubow is a textile manufacturing company located in Minnesota.The companies web applicaiton is used by costumers to manage and customize their orders, while the company's api provides de ability for customer's to access the same data from outside the dubow aplication such as the clients own custom applications.I Worked fixing customer issues and customer suport as well as implementing new features."
            }
            image={'/images/dubowWebsite.png'}
            website={'https://dubowtextile.com/'}
            demo={false}
          />
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
