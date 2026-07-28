import { NavLink } from 'react-router';
import { FaBolt } from 'react-icons/fa6';
import { FiShoppingCart, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import CartDrawer from '../features/cart/components/CartDrawer';
import useCart from '../Hooks/useCart';

const Navbar = () => {
  const navigate =useNavigate();
  const {logout} = useAuth();
  const { openCart,totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <>
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

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-[#1A1A1A] rounded-full px-1.5 py-1.5 pr-4 gap-2 border border-[#333333] cursor-pointer hover:border-gray-500 transition-colors">
              <div className="bg-[#CFFF04] text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {JSON.parse(localStorage.getItem("currentUser")).name[0]}
              </div>
              <span className="text-sm font-medium text-gray-300">{JSON.parse(localStorage.getItem("currentUser")).name}</span>
            </div>
            <button onClick={ openCart} className="relative text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors">
              <FiShoppingCart size={18} />
               {totalItems > 0 && (
               <span className="absolute -top-2 -right-2 bg-[#CFFF04] text-black text-[10px] font-bold min-w-5 h-5 rounded-full flex items-center justify-center px-1">
              {totalItems}
             </span>
            )}
            </button>
            <button onClick={handleLogout} className="text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors">
              <FiLogOut size={18} />
            </button>
          </div>
          {/* Mobile Menu Button & Cart (visible on mobile) */}
          <div className="flex md:hidden items-center space-x-3">
            <button onClick={openCart} className="relative text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors">
              <FiShoppingCart size={18} />
               {totalItems > 0 && (
               <span className="absolute -top-2 -right-2 bg-[#CFFF04] text-black text-[10px] font-bold min-w-5 h-5 rounded-full flex items-center justify-center px-1">
              {totalItems}
             </span>
            )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-full border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#111111] border-b border-[#222222] shadow-xl z-40 flex flex-col p-4 space-y-4">
          <div className="flex items-center bg-[#1A1A1A] rounded-full px-2 py-2 gap-3 border border-[#333333]">
            <div className="bg-[#CFFF04] text-black text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
              {JSON.parse(localStorage.getItem("currentUser")).name[0]}
            </div>
            <span className="text-base font-medium text-gray-300">{JSON.parse(localStorage.getItem("currentUser")).name}</span>
          </div>
          
          <div className="flex flex-col space-y-2 pt-2 border-t border-[#222222]">
            <NavLink
              to="/home"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium p-3 bg-[#1A1A1A] rounded-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors font-medium p-3 rounded-lg"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/home/shop"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium p-3 bg-[#1A1A1A] rounded-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors font-medium p-3 rounded-lg"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/home/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CFFF04] font-medium p-3 bg-[#1A1A1A] rounded-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors font-medium p-3 rounded-lg"
              }
            >
              About
            </NavLink>
          </div>
          
          <div className="pt-2 border-t border-[#222222]">
            <button 
              onClick={() => {
                closeMobileMenu();
                handleLogout();
              }} 
              className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white p-3 rounded-lg border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] transition-colors"
            >
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
    <CartDrawer  />
    </>
  );
};

export default Navbar;