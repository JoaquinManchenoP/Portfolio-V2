import React from 'react';
import Image from 'next/image';
import jobData from './jobData';

export default function JobCard({ job }) {
  console.log(job);
  return (
    <div className="card w-full bg-greem-500  rounded-lg shadow-md overflow-hidden bg-gray-700 ">
      <div className="flex space-x-3">
        <div className="w-1/3 flex justify-center my-8">
          <Image
            src={job.image}
            width="200"
            height="300"
            className="object-cover rounded-md "
          />
        </div>
        <div className="card-text p-4 w-2/3 space-y-4 text-white ">
          <h3 className="text-lg">Card Title</h3>
          <p className="text-sm">{job.jobDescription}</p>
          <div className="buttons w-full space-x-3 pt-4">
            <button className="bg-blue-400 h-9 w-16 hover:bg-blue-500 text-white font-bold py-2 px-4  rounded">
              Git
            </button>
            <button className="bg-blue-400 h-9 w-16 hover:bg-blue-500 text-white font-bold py-2 px-4  rounded">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
