import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errors, setErrors] = useState({});

  e.preventDefault();

  const newErrors = {};

  if (!email.trim()) {
    newErrors.email = "Please fill in your email";
  }

  if (!user.trim()) {
    newErrors.user = "Please fill in your name";
  }

  if (!password.trim()) {
    newErrors.password = "Please fill in your password";
  }

  setErrors(newErrors);

  // If no errors, proceed
  if (Object.keys(newErrors).length === 0) {
    console.log("Login successful");
    // call login API here
  }

  const goToSignIn = (e) => {
    navigate("/dashboard");
  };
  return (
    <div className='w-full  bg-black text-white py-8 px-6 grid  gap-8 items-center"'>
      <div className="">
        <h1 className="text-5xl text-purple-500 font-medium m-8 mt-15 text-center ">
          Login in!
        </h1>

        <div className="grid gap-8 w-80 mx-auto  mt-20" onSubmit={Signin}>
          {/* Name */}
          <label className="relative block ">
            <FaUser
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Full name"
              value={user}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 pl-10 pr-3 focus:outline-blue-400 border border-purple-500 rounded-md text-sm leading-none"
            />
          </label>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6  rounded-md justify-center">
        <button
          onClick={goToSignIn}
          className="mt-4 text-purple-500  w-full hover:bg-purple-500 hover:text-black ease-in-out duration-300 border py-2 px-3 rounded-xl"
        >
          Get Started
        </button>
      </div>
      <h2 className="text-purple-500 mx-auto">
        Or login with your
        <div className="flex justify-between gap-5 mt-5">
          <a
            href="https://github.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-md ease-in duration-200 hover:bg-purple-300"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border ease-in duration-200 rounded-sm hover:bg-purple-100"
          >
            <FaGoogle size={30} />
          </a>
        </div>
      </h2>
    </div>
  );
};

export default Signin;
