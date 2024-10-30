import Link from 'next/link';
import Image from 'next/image';
import MainNavbar from '@/components/MainNavbar';

const Courses = () => {
  const navBorderColor = "border-customRed";
  const navTextColor = "text-customRed";
  const imageSrc = "/images/meritroot-landslide-logo.svg"; 

  const courses = [
    {
      name: 'NEET',
      href: '/courses/neet',
      position: { top: '28vh', left: '5vw' },
    },
    {
      name: 'Academic',
      href: '/courses/academic',
      position: { top: '38vh', left: '78vw' },
    },
    {
      name: 'JEE',
      href: '/courses/jee',
      position: { top: '47vh', left: '62vw' },
    },
  ];

  return (
    <div className="relative h-screen">
      <MainNavbar
        imageSrc={imageSrc}
        navBorderColor={navBorderColor}
        navTextColor={navTextColor}
      />
      
      <Image
        src="/images/scroll-bg.jpg"
        alt="Courses Background Image"
        fill={true}
        className="object-cover"
        style={{ zIndex: -1, width: '100%', height: '100%', objectPosition: "center 80%" }}
        sizes="100vw"
        quality={100}
        priority
      />

      <div className="absolute w-full flex flex-col items-center">
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-[#cc0000]">
            Explore Our Course Categories
          </h2>
        </div>

        {courses.map((course, index) => (
          <Link key={index} href={`/courses/${course.name.toLowerCase()}`}>
            <button
              className="bg-customRed text-white text-xl font-bold py-1 px-8 rounded-lg shadow hover:bg-red-700 transition"
              style={{
                position: 'absolute', 
                top: course.position.top,
                left: course.position.left,
              }}
            >
              {course.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
