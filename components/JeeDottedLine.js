// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// const JeeDottedline = ({ top, left, onHover }) => {
//   const router = useRouter();

//   const navigate = (grade) => {
//     const formattedGrade = grade.replace(/\s+/g, "-");
//     router.push(`/courses/jee/${formattedGrade}`);
//   };

//   return (
//     <div className="absolute" style={{ top: top, left: left }}>
//       <div className="flex flex-col items-center">
//         {/* Jee Flag at the top */}
//         <div className="flex items-center">
//           <svg width="80" height="60" viewBox="0 0 30 30">
//             {/* Flag Shape */}
//             <rect x="2" y="2" width="50" height="20" fill="#cc0000" />
//             <line x1="2.4" y1="5" x2="2.4" y2="30" stroke="white" strokeWidth="2" />
//             <text x="10" y="17" fill="white" fontSize="10" fontWeight="bold">
//               JEE
//             </text>
//           </svg>
//         </div>

//         <svg width="150" height="500">
//           {/* Dotted Path */}
//           <path
//             d="M50 0 C50 150, 0 150, 50 250 S50 350, 50 500"
//             stroke="white"
//             strokeDasharray="14,4"
//             fill="transparent"
//             strokeWidth="3"
//           />

//           {/* Circles along the path */}
//           <circle cx="44" cy="80" r="7" fill="white" />
//           <circle cx="30" cy="150" r="7" fill="white" />
//           <circle cx="37" cy="220" r="7" fill="white" />
//           <circle cx="63" cy="280" r="7" fill="white" />
//           <circle cx="70" cy="350" r="7" fill="white" />
//           <circle cx="55" cy="430" r="7" fill="white" />
//           <circle cx="50" cy="490" r="7" fill="white" />

//           {/* Course Texts */}
//           <text
//             x="60"
//             y="85"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Dropper")}
//             onClick={() => {
//               localStorage.setItem("grade", "Dropper");
//               navigate("Dropper");
//             }}
//           >
//             Dropper
//           </text>

//           <text
//             x="60"
//             y="155"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 12")}
//             onClick={() => {
//               localStorage.setItem("grade", "Grade 12");
//               navigate("Grade 12");
//             }}
//           >
//             Grade 12
//           </text>

//           <text
//             x="60"
//             y="225"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 11")}
//             onClick={() => {
//               localStorage.setItem("grade", "Grade 11");
//               navigate("Grade 11");
//             }}
//           >
//             Grade 11
//           </text>

//           <text
//             x="80"
//             y="285"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 10")}
//             onClick={() => navigate("Grade 10")}
//           >
//             Grade 10
//           </text>

//           <text
//             x="80"
//             y="355"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 9")}
//             onClick={() => navigate("Grade 9")}
//           >
//             Grade 9
//           </text>

//           <text
//             x="80"
//             y="435"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 8")}
//             onClick={() => navigate("Grade 8")}
//           >
//             Grade 8
//           </text>

//           <text
//             x="80"
//             y="495"
//             fill="white"
//             fontSize="14"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={() => onHover("Grade 7")}
//             onClick={() => navigate("Grade 7")}
//           >
//             Grade 7
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default JeeDottedline;





// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const JeeDottedline = ({ top, left, onHover }) => {
//   const router = useRouter();
//   const [hoverColor, setHoverColor] = useState(null);

//   const navigate = (grade) => {
//     const formattedGrade = grade.replace(/\s+/g, "-");
//     router.push(`/courses/jee/${formattedGrade}`);
//   };

//   const handleMouseEnter = (grade) => {
//     setHoverColor(grade);
//     onHover(grade);
//   };

//   const handleMouseLeave = () => {
//     setHoverColor(null);
//   };

//   return (
//     <div className="absolute" style={{ top: top, left: left }}>
//       <div className="flex flex-col items-center">
//         {/* Jee Flag at the top */}
//         <div className="flex items-center">
//           <svg width="90" height="50" viewBox="0 0 46.8 30">
//             <rect x="2" y="2" width="50" height="25" fill="#cc0000" />
//             <line x1="2.4" y1="40" x2="2.4" y2="2" stroke="#001F3F" strokeWidth="2" />
//             <text x="12" y="20" fill="white" fontSize="16" fontWeight="bold">
//               JEE
//             </text>
//           </svg>
//         </div>

//         <svg width="170" height="400">
//           <path
//             d="M50 0 C50 150, 0 150, 50 250 S50 350, 50 500"
//             stroke="#001F3F"
//             strokeDasharray="14,4"
//             fill="transparent"
//             strokeWidth="3"
//           />

//           {/* Circles along the path */}
//           <circle cx="48" cy="50" r="7" fill="#001F3F" />
//           <circle cx="38" cy="110" r="7" fill="#001F3F" />
//           <circle cx="28" cy="170" r="7" fill="#001F3F" />
//           <circle cx="36" cy="220" r="7" fill="#001F3F" />
//           <circle cx="60" cy="270" r="7" fill="#001F3F" />
//           <circle cx="72" cy="330" r="7" fill="#001F3F" />
//           <circle cx="62" cy="386" r="7" fill="#001F3F" />

//           {/* Course Texts with Rounded Buttons */}
//           {["Dropper", "Grade 12", "Grade 11", "Grade 10", "Grade 9", "Grade 8", "Grade 7"].map((grade, index) => {
//             const yPositions = [50, 110, 170, 220, 270, 330, 385];
//             const xPositions = [100, 90, 80,90, 120, 130, 120]; // Adjust x positions for each grade
//             const buttonWidth = 80;
//             const buttonHeight = 30;

//             return (
//               <g key={grade}>
//                 {/* Rounded button background */}
//                 <rect
//                   x={xPositions[index] - buttonWidth / 2} // Center the button
//                   y={yPositions[index] - buttonHeight / 2} // Center the button vertically
//                   width={buttonWidth}
//                   height={buttonHeight}
//                   rx={15} // Round corners
//                   fill={hoverColor === grade ? "green" : "#6a9943"} // Change color on hover
//         //           stroke="white" // White border
//         // strokeWidth="2" 
//                   style={{ cursor: "pointer" }} // Change cursor on hover
//                   onMouseEnter={() => handleMouseEnter(grade)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => {
//                     localStorage.setItem("grade", grade);
//                     navigate(grade);
//                   }}
//                 />
//                 {/* Grade text */}
//                 <text
//                   x={xPositions[index]}
//                   y={yPositions[index] + 5} // Adjust vertical alignment
//                   fill="white"
//                   fontSize="15"
//                   textAnchor="middle" // Center the text horizontally
//                   style={{ cursor: "pointer" }} // Add cursor pointer to text
//                   onMouseEnter={() => handleMouseEnter(grade)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => {
//                     localStorage.setItem("grade", grade);
//                     navigate(grade);
//                   }}
//                 >
//                   {grade}
//                 </text>
//               </g>
//             );
//           })}
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default JeeDottedline;



import React, { useState } from "react";
import { useRouter } from "next/navigation";

const JeeDottedline = ({ top, left, onHover }) => {
  const router = useRouter();
  const [hoverColor, setHoverColor] = useState(null);

  const navigate = (grade) => {
    const formattedGrade = grade.replace(/\s+/g, "-");
    router.push(`/courses/jee/${formattedGrade}`);
  };

  const handleMouseEnter = (grade) => {
    setHoverColor(grade);
    onHover(grade);
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <div className="flex flex-col items-center">
        {/* Jee Flag at the top */}
        <div className="flex items-center">
          <svg width="90" height="50" viewBox="0 0 46.8 30">
            <rect x="2" y="2" width="50" height="25" fill="#cc0000" />
            <line x1="2.4" y1="40" x2="2.4" y2="2" stroke="#001F3F" strokeWidth="2" />
            <text x="12" y="20" fill="white" fontSize="16" fontWeight="bold">
              JEE
            </text>
          </svg>
        </div>

        <svg width="170" height="400">
          <path
            d="M50 0 C50 150, 0 150, 50 250 S50 350, 50 500"
            stroke="#001F3F"
            strokeDasharray="14,4"
            fill="transparent"
            strokeWidth="3"
          />

          {/* Circles along the path */}
          <circle cx="48" cy="50" r="7" fill="#001F3F" />
          <circle cx="38" cy="110" r="7" fill="#001F3F" />
          <circle cx="28" cy="170" r="7" fill="#001F3F" />
          <circle cx="36" cy="220" r="7" fill="#001F3F" />
          <circle cx="60" cy="270" r="7" fill="#001F3F" />
          <circle cx="72" cy="330" r="7" fill="#001F3F" />
          <circle cx="62" cy="386" r="7" fill="#001F3F" />

          {/* Course Texts with Rounded Buttons */}
          {["Dropper", "Grade 12", "Grade 11", "Grade 10", "Grade 9", "Grade 8", "Grade 7"].map((grade, index) => {
            const yPositions = [50, 110, 170, 220, 270, 330, 382];
            const xPositions = [100, 90, 80, 90, 120, 130, 120];
            const buttonWidth = 80;
            const buttonHeight = 30;

            return (
              <g key={grade}>
                {/* Rounded button background */}
                <rect
                  x={xPositions[index] - buttonWidth / 2} // Center the button
                  y={yPositions[index] - buttonHeight / 2} // Center the button vertically
                  width={buttonWidth}
                  height={buttonHeight}
                  rx={15} // Round corners
                  fill={hoverColor === grade ? "green" : "#6a9943"} // Change color on hover
                  style={{
                    cursor: "pointer",
                    transition: "filter 0.2s ease", // Smooth transition
                    filter: hoverColor === grade ? "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))" : "none", // Shadow on hover
                  }}
                  onMouseEnter={() => handleMouseEnter(grade)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    localStorage.setItem("grade", grade);
                    navigate(grade);
                  }}
                />
                {/* Grade text */}
                <text
                  x={xPositions[index]}
                  y={yPositions[index] + 5} // Adjust vertical alignment
                  fill="white"
                  fontSize="15"
                  textAnchor="middle" // Center the text horizontally
                  style={{ cursor: "pointer" }} // Add cursor pointer to text
                  onMouseEnter={() => handleMouseEnter(grade)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    localStorage.setItem("grade", grade);
                    navigate(grade);
                  }}
                >
                  {grade}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default JeeDottedline;
