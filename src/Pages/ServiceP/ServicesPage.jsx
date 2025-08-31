import React from 'react'
import bgImg from '../../assets/laptopCoin.avif'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Back from './Back';

const ServicesPage = () => {
  return (
    <div className='w-full h-auto '>
        <div className='w-full h-full flex'>
            <div className=' flex flex-col md:flex-row justify-between  w-full my-36 mx-8 '>
                <div className='order-1 flex md:order-2 '>
                <img src={bgImg} className='w-full max-w-lg  md:max-w-lg lg:max-w-2xl'/>
                </div>
                <div className='flex flex-col justify-center order-2 md:order-1 md:w-[60%]'>
                    <h2 className='text-3xl text-[#2e4f21] md:text-6xl w-[90%] mb-4 lg:w-3/4 lg:text-7xl font-normal tracking-tighter'>Your Financial Journey, Clearly Defined</h2>
                    <p className='mb-6 md:w-[4/5] text-[#2e4f21]'>Trusted financial guidance for every stage of life and business since 1987</p>
                    <div>
                        <Link to="/book">
                            <a className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Connect with our experts</a>
                        </Link>
                    </div>
                </div>
            </div>     
        </div>
        <Back/>
        <Footer/>
    </div>
  )
}

export default ServicesPage
