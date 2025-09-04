import React from 'react'
import Img from '../../assets/calculator.webp'

const Goodbye = () => {
  return (
     <div className='w-full h-1/2 flex justify-center  px-6 py-20 bg-[#F4F7F5]'>
                <div className='flex flex-col-reverse md:flex-row gap-10'>
                    <div className=' flex flex-col justify-center items-center py-10 md:py-0 px-10 md:w-1/2 text-white rounded-3xl'>
                        <div className='space-y-10 text-center'>
                            <h1 className='text-5xl tracking-tighter text-[#2E4F21]'>Say goodbye to taxes of the past</h1>

                            <button className='bg-[#2e4f21] text-white transition hover:bg-[#a0f1bd] hover:text-[#2e4f21] text-medium font-xl rounded-full px-3 py-2 cursor-pointer'>Connect with our experts</button>
                        </div>
                    </div>
    
                    <div className='w-full flex items-center md:justify-center md:w-1/2'>
                        <div className=' flex justify-center items-center bg-[#A0F1BD] rounded-3xl'>
                            <img src={Img} alt="Custom plan" className='cover' />
                        </div>
                    </div>
                </div>
    
            </div>
  )
}

export default Goodbye