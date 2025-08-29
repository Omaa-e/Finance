import React from 'react'
import img from '../assets/clock.avif'
import Footer from '../components/Footer'

const Book = () => {
  return (
    <div className='w-full flex flex-col bg-[#D2F8DC] justify-between'>
        <div className='flex flex-col lg:flex-row w-full px-4 my-15 md:h-[60vh]'>
            <div className='md:w-1/2 flex items-center justify-center rounded-4xl bg-[#A0F1BD] h-[80vh] lg:h-[60vh]'>
                <div className='flex justify-center items-center w-full'>
                    <img src={img} alt="Custom plan" className='' />
                </div>
             </div>
            <div className=' pb-20 md:text-left md:w-1/2 py-10 md:py-0'>
                <h1 className='text-2xl mb-4 lg:text-5xl text-[#2e4f21] '>Book an Appointment Now</h1>
                <p className=' text-[#2E4F21] mb-6'>Serving individuals and small businesses since 1987</p>
                <button className='bg-[#2E4F21] text-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-[#2E4F21]'>Contact us</button>
            </div>
       
        </div>
        <Footer />
    </div>
  )
}

export default Book
