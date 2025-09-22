import React from 'react'
import bgImg from '../assets/FinanceWorld.avif'
import { Link } from "react-router-dom"; 

const Hero = () => {
  return (
    <div className='w-full h-full flex bg-[#a0f1bd] rounded-b-xl'>
        <div className=' flex flex-col md:flex-row justify-between w-[100%] my-23 mx-8 lg:mx-6 lg:my-20 xl:mx-10 xl:my-25'>
            <div className='order-1 flex md:order-2 justify-end md:w-[35%]   '>
               <img src={bgImg} className='w-[100%] md:w-[450px] lg:w-[300px] xl:w-[455px]  md:pl-7 xl:max-w-lg object-contain'/>
          </div>
            <div className='flex flex-col  order-2 md:order-1 md:w-[60%] lg:w-[80%] lg:py-7 xl:py-16  '>
                <h2 className='text-3xl text-[#2e4f21] md:text-6xl md:w-[100%] mb-4 font-normal tracking-tighter lg:w-[100%] lg:text-[3.7rem] xl:text-[4.9rem]'>Financial Clarity You Can Trust</h2>
                <p className='mb-11 md:w-78 lg:text-[16px] lg:mb-15 xl:w-full text-[#2e4f21] xl:text-lg'>Trusted financial guidance for every stage of life and business since 1987</p>
                <div>
                  <Link to="/book">
                      <a className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-6 transition'>Connect with our experts</a>
                  </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
