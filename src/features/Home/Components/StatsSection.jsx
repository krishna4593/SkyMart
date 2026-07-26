import React from 'react';
import { FiBox, FiTrendingUp, FiStar, FiTag } from 'react-icons/fi';

const statsData = [
  {
    id: 1,
    icon: <FiBox size={20} className="text-[#CFFF04]" />,
    iconBg: 'bg-[#1f2605]',
    value: '0',
    title: 'Cart Items',
    subtitle: 'In your bag'
  },
  {
    id: 2,
    icon: <FiTrendingUp size={20} className="text-[#3b82f6]" />,
    iconBg: 'bg-[#172136]',
    value: '$0.00',
    title: 'Cart Value',
    subtitle: 'Ready to checkout'
  },
  {
    id: 3,
    icon: <FiStar size={20} className="text-[#f59e0b]" />,
    iconBg: 'bg-[#31230e]',
    value: '5',
    title: 'Top Products',
    subtitle: 'Highly rated'
  },
  {
    id: 4,
    icon: <FiTag size={20} className="text-[#a855f7]" />,
    iconBg: 'bg-[#29173d]',
    value: '6',
    title: 'Categories',
    subtitle: 'To explore'
  }
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {statsData.map((stat) => (
        <div key={stat.id} className="bg-[#161616] border border-[#333333] rounded-2xl p-5 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-white text-xl font-bold leading-none mb-1">{stat.value}</h3>
              <p className="text-gray-300 text-sm font-medium">{stat.title}</p>
              <p className="text-gray-500 text-xs">{stat.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;