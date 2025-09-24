import React from 'react'
import bgImg from '../assets/FinanceWorld.avif'
import { Link } from "react-router-dom"; 

const Hero = () => {
  return (
    <div className='w-full h-full flex bg-[#a0f1bd] rounded-b-xl'>
        <div className=' flex flex-col md:flex-row justify-between w-[100%]  mt-10 my-27 mx-4 md:my-25 md:mx-6 lg:my-25 xl:mx-10 xl:my-26'>
            <div className='order-1 flex md:order-2 justify-end md:w-[40%]'>
               <img src={bgImg} className='w-[100%] md:w-[430px] lg:w-[300px] xl:w-[455px]  md:pl-7 xl:max-w-lg object-contain'/>
          </div>
            <div className='flex flex-col  order-2 md:order-1 md:w-[60%] lg:w-[84%] xl:w-[58%] xl:py-7  '>
                <h2 className='text-[2.6rem] leading-10 mt-8 md:mt-0 text-[#2e4f21] md:text-[3.6rem] md:leading-14 md:w-[100%] mb-6 font-normal tracking-tighter lg:w-[100%] lg:text-[3.6rem] xl:leading-20 xl:text-[4.9rem]'>Financial Clarity You Can Trust</h2>
                <p className='mb-11 md:w-78 text-[18px] lg:text-[16px] lg:mb-15 xl:w-full text-[#2e4f21] xl:text-lg leading-5'>Trusted financial guidance for every stage of life and business since 1987</p>
                <div>
                  <Link to="/book">
                      <a className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-4 transition'>Connect with our experts</a>
                  </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
