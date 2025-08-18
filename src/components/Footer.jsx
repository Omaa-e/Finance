import React from 'react'

const Footer = () => {
  return (
    <div className='w-full justify-between bg-[#2e4f21] px-7'>
        <div className=' flex flex-col  md:flex-row justify-between w-full h-full md:py-5'>
            <div className=' items-center'>
              <h1 className='text-white text-2xl'>Noble Finances</h1>
            </div>
            <div className='flex justify-between items-center gap-5 py-10 md:py-0 text-white pl-2'>
                <a href="#" className='text-white text-xs'>Services</a>
                <div className=' bg-white text-[#2e4f21] transition transform ease-in cursor-pointer hover:bg-green-300 text-sm hover:text-[#2e4f21] rounded-3xl px-35 md:px-4 py-3'>
                    <p className='text-xs font-medium'>Book an appointment</p>
                </div>     
            </div>   
        </div>
        <div className=' flex flex-col md:flex-row mt-35'>
            <div className='text-white py-5 md:py-10 text-sm md:w-1/2'>
                <p>Financial Clarity You Can Trust <br className='mx-auto '/>Trusted financial guidance for every stage of life and business since 1987</p>
            </div>
            <div className='text-white py-5 md:pt-15 pl-8 text-sm'>
                <p className=''>© 2025 All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
