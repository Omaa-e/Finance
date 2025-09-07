import React from 'react'
import img from '../assets/clock.avif';
import Footer from '../components/Footer'

const Book = () => {
  return (
    <div className='w-full flex flex-col bg-[#D2F8DC] justify-between '>
        <div className='h-auto pb-10 '>
            <div className='flex flex-col lg:flex-row w-full px-10 my-22  md:h-[60vh]'>
                <div className='md:w-1/2 flex items-center '>
                <div className='flex  items-center'>
                    <img src={img} alt="Custom plan" className='bg-cover py-15 rounded-2xl bg-[#A0F1BD] ' />
                </div>
             </div>
                <div className=' pb-20 md:text-left md:w-1/2 py-10 md:py-29'>
                    <h1 className='text-2xl mb-4 lg:text-5xl text-[#2e4f21]'>Book an appointment now</h1>
                    <p className=' text-[#2E4F21] mb-6'>Serving individuals and small businesses since 1987</p>
                    <button className='bg-[#2E4F21] text-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-[#2E4F21]'>Contact us</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Book
