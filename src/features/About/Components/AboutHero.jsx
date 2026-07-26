import React from 'react';
import { FaBolt } from 'react-icons/fa6';

const AboutHero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-16 mb-16 px-4">
      <div className="w-16 h-16 bg-[#CFFF04] rounded-2xl flex items-center justify-center mb-6">
        <FaBolt className="text-black text-3xl" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        About <span className="text-[#CFFF04]">SkyMart</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
      </p>
    </div>
  );
};

export default AboutHero;
