import React from "react";
import image from "../assets/user.png";
import image1 from "../assets/user1.png";
import image2 from "../assets/user2.png";
import { IoKeyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  return (
    <div className='w-full text-white  bg-black py-8 px-6 grid  gap-8 items-center"'>
      {/*Second div */}

      <div className="">
        <h1 className="text-5xl text-purple-500 font-medium m-8 mt-10 text-center ">
          Welcome to Ideally !
        </h1>

        <div className="grid gap-4 w-80 mx-auto ">
          {/* Name */}
          <label className="relative block ">
            <FaUser
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"
            />
          </label>

          {/* Email */}
          <label className="relative block">
            <IoMailOutline
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"
            />
          </label>

          {/* Password */}
          <label className="relative block">
            <IoKeyOutline
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-11 pl-10 pr-3 focus:outline-blue-400 border border-purple-500 rounded-md text-sm leading-none"
            />
          </label>

          {/* Confirm Pasword^*/}

          <label className="relative block">
            <IoKeyOutline
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none focus:outline-blue-400 border-purple-500 "
            />
          </label>

          {/* Phone */}
          <label className="relative block">
            <FiPhone
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none  "
            />
            <input
              type="tel"
              placeholder="Phone number"
              required
              className="w-full h-11 pl-10 pr-3 border rounded-md text-sm border-purple-500 leading-none focus:outline-blue-400"
            />
          </label>

          <button className="w-full h-11  bg-purple-500 font-medium hover:bg-black hover:text-purple-700 rounded-md text-base leading-none text-center ">
            Sign Up
          </button>
        </div>

        <h2 className="text-purple-300">
          Have an account already?
          <Link to="/Signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
