"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Summary({ headingColor, titleColor, textColor, bgColor, hoverColor, onRegisterClick }) {
  const [selectGrade, setSelectGrade] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedGrade = localStorage.getItem("grade");
      if (storedGrade) {
        setSelectGrade(storedGrade);
      }
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (onRegisterClick) onRegisterClick();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col lg:flex-row border-4 border-white/50 overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <Image
            src="/images/bag.png"
            alt="Student"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            priority
          />
        </div>
        
        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-4 lg:py-4 flex flex-col space-y-2">
          <h1 className={`${headingColor} text-2xl sm:text-3xl font-semibold mb-4`}>
            Registration Summary
          </h1>

          <div className="space-y-4">
            <div>
              <p className={`text-sm ${titleColor}`}>Student Name</p>
              <p className={`text-lg font-bold ${textColor}`}>Name</p>
            </div>

            <div>
              <p className={`text-sm ${titleColor}`}>Course Title</p>
              <p className={`text-lg font-bold ${textColor}`}>Academic</p>
            </div>

            <div>
              <p className={`text-sm ${titleColor}`}>Class Level</p>
              <p className={`text-lg font-bold ${textColor}`}>{selectGrade}</p>
            </div>

            <div>
              <p className={`text-sm ${titleColor}`}>Academic Detail</p>
              <p className={`text-lg font-bold ${textColor}`}>CBSE</p>
            </div>

            <div>
              <p className={`text-sm ${titleColor}`}>Course Offer</p>
              <p className={`text-lg font-bold ${textColor}`}>Day Scholar</p>
            </div>
          </div>

          {/* Register Button */}
          <button
            className={`mt-6 px-6 py-3 ${bgColor} text-white text-md font-bold rounded-full transition duration-200 ${hoverColor} flex items-center justify-center`}
            onClick={handleOnSubmit}
          >
            <span>Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}




