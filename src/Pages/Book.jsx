import React from 'react'
import img from '../assets/clock.avif';
import Footer from '../components/Footer'

const Book = () => {
  return (
    <div className='w-full flex flex-col bg-[#D2F8DC] '>
        <div className='h-auto py-15 md:py-0 lg:py-15 xl:py-20'>
            <div className='flex flex-col md:flex-row w-full  px-4  md:px-10  '>
              <div className=' flex items-center '>
                <div className='aspect-square rounded-xl flex items-center justify-center w-full h-full md:w-80 md:h-70 xl:w-120 xl:h-120 bg-[#A0F1BD]'>
                    <img src={img} alt="Custom plan" className='block w-full h-full object-contain   ' />
                </div>
             </div>
                <div className='text-left md:py-29 md:px-8 lg:px-10 xl:px-25 py-10 '>
                    <div className='w-[100%] xl:w-[80%] mb-12'>
                        <h1 className='w-[38%] md:w-[90%] lg:w-[100%] text-3xl md:text-5xl mb-4 lg:text-5xl xl:text-6xl text-[#2e4f21]'>Book an appointment now</h1>
                        <p className=' text-[#2E4F21] mb-6'>Serving individuals and small businesses since 1987</p>
                    </div>
                    <button className='bg-[#2E4F21] text-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-[#2E4F21]'>Contact us</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Book
