import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import countryCode from "../data/CountryCode";

const PhoneInput = () => {
  const [flag, setFlag] = useState("IN");
  const [dialCode, setDialCode] = useState("+91");
  const [isActive, setIsActive] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const [input, setInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryCode);

  useEffect(() => {
    if (input === "") {
      setFilteredCountries(countryCode);
    } else {
      const filtered = countryCode.filter((item) =>
        item.name.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setShowDropDown(false);
      }
    };
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div
      className="relative dropdown-container shadow-lg "
    >
      <div className="flex items-center justify-between w-full p-2 bg-white rounded-lg cursor-pointer ">
        <div
          className="flex items-center space-x-2"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <Flag code={flag} className="w-6 h-6" />
          {showDropDown ? (
            <MdKeyboardArrowUp size={30} className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown size={30} className="text-gray-500" />
          )}
          <span className="text-lg">{dialCode}</span>
        </div>
        <input
          type="tel"
          className="ml-2 w-full focus:outline-none text-lg"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div
        className={`absolute left-0 right-0 bg-white border rounded-lg shadow-lg z-10 max-h-64 overflow-auto transition-all duration-300 ease-in-out transform ${
          showDropDown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          visibility: showDropDown ? "visible" : "hidden",
        }}
      >
        <div className="flex items-center p-2 border-b">
          <BiSearch size={20} />
          <input
            type="text"
            className="ml-2 w-full focus:outline-none"
            placeholder="Search for a country"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <ul className="list-none p-0">
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
                isActive === index ? "bg-gray-200" : ""
              }`}
              onClick={() => {
                setFlag(country.code);
                setDialCode(country.dial_code);
                setIsActive(index);
                setShowDropDown(false);
              }}
            >
              <Flag code={country.code} className="w-6 h-6 mr-2" />
              <span className="mr-2">{country.name}</span>
              <span className="text-gray-600">({country.dial_code})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhoneInput;


// import React, { useState, useEffect } from "react";
// import Flag from "react-world-flags";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { BiSearch } from "react-icons/bi";
// import countryCode from "../data/CountryCode";

// const PhoneInput = () => {
//   const [flag, setFlag] = useState("IN");
//   const [dialCode, setDialCode] = useState("+91");
//   const [isActive, setIsActive] = useState(0);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [input, setInput] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [filteredCountries, setFilteredCountries] = useState(countryCode);

//   useEffect(() => {
//     if (input === "") {
//       setFilteredCountries(countryCode);
//     } else {
//       const filtered = countryCode.filter((item) =>
//         item.name.toLowerCase().startsWith(input.toLowerCase())
//       );
//       setFilteredCountries(filtered);
//     }
//   }, [input]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".dropdown-container")) {
//         setShowDropDown(false);
//       }
//     };
//     if (showDropDown) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showDropDown]);

//   return (
//     <div
//       className={`relative dropdown-container shadow-lg ${
//         showDropDown ? "border-2 border-[#F87982]" : "border border-transparent"
//       } rounded-lg`}
//     >
//       <div
//         className="flex items-center justify-between w-full p-2 bg-white rounded-lg cursor-pointer"
//         onClick={() => setShowDropDown(!showDropDown)}
//       >
//         <div className="flex items-center space-x-2">
//           <Flag code={flag} className="w-6 h-6" />
//           {showDropDown ? (
//             <MdKeyboardArrowUp size={30} className="text-gray-500" />
//           ) : (
//             <MdKeyboardArrowDown size={30} className="text-gray-500" />
//           )}
//           <span className="text-lg">{dialCode}</span>
//         </div>
//         <input
//           type="tel"
//           className="ml-2 w-full focus:outline-none text-lg"
//           placeholder="Enter phone number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </div>

//       <div
//         className={`absolute left-0 right-0 bg-white border rounded-lg shadow-lg z-10 max-h-64 overflow-auto transition-all duration-300 ease-in-out transform ${
//           showDropDown ? "opacity-100 scale-100" : "opacity-0 scale-95"
//         }`}
//         style={{
//           visibility: showDropDown ? "visible" : "hidden",
//         }}
//       >
//         <div className="flex items-center p-2 border-b">
//           <BiSearch size={20} />
//           <input
//             type="text"
//             className="ml-2 w-full focus:outline-none"
//             placeholder="Search for a country"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <ul className="list-none p-0">
//           {filteredCountries.map((country, index) => (
//             <li
//               key={index}
//               className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
//                 isActive === index ? "bg-gray-200" : ""
//               }`}
//               onClick={() => {
//                 setFlag(country.code);
//                 setDialCode(country.dial_code);
//                 setIsActive(index);
//                 setShowDropDown(false);
//               }}
//             >
//               <Flag code={country.code} className="w-6 h-6 mr-2" />
//               <span className="mr-2">{country.name}</span>
//               <span className="text-gray-600">({country.dial_code})</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PhoneInput;
