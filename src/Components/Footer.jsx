import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-8 border-t border-[#222222] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-2">
        <h2 className="text-xl font-bold text-[#CFFF04] tracking-wide">SkyMart</h2>
        <p className="text-xs text-gray-500 font-medium">
          &copy; 2025 SkyMart &bull; Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
};

export default Footer;