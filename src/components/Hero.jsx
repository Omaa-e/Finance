import React from 'react'
import bgImg from '../assets/FinanceWorld.avif'

const Hero = () => {
  return (
    <div className='w-full h-auto flex bg-[#a0f1bd] rounded-b-xl'>
        <div className=' flex flex-col md:flex-row justify-between w-full my-36 mx-8 '>
            <div className='order-1 flex md:order-2 '>
               <img src={bgImg} className='w-full md:max-w-xs'/>
            </div>
            <div className='flex flex-col justify-center order-2 md:order-1  '>
                <h2 className='text-3xl text-[#2e4f21] md:text-5xl mb-4 font-normal tracking-tighter'>Financial Clarity You Can Trust</h2>
                <p className='mb-6 md:w-4/5 lg:w-1/2'>Trusted financial guidance for every stage of life and business since 1987</p>
                <div>
                    <a href="#" className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Connect with our experts</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
