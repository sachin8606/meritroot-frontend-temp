"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Signup from '@/components/Signup';
import MainNavbar from '@/components/MainNavbar';
import Otp from '@/components/Otp';
import Summary from '@/components/Summary';
import ThankYouPage from '@/components/ThankyouPage';

const Page = () => {
  const [step, setStep] = useState('signup'); 
  const searchParams = useSearchParams();
  const course = searchParams.get('course');


  const backgroundImage = {
    jee: '/images/jee-bg.webp',
    neet: '/images/neet-bg.webp',
    academic: '/images/academic-bg.webp',
  }[course] || '/images/default-bg.jpg';

  const logoSrc = {
    jee: "/images/meritroot-landslide-logo.svg",
    neet: "/images/meritroot-landslide-logo.svg",
    academic: "/images/meritroot-landslide-white.svg",
  }[course] || "/images/meritroot-landslide-logo.svg";

  let navBorderColor = course === 'academic' ? "border-white" : "border-customRed";
  let navTextColor = course === 'academic' ? "text-white" : "text-customRed";

  if (!course) return null;


  const colorConfig = {
    jee: {
      textColor: "text-gray-700",
      textColor2: "text-yellow-500",
      headingColor: "text-red-700",
      paragraphColor: "text-gray-600",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      hoverTextColor: "hover:text-red-700"
    },
    neet: {
      textColor: "text-gray-700",
      textColor2: "text-green-600",
      headingColor: "text-teal-700",
      paragraphColor: "text-gray-600",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-slate-700",
      hoverTextColor: "hover:text-slate-700"
    },
    academic: {
      textColor: "text-gray-100",
      textColor2: "text-white",
      headingColor: "text-white",
      paragraphColor: "text-gray-300",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
      hoverTextColor: "hover:text-blue-800"
    }
  }[course];

  
  const handleSignupSubmit = () => setStep('otp');
  const handleOtpSubmit = () => setStep('summary');
  const handleRegisterClick = () => setStep('thankyou');

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <MainNavbar
        imageSrc={logoSrc}
        navBorderColor={navBorderColor}
        navTextColor={navTextColor}
      />
      <Image
        src={backgroundImage}
        alt={`${course} Background`}
        fill
        className="-z-10 object-cover"
        quality={70}
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-md z-0"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        {step === 'signup' && (
          <Signup
            {...colorConfig}
            onLoginClick={() => {}}
            onSubmit={handleSignupSubmit}
          />
        )}
        {step === 'otp' && (
          <Otp
            {...colorConfig}
            onSubmit={handleOtpSubmit} 
          />
        )}
        {step === 'summary' && (
          <Summary
            {...colorConfig}
            onRegisterClick={handleRegisterClick}
          />
        )}
        {step === 'thankyou' && (
          <ThankYouPage
            {...colorConfig}
          />
        )}
      </div>
    </div>
  );
};

export default Page;


