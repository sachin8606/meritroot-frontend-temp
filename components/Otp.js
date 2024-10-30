// "use client";

// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// const Otp = ({ textColor, textColor2, headingColor, bgColor,hoverTextColor, hoverColor, onSubmit }) => { // Add onSubmit here
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const router = useRouter();

//   const handleInputChange = (e, index) => {
//     const { value } = e.target;
//     if (/^[0-9]$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (e.target.nextSibling) {
//         e.target.nextSibling.focus();
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otpCode = otp.join('');
//     console.log('OTP submitted:', otpCode);

//     if (onSubmit) onSubmit(); // This will now work as onSubmit is passed as a prop
//   };

//   return (
//     <div>
//       <main className="flex items-center justify-center h-full">
//         <div
//           className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-12 max-w-lg w-full"
//           style={{
//             boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
//             borderRadius: '20px',
//             backdropFilter: 'blur(15px)',
//             background: 'rgba(255, 255, 255, 0.2)',
//             border: '3px solid rgba(255, 255, 255, 0.5)',
//           }}
//         >
//           <h1 className={`${headingColor} text-3xl font-semibold mb-6 text-center`}>
//             Enter OTP Code
//           </h1>

//           <form
//             className="flex flex-col space-y-6 items-center"
//             onSubmit={handleSubmit}
//           >
//             <div className="flex space-x-6">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleInputChange(e, index)}
//                   className="w-16 h-20 bg-white text-2xl text-center rounded-lg shadow-lg focus:outline-none"
//                   aria-label={`OTP digit ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               type="submit"
//               className={`${bgColor} text-white font-semibold rounded-full py-4 text-xl ${hoverColor} transition duration-200 flex items-center justify-center w-52`}
//             >
//               Submit
//             </button>
//           </form>

//           <p className={`text-center mt-6 ${textColor}`}>
//             Didn’t receive any code?{' '}
//             <a href="#" className={`${textColor2} ${hoverTextColor} underline`}>
//               Resend
//             </a>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Otp;






"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Otp = ({ textColor, textColor2, headingColor, bgColor, hoverTextColor, hoverColor, onSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const router = useRouter();

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    console.log('OTP submitted:', otpCode);

    if (onSubmit) onSubmit(); // This will now work as onSubmit is passed as a prop
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main className="w-full max-w-lg">
        <div
          className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-8 md:p-12"
          style={{
            boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            backdropFilter: 'blur(15px)',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '3px solid rgba(255, 255, 255, 0.5)',
          }}
        >
          <h1 className={`${headingColor} text-3xl font-semibold mb-6 text-center`}>
            Enter OTP Code
          </h1>

          <form
            className="flex flex-col space-y-6 items-center"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-16 h-20 bg-white text-2xl text-center rounded-lg shadow-lg focus:outline-none"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="submit"
              className={`${bgColor} text-white font-semibold rounded-full py-4 text-xl ${hoverColor} transition duration-200 flex items-center justify-center w-full md:w-52`}
            >
              Submit
            </button>
          </form>

          <p className={`text-center mt-6 ${textColor}`}>
            Didn’t receive any code?{' '}
            <a href="#" className={`${textColor2} ${hoverTextColor} underline`}>
              Resend
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Otp;
