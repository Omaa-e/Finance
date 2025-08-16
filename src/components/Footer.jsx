import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center bg-[#2e4f21]'>
        <div className=' flex justify-between items-center w-full h-full px-7 py-5'>
            <div className=' items-center'>
              <h1 className='text-white text-2xl'>Noble Finances</h1>
            </div>
            <div className='flex justify-between items-center gap-5 text-white pl-2'>
                        <a href="#" className='text-white text-xs'>Services</a>
                        <div className=' bg-white text-[#2e4f21] transition transform ease-in cursor-pointer hover:bg-green-300 text-sm hover:text-[#2e4f21] rounded-3xl px-4 py-3'>
                            <span className='block md:hidden'>Book</span>
                            <p className='hidden md:block text-xs font-medium'>Book an appointment</p>
                        </div>
                    
            </div>

           
        </div>
      
    </div>
  )
}

export default Footer
