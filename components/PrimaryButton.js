import Link from 'next/link';
import React from 'react';

const PrimaryButton = ({ text, href }) => {
  return (
    <Link href={href}>
    <button
      className={`px-6 py-2 bg-customRed text-white hover:bg-red-700 font-medium mt-10 rounded-full text-lg transition-colors duration-300`}
    >
      {text}
    </button>
    </Link>
  );
};

export default PrimaryButton;
