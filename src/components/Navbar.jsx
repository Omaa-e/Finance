import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center bg-[#a0f1bd]'>
      <div className=' flex justify-between items-center w-full h-full px-9'>
        <div className=' items-center font-bold '>
           <Link to="/"> 
           <h1 className='text-[#2e4f21] text-lg'>Noble Finances</h1>
           </Link>
          
        </div>
        <div className='flex justify-between items-center gap-5 text-white pl-2'>
          {/* This link takes us to the services page */}
          <Link to="/services" className='text-green-950 text-xs'> Services </Link>
           
            <div className=' bg-[#2e4f21] transition transform ease-in cursor-pointer hover:bg-white text-sm hover:text-green-800 rounded-3xl px-3 py-2'>
              {/* This link takes us to the Book page */}
              <Link to="/book">
                <span className='block md:hidden'>Book</span>
                <p className='hidden md:block text-xs font-medium'>Book an appointment</p>
              </Link>

            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Navbar
