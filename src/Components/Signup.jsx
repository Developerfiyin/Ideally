import React from 'react'
import image from "../assets/user.png";
import image1 from "../assets/user1.png";
import image2 from "../assets/user2.png";
import { FaUser } from "react-icons/fa";



const Signup = () => {
  return (
    <div className='w-full flex bg-blue-200 py-8 px-6 '> 
     
      <img src={image2} alt="The first user" className='rounded-2xl mr-auto bg-cover  ' />

{/*Second div */}

< div className=' bg-white'>
   <h1 className='text-6xl '>Welcome to Ideally !</h1>
    <label className="relative block w-72">
      {/* Icon */}
      <FaUser 
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-11 rounded-md border border-gray-300
                   pl-10 pr-3 text-sm leading-none
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>

 </div>
</div>
  )
}

export default Signup