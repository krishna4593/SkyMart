import RegisterForm from "../Components/RegisterForm";
import { Link } from "react-router";
import { FaBolt } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 rounded-full bg-[#c4ff00] flex items-center justify-center">
          <FaBolt className="text-black text-sm" />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">SkyMart</span>
      </Link>

      {/* Form Container */}
      <RegisterForm />
    </div>
  );
};

export default Register;