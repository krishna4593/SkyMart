import React from 'react';
import { FiBox, FiUsers, FiStar, FiTruck, FiShield, FiHeart } from 'react-icons/fi';

export const statsData = [
  {
    id: 1,
    icon: <FiBox size={24} className="text-[#CFFF04]" />,
    value: '20K+',
    label: 'Products',
  },
  {
    id: 2,
    icon: <FiUsers size={24} className="text-[#CFFF04]" />,
    value: '50K+',
    label: 'Happy Customers',
  },
  {
    id: 3,
    icon: <FiStar size={24} className="text-[#CFFF04]" />,
    value: '4.9',
    label: 'Avg. Rating',
  },
  {
    id: 4,
    icon: <FiTruck size={24} className="text-[#CFFF04]" />,
    value: '99%',
    label: 'On-time Delivery',
  }
];

export const valuesData = [
  {
    id: 1,
    icon: <FiShield size={20} className="text-[#CFFF04]" />,
    title: 'Trust',
    description: 'Every product is verified for quality and authenticity before listing.',
  },
  {
    id: 2,
    icon: <FiTruck size={20} className="text-[#CFFF04]" />,
    title: 'Speed',
    description: 'We obsess over delivery times so your orders arrive when promised.',
  },
  {
    id: 3,
    icon: <FiHeart size={20} className="text-[#CFFF04]" />,
    title: 'Community',
    description: 'Built around real customer feedback, not just business metrics.',
  },
  {
    id: 4,
    icon: <FiStar size={20} className="text-[#CFFF04]" />,
    title: 'Quality',
    description: 'We curate the best — no filler, no junk, just great products.',
  }
];

export const teamData = [
  {
    id: 1,
    name: 'Aryan Shah',
    role: 'Founder & CEO',
    initial: 'A',
    bgColor: 'bg-[#CFFF04]',
    textColor: 'text-black'
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Head of Product',
    initial: 'P',
    bgColor: 'bg-[#3B82F6]',
    textColor: 'text-white'
  },
  {
    id: 3,
    name: 'Karan Verma',
    role: 'Lead Engineer',
    initial: 'K',
    bgColor: 'bg-[#A855F7]',
    textColor: 'text-white'
  },
  {
    id: 4,
    name: 'Sneha Kapoor',
    role: 'Design Director',
    initial: 'S',
    bgColor: 'bg-[#EF4444]',
    textColor: 'text-white'
  }
];
