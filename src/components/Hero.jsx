import React from 'react'
import bgImg from '../assets/FinanceWorld.avif'
import { Link } from "react-router-dom"; 

const Hero = () => {
  return (
    <div className='w-full h-full flex bg-[#a0f1bd] rounded-b-xl'>
        <div className=' flex flex-col md:flex-row justify-between w-[100%] my-23 mx-8 '>
            <div className='order-1 flex md:order-2 '>
               <img src={bgImg} className='w-[100%] md:max-w-[100%] md:pl-7 xl::max-w-lg object-contain'/>
          </div>
            <div className='flex flex-col justify-center order-2 md:order-1 md:w-[40%]  '>
                <h2 className='text-3xl text-[#2e4f21] md:text-6xl md:w-[100%] mb-4 font-normal tracking-tighter lg:w-[100%] xl:text-7xl xl:w-[85%]'>Financial Clarity You Can Trust</h2>
                <p className='mb-15 md:w-[72%] lg:w-[50%] xl:w-full text-[#2e4f21]'>Trusted financial guidance for every stage of life and business since 1987</p>
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
