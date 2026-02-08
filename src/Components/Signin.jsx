import React from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Signin = () => {
  return (
    
    <main>
        <div className='w-full  bg-black py-8 px-6 grid  gap-8 items-center"'> 
            
        {/*Second div */}
        
        < div className=''>
           <h1 className='text-5xl text-purple-500 font-medium m-8 mt-20 text-center '>Login in!</h1>
           
          <div className="grid gap-8 w-80 mx-auto  mt-50">
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
        
              {/* Password */}
              <label className="relative block">
                <IoKeyOutline
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
                />
                <input
                  type="password"
                  placeholder="Password" required
                  className="w-full h-11 pl-10 pr-3 focus:outline-blue-400 border border-purple-500 rounded-md text-sm leading-none"
                />
              </label>
        
    
        
         
        
            </div>
        
          <h2 className='text-purple-300'>Have an account already? 
            <Link
                  to="/Signin"
                  className="text-blue-500 hover:underline"
                >
                  Get started
                </Link>
          </h2>
        
         </div>
            
        </div>
    </main>

  )
}

export default Signin