"use client";
import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import MainNavbar from '@/components/MainNavbar';
import Input from '@/components/Input';

const Contact = () => {
  const navBorderColor = "border-customRed";
  const navTextColor = "text-customRed";
  const imageSrc = "/images/meritroot-landslide-logo.svg";

  return (
    <>
      <MainNavbar navBorderColor={navBorderColor} navTextColor={navTextColor} imageSrc={imageSrc} />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main-bg.jpg" 
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-md z-0"></div>

        <div className="relative mt-8 z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border rounded-2xl shadow-2xl p-4 sm:p-6 w-full md:max-w-3xl flex flex-col"
            style={{
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              backdropFilter: "blur(15px)",
              background: "rgba(255, 255, 255, 0.2)",
              border: "3px solid rgba(255, 255, 255, 0.5)"
            }}>
            <h1 className="text-[#cc0000] text-2xl md:text-3xl font-semibold mb-4">Contact Us</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#424648]">Name</label>
                <Input type="text" id="name" placeholder="Your Name" className="mt-1 w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#424648]">Email</label>
                <Input type="email" id="email" placeholder="Your Email" className="mt-1 w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-[#424648]">Message</label>
                <textarea id="message" rows="4" className="mt-1 shadow-lg w-full rounded-lg bg-white border-2 p-2 border-transparent focus:border-[#F87982] focus:outline-none" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#cc0000] text-white font-bold py-2 rounded-md hover:bg-red-700">Send Message</button>
            </form>
          </div>

          <div className="bg-white  backdrop-blur-lg border rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md ml-0 md:ml-6">
            <h2 className="text-[#cc0000] text-xl font-semibold mb-4 text-left">Get in Touch</h2>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="mr-2 text-[#cc0000] mt-1" />
              <div>
                <span className="font-bold text-[#cc0000]">Address:</span>
                <p className="text-[#424648] ml-1">Meritroots, 1st floor, Shree Krishna Arcade, Chakrata Rd, near Hotel LP Vila, near Nanda Ki Chowki, Sudhowala, Uttarakhand 248007</p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FaEnvelope className="mr-2 text-[#cc0000] mt-1" />
              <div>
                <span className="font-bold text-[#cc0000]">Email:</span>
                <p className="text-[#424648] ml-1">contact@meritroots.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="mr-2 text-[#cc0000] mt-1" />
              <div>
                <span className="font-bold text-[#cc0000]">Phone:</span>
                <p className="text-[#424648] ml-1">(+91) 7417454936</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
