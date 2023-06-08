import React from 'react';
import Image from 'next/image';

export default function JobCard({ backgroundImage }) {
  return (
    <div className="card w-full bg-greem-500  rounded-lg shadow-md overflow-hidden bg-gray-700 ">
      <div className="flex space-x-3">
        <div className="w-1/3 flex justify-center my-8">
          <Image
            src={backgroundImage}
            width="300"
            height="300"
            className="object-cover "
          />
        </div>
        <div className="card-text p-4 w-2/3 space-y-4 text-white ">
          <h3 className="text-lg">Card Title</h3>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, quis, alias soluta adipisci, obcaecati labore
            asperiores id nostrum eos in sed. Incidunt reprehenderit, modi porro
            eius quas earum vero saepe, dolorem doloremque iusto minus
            dignissimos dicta ipsam voluptatem provident illo atque molestiae
            non ratione voluptatibus alias sit esse repellat. Modi.
          </p>
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
