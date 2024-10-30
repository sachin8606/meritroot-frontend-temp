// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { GoPlus } from 'react-icons/go';

// const FloatingActionButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const toggleFab = () => {
//     setIsOpen((prev) => !prev); 
//   };

//   return (
//     <div className="absolute bottom-10 right-10 flex flex-col items-end">
//       {isOpen && (
//         <div className="flex flex-col items-end space-y-2 mb-4 transition-opacity duration-300 ease-in-out">
//           <button
//             onClick={() => router.push('/contact')}
//             className={`bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-500 transform ${
//               isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             }`}
//           >
//             Contact Us
//           </button>
//           <button
//             onClick={() => router.push('/help')}
//             className={`bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-500 transform ${
//               isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             }`}
//           >
//             FAQ
//           </button>
//         </div>
//       )}

//       <button
//         onClick={toggleFab}
//         className={`bg-[#cc0000] text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all duration-300 transform ${
//           isOpen ? 'rotate-45' : 'rotate-0'
//         }`}
//       >
//         <GoPlus className="text-2xl" />
//       </button>
//     </div>
//   );
// };

// export default FloatingActionButton;


"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoPlus } from 'react-icons/go';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleFab = () => {
    setIsOpen((prev) => !prev); 
  };

  return (
    <div className="fixed bottom-2 right-10 flex flex-col items-end">
      {isOpen && (
        <div className="flex flex-col items-end space-y-2 mb-4 transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => router.push('/contact')}
            className={`bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-500 transform ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact Us
          </button>
          {/* <button
            onClick={() => router.push('/help')}
            className={`bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-500 transform ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FAQ
          </button> */}
        </div>
      )}

      <button
        onClick={toggleFab}
        className={`bg-[#cc0000] text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all duration-300 transform ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <GoPlus className="text-2xl" />
      </button>
    </div>
  );
};

export default FloatingActionButton;
