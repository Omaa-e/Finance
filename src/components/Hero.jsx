import React from 'react'
import bgImg from '../assets/FinanceWorld.png'

const Hero = () => {
  return (
    <div className='w-full h-auto flex bg-green-300'>
        <div className='flex flex-col md:flex-row justify-between w-full my-16 mx-8 '>
            <div className='order-1 flex md:order-2 '>
               <img src={bgImg} className='w-full md:max-w-sm  ' />
            </div>
            <div className='flex flex-col justify-center order-2 md:order-1  '>
                <h2 className='text-3xl md:text-6xl mb-4 font-semibold'>Financial Clarity You Can Trust</h2>
                <p className='mb-6'>Trusted financial guidance for every stage of life and business since 1987</p>
                <div>
                    <a href="#" className='bg-green-950 text-white text-sm hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3'>Connect with our experts</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
