import LoginForm from "../Components/LoginForm";
import { Link } from "react-router";
import { FaBolt, FaStar } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Left Column - Brand & Info */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between border-r border-neutral-800">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-full bg-[#c4ff00] flex items-center justify-center">
            <FaBolt className="text-black text-sm" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">SkyMart</span>
        </Link>

        {/* Hero Content */}
        <div className="max-w-md">
          <p className="text-[#c4ff00] font-bold text-sm tracking-widest uppercase mb-6">
            Welcome Back
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-2">
            Shop the future.
          </h1>
          <h1 className="text-5xl font-bold text-[#c4ff00] leading-tight mb-8">
            Today.
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed mb-12">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Stat 1 */}
            <div className="border border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold text-[#c4ff00] mb-1">20K+</span>
              <span className="text-xs text-neutral-400 font-medium">Products</span>
            </div>
            
            {/* Stat 2 */}
            <div className="border border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold text-[#c4ff00] mb-1">50K+</span>
              <span className="text-xs text-neutral-400 font-medium">Users</span>
            </div>

            {/* Stat 3 */}
            <div className="border border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold text-[#c4ff00] mb-1 flex items-center gap-1">
                4.9<FaStar className="text-sm" />
              </span>
              <span className="text-xs text-neutral-400 font-medium">Rating</span>
            </div>
          </div>
        </div>

        {/* Empty div for spacing in flex-col */}
        <div></div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
        {/* Mobile Logo (hidden on desktop) */}
        <div className="absolute top-8 left-8 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#c4ff00] flex items-center justify-center">
              <FaBolt className="text-black text-sm" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SkyMart</span>
          </Link>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;