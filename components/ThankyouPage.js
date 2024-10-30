"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { VscVerifiedFilled } from 'react-icons/vsc';

const ThankYouPage = ({ bgColor, textColor, headingColor, hoverColor }) => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main
        className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-8 max-w-lg w-full"
        style={{
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
          borderRadius: '20px',
          backdropFilter: 'blur(15px)',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '3px solid rgba(255, 255, 255, 0.5)',
        }}
      >
        <h1 className={`${headingColor} text-2xl md:text-3xl font-semibold mb-4 text-center`}>
          Thank You for Registering!
        </h1>

        <div className="flex justify-center mb-4">
          <VscVerifiedFilled size={60} className="text-green-500" />
        </div>

        <p className={`${textColor} text-base md:text-lg text-center mb-4`}>
          Your registration has been successfully completed.
        </p>
        <div className="flex justify-center">
          <button
            className={`${bgColor} text-white font-semibold rounded-full py-3 px-5 text-lg md:text-xl ${hoverColor} transition duration-200`}
            onClick={handleGoToDashboard}
          >
            Go to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;

