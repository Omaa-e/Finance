import React from 'react'
import Img from '../assets/FinanceBrick.webp'

const Custom = () => {
  return (
     <div className='w-full h-auto flex'>
            <div className=' flex flex-col md:flex-row w-full my-36 mx-8 '>
                <div className='order-1 flex md:order-2 w-1/2 md:w-1/3 lg:w-1/4'>
                   <img src={Img} className='md:max-w-xs'/>
                </div>
                <div className='flex flex-col justify-center order-2 md:order-1 bg-[#2e4f21] p-9 rounded-2xl mt-5 w-full md:w-1/2 lg:w-1/3'>
                    <h2 className='text-3xl text-white md:text-5xl mb-4 font-normal tracking-tighter'>A custom built plan for you</h2>
                    <p className='mb-6 md:w-4/5 lg:w-1/2 text-white py-5 '>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
                    <div>
                        <a href="#" className='bg-white text-[#2e4f21] text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Learn More</a>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Custom
