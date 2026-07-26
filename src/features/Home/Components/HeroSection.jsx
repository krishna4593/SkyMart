import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const HeroSection = () => {
    const navigate= useNavigate()
    
  return (
    <div className="w-full relative mt-8 rounded-3xl overflow-hidden border border-[#333333] bg-[#161616]">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-[#CFFF04] font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
            Good Afternoon <span>👋</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Welcome back,<br />
            <span className="text-[#CFFF04]">krishna!</span>
          </h1>
          <p className="text-gray-400 text-base max-w-md leading-relaxed">
            Discover today's picks — hand-curated products across electronics, fashion, and more.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button onClick={()=>navigate("/home/shop")} className="flex items-center gap-2 bg-[#CFFF04] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b8e600] transition-colors cursor-pointer">
              Shop Now <FiArrowRight />
            </button>
            <button onClick={()=>navigate("/home/shop")} className="flex items-center gap-2 bg-transparent text-white border border-[#444444] px-6 py-3 rounded-full font-semibold hover:bg-[#222222] transition-colors cursor-pointer">
              View All Products
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-auto flex flex-col gap-4 min-w-[240px]">
          <div className="bg-[#1f2605] border border-[#2c3809] rounded-2xl p-6 text-center flex flex-col items-center justify-center h-32">
            <h3 className="text-[#CFFF04] text-4xl font-extrabold mb-1">20+</h3>
            <p className="text-gray-400 text-xs font-medium">Products Available</p>
          </div>
          <div className="bg-transparent border border-[#333333] rounded-2xl p-6 text-center flex flex-col items-center justify-center h-32 backdrop-blur-sm">
            <h3 className="text-white text-3xl font-bold mb-1">Free</h3>
            <p className="text-gray-400 text-xs font-medium">Delivery on ₹999+</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
