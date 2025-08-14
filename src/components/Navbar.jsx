import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center bg-green-300'>
        <div className=' flex justify-between items-center w-full h-full px-7'>
            <div className=' items-center font-bold text-xl'>
              <h1 className='text-green-800 sm:text-2xl'>NobleFinances</h1>
            </div>
            <div className='flex justify-between items-center gap-5 text-white pl-2 '>
                        <a href="#" className='text-green-950 text-sm'>services</a>
                        <div className=' bg-green-800 hover:bg-white text-sm hover:text-green-800 rounded-3xl px-3 py-2'>
                            <span className='block md:hidden'>Book</span>
                            <p className='hidden md:block'>Book an appointment</p>
                        </div>
                    
            </div>

           
        </div>
      
    </div>
  )
}

export default Navbar
