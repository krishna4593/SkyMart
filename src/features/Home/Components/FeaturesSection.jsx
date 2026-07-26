import React from 'react';
import { FaBolt } from 'react-icons/fa6';
import { FiShield, FiTag } from 'react-icons/fi';

const featuresData = [
  {
    id: 1,
    icon: <FaBolt size={24} className="text-[#CFFF04]" />,
    title: 'Fast Delivery',
    desc: 'Same-day on select items'
  },
  {
    id: 2,
    icon: <FiShield size={24} className="text-[#3b82f6]" />,
    title: 'Secure Payments',
    desc: '100% encrypted checkout'
  },
  {
    id: 3,
    icon: <FiTag size={24} className="text-[#10b981]" />,
    title: 'Best Prices',
    desc: 'Price-match guarantee'
  }
];

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-8">
      {featuresData.map((feature) => (
        <div key={feature.id} className="bg-transparent border border-[#333333] rounded-2xl p-6 flex items-center gap-5 hover:bg-[#1a1a1a] transition-colors cursor-default">
          <div className="flex-shrink-0">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-base">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;