import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Loader from "./ui/Loader";

type FormValues = {
  email: string
  password: string
} 
type AuthResponse = {
  token: string
  username: string; 
}

export default function SignInForm() {
  const[loader, setLoader] = useState(false); // State to manage loading
  const navigate = useNavigate();  // Hook to navigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async(data: FormValues) => {
    console.log("Sign-in data:", data)
    try {
      setLoader(true); // Set loading state to true

      const response = await axios.post<AuthResponse>("http://localhost:3000/api/v1/user/signin", data);
      console.log(response.data);
      // Store the token in localStorage or context for later use
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username); 
      // alert("Signed In successfully!");
      
      // Redirect to home page after successful sign-in
      navigate("/home");

    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }finally {
      setLoader(false); // Reset loading state
    }
    
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full p-6 bg-transparent rounded-lg shadow-lg space-y-4 mt-3"
    >
      <h2 className="text-2xl font-bold text-center mb-10">Enter Your Credentials</h2>

      {/* Email */}
      <div>
        <label className="block mb-3 font-semibold ">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="example@mail.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-3 font-semibold">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
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
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3"
      >
        {loader ? <Loader /> : "SignIn"}
      </button>

      {/* Or Divider */}
      <div className="text-center text-gray-500 text-sm mt-5 mb-2">or continue with</div>

      {/* Social Buttons */}
      <div className="flex flex-col justify-between space-x-3 ">
        <button
          type="button"
          className="flex-1 flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100 mb-4"
        >
          <FcGoogle className="mr-2 text-xl" /> Google
        </button>
        
        <button
          type="button"
          className="flex-1 flex items-center justify-center border p-2 rounded border-gray-300 hover:bg-gray-100 mb-2"
        >
          <BsApple className="mr-2 text-xl" /> Apple
        </button>
      </div>
    </form>
  )
}
