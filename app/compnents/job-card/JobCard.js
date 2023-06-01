import React from 'react';
import Image from 'next/image';

export default function JobCard({ backgroundImage }) {
  return (
    <div className="card min-h-[120px] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex">
        <div className="w-1/3 flex items-center justify-center">
          <Image
            src={backgroundImage}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="card-text p-4 w-2/3 space-y-2">
          <h3 className="text-gray-600 text-lg">Card Title</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, quis, alias soluta adipisci, obcaecati labore
            asperiores id nostrum eos in sed. Incidunt reprehenderit, modi porro
            eius quas earum vero saepe, dolorem doloremque iusto minus
            dignissimos dicta ipsam voluptatem provident illo atque molestiae
            non ratione voluptatibus alias sit esse repellat. Modi.
          </p>
        </div>
      </div>
    </div>
  );
}
