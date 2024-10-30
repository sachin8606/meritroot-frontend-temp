///----------------------Server Site---------------
// import Image from 'next/image';
// import MainNavbar from '@/components/MainNavbar';
// import { use } from 'react';

// const CoursePage = ({ params }) => {

//   const course = use(params).course;


//   let navBorderColor = "border-customRed";
//   let navTextColor = "text-customRed"; 

//   const logoSrc = {
//     jee: "/images/meritroot-landslide-logo.svg",
//     neet: "/images/meritroot-landslide-logo.svg",
//     academic: "/images/meritroot-landslide-white.svg",
//   }[course] || "/images/meritroot-landslide-logo.svg";

//   if (course === 'academic') {
//     navBorderColor = "border-white";
//     navTextColor = "text-white";
//   }

//   const backgroundImage = {
//     jee: '/images/jee-bg.jpg',
//     neet: '/images/neet-bg.jpg',
//     academic: '/images/academic-bg.jpg',
//   }[course] || '/images/default-bg.jpg';


//   const renderContent = () => {
//     switch (course) {
//       case 'jee':
//         return (
//           <div>
//             <h2 className="text-3xl font-bold text-[#cc0000]">JEE Preparation</h2>
//             <p className="text-xl mt-4">
//               Get ready for JEE with our comprehensive study material and expert guidance.
//             </p>
//           </div>
//         );
//       case 'neet':
//         return (
//           <div>
//             <h2 className="text-3xl font-bold text-[#cc0000]">NEET Preparation</h2>
//             <p className="text-xl mt-4">
//               Ace the NEET exam with our tailored courses and practice tests.
//             </p>
//           </div>
//         );
//       case 'academic':
//         return (
//           <div>
//             <h2 className="text-3xl font-bold text-[#cc0000]">Academic Courses</h2>
//             <p className="text-xl mt-4">
//               Explore our academic courses designed to help you excel in your studies.
//             </p>
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <h2 className="text-3xl font-bold text-[#cc0000]">Course Not Found</h2>
//             <p className="text-xl mt-4">
//               Please select a valid course.
//             </p>
//           </div>
//         );
//     }
//   };

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

//       <div className="absolute w-full flex flex-col items-center">
//         <div className="text-center mt-20">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;






//------------------------------Client side with AcademicDotted Line in Left

// "use client"
// import MainNavbar from '@/components/MainNavbar';
// import { use, useEffect, useState } from 'react';
// import NeetDottedline from '@/components/NeetDottedLine';
// import JeeDottedline from '@/components/JeeDottedLine';
// import { academicContent, jeeContent, neetContent } from '@/data/CourseData';
// import AcademicDottedline from '@/components/AcademicDottedLine';

// const CoursePage = ({ params }) => {
//   const [hoveredGrade, setHoveredGrade] = useState("default");

//   useEffect(() => {
//     setHoveredGrade("default");
//   }, []);

//   const course = use(params).course;

//   let navBorderColor = "border-customRed";
//   let navTextColor = "text-customRed"; 

//   const logoSrc = {
//     jee: "/images/meritroot-landslide-logo.svg",
//     neet: "/images/meritroot-landslide-logo.svg",
//     academic: "/images/meritroot-landslide-white.svg",
//   }[course] || "/images/meritroot-landslide-logo.svg";

//   if (course === 'academic') {
//     navBorderColor = "border-white";
//     navTextColor = "text-white";
//   }

//   const backgroundImage = {
//     jee: '/images/jee-bg.jpg',
//     neet: '/images/neet-bg.jpg',
//     academic: '/images/academic-bg.jpg',
//   }[course] || '/images/default-bg.jpg';

//   const renderContent = () => {
//     switch (course) {
//       case 'jee':
//         return (
//           <>
//           <JeeDottedline
//               onHover={setHoveredGrade}
//               top="11vh"
//               left="21vw"
//           />
//           <div className="text-slate-700 flex flex-col ml-[30rem] top-40">
//             <h1 className="text-5xl font-light">{jeeContent[hoveredGrade].title}</h1>
//             <h1 className="text-4xl font-bold">{jeeContent[hoveredGrade].subtitle}</h1>
//             <h3 className="text-xl">{jeeContent[hoveredGrade].description}</h3>
//           </div>
//           </>
//         );

//       case 'neet':
//         return (
//           <>
//           <NeetDottedline
//               onHover={setHoveredGrade}
//               top="10vh"
//               left="21vw"
//           />
//           <div className="text-[#cc0000] flex flex-col ml-[30rem] top-20">
//             <h1 className="text-5xl font-light">{neetContent[hoveredGrade].title}</h1>
//             <h1 className="text-4xl font-bold">{neetContent[hoveredGrade].subtitle}</h1>
//             <h3 className="text-xl">{neetContent[hoveredGrade].description}</h3>
//           </div>
//           </>
//         );
//       case 'academic':
//         return (
//           <>
//           <AcademicDottedline
//               onHover={setHoveredGrade}
//               top="10vh"
//               left="21vw"
//           />
//           <div className="text-white flex flex-col ml-[650px] top-20">
//             <h1 className="text-5xl font-light">{academicContent[hoveredGrade].title}</h1>
//             <h1 className="text-4xl font-bold">{academicContent[hoveredGrade].subtitle}</h1>
//             <h3 className="text-xl">{academicContent[hoveredGrade].description}</h3>
//           </div>
//           </>
//         );
//       default:
//         return (
//           <div>
//             <h2 className="text-3xl font-bold text-[#cc0000]">Course Not Found</h2>
//             <p className="text-xl mt-4">Please select a valid course.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="relative h-screen">
//       <MainNavbar
//         imageSrc={logoSrc}
//         navBorderColor={navBorderColor}
//         navTextColor={navTextColor}
//       />
//       <div
//       className={`absolute top-0 left-0 w-full h-full ${
//         course === 'jee'
//           ? 'bg-move-zoom-jee'
//           : course === 'neet'
//           ? 'bg-move-zoom-neet'
//           : course === 'academic'
//           ? 'bg-move-zoom-academic'
//           : ''
//       }`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         zIndex: -1, // Ensure background is behind other content
//       }}
//     ></div>

//       <div className="absolute w-full flex flex-col items-center z-10"> {/* Added z-10 to ensure visibility */}
//         <div className="text-center mt-32">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;











//-------------------AcademicDottedLine in Right----

// "use client";
// import MainNavbar from '@/components/MainNavbar';
// import { use, useEffect, useState } from 'react';
// import NeetDottedline from '@/components/NeetDottedLine';
// import JeeDottedline from '@/components/JeeDottedLine';
// import { academicContent, jeeContent, neetContent } from '@/data/CourseData';
// import AcademicDottedline from '@/components/AcademicDottedLine';

// const CoursePage = ({ params }) => {
//   const [hoveredGrade, setHoveredGrade] = useState("default");

//   useEffect(() => {
//     setHoveredGrade("default");
//   }, []);

//   const course = use(params).course;

//   let navBorderColor = "border-customRed";
//   let navTextColor = "text-customRed"; 

//   const logoSrc = {
//     jee: "/images/meritroot-landslide-logo.svg",
//     neet: "/images/meritroot-landslide-logo.svg",
//     academic: "/images/meritroot-landslide-white.svg",
//   }[course] || "/images/meritroot-landslide-logo.svg";

//   if (course === 'academic') {
//     navBorderColor = "border-white";
//     navTextColor = "text-white";
//   }

//   const backgroundImage = {
//     jee: '/images/jee-bg.webp',
//     neet: '/images/neet-bg.jpg',
//     academic: '/images/academic-bg.jpg',
//   }[course] || '/images/default-bg.jpg';

//   const renderContent = () => {
//     switch (course) {
//       case 'jee':
//         return (
//           <>
//           <JeeDottedline
//               onHover={setHoveredGrade}
//               top="17vh"
//               left="21vw"
//           />
//           <div className="text-slate-700 flex flex-col ml-0 md:ml-[5rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
//             <h1 className="text-5xl font-light">{jeeContent[hoveredGrade].title}</h1>
//             <h1 className="text-4xl font-bold">{jeeContent[hoveredGrade].subtitle}</h1>
//             <h3 className="text-lg">{jeeContent[hoveredGrade].description}</h3>
//           </div>
//           </>
//         );

//       case 'neet':
//         return (
//           <>
//           <NeetDottedline
//               onHover={setHoveredGrade}
//               top="16vh"
//               left="20vw"
//           />
//           <div className="text-green-900 flex flex-col ml-0 md:ml-[10rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{neetContent[hoveredGrade].title}</h1>
//             <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{neetContent[hoveredGrade].subtitle}</h1>
//             <h3 className="text-lg md:text-xl">{neetContent[hoveredGrade].description}</h3>
//           </div>
//           </>
//         );
//         case 'academic':
//           return (
//             <>
//               <AcademicDottedline
//                 onHover={setHoveredGrade}
//                 top="10vh"
//                 left="64vw"
//               />
//               <div className="text-white flex flex-col mr-0 md:mr-[10rem] lg:mr-[20rem] xl:mr-[30rem] mt-5 md:mt-10">
//                 <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{academicContent[hoveredGrade].title}</h1>
//                 <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{academicContent[hoveredGrade].subtitle}</h1>
//                 <h3 className="text-lg md:text-xl">{academicContent[hoveredGrade].description}</h3>
//               </div>
//             </>
//           );
        
//       default:
//         return (
//           <div className="text-center mt-10 md:mt-20">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#cc0000]">Course Not Found</h2>
//             <p className="text-lg md:text-xl mt-4">Please select a valid course.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="relative h-screen">
//       <MainNavbar
//         imageSrc={logoSrc}
//         navBorderColor={navBorderColor}
//         navTextColor={navTextColor}
//       />
//       <div
//       className={`absolute top-0 left-0 w-full h-full ${
//         course === 'jee'
//           ? 'bg-move-zoom-jee'
//           : course === 'neet'
//           ? 'bg-move-zoom-neet'
//           : course === 'academic'
//           ? 'bg-move-zoom-academic'
//           : ''
//       }`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         zIndex: -1,
//       }}
//     ></div>

//       <div className="absolute w-full flex flex-col items-center z-10">
//         <div className="text-center mt-10 md:mt-32 px-4 sm:px-8">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;



// "use client";
// import MainNavbar from '@/components/MainNavbar';
// import { use, useEffect, useState } from 'react';
// import NeetDottedline from '@/components/NeetDottedLine';
// import JeeDottedline from '@/components/JeeDottedLine';
// import { academicContent, jeeContent, neetContent } from '@/data/CourseData';
// import AcademicDottedline from '@/components/AcademicDottedLine';

// const CoursePage = ({ params }) => {
//   const [hoveredGrade, setHoveredGrade] = useState("default");

//   useEffect(() => {
//     setHoveredGrade("default");
//   }, []);

//   const course = use(params).course;

//   let navBorderColor = "border-customRed";
//   let navTextColor = "text-customRed"; 

//   const logoSrc = {
//     jee: "/images/meritroot-landslide-logo.svg",
//     neet: "/images/meritroot-landslide-logo.svg",
//     academic: "/images/meritroot-landslide-white.svg",
//   }[course] || "/images/meritroot-landslide-logo.svg";

//   if (course === 'academic') {
//     navBorderColor = "border-white";
//     navTextColor = "text-white";
//   }

//   const backgroundImage = {
//     jee: '/images/jee-bg.webp',
//     neet: '/images/neet-bg.webp',
//     academic: '/images/academic-bg.webp',
//   }[course] || '/images/default-bg.jpg';

//   const renderContent = () => {
//     const defaultContent = { title: '', subtitle: '', description: '' };
//     switch (course) {
//       case 'jee':
//         const jeeData = jeeContent[hoveredGrade] || defaultContent;
//         return (
//           <>
//             <JeeDottedline onHover={setHoveredGrade} top="17vh" left="21vw" />
//             <div className="text-slate-700 flex flex-col ml-0 md:ml-[5rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
//               <h1 className="text-5xl font-light">{jeeData.title}</h1>
//               <h1 className="text-4xl font-bold">{jeeData.subtitle}</h1>
//               <h3 className="text-lg">{jeeData.description}</h3>
//             </div>
//           </>
//         );
  
//       case 'neet':
//         const neetData = neetContent[hoveredGrade] || defaultContent;
//         return (
//           <>
//             <NeetDottedline onHover={setHoveredGrade} top="16vh" left="20vw" />
//             <div className="text-green-900 flex flex-col ml-0 md:ml-[10rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
//               <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{neetData.title}</h1>
//               <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{neetData.subtitle}</h1>
//               <h3 className="text-lg md:text-xl">{neetData.description}</h3>
//             </div>
//           </>
//         );
  
//       case 'academic':
//         const academicData = academicContent[hoveredGrade] || defaultContent;
//         return (
//           <>
//             <AcademicDottedline onHover={setHoveredGrade} top="12vh" left="64vw" />
//             <div className="text-white flex flex-col mr-0 md:mr-[10rem] lg:mr-[20rem] xl:mr-[30rem] mt-5 md:mt-10">
//               <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{academicData.title}</h1>
//               <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{academicData.subtitle}</h1>
//               <h3 className="text-lg md:text-xl">{academicData.description}</h3>
//             </div>
//           </>
//         );
  
//       default:
//         return (
//           <div className="text-center mt-10 md:mt-20">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#cc0000]">Course Not Found</h2>
//             <p className="text-lg md:text-xl mt-4">Please select a valid course.</p>
//           </div>
//         );
//     }
//   };
  

//   return (
//     <div className="relative h-screen">
//       <MainNavbar
//         imageSrc={logoSrc}
//         navBorderColor={navBorderColor}
//         navTextColor={navTextColor}
//       />
//       <div
//       className={`absolute top-0 left-0 w-full h-full ${
//         course === 'jee'
//           ? 'bg-move-zoom-jee'
//           : course === 'neet'
//           ? 'bg-move-zoom-neet'
//           : course === 'academic'
//           ? 'bg-move-zoom-academic'
//           : ''
//       }`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         zIndex: -1,
//       }}
//     ></div>

//       <div className="absolute w-full flex flex-col items-center z-10">
//         <div className="text-center mt-10 md:mt-32 px-4 sm:px-8">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;



"use client";
import MainNavbar from '@/components/MainNavbar';
import { useEffect, useState, use } from 'react';
import NeetDottedline from '@/components/NeetDottedLine';
import JeeDottedline from '@/components/JeeDottedLine';
import { academicContent, jeeContent, neetContent } from '@/data/CourseData';
import AcademicDottedline from '@/components/AcademicDottedLine';

const CoursePage = ({ params }) => {
  const [hoveredGrade, setHoveredGrade] = useState("default");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setHoveredGrade("default");

    // Show content after 2 seconds (animation duration)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  // Unwrap the `params` Promise
  const course = use(params)?.course;

  let navBorderColor = "border-customRed";
  let navTextColor = "text-customRed"; 

  const logoSrc = {
    jee: "/images/meritroot-landslide-logo.svg",
    neet: "/images/meritroot-landslide-logo.svg",
    academic: "/images/meritroot-landslide-white.svg",
  }[course] || "/images/meritroot-landslide-logo.svg";

  if (course === 'academic') {
    navBorderColor = "border-white";
    navTextColor = "text-white";
  }

  const backgroundImage = {
    jee: '/images/jee-bg.webp',
    neet: '/images/neet-bg.webp',
    academic: '/images/academic-bg.webp',
  }[course] || '/images/default-bg.jpg';

  const renderContent = () => {
    const defaultContent = { title: '', subtitle: '', description: '' };
    switch (course) {
      case 'jee':
        const jeeData = jeeContent[hoveredGrade] || defaultContent;
        return (
          <>
            <JeeDottedline onHover={setHoveredGrade} top="17vh" left="21vw" />
            <div className="text-slate-700 flex flex-col ml-0 md:ml-[5rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
              <h1 className="text-5xl font-light">{jeeData.title}</h1>
              <h1 className="text-4xl font-bold">{jeeData.subtitle}</h1>
              <h3 className="text-lg">{jeeData.description}</h3>
            </div>
          </>
        );

      case 'neet':
        const neetData = neetContent[hoveredGrade] || defaultContent;
        return (
          <>
            <NeetDottedline onHover={setHoveredGrade} top="16vh" left="20vw" />
            <div className="text-green-900 flex flex-col ml-0 md:ml-[10rem] lg:ml-[25rem] xl:ml-[30rem] mt-5 md:mt-10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{neetData.title}</h1>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{neetData.subtitle}</h1>
              <h3 className="text-lg md:text-xl">{neetData.description}</h3>
            </div>
          </>
        );

      case 'academic':
        const academicData = academicContent[hoveredGrade] || defaultContent;
        return (
          <>
            <AcademicDottedline onHover={setHoveredGrade} top="12vh" left="64vw" />
            <div className="text-white flex flex-col mr-0 md:mr-[10rem] lg:mr-[20rem] xl:mr-[30rem] mt-5 md:mt-10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">{academicData.title}</h1>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{academicData.subtitle}</h1>
              <h3 className="text-lg md:text-xl">{academicData.description}</h3>
            </div>
          </>
        );

      default:
        return (
          <div className="text-center mt-10 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#cc0000]">Course Not Found</h2>
            <p className="text-lg md:text-xl mt-4">Please select a valid course.</p>
          </div>
        );
    }
  };

  return (
    <div className="relative h-screen">
      <MainNavbar
        imageSrc={logoSrc}
        navBorderColor={navBorderColor}
        navTextColor={navTextColor}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          course === 'jee'
            ? 'bg-move-zoom-jee'
            : course === 'neet'
            ? 'bg-move-zoom-neet'
            : course === 'academic'
            ? 'bg-move-zoom-academic'
            : ''
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          zIndex: -1,
        }}
      ></div>

      <div className="absolute w-full flex flex-col items-center z-10">
        <div className="text-center mt-10 md:mt-32 px-4 sm:px-8">
          {showContent && renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
