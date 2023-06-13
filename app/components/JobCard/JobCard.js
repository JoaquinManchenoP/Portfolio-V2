import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function JobCard({
  jobTitle,
  jobDescription,
  image,
  website,
  github,
  demo,
  technologies,
}) {
  return (
    <div className="card w-full bg-greem-500  rounded-lg shadow-md overflow-hidden bg-gray-700 ">
      <div className="flex space-x-3">
        <div className="w-1/3 flex justify-center my-8">
          <Image
            src={image}
            width="200"
            height="300"
            className="object-cover rounded-md "
          />
        </div>
        <div className="card-text p-4 w-2/3 space-y-4 text-white ">
          <h3 className="text-2xl font-light">{jobTitle}</h3>
          <p className="text-sm tracking-wide">{jobDescription}</p>
          <div className="text-sm">
            {technologies ? <p>{technologies}</p> : <p></p>}
          </div>
          <div className="buttons w-full space-x-3 pt-4">
            {demo ? (
              <>
                <Link href={github}>
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Code
                  </button>
                </Link>
                <Link href={website}>
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Demo
                  </button>
                </Link>
              </>
            ) : (
              <Link href={website}>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Website
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
