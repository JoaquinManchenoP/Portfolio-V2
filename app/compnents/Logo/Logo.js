import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link href={'/'}>
        <div className="h-20 w-full flex text-2xl items-end border-b">
          <div className="first__name font-extralight">Joaquin</div>
          <div className="last__name font-bold">Mancheno</div>
        </div>
      </Link>
    </>
  );
}
