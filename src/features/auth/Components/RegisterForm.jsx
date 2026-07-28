import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const navigate = useNavigate();
    const[showPassword, setShowPassword]= useState(false)
    const {register, reset ,watch, handleSubmit, formState:{errors}} = useForm()
    const password = watch("password")
    const {registerUser}= useAuth()
    
    
    const OnSubmit = (data) =>{
       const result = registerUser(data);
       if(!result.success){
      toast.error(result.message);
        reset();
        return;
       } 
         toast.success(result.message);
        reset()
        navigate("/");
    }

  return (
    <div className="w-full max-w-md p-6 md:p-8 rounded-2xl bg-[#131313] border border-neutral-800 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create account</h2>
        <p className="text-neutral-400 text-sm">Join SkyMart and start shopping</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(OnSubmit)} >
        {/* Full Name Input */}
        <div className="space-y-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500">
              <FiUser size={18} />
            </div>
            <input
              {...register("name",{required:"Name is required",minLength:{value:3,
                message:"Name must be at least 3 characters long"}})}
              type="text"
              placeholder="Full name"
              className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors placeholder:text-neutral-500 text-sm"
            />
          </div> 
           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
              
        {/* Email Input */}
        <div className="space-y-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500">
              <FiMail size={18} />
            </div>
            <input 
              {...register("email", {
                required:"Email is required",
                pattern:{
                  value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:"Email is invalid"
                }
              } )}
              type="email"
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors placeholder:text-neutral-500 text-sm"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500">
              <FiLock size={18} />
            </div>
            <input
              {...register("password", {
                required:"Password is required",
                minLength:{
                  value:6,
                  message:"Password must be at least 6 characters long"
                }
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 6 chars)"
              className="w-full pl-11 pr-12 py-3 bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors placeholder:text-neutral-500 text-sm"
            />
            <button
            onClick={()=>setShowPassword(!showPassword)}
              type="button"
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500">
              <FiLock size={18} />
            </div>
            <input
              {...register("confirmPassword",{
                required:"Confirm password is required",
                validate:(value)=>{
                  return value === password || "Passwords do not match"
                }
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl focus:outline-none focus:border-[#c4ff00] transition-colors placeholder:text-neutral-500 text-sm"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#c4ff00] hover:bg-[#b0e600] text-black font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 mt-6"
        >
          Create Account <FiArrowRight size={18} />
        </button>
      </form>

      {/* Footer Text */}
      <div className="mt-8 text-center text-sm text-neutral-400">
        Already have an account?{" "}
        <Link to="/" className="text-[#c4ff00] font-medium hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;