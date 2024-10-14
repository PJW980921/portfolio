import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HomeButton = () => {
  return (
    <Link
      href={'/'}
      target={'_self'}
      className="group text-foreground rounded-full flex items-center justify-center text-black bg-background/20 border border-black border-solid backdrop-blur-[6px] hover:shadow-xl  hover:shadow-gray-400
      custom-bg fixed top-4 left-4 w-fit self-start"
      aria-label={'home'}
    >
      <span className="relative  w-14 h-14 p-4  text-black  group-hover:text-accent">
        <Home className="w-full h-auto" />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-black text-sm rounded-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
    </Link>
  );
};

export default HomeButton;
