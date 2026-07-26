import React from 'react';
import { teamData } from '../Data/aboutData';

const TeamSection = () => {
  return (
    <div className="px-4 mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((member) => (
          <div 
            key={member.id} 
            className="border border-[#333333] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-transparent hover:border-[#CFFF04] transition-colors duration-300"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${member.bgColor}`}>
              <span className={`text-2xl font-bold ${member.textColor}`}>{member.initial}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
