import React from "react";
import image from "../assets/user.png";
import image1 from "../assets/user1.png";
import image2 from "../assets/user2.png";
import { IoKeyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // USERNAME
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // PASSWORD
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // CONFIRM PASSWORD
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // PHONE NUMBER
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,14}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);

    // IF NO ERRORS → NAVIGATE
    if (Object.keys(newErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className='w-full text-white  bg-black py-8 px-6 grid  gap-8 items-center"'>
      {/*Second div */}

      <div className=" mt-15">
        <h1 className="text-5xl  text-purple-500 font-medium m-8  text-center ">
          Welcome to Ideally!
        </h1>

        <form className="grid gap-4 w-80 mx-auto" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="relative block ">
            <FaUser
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="text"
              name="username"
              placeholder="Full name"
              className="w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </label>

          {/* Email */}
          <label className="relative block">
            <IoMailOutline
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full h-11 pl-10 focus:outline-blue-400 border-purple-500 pr-3 border rounded-md text-sm leading-none"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
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
              className="w-full h-11 pl-10 pr-3 focus:outline-blue-400 border border-purple-500 rounded-md text-sm leading-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
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
              className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none focus:outline-blue-400 border-purple-500 "
              name=" confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
              className="w-full h-11 pl-10 pr-3 border rounded-md text-sm border-purple-500 leading-none focus:outline-blue-400"
              name="phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </label>

          <button
            type="sumbit"
            className="w-full h-12 ease-in duration-500 mt-5 border border-purple-500 font-medium hover:bg-black hover:text-purple-700 rounded-md text-base leading-none text-center "
          >
            Sign Up
          </button>
        </form>
        <h2 className="text-center text-2xl mt-3 font-semibold ">OR</h2>
        <h2 className="text-purple-300 text-center mt-2">
          Have an account already? {"  "}
          <Link to="/Signin" className="text-blue-500 hover:underline">
            {" "}
            Log in
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
