import React from 'react'
import Img1 from '../../assets/pencil.webp'

function Simple () {
  return (
    <div className='w-full h-auto py-20 px-15 '>
        <div className='flex flex-col gap-10'>
            <div className='text-[#2e4f21]'>
                <p>How it works</p>
                <h1 className='text-5xl py-6'>A simple onboarding</h1>
                <p className=''>Serving individuals and small businesses since 1987</p>
            </div>
            <div className='flex flex-col xl:flex-row text-[#2e4f21] mt-15 '>
                <div className='flex flex-col justify-evenly xl:flex-row'>
                     <h1 className='text-9xl font-extralight mb-8'>1</h1>
                    <div className='flex flex-col w-3/4'>
                        <h2 className='text-3xl'>Our tax advisors write you a plan</h2>
                        <p className='mb-15'>Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.</p>
                    </div>
                    <div className='xl:w-3/4 ml-6'>
                        <img src={Img1} alt="" className='bg-[#F4F7F5] rounded-2xl w-1/2 text-large mb-0 pb-[-20]  ' />
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Simple