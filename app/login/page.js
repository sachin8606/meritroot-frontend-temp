"use client";

import Input from '@/components/Input';
import React, { useState } from 'react'; 
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import MainNavbar from '@/components/MainNavbar';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navBorderColor = "border-customRed";
  const navTextColor = "text-customRed";
  const imageSrc = "/images/meritroot-landslide-logo.svg";

  return (
    <>
      <div className="relative h-screen bg-move-login">
        <MainNavbar navBorderColor={navBorderColor} navTextColor={navTextColor} imageSrc={imageSrc} />
        <Image
          src="/images/main-bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        
        <main className="flex items-center justify-center h-full mx-4">
          <div
            className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-8 max-w-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            style={{
              boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
              borderRadius: '20px',
              backdropFilter: 'blur(15px)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.5)',
            }}
          >
            <h1 className="text-[#424648] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-2">
              Welcome back
            </h1>
            <p className="text-gray-500 text-center mb-6">
              Glad to see you again <span role="img" aria-label="wave">👋</span> Login to your account below
            </p>

          
            <button
              className="flex items-center justify-center w-full space-x-2 border border-gray-300 bg-white bg-opacity-60 rounded-full py-2 hover:bg-opacity-80 transition duration-200 mb-4"
              style={{
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Image
                src="/images/google-icon.png"
                alt="Google logo"
                width={20}
                height={20}
              />
              <span className="text-gray-700 font-semibold">Continue with Google</span>
            </button>

      
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <form className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Email"
              />
              <div className="relative w-full h-12">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-12 text-lg p-2 md:p-4 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white font-semibold rounded-full py-2 hover:bg-red-700 transition duration-200 flex items-center justify-center space-x-2"
                style={{
                  boxShadow: '0px 8px 16px rgba(255, 0, 0, 0.3)',
                }}
              >
                <span>Login</span>
                <FaLock />
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
