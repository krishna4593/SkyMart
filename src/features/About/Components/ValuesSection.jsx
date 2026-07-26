import React from 'react';
import { valuesData } from '../Data/aboutData';

const ValuesSection = () => {
  return (
    <div className="px-4 mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">What We Stand For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {valuesData.map((item) => (
          <div 
            key={item.id} 
            className="border border-[#333333] rounded-2xl p-6 flex flex-row items-start space-x-6 bg-transparent hover:border-[#CFFF04] transition-colors duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-[#1f2605] rounded-xl flex items-center justify-center mt-1">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
