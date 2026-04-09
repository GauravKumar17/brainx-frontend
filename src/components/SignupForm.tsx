"use client"

import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./ui/Loader"; 
import { useState } from 'react';



type FormValues = {
  username: string
  email: string
  password: string
}
type AuthResponse = {
  token: string
}



export default function SignupForm() {
  const navigate = useNavigate();  //Hook to navigate
  const[loader, setLoader] = useState(false); // State to manage loading
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async(data: FormValues) => {
    console.log("Form submitted:", data)
    try {
      setLoader(true); // Set loading state to true
      const response = await axios.post<AuthResponse>("http://localhost:3000/api/v1/user/signup", data);
      console.log(response.data);
      // Store the token in localStorage or context for later use
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", data.username); 
      alert("User created successfully!");
      
      // Redirect to home page after successful signup
      navigate("/Home");

    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }finally{
      setLoader(false); // Reset loading state
    }
    
  }

  const handleGoogleSignup = () => {
    // Implement Google sign-up logic here
    console.log("Google sign-up")
  }

 

  const handleAppleSignup = () => {
    // Implement Apple sign-up logic here
    console.log("Apple sign-up")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full p-6 transparent rounded-lg shadow-xl space-y-4 backdrop-blur"
    >
      <h2 className="text-2xl font-bold text-center">Create an Account</h2>

      {/* Social Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-3 p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
        <button
          type="button"
          onClick={handleAppleSignup}
          className="flex items-center justify-center gap-3 p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <BsApple className="text-xl" />
          Continue with Apple
        </button>
      </div>

      <div className="text-center text-gray-500 text-sm">or sign up with email</div>

      {/* Name Field */}
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          {...register("username", { required: "Name is required" })}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="John Doe"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="example@mail.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum length is 6 characters",
            },
          })}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="••••••••"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {loader ? <Loader /> : "Create Account"}
      </button>
    </form>
  )
}
