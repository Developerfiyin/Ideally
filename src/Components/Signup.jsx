import React from 'react'
import image from "../assets/user.png";
import image1 from "../assets/user1.png";
import image2 from "../assets/user2.png";
import { IoKeyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

import { IoMailOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



const Signup = () => {
  return (
    <div className='w-full flex bg-blue-200 py-8 px-6 '> 
     
      <img src={image2} alt="The first user" className='rounded-2xl mr-auto bg-cover  ' />

{/*Second div */}

< div className=' bg-white'>
   <h1 className='text-6xl '>Welcome to Ideally !</h1>
   
    
  <div className="grid gap-4 w-80">
      {/* Name */}
      <label className="relative block">
        <FaUser
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Full name"
          className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none"
        />
      </label>

      {/* Email */}
      <label className="relative block">
        <IoMailOutline
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none"
        />
      </label>

      {/* Password */}
      <label className="relative block">
        <IoKeyOutline
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none"
        />
      </label>

      {/* Phone */}
      <label className="relative block">
        <FiPhone
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full h-11 pl-10 pr-3 border rounded-md text-sm leading-none"
        />
      </label>
    </div>

 </div>
</div>
  )
}

export default Signup