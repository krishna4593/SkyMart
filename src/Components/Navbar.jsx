import React from 'react';
import { NavLink } from 'react-router';
import { FaBolt } from 'react-icons/fa6';
import { FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth'

const Navbar = () => {
  const navigate =useNavigate();
  const {logout} = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="sticky top-0 z-50 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={()=>navigate("/home")} className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#CFFF04] text-black p-1.5 rounded-full flex items-center justify-center">
              <FaBolt size={14} />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">SkyMart</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium"
                  : "text-gray-400 hover:text-white transition-colors font-medium"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/home/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium"
                  : "text-gray-400 hover:text-white transition-colors font-medium"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/home/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium"
                  : "text-gray-400 hover:text-white transition-colors font-medium"
              }
            >
              About
            </NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-[#1A1A1A] rounded-full px-1.5 py-1.5 pr-4 gap-2 border border-[#333333] cursor-pointer hover:border-gray-500 transition-colors">
              <div className="bg-[#CFFF04] text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {JSON.parse(localStorage.getItem("currentUser")).name[0]}
              </div>
              <span className="text-sm font-medium text-gray-300">{JSON.parse(localStorage.getItem("currentUser")).name}</span>
            </div>
            <button className="text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors">
              <FiShoppingCart size={18} />
            </button>
            <button onClick={handleLogout} className="text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors">
              <FiLogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;