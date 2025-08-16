import React from 'react'
import Img from '../assets/FinanceBrick.webp'

const Custom = () => {
  return (
    <div className='w-full h-screen'>
       <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col justify-center order-2 md:order-1 bg-[#2E4F21]'>
            <div className='flex flex-col justify-center items-start'>
                <h2>A custom built plan for you</h2>
                <p>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
                <div>
                    <p className='text-[#2e4f21] bg-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Learn More</p>
                </div>
            </div>
        </div>
        <div className='order-1 md:order-2'>
            <img src={Img} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Custom
