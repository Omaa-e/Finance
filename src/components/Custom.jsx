import React from 'react'
import Img from '../assets/FinanceBrick.webp'

const Custom = () => {
    return (
        <div className='w-full flex justify-center  px-10'>
            <div className='flex flex-col-reverse md:flex-row gap-10'>
                <div className='bg-[#2e4f21] flex flex-col justify-center items-center py-10 md:py-0 px-10 md:w-1/2 text-white rounded-3xl'>
                    <div className='space-y-10 text-left'>
                        <h1 className='text-3xl tracking-tighter'>A custom built plan for you</h1>
                        <p className='w-[92%] leading-tight text-sm md:text-base'>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.
                        </p>
                        <button className='bg-white text-[#2e4f21] transition hover:bg-[#a0f1bd] text-xs font-medium rounded-full px-3 py-2 cursor-pointer'>Learn More</button>
                    </div>
                </div>

                <div className='md:w-1/2 flex items-center justify-center'>
                    <div className='flex justify-center items-center'>
                        <img src={Img} alt="Custom plan" className='rounded-3xl' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Custom