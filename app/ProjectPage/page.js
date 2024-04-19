import React from 'react';
import JobCard from '../components/JobCard/JobCard';
import Logo from '../components/Logo/Logo';

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
          <div className="project__container space-y-6 pb-10">
            <JobCard
              job={'Job Board'}
              jobTitle={'Job Board'}
              jobDescription={
                'A website that allows users to find technical jobs, as well as post new jobs and manage them.'
              }
              technologies={
                'Next.js, tailwind CSS, Framer Motion, Firebase, Vercel'
              }
              image={'/images/techbridge.png'}
              website={'https://job-board-v2.vercel.app/'}
              github={'https://github.com/JoaquinManchenoP/job-board-v2'}
              demo={true}
            />
            <JobCard
              job={'Video Game Store'}
              jobTitle={'Video Game Store'}
              jobDescription={
                'A website that consumes and displays data from rawg.io api and allows the user to search and get basic information of the latest videogames on ther market.'
              }
              technologies={'Next.js, tailwind CSS, Framer Motion'}
              image={'/images/videogamestore.png'}
              website={'https://videogamestore-next.vercel.app/'}
              github={'https://github.com/JoaquinManchenoP/videogamestore-next'}
              demo={true}
            />
            <JobCard
              job={'Movie Watch List'}
              jobTitle={'Movie Watch List'}
              jobDescription={
                'A movie watchlist app that allows users to search movies from the TMDB Api as well as creating a watchlist from which users can add and remove their favorite movies.'
              }
              technologies={'React.js, Firebase'}
              image={'/images/movieapp.png'}
              website={'https://react-movie-app-f0d0c.web.app/?'}
              github={'https://github.com/JoaquinManchenoP/react-movie-app'}
              demo={true}
            />
            <JobCard
              job={'Amazon Clone'}
              jobTitle={'Amazon Clone'}
              jobDescription={
                'An app that mimics the design and basic functionality of amazon.com where users can register,login, add items to the cart, remove items from the cart and calculate the total cost.'
              }
              technologies={'React.js, Firebase'}
              image={'/images/amazonclone.png'}
              website={'https://clone-project-80839.firebaseapp.com/'}
              github={
                'https://github.com/JoaquinManchenoP/amazon-clone-project'
              }
              demo={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
