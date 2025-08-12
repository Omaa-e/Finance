import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-[100px] px-5 flex justify-between  items-center bg-green-300'>
       <div>
            <div className='items-center font-bold text-xl'>
             <h1 className='text-green-800 sm:text-2xl'>NobleFinances</h1>
             </div>
       </div>
       <div className='flex justify-between items-center gap-5 text-white'>
                <a href="#" className='text-green-950'>services</a>
                <div className=' bg-green-800 rounded-3xl px-3 py-2'>
                    <span className='block md:hidden'>Book</span>
                     <p className='hidden md:block'>Book an appointment</p>
                </div>
               
       </div>
    </div>
  )
}

export default Navbar
