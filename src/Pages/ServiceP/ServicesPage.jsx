import React from 'react'
import bgImg from '../../assets/laptopCoin.avif'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Back from './Back';
import Simple from './Simple';
import Goodbye from './Goodbye';
import Philosophy from './Philosophy';

const ServicesPage = () => {
  return (
    <div className='w-full '>
        <div className='w-full h-full flex'>
            <div className=' flex flex-col md:flex-row justify-between  w-full my-36 mx-8 '>
                <div className='order-1 justify-between flex md:order-2 md:w-[60%] md:py-15 md:pl-15 lg:pl-0 lg:py-0'>
                     <div className=''>
                    <img src={bgImg} className='w-full object-contain '/>
                </div>
                </div>
               
                <div className='flex flex-col pt-5 justify-center order-2 md:order-1 w-[86%] md:w-[60%] md:pt-0'>
                    <h2 className='text-4xl text-[#2e4f21] md:text-6xl  mb-4 lg: lg:text-6xl font-normal tracking-tighter xl:text-7xl xl:w-[80%]'>Your Financial Journey, Clearly Defined</h2>
                    <p className='mb-15 md:w-[80%] text-[#2e4f21]'>Trusted financial guidance for every stage of life and business since 1987</p>
                    <div>
                        <Link to="/book">
                            <a className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Connect with our experts</a>
                        </Link>
                    </div>
                </div>
            </div>     
        </div>
        <Back/>
        <Simple/>
        <Philosophy/>
        <Goodbye/>
        <Footer/>
    </div>
  )
}

export default ServicesPage
