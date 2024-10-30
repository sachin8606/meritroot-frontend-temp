// import React from "react";
// import { FaUserPlus } from "react-icons/fa";
// import Input from "@/components/Input";
// import { useRouter } from 'next/navigation';
// import Image from "next/image";
// import PhoneInput from "./PhoneInput";

// const Signup = ({ textColor, textColor2, headingColor, paragraphColor, bgColor, hoverColor, hoverTextColor, onLoginClick, onSubmit }) => {
//   const router = useRouter();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) onSubmit();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <main className="flex flex-col md:flex-row items-center justify-center h-full w-full max-w-6xl">
//         <div className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-4 sm:p-6 w-full md:max-w-3xl flex flex-col md:flex-row"
//           style={{ boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)", borderRadius: "20px", backdropFilter: "blur(15px)", background: "rgba(255, 255, 255, 0.2)", border: "3px solid rgba(255, 255, 255, 0.5)" }}>

//           <div className="w-full md:w-2/3 mb-6 md:mb-0">
//             <h1 className={`${headingColor} text-2xl md:text-3xl font-semibold sm:mb-4`}>
//               Create Your Account
//             </h1>
//             <p className={`${paragraphColor} mb-6 text-sm md:text-base`}>
//               We&apos;re excited to have you join us! Please enter your details below.
//             </p>
//             <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
//               <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                 <Input type="text" placeholder="Full Name" className="w-full md:w-80 h-12 text-lg p-2 md:p-4" name="fullName" />
//                 <div className="w-full">
//   <select
//     name="academicDetail"
//     className="w-full h-12 text-lg text-black rounded-md border-2 border-transparent focus:border-[#F87982] focus:outline-none shadow-lg px-2"
//   >
//     <option value="">Select Board</option>
//     <option value="CBSE">CBSE</option>
//     <option value="ICSE">ICSE</option>
//     <option value="State Board">State Board</option>
//   </select>
// </div>


//               </div>

//               <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                 <Input type="email" placeholder="Email" className="w-full h-12 text-lg p-2 md:p-4" />
//                 <Input type="password" placeholder="Password" className="w-full h-12 text-lg p-2 md:p-4" />
//               </div>

//               <PhoneInput />

//               <button type="submit" className={`${bgColor} text-white font-semibold rounded-full py-3 text-lg ${hoverColor} transition duration-200 flex items-center justify-center space-x-2`}>
//                 <span>Sign Up</span>
//                 <FaUserPlus />
//               </button>
//             </form>

//             {/* Login Link */}
//             <p className={`text-center mt-4 ${textColor}`}>
//               Already have an account?{" "}
//               <button onClick={onLoginClick} className={`${textColor2} ${hoverTextColor} underline`}>
//                 Login
//               </button>
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="hidden md:flex w-full md:w-1/3 items-center justify-center mt-6 md:mt-0">
//             <Image
//               src="/images/boy-img.png"
//               alt="Signup Icon"
//               width={500}
//               height={500}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import Input from "@/components/Input";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import PhoneInput from "./PhoneInput";

const Signup = ({ textColor, textColor2, headingColor, paragraphColor, bgColor, hoverColor, hoverTextColor, onLoginClick, onSubmit }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="flex flex-col md:flex-row items-center justify-center h-full w-full max-w-6xl">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-4 sm:p-6 w-full md:max-w-3xl flex flex-col md:flex-row"
          style={{ boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)", borderRadius: "20px", backdropFilter: "blur(15px)", background: "rgba(255, 255, 255, 0.2)", border: "3px solid rgba(255, 255, 255, 0.5)" }}>

          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <h1 className={`${headingColor} text-2xl md:text-3xl font-semibold sm:mb-4`}>
              Create Your Account
            </h1>
            <p className={`${paragraphColor} mb-6 text-sm md:text-base`}>
              We&apos;re excited to have you join us! Please enter your details below.
            </p>
            <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Input type="text" placeholder="Full Name" className="w-full h-12 text-lg p-2 md:p-4" name="fullName" />
                <div className="w-full">
                  <select
                    name="academicDetail"
                    className="w-full h-12 text-lg text-black rounded-md border-2 border-transparent focus:border-[#F87982] focus:outline-none shadow-lg px-2"
                  >
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Input type="email" placeholder="Email" className="w-full h-12 text-lg p-2 md:p-4" />
                
                {/* Password input with show/hide feature */}
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
              </div>

              <PhoneInput />

              <button type="submit" className={`${bgColor} text-white font-semibold rounded-full py-3 text-lg ${hoverColor} transition duration-200 flex items-center justify-center space-x-2`}>
                <span>Sign Up</span>
                <FaUserPlus />
              </button>
            </form>

            {/* Login Link */}
            <p className={`text-center mt-4 ${textColor}`}>
              Already have an account?{" "}
              <button onClick={handleLoginClick} className={`${textColor2} ${hoverTextColor} underline`}>
                Login
              </button>
            </p>
          </div>

          {/* Image Section */}
          <div className="hidden md:flex w-full md:w-1/3 items-center justify-center mt-6 md:mt-0">
            <Image
              src="/images/boy-img.png"
              alt="Signup Icon"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
