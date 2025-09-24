import React from 'react'
import { Link } from "react-router-dom"; 

const Service = () => {
    return (
        <div className='w-full my-30'>
            <div className='flex flex-col mx-auto text-center'>
                <div>
                    
                    <p className='text-[#2e4f21] mb-6'>Services</p>
                </div>
                <div className='text-center text-[#2e4f21] space-y-5  xl:px-60 '> 
                    <h2 className='text-[2rem] leading-10 md:text-5xl md:leading-14 xl:text-[3.8rem] xl:leading-16  tracking-tighter'>Let us handle the numbers,<br />so you can handle your success.</h2>
                    <p>Serving individuals and small businesses since 1987</p>
                    <div className=''>
                        <Link to="/book">
                            <a className='bg-[#2e4f21] text-white text-xs hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3 transition'>Schedule a call</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Service
