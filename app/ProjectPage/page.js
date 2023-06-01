import React from 'react';
import JobCard from '../compnents/job-card/JobCard';
import Image from 'next/image';

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-[600px] p-4">
      <div className="h-screen p-4 space-y-2">
        <h1 className="text-2xl font-bold mb-4">Main Section</h1>
        <div className="card min-h-[120px] bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex">
            <div className="w-1/3">
              <Image
                width={50}
                height={50}
                src="/mednet.png"
                className="object-cover  bg-green-300 "
                alt="Picture of the author"
              />
            </div>
            <div className="card-text p-4 w-2/3">
              <h3 className="text-gray-600 text-lg">Card Title</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos, quis, alias soluta adipisci, obcaecati labore
                asperiores id nostrum eos in sed. Incidunt reprehenderit, modi
                porro eius quas earum vero saepe, dolorem doloremque iusto minus
                dignissimos dicta ipsam voluptatem provident illo atque
                molestiae non ratione voluptatibus alias sit esse repellat.
                Modi.
              </p>
            </div>
          </div>
        </div>
        <JobCard backgroundImage={'/mednet.png'} />
      </div>
    </div>
  );
}
