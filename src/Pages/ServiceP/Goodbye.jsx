import React from 'react'
import Img from '../../assets/calculator.webp'

const Goodbye = () => {
  return (
        <div className='w-full h-1/2 flex justify-center py-20 px-6 md:py-8 lg:py-0 xl:py-10 px-10 bg-[#F4F7F5]'>
            <div className=' w-full flex flex-col-reverse md:flex-row gap-10'>
                <div className=' flex flex-col justify-center items-center py-10 md:py-0 px-10 md:w-1/2 text-white rounded-3xl'>
                    <div className='space-y-10 text-center'>
                        <h1 className='text-4xl md:text-5xl xl:text-6xl tracking-tighter text-[#2E4F21]'>Say goodbye to taxes of the past</h1>

                        <button className='bg-[#2e4f21] text-white transition hover:bg-[#a0f1bd] hover:text-[#2e4f21] text-medium font-xl rounded-full px-3 py-2 cursor-pointer'>Connect with our experts</button>
                    </div>
                </div>

                <div className='flex items-center '>
                    <div className=' flex items-center justify-center w-full h-175 md:w-95 md:h-100 lg:w-140 lg:h-130 lg:rounded-none xl:rounded-3xl xl:w-160 xl:h-170 bg-[#A0F1BD] rounded-3xl'>
                        <img src={Img} alt="Custom plan" className='block w-full h-full object-contain' />
                    </div>
                </div>
            </div>
    
        </div>
  )
}

export default Goodbye