'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLock } from 'react-icons/fa';

const MainNavbar = ({ imageSrc, navBorderColor, navTextColor }) => {
  return (
    <header className="absolute w-full top-5 px-6 sm:px-10 z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src={imageSrc}
            alt="Meritroot Logo"
            width={200}
            height={100}
            priority={true}
            className="w-44 sm:w-52 md:w-52"
          />
        </Link>

        <Link
          href="/login"
          className={`flex items-center px-4 py-1 border-2 ${navBorderColor} ${navTextColor} font-medium rounded-full text-lg sm:text-xl transition-colors duration-300 hover:bg-red-600 hover:text-white`}
        >
          <FaLock className="mr-2" />
          Login
        </Link>
      </nav>
    </header>
  );
};

export default MainNavbar;
