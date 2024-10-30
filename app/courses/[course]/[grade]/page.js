// import Image from 'next/image';
// import MainNavbar from '@/components/MainNavbar';
// import Link from 'next/link';
// import { use } from "react";

// const GradePage = ({ params }) => {
//   const { grade, course } = use(params);

//   const backgroundImage = {
//     jee: '/images/jee-bg.webp',
//     neet: '/images/neet-bg.webp',
//     academic: '/images/academic-bg.webp',
//   }[course] || '/images/default-bg.jpg';

//   let navBorderColor = "border-customRed";
//   let navTextColor = "text-customRed";
//   let mainTextColor = "text-customRed";

//   const logoSrc = {
//     jee: "/images/meritroot-landslide-logo.svg",
//     neet: "/images/meritroot-landslide-logo.svg",
//     academic: "/images/meritroot-landslide-white.svg",
//   }[course] || "/images/meritroot-landslide-logo.svg";

//   if (course === 'academic') {
//     navBorderColor = "border-white";
//     navTextColor = "text-white";
//     mainTextColor = "text-white";
//   } else if (course === 'jee') {
//     mainTextColor = "text-[#2A4D9]";  // example JEE color
//   } else if (course === 'neet') {
//     mainTextColor = "text-[#1B5E20]";  // example NEET color
//   }

//   return (
//     <div className="relative h-screen">
//       <MainNavbar
//         imageSrc={logoSrc}
//         navBorderColor={navBorderColor}
//         navTextColor={navTextColor}
//       />

//       <Image
//         src={backgroundImage}
//         alt={`${course} Background Image`}
//         fill={true}
//         className="object-cover"
//         style={{ zIndex: -1 }}
//         sizes="100vw"
//         quality={100}
//         priority
//       />

//       <div className="absolute inset-0 bg-black opacity-15" style={{ zIndex: -1 }}></div>

//       <div className="absolute w-full flex items-center justify-center h-full">
//         <div className="text-center">
//           <h1 className={`text-8xl font-bold ${mainTextColor} bg-opacity-50 p-2 rounded`}>
//             Welcome,
//             <p className="text-4xl">{grade?.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())} student!</p>
//           </h1>

//           <p className={`text-xl font-medium ${mainTextColor} mt-6`}>
//             Embark on your academic journey with tailored support and resources.
//           </p>

//           <div className="mt-10 flex justify-center space-x-4">
//             <Link 
//               href={`/courses/${course}/${grade}/signup?course=${course}`}
//               passHref
//             >
//               <button 
//                 className="px-12 py-2 text-3xl font-semibold text-white bg-[#142F5E] rounded-full hover:bg-red-600"
//               >
//                 Start
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GradePage;





import Image from 'next/image';
import MainNavbar from '@/components/MainNavbar';
import Link from 'next/link';
import { use } from "react";

const GradePage = ({ params }) => {
  const { grade, course } = use(params);

  const backgroundImage = {
    jee: '/images/jee-bg.webp',
    neet: '/images/neet-bg.webp',
    academic: '/images/academic-bg.webp',
  }[course] || '/images/default-bg.jpg';

  let navBorderColor = "border-customRed";
  let navTextColor = "text-customRed";
  let mainTextColor = "text-customRed";

  const logoSrc = {
    jee: "/images/meritroot-landslide-logo.svg",
    neet: "/images/meritroot-landslide-logo.svg",
    academic: "/images/meritroot-landslide-white.svg",
  }[course] || "/images/meritroot-landslide-logo.svg";

  if (course === 'academic') {
    navBorderColor = "border-white";
    navTextColor = "text-white";
    mainTextColor = "text-white";
  } else if (course === 'jee') {
    mainTextColor = "text-[#2A4D9B]";  // example JEE color
  } else if (course === 'neet') {
    mainTextColor = "text-[#1B5E20]";  // example NEET color
  }

  return (
    <div className="relative h-screen">
      <MainNavbar
        imageSrc={logoSrc}
        navBorderColor={navBorderColor}
        navTextColor={navTextColor}
      />

      <Image
        src={backgroundImage}
        alt={`${course} Background Image`}
        fill={true}
        className="object-cover"
        style={{ zIndex: -1 }}
        sizes="100vw"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black opacity-15" style={{ zIndex: -1 }}></div>

      <div className="absolute w-full flex items-center justify-center h-full px-4">
        <div className="text-center max-w-lg lg:max-w-3xl">
          <h1 className={`text-4xl md:text-5xl lg:text-8xl font-bold ${mainTextColor} bg-opacity-50 p-2 rounded`}>
            Welcome,
            <p className="text-2xl md:text-3xl lg:text-4xl">
              {grade?.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())} student!
            </p>
          </h1>

          <p className={`text-lg md:text-xl font-medium ${mainTextColor} mt-4 md:mt-6`}>
            Embark on your academic journey with tailored support and resources.
          </p>

          <div className="mt-6 md:mt-10 flex justify-center space-x-4">
            <Link 
              href={`/courses/${course}/${grade}/signup?course=${course}`}
              passHref
            >
              <button 
                className="px-8 md:px-12 py-2 text-lg md:text-2xl lg:text-3xl font-semibold text-white bg-[#142F5E] rounded-full hover:bg-red-600"
              >
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradePage;

