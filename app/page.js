// import FloatingActionButton from "@/components/FloatingActionButton";
// import MainNavbar from "@/components/MainNavbar";
// import PrimaryButton from "@/components/PrimaryButton";
// import Image from "next/image";

// export default function Home() {

//   const navBorderColor = "border-customRed";
//   const navTextColor = "text-customRed";
//   const imageSrc = "/images/meritroot-landslide-logo.svg"; 


//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <Image
//         src="/images/main-bg.jpg"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         priority
//         className="z-0"
//       />

//       <MainNavbar navBorderColor={navBorderColor} navTextColor={navTextColor} imageSrc={imageSrc} />
//       <main className="flex flex-col items-center justify-center h-full transform -translate-y-10">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="text-[#424648] text-3xl md:text-4xl lg:text-3xl font-light mt-6">
//             Prepare{" "}
//             <span className="font-bold">Test Prep and Academic Exams</span>
//             <br />
//             Together With Us
//             <br />
//             <span className="font-bold">JEE | NEET</span>
//           </h1>

//           <PrimaryButton text="Get Started" href="/courses" />
//         </div>
//         <FloatingActionButton/>
//       </main>
     
//     </div>
//   );
// }


import FloatingActionButton from "@/components/FloatingActionButton";
import MainNavbar from "@/components/MainNavbar";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

export default function Home() {
  const navBorderColor = "border-customRed";
  const navTextColor = "text-customRed";
  const imageSrc = "/images/meritroot-landslide-logo.svg"; 

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/main-bg.jpg"
        alt="Background"
        fill
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      <MainNavbar navBorderColor={navBorderColor} navTextColor={navTextColor} imageSrc={imageSrc} />
      <main className="flex flex-col items-center justify-center h-full transform -translate-y-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[#424648] text-3xl md:text-4xl lg:text-3xl font-light mt-6">
            Prepare{" "}
            <span className="font-bold">Test Prep and Academic Exams</span>
            <br />
            Together With Us
            <br />
            <span className="font-bold">JEE | NEET</span>
          </h1>

          <PrimaryButton text="Get Started" href="/courses" />
        </div>
        <FloatingActionButton />
      </main>
    </div>
  );
}
