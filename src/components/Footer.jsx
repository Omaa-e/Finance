import React from 'react';
import { Link } from "react-router-dom"; 

const Footer = () => {
    return (
        <div className='w-full justify-between bg-[#2e4f21] px-7 '>
            <div className=' flex flex-col  md:flex-row justify-between w-full h-full py-5'>
                <div className=' items-center'>
                    <Link to="/">
                        <h1 className='text-white text-2xl'>Noble Finances</h1>
                    </Link>
                </div>
                <div className='flex justify-between items-center gap-5 pt-20 md:py-0 text-white pl-2'>
                    <Link to="/services">
                        <a className='text-white text-xs'>Services</a>
                    </Link>
                    <Link to="/book">
                        <button className='text-xs font-medium bg-white px-7 md:px-3 py-2 text-[#2e4f21] rounded-full transition ease-in hover:bg-[#a0f1bd] cursor-pointer'>Book an appointment</button>
                    </Link>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row mt-15 text-xs md:pt-30'>
                <div className='text-white py-5 md:py-10 md:w-1/2'>
                    <p className='font-medium'>Financial Clarity You Can Trust</p>
                    <p className='text-[#d5e4d0]'>Trusted financial guidance for every stage of life and business since 1987</p>
                </div>
                <div className='text-white py-3 md:pt-15 md:pl-8'>
                    <p className=''>© 2025 All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
}

export default Footer
