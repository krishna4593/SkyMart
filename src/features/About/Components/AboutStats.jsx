import React from 'react';
import { statsData } from '../Data/aboutData';

const AboutStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4">
      {statsData.map((stat) => (
        <div 
          key={stat.id} 
          className="border border-[#333333] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-transparent hover:border-[#CFFF04] transition-colors duration-300"
        >
          <div className="mb-4">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
